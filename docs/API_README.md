## Documentation for API Endpoints

All URIs are relative to *https://api.aspose.cloud/v3.0/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ImagingApi* | [**addSearchImage**](ImagingApi.md#addSearchImage) | **POST** /imaging/ai/imageSearch/\{searchContextId}/image | Add image and images features to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**appendTiff**](ImagingApi.md#appendTiff) | **POST** /imaging/tiff/\{name}/appendTiff | Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).
*ImagingApi* | [**compareImages**](ImagingApi.md#compareImages) | **POST** /imaging/ai/imageSearch/\{searchContextId}/compare | Compare two images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**convertTiffToFax**](ImagingApi.md#convertTiffToFax) | **GET** /imaging/tiff/\{name}/toFax | Update parameters of existing TIFF image accordingly to fax parameters.
*ImagingApi* | [**copyFile**](ImagingApi.md#copyFile) | **PUT** /imaging/storage/file/copy/\{srcPath} | Copy file
*ImagingApi* | [**copyFolder**](ImagingApi.md#copyFolder) | **PUT** /imaging/storage/folder/copy/\{srcPath} | Copy folder
*ImagingApi* | [**createCroppedImage**](ImagingApi.md#createCroppedImage) | **POST** /imaging/crop | Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createDeskewedImage**](ImagingApi.md#createDeskewedImage) | **POST** /imaging/deskew | Deskew an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createFaxTiff**](ImagingApi.md#createFaxTiff) | **POST** /imaging/tiff/toFax | Update parameters of TIFF image accordingly to fax parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createFolder**](ImagingApi.md#createFolder) | **PUT** /imaging/storage/folder/\{path} | Create the folder
*ImagingApi* | [**createGrayscaledImage**](ImagingApi.md#createGrayscaledImage) | **POST** /imaging/grayscale | Grayscales an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createImageFeatures**](ImagingApi.md#createImageFeatures) | **POST** /imaging/ai/imageSearch/\{searchContextId}/features | Extract images features and add them to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createImageFrame**](ImagingApi.md#createImageFrame) | **POST** /imaging/frames/\{frameId} | Get separate frame from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createImageFrameRange**](ImagingApi.md#createImageFrameRange) | **POST** /imaging/frames/range | Get frames range from existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createImageSearch**](ImagingApi.md#createImageSearch) | **POST** /imaging/ai/imageSearch/create | Create new search context.
*ImagingApi* | [**createImageTag**](ImagingApi.md#createImageTag) | **POST** /imaging/ai/imageSearch/\{searchContextId}/addTag | Add tag and reference image to search context. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedBmp**](ImagingApi.md#createModifiedBmp) | **POST** /imaging/bmp | Update parameters of BMP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedEmf**](ImagingApi.md#createModifiedEmf) | **POST** /imaging/emf | Process existing EMF imaging using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedGif**](ImagingApi.md#createModifiedGif) | **POST** /imaging/gif | Update parameters of GIF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedJpeg**](ImagingApi.md#createModifiedJpeg) | **POST** /imaging/jpg | Update parameters of JPEG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedJpeg2000**](ImagingApi.md#createModifiedJpeg2000) | **POST** /imaging/jpg2000 | Update parameters of JPEG2000 image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedPsd**](ImagingApi.md#createModifiedPsd) | **POST** /imaging/psd | Update parameters of PSD image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedSvg**](ImagingApi.md#createModifiedSvg) | **POST** /imaging/svg | Update parameters of SVG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedTiff**](ImagingApi.md#createModifiedTiff) | **POST** /imaging/tiff | Update parameters of TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedWebP**](ImagingApi.md#createModifiedWebP) | **POST** /imaging/webp | Update parameters of WEBP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createModifiedWmf**](ImagingApi.md#createModifiedWmf) | **POST** /imaging/wmf | Process existing WMF image using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createObjectBounds**](ImagingApi.md#createObjectBounds) | **POST** /imaging/ai/objectdetection/bounds | Detects objects bounds. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createResizedImage**](ImagingApi.md#createResizedImage) | **POST** /imaging/resize | Resize an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createRotateFlippedImage**](ImagingApi.md#createRotateFlippedImage) | **POST** /imaging/rotateflip | Rotate and/or flip an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createSavedImageAs**](ImagingApi.md#createSavedImageAs) | **POST** /imaging/saveAs | Export existing image to another format. Image data is passed as zero-indexed multipart/form-data content or as raw body stream. 
*ImagingApi* | [**createUpdatedImage**](ImagingApi.md#createUpdatedImage) | **POST** /imaging/updateImage | Perform scaling, cropping and flipping of an image in a single request. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**createVisualObjectBounds**](ImagingApi.md#createVisualObjectBounds) | **POST** /imaging/ai/objectdetection/visualbounds | Detects objects bounds and draw them on the original image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream
*ImagingApi* | [**createWebSiteImageFeatures**](ImagingApi.md#createWebSiteImageFeatures) | **POST** /imaging/ai/imageSearch/\{searchContextId}/features/web | Extract images features from web page and add them to search context
*ImagingApi* | [**cropImage**](ImagingApi.md#cropImage) | **GET** /imaging/\{name}/crop | Crop an existing image.
*ImagingApi* | [**deleteFile**](ImagingApi.md#deleteFile) | **DELETE** /imaging/storage/file/\{path} | Delete file
*ImagingApi* | [**deleteFolder**](ImagingApi.md#deleteFolder) | **DELETE** /imaging/storage/folder/\{path} | Delete folder
*ImagingApi* | [**deleteImageFeatures**](ImagingApi.md#deleteImageFeatures) | **DELETE** /imaging/ai/imageSearch/\{searchContextId}/features | Deletes image features from search context.
*ImagingApi* | [**deleteImageSearch**](ImagingApi.md#deleteImageSearch) | **DELETE** /imaging/ai/imageSearch/\{searchContextId} | Deletes the search context.
*ImagingApi* | [**deleteSearchImage**](ImagingApi.md#deleteSearchImage) | **DELETE** /imaging/ai/imageSearch/\{searchContextId}/image | Delete image and images features from search context
*ImagingApi* | [**deskewImage**](ImagingApi.md#deskewImage) | **GET** /imaging/\{name}/deskew | Deskew an existing image.
*ImagingApi* | [**downloadFile**](ImagingApi.md#downloadFile) | **GET** /imaging/storage/file/\{path} | Download file
*ImagingApi* | [**extractImageFeatures**](ImagingApi.md#extractImageFeatures) | **GET** /imaging/ai/imageSearch/\{searchContextId}/image2features | Extract features from image without adding to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**extractImageFrameProperties**](ImagingApi.md#extractImageFrameProperties) | **POST** /imaging/frames/\{frameId}/properties | Get separate frame properties of existing image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**extractImageProperties**](ImagingApi.md#extractImageProperties) | **POST** /imaging/properties | Get properties of an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**filterEffectImage**](ImagingApi.md#filterEffectImage) | **PUT** /imaging/\{name}/filterEffect | Apply filtering effects to an existing image.
*ImagingApi* | [**findImageDuplicates**](ImagingApi.md#findImageDuplicates) | **GET** /imaging/ai/imageSearch/\{searchContextId}/findDuplicates | Find images duplicates.
*ImagingApi* | [**findImagesByTags**](ImagingApi.md#findImagesByTags) | **POST** /imaging/ai/imageSearch/\{searchContextId}/findByTags | Find images by tags. Tags JSON string is passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**findSimilarImages**](ImagingApi.md#findSimilarImages) | **GET** /imaging/ai/imageSearch/\{searchContextId}/findSimilar | Find similar images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**getDiscUsage**](ImagingApi.md#getDiscUsage) | **GET** /imaging/storage/disc | Get disc usage
*ImagingApi* | [**getFilesList**](ImagingApi.md#getFilesList) | **GET** /imaging/storage/folder/\{path} | Get all files and folders within a folder
*ImagingApi* | [**getFileVersions**](ImagingApi.md#getFileVersions) | **GET** /imaging/storage/version/\{path} | Get file versions
*ImagingApi* | [**getImageFeatures**](ImagingApi.md#getImageFeatures) | **GET** /imaging/ai/imageSearch/\{searchContextId}/features | Gets image features from search context.
*ImagingApi* | [**getImageFrame**](ImagingApi.md#getImageFrame) | **GET** /imaging/\{name}/frames/\{frameId} | Get separate frame from existing image.
*ImagingApi* | [**getImageFrameProperties**](ImagingApi.md#getImageFrameProperties) | **GET** /imaging/\{name}/frames/\{frameId}/properties | Get separate frame properties of existing image.
*ImagingApi* | [**getImageFrameRange**](ImagingApi.md#getImageFrameRange) | **GET** /imaging/\{name}/frames/range | Get frames range from existing image.
*ImagingApi* | [**getImageProperties**](ImagingApi.md#getImageProperties) | **GET** /imaging/\{name}/properties | Get properties of an image.
*ImagingApi* | [**getImageSearchStatus**](ImagingApi.md#getImageSearchStatus) | **GET** /imaging/ai/imageSearch/\{searchContextId}/status | Gets the search context status.
*ImagingApi* | [**getObjectBounds**](ImagingApi.md#getObjectBounds) | **GET** /imaging/ai/objectdetection/\{name}/bounds | Detects objects' bounds
*ImagingApi* | [**getSearchImage**](ImagingApi.md#getSearchImage) | **GET** /imaging/ai/imageSearch/\{searchContextId}/image | Get image from search context
*ImagingApi* | [**getVisualObjectBounds**](ImagingApi.md#getVisualObjectBounds) | **GET** /imaging/ai/objectdetection/\{name}/visualbounds | Detects objects bounds and draw them on the original image
*ImagingApi* | [**grayscaleImage**](ImagingApi.md#grayscaleImage) | **GET** /imaging/\{name}/grayscale | Grayscale an existing image.
*ImagingApi* | [**modifyBmp**](ImagingApi.md#modifyBmp) | **GET** /imaging/\{name}/bmp | Update parameters of existing BMP image.
*ImagingApi* | [**modifyEmf**](ImagingApi.md#modifyEmf) | **GET** /imaging/\{name}/emf | Process existing EMF imaging using given parameters.
*ImagingApi* | [**modifyGif**](ImagingApi.md#modifyGif) | **GET** /imaging/\{name}/gif | Update parameters of existing GIF image.
*ImagingApi* | [**modifyJpeg**](ImagingApi.md#modifyJpeg) | **GET** /imaging/\{name}/jpg | Update parameters of existing JPEG image.
*ImagingApi* | [**modifyJpeg2000**](ImagingApi.md#modifyJpeg2000) | **GET** /imaging/\{name}/jpg2000 | Update parameters of existing JPEG2000 image.
*ImagingApi* | [**modifyPsd**](ImagingApi.md#modifyPsd) | **GET** /imaging/\{name}/psd | Update parameters of existing PSD image.
*ImagingApi* | [**modifySvg**](ImagingApi.md#modifySvg) | **GET** /imaging/\{name}/svg | Update parameters of existing SVG image.
*ImagingApi* | [**modifyTiff**](ImagingApi.md#modifyTiff) | **GET** /imaging/\{name}/tiff | Update parameters of existing TIFF image.
*ImagingApi* | [**modifyWebP**](ImagingApi.md#modifyWebP) | **GET** /imaging/\{name}/webp | Update parameters of existing WEBP image.
*ImagingApi* | [**modifyWmf**](ImagingApi.md#modifyWmf) | **GET** /imaging/\{name}/wmf | Process existing WMF image using given parameters.
*ImagingApi* | [**moveFile**](ImagingApi.md#moveFile) | **PUT** /imaging/storage/file/move/\{srcPath} | Move file
*ImagingApi* | [**moveFolder**](ImagingApi.md#moveFolder) | **PUT** /imaging/storage/folder/move/\{srcPath} | Move folder
*ImagingApi* | [**objectExists**](ImagingApi.md#objectExists) | **GET** /imaging/storage/exist/\{path} | Check if file or folder exists
*ImagingApi* | [**resizeImage**](ImagingApi.md#resizeImage) | **GET** /imaging/\{name}/resize | Resize an existing image.
*ImagingApi* | [**rotateFlipImage**](ImagingApi.md#rotateFlipImage) | **GET** /imaging/\{name}/rotateflip | Rotate and/or flip an existing image.
*ImagingApi* | [**saveImageAs**](ImagingApi.md#saveImageAs) | **GET** /imaging/\{name}/saveAs | Export existing image to another format.
*ImagingApi* | [**storageExists**](ImagingApi.md#storageExists) | **GET** /imaging/storage/\{storageName}/exist | Check if storage exists
*ImagingApi* | [**updateImage**](ImagingApi.md#updateImage) | **GET** /imaging/\{name}/updateImage | Perform scaling, cropping and flipping of an existing image in a single request.
*ImagingApi* | [**updateImageFeatures**](ImagingApi.md#updateImageFeatures) | **PUT** /imaging/ai/imageSearch/\{searchContextId}/features | Update images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**updateSearchImage**](ImagingApi.md#updateSearchImage) | **PUT** /imaging/ai/imageSearch/\{searchContextId}/image | Update image and images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
*ImagingApi* | [**uploadFile**](ImagingApi.md#uploadFile) | **PUT** /imaging/storage/file/\{path} | Upload file

## Documentation for Models

Class | Description
----- | -----
[**BigRectangularFilterProperties**](BigRectangularFilterProperties.md) | Big Rectangular Filter Options
[**BilateralSmoothingFilterProperties**](BilateralSmoothingFilterProperties.md) | The Bilateral Smoothing Filter Options.
[**BmpProperties**](BmpProperties.md) | Represents information about image in bmp format.
[**ConvolutionFilterProperties**](ConvolutionFilterProperties.md) | The convolution filter.
[**DeconvolutionFilterProperties**](DeconvolutionFilterProperties.md) | Deconvolution Filter Options, abstract class
[**DetectedObject**](DetectedObject.md) | 
[**DetectedObjectList**](DetectedObjectList.md) | Wrapper for detected objects array
[**DicomProperties**](DicomProperties.md) | Represents information about image in dicom format.
[**DiscUsage**](DiscUsage.md) | Class for disc space information.
[**DjvuProperties**](DjvuProperties.md) | Represents properties of djvu file.
[**DngProperties**](DngProperties.md) | Represents information about image in DNG format.
[**Error**](Error.md) | Error
[**ErrorDetails**](ErrorDetails.md) | The error details
[**ExifData**](ExifData.md) | Represents common EXIF data section.
[**FilesList**](FilesList.md) | Files list
[**FilesUploadResult**](FilesUploadResult.md) | File upload result
[**FileVersion**](FileVersion.md) | File Version
[**FileVersions**](FileVersions.md) | File versions FileVersion.
[**FilterPropertiesBase**](FilterPropertiesBase.md) | Filter Options Base, abstract class
[**GaussianBlurFilterProperties**](GaussianBlurFilterProperties.md) | The Gaussian blur
[**GaussWienerFilterProperties**](GaussWienerFilterProperties.md) | Gauss Wiener Filter Options Deblur gauss
[**GifProperties**](GifProperties.md) | Represents information about image in GIF format.
[**ImageDuplicates**](ImageDuplicates.md) | Image duplicates.
[**ImageDuplicatesSet**](ImageDuplicatesSet.md) | Duplicate images set. 
[**ImageFeatures**](ImageFeatures.md) | Image features.
[**ImagingResponse**](ImagingResponse.md) | Represents information about image.
[**JfifData**](JfifData.md) | Represents JFIF data.
[**Jpeg2000Properties**](Jpeg2000Properties.md) | Represents information about image in JPEG2000 format.
[**JpegExifData**](JpegExifData.md) | Represents EXIF data for JPEG
[**JpegProperties**](JpegProperties.md) | Represents information about image in JPEG format.
[**MedianFilterProperties**](MedianFilterProperties.md) | Median filter
[**MotionWienerFilterProperties**](MotionWienerFilterProperties.md) | Deconvolution filter options deblur motion 
[**ObjectExist**](ObjectExist.md) | Object exists
[**OdgMetadata**](OdgMetadata.md) | ODG format metadata
[**OdgPage**](OdgPage.md) | ODG page info
[**OdgProperties**](OdgProperties.md) | ODG format specific properties
[**PngProperties**](PngProperties.md) | Represents information about image in PNG format.
[**PsdProperties**](PsdProperties.md) | Represents information about PSD image
[**Rectangle**](Rectangle.md) | 
[**SearchContextStatus**](SearchContextStatus.md) | Search context status.
[**SearchResult**](SearchResult.md) | Image search result.
[**SearchResultsSet**](SearchResultsSet.md) | Search results set.
[**SharpenFilterProperties**](SharpenFilterProperties.md) | The Sharpen filter options 
[**SmallRectangularFilterProperties**](SmallRectangularFilterProperties.md) | Small rectangular filter options
[**StorageExist**](StorageExist.md) | Storage exists
[**StorageFile**](StorageFile.md) | File or folder information
[**SvgProperties**](SvgProperties.md) | Represents information about image in PNG format.
[**TiffFrame**](TiffFrame.md) | Represents information about TIFF frame.
[**TiffOptions**](TiffOptions.md) | Represents options for TIFF frame.
[**TiffProperties**](TiffProperties.md) | Represents properties of TIFF image.
[**WebPProperties**](WebPProperties.md) | Represents information about image in WEBP format.
