# Aspose.Imaging.Cloud.Sdk.Api.ImagingApi

<a name="addSearchImage"></a>
## **addSearchImage**
> addSearchImage(searchContextId, imageId, imageData, folder, storage)

Add image and images features to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | Search context identifier. | 
**imageId** | **string** | Image identifier. | 
**imageData** | **Buffer** | Input image | [optional]
**folder** | **string** | Folder. | [optional]
**storage** | **string** | Storage | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="appendTiff"></a>
## **appendTiff**
> appendTiff(name, appendFile, storage, folder)

Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Original image file name. | 
**appendFile** | **string** | Image file name to be appended to original one. | 
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**folder** | **string** | Folder with images to process. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="compareImages"></a>
## **compareImages**
> compareImages(searchContextId, imageId1, imageData, imageId2, folder, storage)

Compare two images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageId1** | **string** | The first image Id in storage. | 
**imageData** | **Buffer** | Input image | [optional]
**imageId2** | **string** | The second image Id in storage or null (if image loading in request). | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertTiffToFax"></a>
## **convertTiffToFax**
> convertTiffToFax(name, storage, folder)

Update parameters of existing TIFF image accordingly to fax parameters.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**folder** | **string** | Folder with image to process. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFile"></a>
## **copyFile**
> copyFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Copy file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/folder/file.ext' | 
**destPath** | **string** | Destination file path | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to copy | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="copyFolder"></a>
## **copyFolder**
> copyFolder(srcPath, destPath, srcStorageName, destStorageName)

Copy folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source folder path e.g. '/src' | 
**destPath** | **string** | Destination folder path e.g. '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCroppedImage"></a>
## **createCroppedImage**
> createCroppedImage(imageData, x, y, width, height, format, outPath, storage)

Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**x** | **number** | X position of start point for cropping rectangle. | 
**y** | **number** | Y position of start point for cropping rectangle. | 
**width** | **number** | Width of cropping rectangle. | 
**height** | **number** | Height of cropping rectangle. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createDeskewedImage"></a>
## **createDeskewedImage**
> createDeskewedImage(imageData, resizeProportionally, bkColor, outPath, storage)

Deskew an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**resizeProportionally** | **boolean** | Resize proportionally | 
**bkColor** | **string** | Background color | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image) | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createFolder"></a>
## **createFolder**
> createFolder(path, storageName)

Create the folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path to create e.g. 'folder_1/folder_2/' | 
**storageName** | **string** | Storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGrayscaledImage"></a>
## **createGrayscaledImage**
> createGrayscaledImage(imageData, outPath, storage)

Grayscales an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image) | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageFeatures"></a>
## **createImageFeatures**
> createImageFeatures(searchContextId, imageData, imageId, imagesFolder, folder, storage)

Extract images features and add them to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageData** | **Buffer** | Input image | [optional]
**imageId** | **string** | The image identifier. | [optional]
**imagesFolder** | **string** | Images source - a folder | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageFrame"></a>
## **createImageFrame**
> createImageFrame(imageData, frameId, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, outPath, storage)

Get separate frame from existing TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**frameId** | **number** | Number of a frame. | 
**newWidth** | **number** | New width. | [optional]
**newHeight** | **number** | New height. | [optional]
**x** | **number** | X position of start point for cropping rectangle. | [optional]
**y** | **number** | Y position of start point for cropping rectangle. | [optional]
**rectWidth** | **number** | Width of cropping rectangle. | [optional]
**rectHeight** | **number** | Height of cropping rectangle. | [optional]
**rotateFlipMethod** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional]
**saveOtherFrames** | **boolean** | If result will include all other frames or just a specified frame. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageSearch"></a>
## **createImageSearch**
> createImageSearch(detector, matchingAlgorithm, folder, storage)

Create new search context.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**detector** | **string** | The image features detector. | [optional]
**matchingAlgorithm** | **string** | The matching algorithm. | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**SearchContextStatus**](SearchContextStatus.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createImageTag"></a>
## **createImageTag**
> createImageTag(imageData, searchContextId, tagName, folder, storage)

Add tag and reference image to search context. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**searchContextId** | **string** | The search context identifier. | 
**tagName** | **string** | The tag. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedBmp"></a>
## **createModifiedBmp**
> createModifiedBmp(imageData, bitsPerPixel, horizontalResolution, verticalResolution, fromScratch, outPath, storage)

Update parameters of BMP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**bitsPerPixel** | **number** | Color depth. | 
**horizontalResolution** | **number** | New horizontal resolution. | 
**verticalResolution** | **number** | New vertical resolution. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedEmf"></a>
## **createModifiedEmf**
> createModifiedEmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, outPath, storage, format)

