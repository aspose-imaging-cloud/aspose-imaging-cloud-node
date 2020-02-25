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
import {CreateResizedImageRequest, ImagingApi, ResizeImageRequest} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

export class ResizeImage extends ImagingBase {
    protected _SampleImageFileName: string = "ResizeSampleImage.psd";

    /**
     * Creates a new instance of the ResizeImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Resize an image example");
    }

    /**
     * Resizes the image.
     */
    public async ResizeImageFromStorage() {
        console.log("Resize an image from cloud storage");

        // Upload local image to Cloud Storage
        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Resize
        // for possible output formats
        const format = "gif";
        const newWidth: number = 100;
        const newHeight: number = 150;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const resizeImageRequest = new ResizeImageRequest({
            name: this.SampleImageFileName, format, newWidth, newHeight, folder, storage
        });

        console.log(`Call ResizeImage with params: new width: ${newWidth}, new height: ${newHeight}, format: ${format}`);

        const updatedImage = await this.ImagingApi.resizeImage(resizeImageRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    /**
     * Resizes the sample image and upload to Cloud Storage
     */
    public async ResizeImageAndUploadToStorage() {
        console.log("Resize an image and upload to cloud storage");

        // Upload local image to Cloud Storage
        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Resize
        // for possible output formats
        const format = "gif";
        const newWidth: number = 100;
        const newHeight: number = 150;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const resizeImageRequest = new ResizeImageRequest({
            name: this.SampleImageFileName, format, newWidth, newHeight, folder, storage
        });

        console.log(`Call ResizeImage with params: new width: ${newWidth}, new height: ${newHeight}, format: ${format}`);

        const updatedImage = await this.ImagingApi.resizeImage(resizeImageRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    /**
     * Resize an image. Image data is passed in a request stream.
     */
    public async CreateResizedImageFromRequestBody() {
        console.log("Resize an image from request body");

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Resize
        // for possible output formats
        const format = "gif";
        const newWidth: number = 100;
        const newHeight: number = 150;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const createResizedImageRequest = new CreateResizedImageRequest({
            imageData: inputStream, format, newWidth, newHeight, outPath, storage
        });

        console.log(`Call CreateResizedImage with params: new width: ${newWidth}, new height: ${newHeight}, format: ${format}`);

        const updatedImage = await this.ImagingApi.createResizedImage(createResizedImageRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true, format);

        console.log();
    }
}

