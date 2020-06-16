import { Capi, CapiInstance } from '@tencent-sdk/capi'
import { InitConfig } from './helper/types'
import {
  MISSING_SECRET_ERROR,
  NOT_INIT_ERROR,
  REQUEST_ERROR
} from './helper/error'

export enum InvocationType {
  'RequestResponse' = 'RequestResponse', //同步调用（默认值）
  'Event' = 'Event' //异步调用
}

export enum LogType {
  'Tail' = 'Tail', //输出日志
  'None' = 'None' //不输出日志（默认值）
}

interface InvokeParam {
  /**函数名 */
  functionName: string
  /**版本/别名 */
  qualifier?: string
  /**运行函数的参数 */
  data?: string | object
  /**函数所在命名空间 */
  namespace?: string
  /**同步/异步调用 */
  invocationType?: InvocationType
  /**函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节*/
  routingKey?: string | object
  /**是否输出日志 */
  logType?: LogType
}

export class SDK {
  public client: CapiInstance

  constructor(config?: InitConfig) {
    const defaultConfig = {
      secretId: process.env.TENCENTCLOUD_SECRETID,
      secretKey: process.env.TENCENTCLOUD_SECRETKEY,
      token: process.env.TENCENTCLOUD_SESSIONTOKEN,
      region: 'ap-guangzhou'
    }

    const mergedConfig = { ...defaultConfig, ...config }
    if (!mergedConfig.secretId || !mergedConfig.secretKey)
      throw new MISSING_SECRET_ERROR()
    this.client = new Capi({
      Region: mergedConfig.region,
      SecretId: mergedConfig.secretId,
      SecretKey: mergedConfig.secretKey,
      Token: mergedConfig.token,
      ServiceType: 'scf'
    })
  }


  _reset() {
    this.client = null
  }

  async invoke(invokeParam: InvokeParam) {
    if (!this.client) {
      throw new NOT_INIT_ERROR()
    }
    const res = await this.client.request(
      {
        Action: 'Invoke',
        Version: '2018-04-16',
        FunctionName: invokeParam.functionName,
        InvocationType: invokeParam.invocationType,
        Qualifier: invokeParam.qualifier,
        ClientContext: typeof invokeParam.data === 'string' ? invokeParam.data : JSON.stringify(invokeParam.data),
        Namespace: invokeParam.namespace,
        RoutingKey: typeof invokeParam.routingKey === 'string'? invokeParam.routingKey : JSON.stringify(invokeParam.routingKey),
        LogType: invokeParam.logType
      },
      {
        host: 'scf.tencentcloudapi.com'
      },
      true
    )
    if (res && res.Response) {
      return res.Response
    } else {
      throw new REQUEST_ERROR('Got no response:' + JSON.stringify(res))
    }
  }
}

export default SDK