Process existing EMF imaging using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**bkColor** | **string** | Color of the background. | 
**pageWidth** | **number** | Width of the page. | 
**pageHeight** | **number** | Height of the page. | 
**borderX** | **number** | Border width. | 
**borderY** | **number** | Border height. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedGif"></a>
## **createModifiedGif**
> createModifiedGif(imageData, backgroundColorIndex, colorResolution, hasTrailer, interlaced, isPaletteSorted, pixelAspectRatio, fromScratch, outPath, storage)

Update parameters of GIF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**backgroundColorIndex** | **number** | Index of the background color. | [optional]
**colorResolution** | **number** | Color resolution. | [optional]
**hasTrailer** | **boolean** | Specifies if image has trailer. | [optional]
**interlaced** | **boolean** | Specifies if image is interlaced. | [optional]
**isPaletteSorted** | **boolean** | Specifies if palette is sorted. | [optional]
**pixelAspectRatio** | **number** | Pixel aspect ratio. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedJpeg"></a>
## **createModifiedJpeg**
> createModifiedJpeg(imageData, quality, compressionType, fromScratch, outPath, storage)

Update parameters of JPEG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**quality** | **number** | Quality of an image from 0 to 100. Default is 75. | [optional]
**compressionType** | **string** | Compression type: baseline (default), progressive, lossless or jpegls. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedJpeg2000"></a>
## **createModifiedJpeg2000**
> createModifiedJpeg2000(imageData, comment, codec, fromScratch, outPath, storage)

Update parameters of JPEG2000 image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**comment** | **string** | The comment (can be either single or comma-separated). | 
**codec** | **string** | The codec (j2k or jp2). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedPsd"></a>
## **createModifiedPsd**
> createModifiedPsd(imageData, channelsCount, compressionMethod, fromScratch, outPath, storage)

Update parameters of PSD image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**channelsCount** | **number** | Count of color channels. | [optional]
**compressionMethod** | **string** | Compression method (for now, raw and RLE are supported). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedSvg"></a>
## **createModifiedSvg**
> createModifiedSvg(imageData, colorType, textAsShapes, scaleX, scaleY, pageWidth, pageHeight, borderX, borderY, bkColor, fromScratch, outPath, storage, format)

Update parameters of SVG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**colorType** | **string** | Color type for SVG image. Only RGB is supported for now. | [optional]
**textAsShapes** | **boolean** | Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false | [optional]
**scaleX** | **number** | Scale X. | [optional]
**scaleY** | **number** | Scale Y. | [optional]
**pageWidth** | **number** | Width of the page. | [optional]
**pageHeight** | **number** | Height of the page. | [optional]
**borderX** | **number** | Border width. Only 0 is supported for now. | [optional]
**borderY** | **number** | Border height. Only 0 is supported for now. | [optional]
**bkColor** | **string** | Background color (Default is white). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedTiff"></a>
## **createModifiedTiff**
> createModifiedTiff(imageData, bitDepth, compression, resolutionUnit, horizontalResolution, verticalResolution, fromScratch, outPath, storage)

Update parameters of TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**bitDepth** | **number** | Bit depth. | 
**compression** | **string** | Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values. | [optional]
**resolutionUnit** | **string** | New resolution unit (none - the default one, inch or centimeter). | [optional]
**horizontalResolution** | **number** | New horizontal resolution. | [optional]
**verticalResolution** | **number** | New vertical resolution. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedWebP"></a>
## **createModifiedWebP**
> createModifiedWebP(imageData, lossLess, quality, animLoopCount, animBackgroundColor, fromScratch, outPath, storage)

Update parameters of WEBP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**lossLess** | **boolean** | If WEBP should be in lossless format. | 
**quality** | **number** | Quality (0-100). | 
**animLoopCount** | **number** | The animation loop count. | 
**animBackgroundColor** | **string** | Color of the animation background. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createModifiedWmf"></a>
## **createModifiedWmf**
> createModifiedWmf(imageData, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, outPath, storage, format)

Process existing WMF image using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**bkColor** | **string** | Color of the background. | 
**pageWidth** | **number** | Width of the page. | 
**pageHeight** | **number** | Height of the page. | 
**borderX** | **number** | Border width. | 
**borderY** | **number** | Border height. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createResizedImage"></a>
## **createResizedImage**
> createResizedImage(imageData, newWidth, newHeight, format, outPath, storage)

