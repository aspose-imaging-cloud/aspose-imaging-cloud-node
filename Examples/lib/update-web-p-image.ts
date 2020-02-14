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
import {CreateModifiedWebPRequest, ImagingApi, ModifyWebPRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  WEBP image example.
 */
export class UpdateWebPImage extends ImagingBase {
    protected _SampleImageFileName: string = "WEBPSampleImage.webp";


    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update WEBP image example");
    }

    /**
     *
     *Update parameters of existing WEBP image. The image is saved in the cloud
     * @constructor
     */
    public async ModifyWebPFromStorage() {
        console.log("Update parameters of a WEBP image from cloud storage");

        await this.UploadSampleImageToCloud();

        const lossless: boolean = true;
        const quality: number = 90;
        const animLoopCount: number = 5;
        const animBackgroundColor = "gray";
        // Specifies where additional parameters we do not support should be taken from.
        // If this is true – they will be taken from default values for standard image,
        // if it is false – they will be saved from current image. Default is false.
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageWebPRequest = new ModifyWebPRequest({
            name: this.SampleImageFileName, lossLess: lossless, quality,
            animLoopCount, animBackgroundColor, fromScratch, folder, storage
        });

        console.log(`Call ModifyWebP with params: lossless: ${lossless}, quality: ${quality}, anim loop count: ${animLoopCount}, anim background color: ${animBackgroundColor}`);

        try {
            const updatedImage = await this.ImagingApi.modifyWebP(getImageWebPRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     *
     *Update parameters of existing WEBP image, and upload updated image to Cloud Storage
     * @constructor
     */
    public async ModifyWebPAndUploadToStorage() {
        console.log("Update parameters of a WEBP image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const lossless: boolean = true;
        const quality: number = 90;
        const animLoopCount: number = 5;
        const animBackgroundColor = "gray";
        // Specifies where additional parameters we do not support should be taken from.
        // If this is true – they will be taken from default values for standard image,
        // if it is false – they will be saved from current image. Default is false.
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageWebPRequest = new ModifyWebPRequest({
            name: this.SampleImageFileName, lossLess: lossless, quality,
            animLoopCount, animBackgroundColor, fromScratch, folder, storage
        });

        console.log(`Call ModifyWebP with params: lossless: ${lossless}, quality: ${quality}, anim loop count: ${animLoopCount}, anim background color: ${animBackgroundColor}`);

        try {
            const updatedImage = await this.ImagingApi.modifyWebP(getImageWebPRequest);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     *
     * Update parameters of existing Webp image.
     * asposelogo.webpImage data is passed in a request stream
     * @constructor
     */
    public async CreateModifiedWebPFromRequestBody() {
        console.log("Update parameters of a WEBP image from request body");

        const lossless: boolean = true;
        const quality: number = 90;
        const animLoopCount: number = 5;
        const animBackgroundColor = "gray";
        const fromScratch: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const modifiedImageWebPRequest = new CreateModifiedWebPRequest({
            imageData: inputStream, lossLess: lossless, quality,
            animLoopCount, animBackgroundColor, fromScratch, outPath, storage
        });

        console.log(`Call CreateModifiedWebP with params: lossless: ${lossless}, quality: ${quality}, anim loop count: ${animLoopCount}, anim background color: ${animBackgroundColor}`);

        try {
            const updatedImage = await this.ImagingApi.createModifiedWebP(modifiedImageWebPRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}

