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

import {CreateCroppedImageRequest, CropImageRequest, ImagingApi,} from "asposeimagingcloud";
import {ImagingBase} from "./imaging-base";
import * as fs from "fs";
import * as path from "path";

/**
 * Crop image example.
 */
export class CropImage extends ImagingBase {

    /**
     * The name of the example image file.
     */
    protected _SampleImageFileName: string = "CropSampleImage.bmp";

    public constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Crop image example:");
    }

    /**
     * Crops the image from cloud storage.
     * @constructor
     */
    public async CropImageFromStorage() {
        console.log(`Crops the image from cloud storage`);

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Crop
        // for possible output formats
        const format = "jpg"; // Resulting image format.
        const x = 10;
        const y = 10;
        const width = 100;
        const height = 150;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new CropImageRequest({
            name: this.SampleImageFileName,
            format,
            x,
            y,
            width,
            height,
            folder,
            storage,
        });

        console.log(`Call CropImage with params: x: ${x},y: ${y}, width: ${width}, height: ${height}`);

        try {
            const updatedImage = await this.ImagingApi.cropImage(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, format);
        } catch (e) {
            console.log(e);
        }


        console.log();
    }

    /**
     * Crop an existing image, and upload updated image to Cloud Storage.
     * @constructor
     */
    public async CropImageAndUploadToStorage() {
        console.log("Crops the image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Crop
        // for possible output formats
        const format = "jpg"; // Resulting image format.
        const x = 10;
        const y = 10;
        const width = 100;
        const height = 150;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new CropImageRequest({
            name: this.SampleImageFileName,
            format,
            x,
            y,
            width,
            height,
            folder,
            storage,
        });

        console.log(`Call CropImage with params: x: ${x},y: ${y}, width: ${width}, height: ${height}`);

        try {
            const updatedImage = await this.ImagingApi.cropImage(request);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Crop an image. Image data is passed in a request stream.
     * @constructor
     */
    public async CreateCroppedImageFromRequestBody() {
        console.log("Crops the image from request body");

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Crop
        // for possible output formats
        const format = "jpg"; // Resulting image format.
        const x = 10;
        const y = 10;
        const width = 100;
        const height = 150;
        const outPath = undefined; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const request = new CreateCroppedImageRequest({
            imageData: inputStream,
            format,
            x,
            y,
            width,
            height,
            outPath,
            storage,
        });

        console.log(`Call CreateCroppedImage with params: x: ${x},y: ${y}, width: ${width}, height: ${height}`);

        const updatedImage = await this.ImagingApi.createCroppedImage(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true, format);

        console.log();
    }
}
