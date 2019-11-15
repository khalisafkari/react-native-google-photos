# react-native-google-photos
 [![npm version](https://img.shields.io/npm/v/react-native-google-photos.svg?color=g&label=NPM&style=for-the-badge)](https://www.npmjs.com/package/react-native-google-photos) <a href="https://snyk.io/test/github/khalisafkari/react-native-google-photos?targetFile=package.json"><img alt="Snyk Vulnerabilities for GitHub Repo" src="https://img.shields.io/snyk/vulnerabilities/github/khalisafkari/react-native-google-photos.svg?style=for-the-badge"></a>
 <a href="https://www.npmjs.com/package/react-native-google-photos">
 <img alt="npm" src="https://img.shields.io/npm/dw/react-native-google-photos.svg?style=for-the-badge"></a>
 [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
 > Grabs Streaming &amp; Downloader Link Google Photos & Blogger .Dll
 

## Toc

* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Next](#next)
* [Donate](#donate)

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
> Support [Google Photos](http://photos.google.com) & [Blogger](https://www.blogger.com)
```js
import Grab from 'react-native-google-photos';

var photos = "https://photos.google.com/share/AF1QipMTEPAiVF8t0YqLukflnOSQjwfd8ARIoT2h37AXvYO1uaWodbeiFoBUDuD_19tEbg/photo/AF1QipPA2Bq0JlAR9LoGD3mogsxSb9OZWEG4XqBDD4Rv?key=cjhUT0xrZjM5NGN2SVRLOVptZU5SMUlKV0lQYWpB";

var blogger = "https://prikate09.blogspot.com/2017/10/all-ani-29-oktober-2017-413.html"

//Google Photos
Grab.Photos(photos).then(res=>{
    console.log(res); 
})

//Blogger
Grab.Blogger(blogger).then(res=>{
    console.log(res)
})


```
## Demo
* Expo [https://snack.expo.io/@khalis411/google-photos](https://snack.expo.io/@khalis411/google-photos-)

## Require Google Photos

* Allow the google photos to public access folder
* Only supports video urls not folder urls

## Require Mp4upload.com

* Only embed url 

## Next
- [x] Add `Streaming & Download` [Google Photos](https://photos.google.com) 
- [x] Add `Streaming & Download ` [Blogger](https://www.blogger.com)
<!-- - [ ] Add `Streaming Only`  [Cloudvideo.tv](https://cloudvideo.tv/)  -->
- [x] Add `Streaming & Donwload` [Mp4upload.com](https://www.mp4upload.com)
- [x] Add `Streaming & Donwload` [RapidVideo.com](https://www.rapidvideo.com)

## Donate
 * <a href="https://paypal.me/khalisafkari?locale.x=id_ID"><img src="https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom.png" heigth="50" width="50"/></a>