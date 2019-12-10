# DngProperties
Represents information about image in DNG format.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dngVersion** | **number** | Gets or sets the DNG version. | 
**description** | **string** | Gets or sets the description of colors (RGBG, RGBE, GMCY or GBTG). | [optional]
**model** | **string** | Gets or sets the camera model. | [optional]
**cameraManufacturer** | **string** | Gets or sets the camera manufacturer. | [optional]
**isFoveon** | **number** | Gets or sets the value indicating whether it's a Foveon matrix. | 
**software** | **string** | Gets or sets the software. | [optional]
**rawCount** | **number** | Gets or sets the number of RAW images in file (0 means that the file has not been recognized). | 
**filters** | **number** | Gets or sets the bit mask describing the order of color pixels in the matrix. | 
**colorsCount** | **number** | Gets or sets the colors count. | 
**xmpData** | **string** | Gets or sets the XMP data. | [optional]
**translationCfaDng** | **Array&lt;string&gt;** | Gets or sets the translation array for CFA mosaic of DNG format. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md) [[View Source]](../src/models/dngProperties.ts)

