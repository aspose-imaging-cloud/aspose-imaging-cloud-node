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
import {CreateModifiedGifRequest, ImagingApi, ModifyGifRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update GIF image example.
 */
export class UpdateGifImage extends ImagingBase {
    protected _SampleImageFileName: string = "UpdateGIFSampleImage.gif";

    /**
     * Creates a new instance of the UpdateGifImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update GIF image example");
    }

    /**
     * Update parameters of existing GIF image. The image is saved in the cloud
     */
    public async ModifyGifFromStorage() {
        console.log("Update parameters of a GIF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const backgroundColorIndex: number = 5;
        const colorResolution: number = 4;
        const hasTrailer: boolean = true;
        const interlaced: boolean = false;
        const isPaletteSorted: boolean = true;
        const pixelAspectRatio: number = 4;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageGifRequest = new ModifyGifRequest({
            name: this.SampleImageFileName, backgroundColorIndex,
            colorResolution, hasTrailer, interlaced, isPaletteSorted,
            pixelAspectRatio, fromScratch, folder, storage
        });

        console.log(`Call ModifyGif with params: background color index: ${backgroundColorIndex}, color resolution: ${colorResolution}, has trailer: ${hasTrailer}, interlaced: ${interlaced}, is palette sorted: ${isPaletteSorted}, pixel aspect ratio: ${pixelAspectRatio}`);

        const updatedImage = await this.ImagingApi.modifyGif(getImageGifRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    /**
     * Update parameters of existing GIF image. The image is saved in the cloud
     */
    public async ModifyGifAndUploadToStorage() {
        console.log("Update parameters of a GIF image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const backgroundColorIndex: number = 5;
        const colorResolution: number = 4;
        const hasTrailer: boolean = true;
        const interlaced: boolean = false;
        const isPaletteSorted: boolean = true;
        const pixelAspectRatio: number = 4;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageGifRequest = new ModifyGifRequest({
            name: this.SampleImageFileName, backgroundColorIndex,
            colorResolution, hasTrailer, interlaced, isPaletteSorted,
            pixelAspectRatio, fromScratch, folder, storage
        });

        console.log(`Call ModifyGif with params: background color index: ${backgroundColorIndex}, color resolution: ${colorResolution}, has trailer: ${hasTrailer}, interlaced: ${interlaced}, is palette sorted: ${isPaletteSorted}, pixel aspect ratio: ${pixelAspectRatio}`);

        const updatedImage = await this.ImagingApi.modifyGif(getImageGifRequest);
        await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);

        console.log();
    }

    /**
     * Update parameters of GIF image. Image data is passed in a request stream
     */
    public async CreateModifiedGifFromRequestBody() {
        console.log("Update parameters of a GIF image from request body");

        const backgroundColorIndex: number = 5;
        const colorResolution: number = 4;
        const hasTrailer: boolean = true;
        const interlaced: boolean = false;
        const isPaletteSorted: boolean = true;
        const pixelAspectRatio: number = 4;
        const fromScratch: boolean = false;
        const outPath = undefined;
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const postImageGifRequest = new CreateModifiedGifRequest({
            imageData: inputStream, backgroundColorIndex,
            colorResolution, hasTrailer, interlaced, isPaletteSorted, pixelAspectRatio,
            fromScratch, outPath, storage
        });

        console.log(`Call CreateModifiedGif with params: background color index: ${backgroundColorIndex}, color resolution: ${colorResolution}, has trailer: ${hasTrailer}, interlaced: ${interlaced}, is palette sorted: ${isPaletteSorted}, pixel aspect ratio: ${pixelAspectRatio}`);

        const updatedImage = await this.ImagingApi.createModifiedGif(postImageGifRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true);

        console.log();
    }
}

