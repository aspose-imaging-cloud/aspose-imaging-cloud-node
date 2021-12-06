/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2019 Aspose Pty Ltd. All rights reserved.
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/

import {ImagingApi} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";
import {ImagingBase} from "./imaging-base";
import * as os from "os";
import {CropImage} from "./crop-image";
import {DeskewImage} from "./deskew-image";
import {GrayscaleImage} from "./grayscale-image";
import {UpdateBmpImage} from "./update-bmp-image";
import {UpdateEmfImage} from "./update-emf-image";
import {ExportImage} from "./export-image";
import {FilterImage} from "./filter-image";
import {ImageProperties} from "./image-properties";
import {ResizeImage} from "./resize-image";
import {RotateFlipImage} from "./rotate-flip-image";
import {MultiframeImage} from "./multiframe-image";
import {UpdateTiffImage} from "./update-tiff-image";
import {UpdateGifImage} from "./update-gif-image";
import {UpdateImage} from "./update-image";
import {UpdateJpeg2000Image} from "./update-jpeg2000-image";
import {UpdateJpegImage} from "./update-jpeg-image";
import {UpdatePsdImage} from "./update-psd-image";
import {UpdateWebPImage} from "./update-web-p-image";
import {UpdateWmfImage} from "./update-wmf-image";
import {CompareImages} from "./AI/compare-images";
import {FindDuplicateImages} from "./AI/find-duplicate-images";
import {FindSimilarImages} from "./AI/find-similar-images";
import {ObjectDetectionImage} from "./object-detection-image";
import {LoadCustomFonts} from "./load-custom-fonts";

runExamples().catch(reason => {
    console.log(reason);
    process.exit(1)
}).then(_ => process.exit(0));

function ProcessArgument(args: string[], key: string, description: string, errors: string[], defaultValue: string = null): string {
    let argumentValue: string = null;
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith(key + "="))
            argumentValue = args[i].substring(args[i].indexOf("=") + 1, args[i].length);
        else if (args[i] == key && i < args.length - 1)
            argumentValue = args[i + 1];
    }

    if (argumentValue != null)
        return argumentValue;

    if (defaultValue == null)
        errors.push(`Please, provide ${description}: '${key} <value>' or '${key}=<value>'`);
    else
        argumentValue = defaultValue;

    return argumentValue;
}

function ProcessArguments(args: string[]): [string, string, string] {
    let errors: string[] = [];

    const clientId: string = ProcessArgument(args, "--clientId", "Client ID", errors);
    const clientSecret: string = ProcessArgument(args, "--clientSecret", "Client Secret", errors);
    const baseUrl: string = ProcessArgument(args, "--baseUrl", "base url", errors, "https://api.aspose.cloud/");

    if (errors.length == 0)
        return [clientId, clientSecret, baseUrl];

    console.log("Failed to launch examples:" + os.EOL + errors.join(os.EOL));
    process.exit(1)
}

