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
import {CreateModifiedWmfRequest, ImagingApi, ModifyWmfRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  WMF image example.
 */
export class UpdateWmfImage extends ImagingBase {
    protected _SampleImageFileName: string = "WMFSampleImage.wmf";


    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update WMF image example");
    }

    /// <summary>
    /// Process existing WMF image using given parameters.
    /// The image is saved in the cloud.
    /// </summary>
    public async ModifyWmfFromStorage() {
        console.log("Update parameters of a WMF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const bkColor = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage

        const storage = undefined; // We are using default Cloud Storage
        const exportFormat = "png";

        const getImageWmfRequest =
            new ModifyWmfRequest({
                name: this.SampleImageFileName, bkColor, pageWidth, pageHeight,
                borderX, borderY, fromScratch, folder,
                storage, format: exportFormat
            });

        console.log(`Call ModifyWmf with params: background color: ${bkColor}, page width: ${pageWidth}, page height: ${pageHeight}, border X: ${borderX}, border Y: ${borderY}`);

        try {
            const updatedImage = await this.ImagingApi.modifyWmf(getImageWmfRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     *
     *Process existing WMF image using given parameters, and upload updated image to Cloud Storage
     * @constructor
     */
    public async ModifyWmfAndUploadToStorage() {
        console.log("Update parameters of a WMF image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const bkColor = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage

        const storage = undefined; // We are using default Cloud Storage
        const exportFormat = "png";

        const getImageWmfRequest =
            new ModifyWmfRequest({
                name: this.SampleImageFileName, bkColor, pageWidth, pageHeight,
                borderX, borderY, fromScratch, folder,
                storage, format: exportFormat
            });

        console.log(`Call ModifyWmf with params: background color: ${bkColor}, page width: ${pageWidth}, page height: ${pageHeight}, border X: ${borderX}, border Y: ${borderY}`);

        try {
            const updatedImage = await this.ImagingApi.modifyWmf(getImageWmfRequest);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /// <summary>
    /// Process existing WMF image using given parameters.
    /// Image data is passed in a request stream.
    /// </summary>
    public async CreateModifiedWmfFromRequestBody() {
        console.log("Update parameters of a WMF image from request body");

        const bkColor = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const fromScratch: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage
        const exportFormat = "png";

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const postImageWmfRequest =
            new CreateModifiedWmfRequest({
                imageData: inputStream, bkColor, pageWidth,
                pageHeight, borderX, borderY, fromScratch, outPath,
                storage, format: exportFormat
            });

        console.log(`Call CreateModifiedWmf with params: background color: ${bkColor}, page width: ${pageWidth}, page height: ${pageHeight}, border X: ${borderX}, border Y: ${borderY}`);

        try {
            const updatedImage = await this.ImagingApi.createModifiedWmf(postImageWmfRequest);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}

