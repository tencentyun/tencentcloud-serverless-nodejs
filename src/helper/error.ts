/* eslint-disable @typescript-eslint/class-name-casing */
export class MISSING_SECRET_ERROR extends Error {
  message: 'Init failed! Missing secretId or secretKey.'
}

export class NOT_INIT_ERROR extends Error {
  message: 'Please use new or call init() first'
}

export class REQUEST_ERROR extends Error {}
