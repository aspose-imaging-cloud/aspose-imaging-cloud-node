![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm](https://img.shields.io/npm/v/asposeimagingcloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/asposeimagingcloud) ![node-current](https://img.shields.io/node/v/asposeimagingcloud) ![npm type definitions](https://img.shields.io/npm/types/asposeimagingcloud) [![GitHub license](https://img.shields.io/github/license/aspose-imaging-cloud/aspose-imaging-cloud-nodejs)](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-nodejs/blob/master/LICENSE)
# Image Processing in Cloud via Node.js REST API SDK
[Aspose.Imaging Cloud](https://products.aspose.cloud/imaging) is a true [REST API](https://apireference.aspose.cloud/imaging/) that enables you to perform a wide range of image processing operations including creation, manipulation and conversion in the cloud, with zero initial costs. Our Cloud SDKs are wrappers around REST API in various programming languages, allowing you to process images in language of your choice quickly and easily, gaining all benefits of strong types and IDE highlights.

This repository contains [Aspose.Imaging Cloud Node.js SDK](https://products.aspose.cloud/imaging/nodejs) source code which is written in TypeScript. This SDK allows you to work with Aspose.Imaging Cloud REST APIs in your Node.js applications quickly and easily, with zero initial cost.

To use this SDK, you will need Client ID and Client Secret which can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) (free registration in Aspose Cloud is required for this).

The SDK also can be used as [Aspose.Imaging Cloud JavaScript SDK](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-javascript).

- Fetch or update properties of cloud-hosted images.
- Scale, flip, crop, and export an image with a single API call.
- Resize, crop, flip, convert, and export an image to other supported formats.
- Update image parameters of JPEG2000 & WEBP images.
- Access and multi-frame TIFF image and extract the desired frames from it.
- Rotate, flip, crop, resize, or fetch properties of the selected TIFF frame.
- Merge multiple TIFF images.

## Read & Write Image Formats
BMP, GIF, JPEG, JPEG2000, PSD, TIFF, WEBP, PNG, WMF, EMF, SVG, TGA, APNG

## Save Image As
PDF, DICOM

## Read Image Formats
DJVU, DICOM, CDR, CMX, ODG, DNG, EPS, EMZ, WMZ, SVGZ

## Enhancements in Version 20.12

- Enhanced the **EPS** file format inheritance to support rotate, resize, flip, etc. operations as vector images support.
- Improved image loading, conversion, and export features.
- Added the JavaScript SDK.

## Enhancements in Version 20.9
- Resumed the support of **Android SDK** and updated reference to Aspose.Imaging and Aspose.PSD.


## Enhancements in Version 20.10

- Support for additional image formats in Object Detection.
- Support to load and convert **EPS** files to **PDF/A** format.

## Storage API support
Since version 19.4, SDK includes support of storage operations for better user experience and unification, so now there's no need to use 2 different SDKs!

It gives you an ability to:
* Upload, download, copy, move and delete files, including versions handling (if you are using Cloud storage that supports this feature - true by default)
* Create, copy, move and delete folders
* Copy and move files and folders accross separate storages in scope of a single operation
* Check if certain file, folder or storage exists

Detalied official documentation can be found at the [following link](https://docs.aspose.cloud/imaging/).

## Getting Started
1. **Sign Up**. Before you begin, you need to sign up for an account on our [Dashboard](https://dashboard.aspose.cloud/) and retrieve your [credentials](https://dashboard.aspose.cloud/#/apps).
2. **Minimum requirements**. This SDK requires [Node.js 6.x and higher](https://nodejs.org/download/release/).
3. **Install Aspose.Imaging Cloud Node.js SDK**.

Please, add the following [nmp package](https://www.npmjs.com/package/@asposecloud/aspose-imaging-cloud) to your project.json as a dependency.
```json
{
  "dependencies": {
    "@asposecloud/aspose-imaging-cloud": "^21.11.0"
  }
}
```
Import the dependencies to your code as follows.
```ts
import * as imaging from "@asposecloud/aspose-imaging-cloud";
```
4. **Using the SDK**. The best way to become familiar with how to use the SDK is to read the [Developer Guide](https://docs.aspose.cloud/imaging/developer-guide/). The [Getting Started Guide](https://docs.aspose.cloud/imaging/getting-started/) will help you to become familiar with the common concepts.

## Quick Examples
Please, look at [Examples](EXAMPLES.md) document for basic usage or use the [Examples](Examples) folder for more sophisticated scenarios.

## Convert JPG to PNG in Node.Js

```js
	// Get your ClientId and ClientSecret from https://dashboard.aspose.cloud (free registration required).
	const imagingApi = new ImagingApi("MY_CLIENT_SECRET", "MY_CLIENT_ID");

	const request = new ConvertImageRequest({ "sample.jpg", "png", "tempFolder", "My_Storage_Name" });

	imagingApi.convertImage(request).then((response) => {
		fs.writeFile("sample.png", response.body, (err) => {
			if (err) throw err;
		});
	});
```


#### Aspose Cloud-hosted service VS on-premise deployment (*experimental feature*)
Starting from v19.7, you can choose either to use Aspose Cloud-hosted image processing service (the standard way) or the Docker image from Docker Hub deployed on-premise to serve the requests.
The details about key differences and deployment process will be described on the dedicated Docker Hub page as soon as it's released.

To succeed with your on-premise service usage by the SDK, you need to:
1. Set the *clientId* and *clientSecret* parameters as null and use *baseUrl* parameter according to your on-premise deployment with additional API version and debug mode parameters.
```ts
const imagingApi: imaging.ImagingApi  = new imaging.ImagingApi(null, null, "yourServiceUrl");
```
2. Set *storage* or *storageName* parameters for each request where they're present (mandatory!).

## Licensing
All Aspose.Imaging Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

## Aspose.Imaging Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js |Android|
|---|---|---|---|---|---|--|
| [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-dotnet) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-java) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-php) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-python) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-ruby)  | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-node) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-android) | [GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-swift)|[GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-dart) |[GitHub](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-go) |
| [NuGet](https://www.nuget.org/packages/Aspose.Imaging-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-imaging-cloud) | [Composer](https://packagist.org/packages/aspose/aspose-imaging-cloud) | [PIP](https://pypi.org/project/aspose.imaging-cloud/) | [GEM](https://rubygems.org/gems/aspose_imaging_cloud)  | [NPM](https://www.npmjs.com/package/@asposecloud/aspose-imaging-cloud) |[Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-imaging-cloud)|

[Product Page](https://products.aspose.cloud/imaging/nodejs) | [Documentation](https://docs.aspose.cloud/display/imagingcloud/Home) | [API Reference](https://apireference.aspose.cloud/imaging/) | [Code Samples](https://github.com/aspose-imaging-cloud/aspose-imaging-cloud-nodejs) | [Blog](https://blog.aspose.cloud/category/imaging/) | [Free Support](https://forum.aspose.cloud/c/imaging) | [Free Trial](https://dashboard.aspose.cloud/#/apps)
