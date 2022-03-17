English | [简体中文](./README.md)

# TIM SDK (Mac)

## Download Links

### Basic Edition
[Latest ImSDKForMac.framework download](https://im.sdk.qcloud.com/download/standard/5.1.62/TIM_SDK_Mac_latest_framework.zip)

### Enhanced Edition
[Latest ImSDKForMac_Plus.framework download](https://sdk-im-1252463788.cos.ap-hongkong.myqcloud.com/download/plus/6.0.1992/ImSDKForMac_Plus_6.0.1992.framework.zip)

### C API edition
[Latest C API download](https://im.sdk.cloud.tencent.cn/download/plus/6.0.1992/cross_platform/ImSDK_Mac_C_6.0.1992.framework.zip)

### C++ API edition
[Latest C++ API download](https://im.sdk.cloud.tencent.cn/download/plus/6.0.1992/cross_platform/ImSDK_Mac_CPP_6.0.1992.framework.zip)

## CocoaPods Integration
If you are using the SDK basic edition, edit the Podfile as follows:

```
source 'https://github.com/CocoaPods/Specs.git'
platform :macos, '10.10'

target 'TUIKitDemo' do
   pod 'TXIMSDK_Mac'

end

```

If you are using the SDK enhanced edition, edit the Podfile as follows:

```
source 'https://github.com/CocoaPods/Specs.git'
platform :macos, '10.10'

target 'TUIKitDemo' do
   pod 'TXIMSDK_Plus_Mac'

end

```