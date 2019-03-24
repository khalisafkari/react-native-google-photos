# react-native-google-photos
 > Grabs Streaming &amp; Downloader Link Google Photos

## Toc

* [Installation](#installation)
* [Usage](#usage)

## Installation

Using npm:

```shell
npm install --save react-native-google-photos
```

or using yarn:

```shell
yarn add react-native-google-photos
```

## Usage

```js
import Gphotos from 'react-native-google-photos';

var url = "https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB";

Gphotos(url).then(res=>{
    console.log(res);
})
```
## Require

* Allow the google photos to public access folder
* Only supports video urls not folder urls