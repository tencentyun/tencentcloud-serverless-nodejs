export declare class MISSING_SECRET_ERROR extends Error {
    message: 'Init failed! Missing secretId or secretKey.';
}
export declare class NOT_INIT_ERROR extends Error {
    message: 'Please use new or call init() first';
}
export declare class REQUEST_ERROR extends Error {
}