Resize an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**newWidth** | **number** | New width. | 
**newHeight** | **number** | New height. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createRotateFlippedImage"></a>
## **createRotateFlippedImage**
> createRotateFlippedImage(imageData, method, format, outPath, storage)

Rotate and/or flip an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**method** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createSavedImageAs"></a>
## **createSavedImageAs**
> createSavedImageAs(imageData, format, outPath, storage)

Export existing image to another format. Image data is passed as zero-indexed multipart/form-data content or as raw body stream. 

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | 
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createUpdatedImage"></a>
## **createUpdatedImage**
> createUpdatedImage(imageData, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, format, outPath, storage)

Perform scaling, cropping and flipping of an image in a single request. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**newWidth** | **number** | New width of the scaled image. | 
**newHeight** | **number** | New height of the scaled image. | 
**x** | **number** | X position of start point for cropping rectangle. | 
**y** | **number** | Y position of start point for cropping rectangle. | 
**rectWidth** | **number** | Width of cropping rectangle. | 
**rectHeight** | **number** | Height of cropping rectangle. | 
**rotateFlipMethod** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**outPath** | **string** | Path to updated file (if this is empty, response contains streamed image). | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createWebSiteImageFeatures"></a>
## **createWebSiteImageFeatures**
> createWebSiteImageFeatures(searchContextId, imagesSource, folder, storage)

Extract images features from web page and add them to search context

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imagesSource** | **string** | Images source - a web page | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cropImage"></a>
## **cropImage**
> cropImage(name, x, y, width, height, format, folder, storage)

Crop an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**x** | **number** | X position of start point for cropping rectangle. | 
**y** | **number** | Y position of start point for cropping rectangle. | 
**width** | **number** | Width of cropping rectangle | 
**height** | **number** | Height of cropping rectangle. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFile"></a>
## **deleteFile**
> deleteFile(path, storageName, versionId)

Delete file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to delete | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
## **deleteFolder**
> deleteFolder(path, storageName, recursive)

Delete folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]
**recursive** | **boolean** | Enable to delete folders, subfolders and files | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageFeatures"></a>
## **deleteImageFeatures**
> deleteImageFeatures(searchContextId, imageId, folder, storage)

Deletes image features from search context.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageId** | **string** | The image identifier. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteImageSearch"></a>
## **deleteImageSearch**
> deleteImageSearch(searchContextId, folder, storage)

Deletes the search context.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSearchImage"></a>
## **deleteSearchImage**
> deleteSearchImage(searchContextId, imageId, folder, storage)

Delete image and images features from search context

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | Search context identifier. | 
**imageId** | **string** | Image identifier. | 
**folder** | **string** | Folder. | [optional]
**storage** | **string** | Storage | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deskewImage"></a>
## **deskewImage**
> deskewImage(name, resizeProportionally, bkColor, folder, storage)

Deskew an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Image file name. | 
**resizeProportionally** | **boolean** | Resize proportionally | 
**bkColor** | **string** | Background color | [optional]
**folder** | **string** | Folder | [optional]
**storage** | **string** | Storage | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="downloadFile"></a>
## **downloadFile**
> downloadFile(path, storageName, versionId)

Download file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/folder/file.ext' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID to download | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: multipart/form-data

<a name="extractImageFeatures"></a>
## **extractImageFeatures**
> extractImageFeatures(searchContextId, imageId, imageData, folder, storage)

