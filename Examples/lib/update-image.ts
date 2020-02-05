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
import {CreateUpdatedImageRequest, ImagingApi, UpdateImageRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update image example.
 */
export class UpdateImage extends ImagingBase {

    protected _SampleImageFileName: string = "UpdateSampleImage.gif";

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update image example");
    }

    /**
     * Perform scaling, cropping and flipping of an existing image in a single request. The image is saved in the cloud
     * @constructor
     */
    public async UpdateImageFromStorage() {
        console.log("Update parameters of an image from cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Update
        // for possible output formats
        const format = "pdf";
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageUpdateRequest = new UpdateImageRequest({
            name: this.SampleImageFileName, format, newWidth,
            newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, folder, storage
        });

        console.log(`Call UpdateImage with params: new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.updateImage(getImageUpdateRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Perform scaling, cropping and flipping of an existing image in a single request. And upload updated image to Cloud Storage
     * @constructor
     */
    public async UpdateImageAndUploadToStorage() {
        console.log("Update parameters of an image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Update
        // for possible output formats
        const format = "pdf";
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageUpdateRequest = new UpdateImageRequest({
            name: this.SampleImageFileName, format, newWidth,
            newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, folder, storage
        });

        console.log(`Call UpdateImage with params: new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.updateImage(getImageUpdateRequest);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Perform scaling, cropping and flipping of an image in a single request. Image data is passed in a request stream
     * @constructor
     */
    public async CreateUpdatedImageFromRequestBody() {
        console.log("Update parameters of an image from request body");

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Update
        // for possible output formats
        const format = "pdf";
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const postImageUpdateRequest = new CreateUpdatedImageRequest({
            imageData: inputStream, format, newWidth,
            newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, outPath, storage
        });

        console.log(`Call CreateUpdatedImage with params: new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.createUpdatedImage(postImageUpdateRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}
