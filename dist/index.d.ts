import { CapiInstance } from '@tencent-sdk/capi';
import { InitConfig } from './helper/types';
export declare enum InvocationType {
    'RequestResponse' = "RequestResponse",
    'Event' = "Event"
}
export declare enum LogType {
    'Tail' = "Tail",
    'None' = "None"
}
interface InvokeParam {
    functionName: string;
    qualifier?: string;
    data?: string | object;
    namespace?: string;
    invocationType?: InvocationType;
    routingKey?: string | object;
    LogType?: LogType;
}
export declare class SDK {
    client: CapiInstance;
    constructor(config?: InitConfig);
    _reset(): void;
    invoke(invokeParam: InvokeParam): Promise<any>;
}
export default SDK;