Extract features from image without adding to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageId** | **string** | The image identifier. | 
**imageData** | **Buffer** | Input image | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**ImageFeatures**](ImageFeatures.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractImageFrameProperties"></a>
## **extractImageFrameProperties**
> extractImageFrameProperties(imageData, frameId)

Get separate frame properties of existing TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 
**frameId** | **number** | Number of a frame. | 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="extractImageProperties"></a>
## **extractImageProperties**
> extractImageProperties(imageData)

Get properties of an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**imageData** | **Buffer** | Input image | 

### Return type

[**ImagingResponse**](ImagingResponse.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="filterEffectImage"></a>
## **filterEffectImage**
> filterEffectImage(name, filterType, filterProperties, format, folder, storage)

Apply filtering effects to an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**filterType** | **string** | Filter type (BigRectangular, SmallRectangular, Median, GaussWiener, MotionWiener, GaussianBlur, Sharpen, BilateralSmoothing). | 
**filterProperties** | [**FilterPropertiesBase**](FilterPropertiesBase.md) | Filter properties. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findImageDuplicates"></a>
## **findImageDuplicates**
> findImageDuplicates(searchContextId, similarityThreshold, folder, storage)

Find images duplicates.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**similarityThreshold** | **number** | The similarity threshold. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**ImageDuplicatesSet**](ImageDuplicatesSet.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findImagesByTags"></a>
## **findImagesByTags**
> findImagesByTags(tags, searchContextId, similarityThreshold, maxCount, folder, storage)

Find images by tags. Tags JSON string is passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tags** | **string** | Tags array for searching | 
**searchContextId** | **string** | The search context identifier. | 
**similarityThreshold** | **number** | The similarity threshold. | 
**maxCount** | **number** | The maximum count. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findSimilarImages"></a>
## **findSimilarImages**
> findSimilarImages(searchContextId, similarityThreshold, maxCount, imageData, imageId, folder, storage)

Find similar images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**similarityThreshold** | **number** | The similarity threshold. | 
**maxCount** | **number** | The maximum count. | 
**imageData** | **Buffer** | Input image | [optional]
**imageId** | **string** | The search image identifier. | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**SearchResultsSet**](SearchResultsSet.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getDiscUsage"></a>
## **getDiscUsage**
> getDiscUsage(storageName)

Get disc usage

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | [optional]

### Return type

[**DiscUsage**](DiscUsage.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFilesList"></a>
## **getFilesList**
> getFilesList(path, storageName)

Get all files and folders within a folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Folder path e.g. '/folder' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesList**](FilesList.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileVersions"></a>
## **getFileVersions**
> getFileVersions(path, storageName)

Get file versions

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File path e.g. '/file.ext' | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FileVersions**](FileVersions.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFeatures"></a>
## **getImageFeatures**
> getImageFeatures(searchContextId, imageId, folder, storage)

Gets image features from search context.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageId** | **string** | The image identifier. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**ImageFeatures**](ImageFeatures.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFrame"></a>
## **getImageFrame**
> getImageFrame(name, frameId, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, folder, storage)

Get separate frame from existing TIFF image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**frameId** | **number** | Number of a frame. | 
**newWidth** | **number** | New width. | [optional]
**newHeight** | **number** | New height. | [optional]
**x** | **number** | X position of start point for cropping rectangle. | [optional]
**y** | **number** | Y position of start point for cropping rectangle. | [optional]
**rectWidth** | **number** | Width of cropping rectangle. | [optional]
**rectHeight** | **number** | Height of cropping rectangle. | [optional]
**rotateFlipMethod** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | [optional]
**saveOtherFrames** | **boolean** | If result will include all other frames or just a specified frame. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageFrameProperties"></a>
## **getImageFrameProperties**
> getImageFrameProperties(name, frameId, folder, storage)

Get separate frame properties of existing TIFF image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename with image. | 
**frameId** | **number** | Number of a frame. | 
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

[**ImagingResponse**](ImagingResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageProperties"></a>
## **getImageProperties**
> getImageProperties(name, folder, storage)

Get properties of an image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

[**ImagingResponse**](ImagingResponse.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getImageSearchStatus"></a>
## **getImageSearchStatus**
> getImageSearchStatus(searchContextId, folder, storage)

Gets the search context status.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

[**SearchContextStatus**](SearchContextStatus.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSearchImage"></a>
## **getSearchImage**
> getSearchImage(searchContextId, imageId, folder, storage)

Get image from search context

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | Search context identifier. | 
**imageId** | **string** | Image identifier. | 
**folder** | **string** | Folder. | [optional]
**storage** | **string** | Storage | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="grayscaleImage"></a>
## **grayscaleImage**
> grayscaleImage(name, folder, storage)

Grayscale an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Image file name. | 
**folder** | **string** | Folder | [optional]
**storage** | **string** | Storage | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyBmp"></a>
## **modifyBmp**
> modifyBmp(name, bitsPerPixel, horizontalResolution, verticalResolution, fromScratch, folder, storage)

Update parameters of existing BMP image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**bitsPerPixel** | **number** | Color depth. | 
**horizontalResolution** | **number** | New horizontal resolution. | 
**verticalResolution** | **number** | New vertical resolution. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyEmf"></a>
## **modifyEmf**
> modifyEmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, folder, storage, format)

Process existing EMF imaging using given parameters.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**bkColor** | **string** | Color of the background. | 
**pageWidth** | **number** | Width of the page. | 
**pageHeight** | **number** | Height of the page. | 
**borderX** | **number** | Border width. | 
**borderY** | **number** | Border height. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyGif"></a>
## **modifyGif**
> modifyGif(name, backgroundColorIndex, colorResolution, hasTrailer, interlaced, isPaletteSorted, pixelAspectRatio, fromScratch, folder, storage)

Update parameters of existing GIF image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**backgroundColorIndex** | **number** | Index of the background color. | [optional]
**colorResolution** | **number** | Color resolution. | [optional]
**hasTrailer** | **boolean** | Specifies if image has trailer. | [optional]
**interlaced** | **boolean** | Specifies if image is interlaced. | [optional]
**isPaletteSorted** | **boolean** | Specifies if palette is sorted. | [optional]
**pixelAspectRatio** | **number** | Pixel aspect ratio. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyJpeg"></a>
## **modifyJpeg**
> modifyJpeg(name, quality, compressionType, fromScratch, folder, storage)

Update parameters of existing JPEG image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**quality** | **number** | Quality of an image from 0 to 100. Default is 75. | [optional]
**compressionType** | **string** | Compression type: baseline (default), progressive, lossless or jpegls. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyJpeg2000"></a>
## **modifyJpeg2000**
> modifyJpeg2000(name, comment, codec, fromScratch, folder, storage)

Update parameters of existing JPEG2000 image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**comment** | **string** | The comment (can be either single or comma-separated). | 
**codec** | **string** | The codec (j2k or jp2). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyPsd"></a>
## **modifyPsd**
> modifyPsd(name, channelsCount, compressionMethod, fromScratch, folder, storage)

Update parameters of existing PSD image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**channelsCount** | **number** | Count of color channels. | [optional]
**compressionMethod** | **string** | Compression method (for now, raw and RLE are supported). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifySvg"></a>
## **modifySvg**
> modifySvg(name, colorType, textAsShapes, scaleX, scaleY, pageWidth, pageHeight, borderX, borderY, bkColor, fromScratch, folder, storage, format)

Update parameters of existing SVG image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**colorType** | **string** | Color type for SVG image. Only RGB is supported for now. | [optional]
**textAsShapes** | **boolean** | Whether text must be converted as shapes. true if all text is turned into SVG shapes in the convertion; otherwise, false | [optional]
**scaleX** | **number** | Scale X. | [optional]
**scaleY** | **number** | Scale Y. | [optional]
**pageWidth** | **number** | Width of the page. | [optional]
**pageHeight** | **number** | Height of the page. | [optional]
**borderX** | **number** | Border width. Only 0 is supported for now. | [optional]
**borderY** | **number** | Border height. Only 0 is supported for now. | [optional]
**bkColor** | **string** | Background color (Default is white). | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyTiff"></a>
## **modifyTiff**
> modifyTiff(name, bitDepth, compression, resolutionUnit, horizontalResolution, verticalResolution, fromScratch, folder, storage)

Update parameters of existing TIFF image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**bitDepth** | **number** | Bit depth. | 
**compression** | **string** | Compression (none is default). Please, refer to https://apireference.aspose.com/net/imaging/aspose.imaging.fileformats.tiff.enums/tiffcompressions for all possible values. | [optional]
**resolutionUnit** | **string** | New resolution unit (none - the default one, inch or centimeter). | [optional]
**horizontalResolution** | **number** | New horizontal resolution. | [optional]
**verticalResolution** | **number** | New vertical resolution. | [optional]
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyWebP"></a>
## **modifyWebP**
> modifyWebP(name, lossLess, quality, animLoopCount, animBackgroundColor, fromScratch, folder, storage)

Update parameters of existing WEBP image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**lossLess** | **boolean** | If WEBP should be in lossless format. | 
**quality** | **number** | Quality (0-100). | 
**animLoopCount** | **number** | The animation loop count. | 
**animBackgroundColor** | **string** | Color of the animation background. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyWmf"></a>
## **modifyWmf**
> modifyWmf(name, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, folder, storage, format)

Process existing WMF image using given parameters.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**bkColor** | **string** | Color of the background. | 
**pageWidth** | **number** | Width of the page. | 
**pageHeight** | **number** | Height of the page. | 
**borderX** | **number** | Border width. | 
**borderY** | **number** | Border height. | 
**fromScratch** | **boolean** | Specifies where additional parameters we do not support should be taken from. If this is true – they will be taken from default values for standard image, if it is false – they will be saved from current image. Default is false. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]
**format** | **string** | Export format (PNG is the default one). Please, refer to the export table from https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFile"></a>
## **moveFile**
> moveFile(srcPath, destPath, srcStorageName, destStorageName, versionId)

Move file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Source file path e.g. '/src.ext' | 
**destPath** | **string** | Destination file path e.g. '/dest.ext' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]
**versionId** | **string** | File version ID to move | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveFolder"></a>
## **moveFolder**
> moveFolder(srcPath, destPath, srcStorageName, destStorageName)

Move folder

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**srcPath** | **string** | Folder path to move e.g. '/folder' | 
**destPath** | **string** | Destination folder path to move to e.g '/dst' | 
**srcStorageName** | **string** | Source storage name | [optional]
**destStorageName** | **string** | Destination storage name | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectExists"></a>
## **objectExists**
> objectExists(path, storageName, versionId)

Check if file or folder exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | File or folder path e.g. '/file.ext' or '/folder' | 
**storageName** | **string** | Storage name | [optional]
**versionId** | **string** | File version ID | [optional]

### Return type

[**ObjectExist**](ObjectExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resizeImage"></a>
## **resizeImage**
> resizeImage(name, newWidth, newHeight, format, folder, storage)

Resize an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**newWidth** | **number** | New width. | 
**newHeight** | **number** | New height. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="rotateFlipImage"></a>
## **rotateFlipImage**
> rotateFlipImage(name, method, format, folder, storage)

Rotate and/or flip an existing image.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**method** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveImageAs"></a>
## **saveImageAs**
> saveImageAs(name, format, folder, storage)

Export existing image to another format.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of image. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | 
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="storageExists"></a>
## **storageExists**
> storageExists(storageName)

Check if storage exists

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**storageName** | **string** | Storage name | 

### Return type

[**StorageExist**](StorageExist.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImage"></a>
## **updateImage**
> updateImage(name, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, format, folder, storage)

Perform scaling, cropping and flipping of an existing image in a single request.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | **string** | Filename of an image. | 
**newWidth** | **number** | New width of the scaled image. | 
**newHeight** | **number** | New height of the scaled image. | 
**x** | **number** | X position of start point for cropping rectangle. | 
**y** | **number** | Y position of start point for cropping rectangle. | 
**rectWidth** | **number** | Width of cropping rectangle. | 
**rectHeight** | **number** | Height of cropping rectangle. | 
**rotateFlipMethod** | **string** | RotateFlip method (Rotate180FlipNone, Rotate180FlipX, Rotate180FlipXY, Rotate180FlipY, Rotate270FlipNone, Rotate270FlipX, Rotate270FlipXY, Rotate270FlipY, Rotate90FlipNone, Rotate90FlipX, Rotate90FlipXY, Rotate90FlipY, RotateNoneFlipNone, RotateNoneFlipX, RotateNoneFlipXY, RotateNoneFlipY). Default is RotateNoneFlipNone. | 
**format** | **string** | Resulting image format. Please, refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-CommonOperationsFormatSupportMap for possible use-cases. | [optional]
**folder** | **string** | Folder with image to process. | [optional]
**storage** | **string** | Your Aspose Cloud Storage name. | [optional]

### Return type

**Buffer**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateImageFeatures"></a>
## **updateImageFeatures**
> updateImageFeatures(searchContextId, imageId, imageData, folder, storage)

Update images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | The search context identifier. | 
**imageId** | **string** | The image identifier. | 
**imageData** | **Buffer** | Input image | [optional]
**folder** | **string** | The folder. | [optional]
**storage** | **string** | The storage. | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateSearchImage"></a>
## **updateSearchImage**
> updateSearchImage(searchContextId, imageId, imageData, folder, storage)

Update image and images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**searchContextId** | **string** | Search context identifier. | 
**imageId** | **string** | Image identifier. | 
**imageData** | **Buffer** | Input image | [optional]
**folder** | **string** | Folder. | [optional]
**storage** | **string** | Storage | [optional]

### Return type

****

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadFile"></a>
## **uploadFile**
> uploadFile(path, File, storageName)

Upload file

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**path** | **string** | Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext If the content is multipart and path does not contains the file name it tries to get them from filename parameter from Content-Disposition header.  | 
**File** | **Buffer** | File to upload | 
**storageName** | **string** | Storage name | [optional]

### Return type

[**FilesUploadResult**](FilesUploadResult.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


