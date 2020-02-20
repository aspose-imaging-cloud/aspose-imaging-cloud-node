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
import {CreateModifiedBmpRequest, ImagingApi, ModifyBmpRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update BMP image example.
 */
export class UpdateBmpImage extends ImagingBase {
    protected _SampleImageFileName: string = "UpdateBmpSampleImage.bmp";

    /**
     * Creates a new instance of the UpdateBmpImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update BMP image example");
    }

    /**
     * Update parameters of a BMP image. image is saved in the cloud.
     */
    public async ModifyBmpFromStorage() {
        console.log("Update parameters of a BMP image from cloud storage");

        // Upload local image to Cloud Storage
        await this.UploadSampleImageToCloud();

        const bitsPerPixel: number = 32;
        const horizontalResolution: number = 300;
        const verticalResolution: number = 300;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new ModifyBmpRequest({
            name: this.SampleImageFileName,
            bitsPerPixel,
            horizontalResolution,
            verticalResolution,
            fromScratch,
            folder,
            storage
        });

        console.log(`Call ModifyBmp with params: bits per pixel: ${bitsPerPixel}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution}`);

        const updatedImage = await this.ImagingApi.modifyBmp(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    // Update parameters of a BMP image, and upload updated image to Cloud Storage.
    public async ModifyBmpAndUploadToStorage() {
        console.log("Update parameters of a BMP image and upload to cloud storage");

        // Upload local image to Cloud Storage
        await this.UploadSampleImageToCloud();

        const bitsPerPixel: number = 32;
        const horizontalResolution: number = 300;
        const verticalResolution: number = 300;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new ModifyBmpRequest({
            name: this.SampleImageFileName,
            bitsPerPixel,
            horizontalResolution,
            verticalResolution,
            fromScratch,
            folder,
            storage
        });

        console.log(`Call ModifyBmp with params: bits per pixel: ${bitsPerPixel}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution}`);

        const updatedImage = await this.ImagingApi.modifyBmp(request);
        await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);

        console.log();
    }

    /**
     * Update parameters of a BMP image. Image data is passed in a request stream
     */
    public async CreateModifiedBmpFromRequestBody() {
        console.log("Update parameters of a BMP image from request body");

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        {
            const bitsPerPixel: number = 32;
            const horizontalResolution: number = 300;
            const verticalResolution: number = 300;
            const fromScratch: boolean = false;
            const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
            const storage = undefined; // We are using default Cloud Storage

            const request = new CreateModifiedBmpRequest({
                imageData: inputStream,
                bitsPerPixel,
                horizontalResolution,
                verticalResolution,
                fromScratch,
                outPath,
                storage
            });

            console.log(`Call CreateModifiedBmp with params: bits per pixel: ${bitsPerPixel}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution}`);

            const updatedImage = await this.ImagingApi.createModifiedBmp(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true);

            console.log();
        }
    }
}
