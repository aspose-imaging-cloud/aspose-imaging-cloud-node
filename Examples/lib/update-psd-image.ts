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
import {CreateModifiedPsdRequest, ImagingApi, ModifyPsdRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update PSD image example.
 */
export class UpdatePsdImage extends ImagingBase {
    protected _SampleImageFileName: string = "UpdatePSDSampleImage.psd";

    /**
     * Creates a new instance of the UpdatePsdImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update PSD image example");
    }

    /**
     *
     *Update parameters of existing PSD image. The image is saved in the cloud
     */
    public async ModifyPsdFromStorage() {
        console.log("Update parameters of a PSD image from cloud storage");

        await this.UploadSampleImageToCloud();

        const channelsCount: number = 3;
        const compressionMethod = "raw";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const modifyPsdRequest = new ModifyPsdRequest({
            name: this.SampleImageFileName,
            channelsCount,
            compressionMethod,
            fromScratch,
            folder,
            storage
        });

        console.log(`Call ModifyPsd with params: channels count: ${channelsCount}, compression method: ${compressionMethod}`);

        const updatedImage = await this.ImagingApi.modifyPsd(modifyPsdRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    /**
     *
     *Update parameters of existing PSD image, and upload updated image to Cloud Storage
     */
    public async ModifyPsdAndUploadToStorage() {
        console.log("Update parameters of a PSD image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const channelsCount: number = 3;
        const compressionMethod = "raw";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const modifyPsdRequest = new ModifyPsdRequest({
            name: this.SampleImageFileName,
            channelsCount,
            compressionMethod,
            fromScratch,
            folder,
            storage
        });

        console.log(`Call ModifyPsd with params: channels count: ${channelsCount}, compression method: ${compressionMethod}`);

        const updatedImage = await this.ImagingApi.modifyPsd(modifyPsdRequest);
        await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);

        console.log();
    }

    /**
     *
     *Update parameters of existing PSD image. Image data is passed in a request stream
     */
    public async CreateModifiedPsdFromRequestBody() {
        console.log("Update parameters of a PSD image from request body");

        const channelsCount: number = 3;
        const compressionMethod = "raw";
        const fromScratch: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const modifiedPsdRequest =
            new CreateModifiedPsdRequest({
                imageData: inputStream,
                channelsCount,
                compressionMethod,
                fromScratch,
                outPath,
                storage
            });

        console.log(`Call CreateModifiedPsd with params: channels count: ${channelsCount}, compression method: ${compressionMethod}`);

        const updatedImage = await this.ImagingApi.createModifiedPsd(modifiedPsdRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true);

        console.log();
    }
}

