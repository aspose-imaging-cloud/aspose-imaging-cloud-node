# DicomProperties
Represents information about image in dicom format.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planarConfiguration** | **number** | Gets or sets the planar configuration. | 
**reds** | **string** | Gets or sets the array of red colors. | [optional]
**greens** | **string** | Gets or sets the array of green colors. | [optional]
**blues** | **string** | Gets or sets the array of blue colors. | [optional]
**dicomHeaderInfoByBytes** | **string** | Gets or sets the header information by bytes. | [optional]
**signedImage** | **boolean** | Gets or sets a value indicating whether it's a signed image. | 
**dicomInfo** | **Array&lt;string&gt;** | Gets or sets the header information of the DICOM file. | [optional]
**samplesPerPixel** | **number** | Gets or sets samples per pixel count. | 
**bitsAllocated** | **number** | Gets or sets allocated bits count. | 
**photoInterpretation** | **string** | Gets or sets the photo interpretation. | [optional]
**width** | **number** | Gets or sets the width. | 
**height** | **number** | Gets or sets the height. | 
**windowCentre** | **number** | Gets or sets the window centre. | 
**windowWidth** | **number** | Gets or sets the width of the window. | 
**pixelRepresentation** | **number** | Gets or sets data representation of the pixel samples. | 
**rescaleIntercept** | **number** | Gets or sets a value of the rescale intercept. | 
**rescaleSlope** | **number** | Gets or sets a value of the rescale slope. | 
**numberOfFrames** | **number** | Gets or sets the number of frames. | 
**isLittleEndian** | **boolean** | Indicates if DICOM image has little endian byte order. | 
**offset** | **number** | Gets or sets the offset. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/dicomProperties.ts)

