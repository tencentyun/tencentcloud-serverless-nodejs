# Tencentcloud-Serverless-Nodejs

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/tencentcloud-serverless-nodejs.svg?style=flat)](https://www.npmjs.com/package/tencentcloud-serverless-nodejs)
[![NODE Version](https://img.shields.io/node/v/tencentcloud-serverless-nodejs.svg)](https://www.npmjs.com/package/tencentcloud-serverless-nodejs)


腾讯云云函数SDK，集成云函数业务流接口

## 配置需求
- 打开函数外网访问权限
- 如果没有手动传入secretId和secretKey等参数，函数需绑定有SCF Invoke 权限（或者包含SCF Invoke，比如SCF FullAccess）的角色

## Install
```shell
npm install tencentcloud-serverless-nodejs
```

## Example
```javascript
const { SDK, LogType }  = require('tencentcloud-serverless-nodejs')

exports.main_handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  const sdk = new SDK({
    region:'ap-guangzhou'
  }) //如果在云函数中运行并且绑定了有SCF调用资格的运行角色，会默认取环境变量中的鉴权信息
  const res = await sdk.invoke({
    functionName: 'test_function',
    logType: LogType.Tail,
    data: {
      name: 'juli',
      role: 'big boss'
    }
  })
  console.log(res)
  // {
  //  "RequestId":"195434cd-ecf1-43d1-b707-90a293f5a282",
  //  "Result":{
  //     "BillDuration":3,
  //     "Duration":3,
  //     "ErrMsg":"",
  //     "FunctionRequestId":"195434cd-ecf1-43d1-b707-90a293f5a282",
  //     "InvokeResult":0,
  //     "Log":"START RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\nEvent RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\n2020-06-15T12:48:44.194Z\t195434cd-ecf1-43d1-b707-90a293f5a282\tHello World 111\n2020-06-15T12:48:44.194Z\t195434cd-ecf1-43d1-b707-90a293f5a282\t{ name: 'juli', role: 'big boss' }\n2020-06-15T12:48:44.196Z\t195434cd-ecf1-43d1-b707-90a293f5a282\tundefined\n2020-06-15T12:48:44.196Z\t195434cd-ecf1-43d1-b707-90a293f5a282\t{\n  callbackWaitsForEmptyEventLoop: [Getter/Setter],\n  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],\n  memory_limit_in_mb: 128,\n  time_limit_in_ms: 3000,\n  request_id: '195434cd-ecf1-43d1-b707-90a293f5a282',\n  environment: '{\"SCF_NAMESPACE\":\"default\"}',\n  environ: 'SCF_NAMESPACE=default;SCF_NAMESPACE=default',\n  function_version: '$LATEST',\n  function_name: 'test_function',\n  namespace: 'default',\n  tencentcloud_region: '',\n  tencentcloud_appid: 'xxxxxxxx',\n  tencentcloud_uin: 'xxxxxxxxxx'\n}\n\nEND RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\nReport RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282 Duration:3ms Memory:128MB MemUsage:10.5977MB",
  //     "MemUsage":11112448,
  //     "RetMsg":"{\"name\":\"juli\",\"role\":\"big boss\"}"
  //  }
}
};
```

## API 

### Init

**new SDK(Params)**

使用SDK前，需要先初始化SDK，参数中undefined的值会被忽略。

**Params:**

| 参数名    | 是否必填 |  类型  |                                       描述 |
| :-------- | :------: | :----: | -----------------------------------------: |
| region    |    否    | string |  地域，默认广州（ap-guangzhou) |
| secretId  |    否    | string |  默认会取process.env.TENCENTCLOUD_SECRETID |
| secretKey |    否    | string | 默认会取process.env.TENCENTCLOUD_SECRETKEY |
| token |    否    | string | 默认会取process.env.TENCENTCLOUD_SESSIONTOKEN |


### Invoke

**invoke(Params)**

调用函数。支持同步和异步调用

**Params:**

| 参数名       | 是否必填 |  类型  |                    描述 |
| :----------- | :------: | :----: | ----------------------: |
| functionName |    是    | string |  函数名称 |
| qualifier    |    否    | string | 函数版本，默认为$LATEST |
| data         |    否    | string \| object |  函数运行入参 |
| namespace    |    否    | string | 命名空间，默认为default |
| invocationType |  否    | 'RequestResponse' \| 'Event' | 同步/异步调用
| routingKey   |    否    | string \| object |   函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节
| logType      |    否    | 'None'\| 'Tail' | 日志类型，默认None，如传入Tail会返回调用过程中打印的日志

**Return:**

正常调用返回一个带有返回值结果和RequestId的object
``` json
 {
   "RequestId":"195434cd-ecf1-43d1-b707-90a293f5a282",
   "Result":{
      "BillDuration":3,
      "Duration":3,
      "ErrMsg":"",
      "FunctionRequestId":"195434cd-ecf1-43d1-b707-90a293f5a282",
      "InvokeResult":0,
      "Log":"START RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\nEvent RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\n2020-06-15T12:48:44.194Z\t195434cd-ecf1-43d1-b707-90a293f5a282\tHello World 111\n2020-06-15T12:48:44.194Z\t195434cd-ecf1-43d1-b707-90a293f5a282\t{ name: 'juli', role: 'big boss' }\n2020-06-15T12:48:44.196Z\t195434cd-ecf1-43d1-b707-90a293f5a282\tundefined\n2020-06-15T12:48:44.196Z\t195434cd-ecf1-43d1-b707-90a293f5a282\t{\n  callbackWaitsForEmptyEventLoop: [Getter/Setter],\n  getRemainingTimeInMillis: [Function: getRemainingTimeInMillis],\n  memory_limit_in_mb: 128,\n  time_limit_in_ms: 3000,\n  request_id: '195434cd-ecf1-43d1-b707-90a293f5a282',\n  environment: '{\"SCF_NAMESPACE\":\"default\"}',\n  environ: 'SCF_NAMESPACE=default;SCF_NAMESPACE=default',\n  function_version: '$LATEST',\n  function_name: 'test_function',\n  namespace: 'default',\n  tencentcloud_region: '',\n  tencentcloud_appid: 'xxxxxxxx',\n  tencentcloud_uin: 'xxxxxxxxxx'\n}\n\nEND RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282\nReport RequestId: 195434cd-ecf1-43d1-b707-90a293f5a282 Duration:3ms Memory:128MB MemUsage:10.5977MB",
      "MemUsage":11112448,
      "RetMsg":"{\"name\":\"juli\",\"role\":\"big boss\"}"
   }
```

错误调用返回一个带有错误信息，错误码，以及RequestId的object，[【错误码详情】](https://cloud.tencent.com/document/product/583/30771)
```json
{
   "Error":{
      "Code":"ResourceNotFound.FunctionName",
      "Message":"Function not found: [n11112]"
   },
   "RequestId":"bb994f2f-526e-4142-bf9b-b8cf482c14ea"
}
```

## Licence

[MIT](./LICENSE)
