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
import {CreateModifiedJpegRequest, ImagingApi, ModifyJpegRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update JPEG image example.
 */
export class UpdateJpegImage extends ImagingBase {
    protected _SampleImageFileName: string = "UpdateJPEGSampleImage.jpg";

    /**
     * Creates a new instance of the UpdateJpegImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update JPEG image example");
    }

    /**
     *
     *Update parameters of existing JPEG image. The image is saved in the cloud
     */
    public async ModifyJpegFromStorage() {
        console.log("Update parameters of a JPEG image from cloud storage");

        await this.UploadSampleImageToCloud();

        const quality: number = 65;
        const compressionType = "progressive";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const modifyJpegRequest = new ModifyJpegRequest({
            name: this.SampleImageFileName, quality, compressionType,
            fromScratch, folder, storage
        });

        console.log(`Call ModifyJpeg with params: quality: ${quality}, compression type: ${compressionType}`);

        try {
            const updatedImage = await this.ImagingApi.modifyJpeg(modifyJpegRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     *
     *Update parameters of existing JPEG image, and upload updated image to Cloud Storage
     */
    public async ModifyJpegAndUploadToStorage() {
        console.log("Update parameters of a JPEG image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const quality: number = 65;
        const compressionType = "progressive";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const modifyJpegRequest =
            new ModifyJpegRequest({
                name: this.SampleImageFileName,
                quality,
                compressionType,
                fromScratch,
                folder,
                storage
            });

        console.log(`Call ModifyJpeg with params: quality: ${quality}, compression type: ${compressionType}`);

        try {
            const updatedImage = await this.ImagingApi.modifyJpeg(modifyJpegRequest);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     *
     *Update parameters of existing JPEG image. Image data is passed in a request stream
     */
    public async CreateModifiedJpegFromRequestBody() {
        console.log("Update parameters of a JPEG image from request body");

        const quality: number = 65;
        const compressionType = "progressive";
        const fromScratch: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const modifiedJpgRequest =
            new CreateModifiedJpegRequest({
                imageData: inputStream,
                quality,
                compressionType,
                fromScratch,
                outPath,
                storage
            });

        console.log(`Call CreateModifiedJpeg with params: quality: ${quality}, compression type: ${compressionType}`);

        try {
            const updatedImage = await this.ImagingApi.createModifiedJpeg(modifiedJpgRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}

