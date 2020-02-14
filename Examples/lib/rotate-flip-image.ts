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

import {ImagingBase} from "./imaging-base";
import {CreateRotateFlippedImageRequest, ImagingApi, RotateFlipImageRequest} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 * Rotate and/or flip an image example.
 */
export class RotateFlipImage extends ImagingBase {

    protected _SampleImageFileName: string = "RotateFlipSampleImage.psd";

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Rotate/flip image example");
    }

    /**
     * Rotate and/or flip an image
     * @constructor
     */

    public async RotateFlipImageFromStorage() {
        console.log("Rotate and/or flip an image from cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-RotateFlip
        // for possible output formats
        const format = "gif";
        const method = "Rotate90FlipX"; // RotateFlip method
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageRotateFlipRequest = new RotateFlipImageRequest({
            name: this.SampleImageFileName,
            format,
            method,
            folder,
            storage
        });

        console.log(`Call RotateFlipImage with params: method: ${method}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.rotateFlipImage(getImageRotateFlipRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, format);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Rotate and/or flip an image, and upload updated image to Cloud Storage
     * @constructor
     */
    public async RotateFlipImageAndUploadToStorage() {
        console.log("Rotate/flip an image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-RotateFlip
        // for possible output formats
        const format = "gif";
        const method = "Rotate90FlipX"; // RotateFlip method
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageRotateFlipRequest = new RotateFlipImageRequest({
            name: this.SampleImageFileName,
            format,
            method,
            folder,
            storage
        });

        console.log(`Call RotateFlipImage with params: method: ${method}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.rotateFlipImage(getImageRotateFlipRequest);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false, format), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Rotate and/or flip an image. Image data is passed in a request stream.
     * @constructor
     */
    public async CreateRotateFlippedImageFromRequestBody() {
        console.log("Rotate/flip an image from request body");

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-RotateFlip
        // for possible output formats
        const format = "gif";
        const method = "Rotate90FlipX"; // RotateFlip method
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const createRotateFlippedImageRequest = new CreateRotateFlippedImageRequest({
            imageData: inputStream,
            format,
            method,
            outPath,
            storage
        });

        console.log(`Call CreateRotateFlippedImage with params: method: ${method}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.createRotateFlippedImage(createRotateFlippedImageRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true, format);
        } catch (e) {
            console.log(e);
        }

        console.log();

    }
}

