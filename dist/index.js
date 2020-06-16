"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.LogType = exports.InvocationType = void 0;
const capi_1 = require("@tencent-sdk/capi");
const error_1 = require("./helper/error");
var InvocationType;
(function (InvocationType) {
    InvocationType["RequestResponse"] = "RequestResponse";
    InvocationType["Event"] = "Event";
})(InvocationType = exports.InvocationType || (exports.InvocationType = {}));
var LogType;
(function (LogType) {
    LogType["Tail"] = "Tail";
    LogType["None"] = "None";
})(LogType = exports.LogType || (exports.LogType = {}));
class SDK {
    constructor(config) {
        const defaultConfig = {
            secretId: process.env.TENCENTCLOUD_SECRETID,
            secretKey: process.env.TENCENTCLOUD_SECRETKEY,
            token: process.env.TENCENTCLOUD_SESSIONTOKEN,
            region: 'ap-guangzhou'
        };
        const mergedConfig = Object.assign(Object.assign({}, defaultConfig), config);
        if (!mergedConfig.secretId || !mergedConfig.secretKey)
            throw new error_1.MISSING_SECRET_ERROR();
        this.client = new capi_1.Capi({
            Region: mergedConfig.region,
            SecretId: mergedConfig.secretId,
            SecretKey: mergedConfig.secretKey,
            Token: mergedConfig.token,
            ServiceType: 'scf'
        });
    }
    _reset() {
        this.client = null;
    }
    async invoke(invokeParam) {
        if (!this.client) {
            throw new error_1.NOT_INIT_ERROR();
        }
        const res = await this.client.request({
            Action: 'Invoke',
            Version: '2018-04-16',
            FunctionName: invokeParam.functionName,
            InvocationType: invokeParam.invocationType,
            Qualifier: invokeParam.qualifier,
            ClientContext: JSON.stringify(invokeParam.data),
            Namespace: invokeParam.namespace,
            RoutingKey: invokeParam.routingKey,
            LogType: invokeParam.LogType
        }, {
            host: 'scf.tencentcloudapi.com'
        }, true);
        if (res && res.Response) {
            return res.Response;
        }
        else {
            throw new error_1.REQUEST_ERROR('Got no response:' + JSON.stringify(res));
        }
    }
}
exports.SDK = SDK;
exports.default = SDK;
