# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.3"></a>
## [1.0.3](https://github.com/tencentyun/tencentcloud-serverless-nodejs/compare/v1.0.2...v1.0.3) (2020-10-13)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/tencentyun/tencentcloud-serverless-nodejs/compare/v0.0.26...v1.0.0) (2020-06-16)


### Features

* 大版本升级，新增支持异步调用、灰度流量、输出log ([c1af7c5](https://github.com/tencentyun/tencentcloud-serverless-nodejs/commit/c1af7c5))


### BREAKING CHANGES

* 引入及调用API有修改，必须先初始化再调用，用new SDK()初始化sdk，调用不再接收secretId和secretKey参数，新增支持新功能的调用参数



<a name="0.0.26"></a>
## [0.0.26](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.25...v0.0.26) (2019-12-27)



<a name="0.0.25"></a>
## [0.0.25](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.24...v0.0.25) (2019-12-27)


### Bug Fixes

* **doc:** readme format ([f93d3e9](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/f93d3e9))


### Features

* **init:** choose the internal endpoint when in tencentcloud serverless ([472267d](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/472267d))



<a name="0.0.24"></a>
## [0.0.24](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.23...v0.0.24) (2019-11-14)


### Features

* **invoke:** support keep-alive ([23fabbd](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/23fabbd))



<a name="0.0.23"></a>
## [0.0.23](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.22...v0.0.23) (2019-09-24)



<a name="0.0.22"></a>
## [0.0.22](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.21...v0.0.22) (2019-09-23)


### Features

* **init:** change throw error to warning when init without secretId/secretKey ([314b338](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/314b338))


### BREAKING CHANGES

* **init:** change throw error to warning when init without secretId/secretKey



<a name="0.0.21"></a>
## [0.0.21](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.20...v0.0.21) (2019-08-22)



<a name="0.0.20"></a>
## [0.0.20](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.19...v0.0.20) (2019-08-22)


### Features

* **interface:invoke:** interface:invoke would get `secretId/secretKey/token` from `process.env` aut ([8ace71b](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/8ace71b))



<a name="0.0.19"></a>
## [0.0.19](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.18...v0.0.19) (2019-08-21)



<a name="0.0.18"></a>
## [0.0.18](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.17...v0.0.18) (2019-08-19)



<a name="0.0.17"></a>
## [0.0.17](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.16...v0.0.17) (2019-08-19)



<a name="0.0.16"></a>
## [0.0.16](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.15...v0.0.16) (2019-08-16)


### Bug Fixes

* **interface:invoke:** fix interface:invoke argv ([f7314b2](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/f7314b2))



<a name="0.0.15"></a>
## [0.0.15](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.14...v0.0.15) (2019-08-16)


### Features

* **interface:invoke:** add secretId/secretKey/token config to interface:invoke ([760e784](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/760e784))



<a name="0.0.14"></a>
## [0.0.14](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.13...v0.0.14) (2019-08-16)



<a name="0.0.13"></a>
## [0.0.13](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.12...v0.0.13) (2019-07-28)


### Bug Fixes

* **ci:** resourced not found label fix ([87b0f8a](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/87b0f8a))



<a name="0.0.12"></a>
## [0.0.12](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.11...v0.0.12) (2019-07-28)


### Bug Fixes

* **ts def fix:** ts def fix ([f72d7b3](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/f72d7b3))



<a name="0.0.11"></a>
## [0.0.11](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.10...v0.0.11) (2019-05-08)



<a name="0.0.10"></a>
## [0.0.10](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.9...v0.0.10) (2019-05-08)



<a name="0.0.9"></a>
## [0.0.9](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.8...v0.0.9) (2019-05-08)


### Features

* **ci,api:** make invoke work without init ([fc3edb5](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/fc3edb5))



<a name="0.0.8"></a>
## [0.0.8](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.7...v0.0.8) (2019-04-30)


### Bug Fixes

* **ci:** fix ci ([762b923](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/762b923))



<a name="0.0.7"></a>
## [0.0.7](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.6...v0.0.7) (2019-04-30)



<a name="0.0.6"></a>
## [0.0.6](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.5...v0.0.6) (2019-04-30)



<a name="0.0.5"></a>
## [0.0.5](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.4...v0.0.5) (2019-04-30)


### Bug Fixes

* **invoke:** use sessionToken ([c31d3d7](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/c31d3d7))



<a name="0.0.4"></a>
## [0.0.4](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.3...v0.0.4) (2019-04-30)


### Bug Fixes

* **all:** fix export default ([265adcb](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/265adcb))



<a name="0.0.3"></a>
## [0.0.3](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.2...v0.0.3) (2019-04-30)


### Bug Fixes

* **docs:** fix readme ([bc99348](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/bc99348))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/compare/v0.0.1...v0.0.2) (2019-04-30)


### Features

* **test:** add ci ([2a4baa5](https://github.com/Lighting-Jack/tencentcloud-serverless-nodejs/commit/2a4baa5))



<a name="0.0.1"></a>
## 0.0.1 (2019-04-30)