async function runExamples() {
    const [clientSecret, clientId, baseUrl] = ProcessArguments(process.argv);

    const imagingApi = new ImagingApi(clientSecret, clientId, baseUrl);

    if (fs.existsSync(ImagingBase.OutputFolder))
        rimraf(ImagingBase.OutputFolder);
    fs.mkdirSync(ImagingBase.OutputFolder);

    // Update parameters of existing BMP image
    const bmpImage = new UpdateBmpImage(imagingApi);
    await bmpImage.ModifyBmpFromStorage();
    await bmpImage.ModifyBmpAndUploadToStorage();
    await bmpImage.CreateModifiedBmpFromRequestBody();

    // Crop an existing image
    const cropImage = new CropImage(imagingApi);
    await cropImage.CropImageFromStorage();
    await cropImage.CropImageAndUploadToStorage();
    await cropImage.CreateCroppedImageFromRequestBody();

    // Deskew an existing image
    const deskewImage = new DeskewImage(imagingApi);
    await deskewImage.DeskewImageFromStorage();
    await deskewImage.DeskewImageAndUploadToStorage();
    await deskewImage.CreateDeskewedImageFromRequestBody();

    // Grayscale an existing image
    const grayscaleImage = new GrayscaleImage(imagingApi);
    await grayscaleImage.GrayscaleImageFromStorage();
    await grayscaleImage.GrayscaleImageAndUploadToStorage();
    await grayscaleImage.CreateGrayscaledImageFromRequestBody();

    // Process existing EMF imaging using given parameters
    const updateEMFImage = new UpdateEmfImage(imagingApi);
    await updateEMFImage.ModifyEmfFromStorage();
    await updateEMFImage.ModifyEmfAndUploadToStorage();
    await updateEMFImage.CreateModifiedEmfFromRequestBody();

    // Export existing image to another format
    const exportImage = new ExportImage(imagingApi);
    await exportImage.SaveImageAsFromStorage();
    await exportImage.SaveImageAsAndUploadToStorage();
    await exportImage.CreateSavedImageAsFromRequestBody();

    // Apply a filtering effect to an image
    const filterImage = new FilterImage(imagingApi);
    await filterImage.FilterImageFromStorage();
    await filterImage.FilterImageAndUploadToStorage();

    // Get properties of an image
    const imageProperties = new ImageProperties(imagingApi);
    await imageProperties.GetImagePropertiesFromStorage();
    await imageProperties.ExtractImagePropertiesFromRequestBody();

    // Resize an existing image
    const resizeImage = new ResizeImage(imagingApi);
    await resizeImage.ResizeImageFromStorage();
    await resizeImage.ResizeImageAndUploadToStorage();
    await resizeImage.CreateResizedImageFromRequestBody();

    // Rotate and/or flip an existing image
    const rotateFlipImage = new RotateFlipImage(imagingApi);
    await rotateFlipImage.RotateFlipImageFromStorage();
    await rotateFlipImage.RotateFlipImageAndUploadToStorage();
    await rotateFlipImage.CreateRotateFlippedImageFromRequestBody();

    // Multiframe image
    const tiffFrames = new MultiframeImage(imagingApi);
    await tiffFrames.GetImageFrameFromStorage();
    await tiffFrames.GetImageFrameAndUploadToStorage();
    await tiffFrames.CreateImageFrameFromRequestBody();
    await tiffFrames.GetImageFrameRangeFromStorage();
    await tiffFrames.GetImageFrameRangeAndUploadToStorage();
    await tiffFrames.CreateImageFrameRangeFromRequestBody();
    await tiffFrames.GetImageFramePropertiesFromStorage();
    await tiffFrames.ExtractImageFramePropertiesFromRequestBody();

    // Update parameters of existing TIFF image
    const tiffImage = new UpdateTiffImage(imagingApi);
    await tiffImage.ModifyTiffFromStorage();
    await tiffImage.ModifyTiffAndUploadToStorage();
    await tiffImage.CreateModifiedTiffFromRequestBody();
    await tiffImage.ConvertTiffToFaxFromStorage();
    await tiffImage.CreateModifiedTiffFromRequestBody();
    await tiffImage.AppendTiffFromStorage();

    // Update parameters of existing GIF image
    const updateGIFImage = new UpdateGifImage(imagingApi);
    await updateGIFImage.ModifyGifFromStorage();
    await updateGIFImage.ModifyGifAndUploadToStorage();
    await updateGIFImage.CreateModifiedGifFromRequestBody();

    // Perform scaling, cropping and flipping of an existing image in a single request
    const updateImage = new UpdateImage(imagingApi);
    await updateImage.UpdateImageFromStorage();
    await updateImage.UpdateImageAndUploadToStorage();
    await updateImage.CreateUpdatedImageFromRequestBody();

    // Update parameters of existing JPEG2000 image
    const updateJPEG2000Image = new UpdateJpeg2000Image(imagingApi);
    await updateJPEG2000Image.ModifyJpeg2000FromStorage();
    await updateJPEG2000Image.ModifyJpeg2000AndUploadToStorage();
    await updateJPEG2000Image.CreateModifiedJpeg2000FromRequestBody();

    // Update parameters of existing JPEG image
    const updateJPEGImage = new UpdateJpegImage(imagingApi);
    await updateJPEGImage.ModifyJpegFromStorage();
    await updateJPEGImage.ModifyJpegAndUploadToStorage();
    await updateJPEGImage.CreateModifiedJpegFromRequestBody();

    // Update parameters of existing PSD image
    const updatePSDImage = new UpdatePsdImage(imagingApi);
    await updatePSDImage.ModifyPsdFromStorage();
    await updatePSDImage.ModifyPsdAndUploadToStorage();
    await updatePSDImage.CreateModifiedPsdFromRequestBody();

    // Update parameters of existing WEBP image
    const webpImage = new UpdateWebPImage(imagingApi);
    await webpImage.ModifyWebPFromStorage();
    await webpImage.ModifyWebPAndUploadToStorage();
    await webpImage.CreateModifiedWebPFromRequestBody();

    // Process existing WMF image using given parameters
    const wmfImage = new UpdateWmfImage(imagingApi);
    await wmfImage.ModifyWmfFromStorage();
    await wmfImage.ModifyWmfAndUploadToStorage();
    await wmfImage.CreateModifiedWmfFromRequestBody();

    // AI APIs
    console.log(`Running AI examples:`);
    console.log();

    // Compare two images
    const compareImages = new CompareImages(imagingApi);
    await compareImages.PrepareSearchContext();
    await compareImages.CompareTwoImagesInCloud();
    await compareImages.CompareLoadedImageToImageInCloud();
    await compareImages.DeleteSearchContext();

    // Find Duplicate Images
    const findDuplicateImages = new FindDuplicateImages(imagingApi);
    await findDuplicateImages.PrepareSearchContext();
    await findDuplicateImages.FindImageDuplicates();
    await findDuplicateImages.DeleteSearchContext();

    // Find Similar Images
    const findSimilarImages = new FindSimilarImages(imagingApi);
    await findSimilarImages.PrepareSearchContext();
    await findSimilarImages.FindImagesSimilar();
    await findSimilarImages.FindImagesByTag();
    await findSimilarImages.DeleteSearchContext();

    // Object Detection
    const objectDetection = new ObjectDetectionImage(imagingApi);
    await objectDetection.DetectedObjectsImageFromRequestBody();
    await objectDetection.DetectObjectsImageFromStorage();
    await objectDetection.VisualiizeDetectObjectsAndUploadToStorage();
    await objectDetection.VisualizeDetectedObjectsImageFromRequestBody();

	// Custom fonts
    const customFonts = new LoadCustomFonts(imagingApi);
    await  customFonts.UsingCustomFontsForVectorImageConversion();
}

/**
 * Remove directory recursively
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function (entry) {
            const entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
}
