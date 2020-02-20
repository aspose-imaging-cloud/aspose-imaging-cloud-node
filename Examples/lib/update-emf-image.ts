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
import {CreateModifiedEmfRequest, ImagingApi, ModifyEmfRequest,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update EMF image example.
 */
export class UpdateEmfImage extends ImagingBase {
    protected _SampleImageFileName: string = "UpdateEMFSampleImage.emf";

    /**
     * Creates a new instance of the UpdateEmfImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update EMF image example");
    }

    /**
     * Modifies the EMF from storage
     */
    public async ModifyEmfFromStorage() {
        console.log("Update parameters of a EMF image");

        await this.UploadSampleImageToCloud();

        const bkColor = "gray";
        const pageWidth = 300;
        const pageHeight = 300;
        const borderX = 50;
        const borderY = 50;
        const format = "png";
        // Specifies where additional parameters we do not support should be taken from.
        // If this is true – they will be taken from default values for standard image,
        // if it is false – they will be saved from current image. Default is false.
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // As we are using default Cloud Storage

        const request = new ModifyEmfRequest({
            name: this.SampleImageFileName,
            bkColor,
            pageWidth,
            pageHeight,
            borderX,
            borderY,
            fromScratch,
            folder,
            storage,
            format
        });

        console.log(`Call ModifyEmf with params: background color: ${bkColor}, width: ${pageWidth}, height: ${pageHeight}, border x: ${borderX}, border y: ${borderY}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.modifyEmf(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, format);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Process existing EMF image using given parameters, and upload updated image to Cloud Storage
     */
    public async ModifyEmfAndUploadToStorage() {
        console.log("Update parameters of a EMF image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const bkColor = "gray";
        const pageWidth = 300;
        const pageHeight = 300;
        const borderX = 50;
        const borderY = 50;
        const format = "png";
        // Specifies where additional parameters we do not support should be taken from.
        // If this is true – they will be taken from default values for standard image,
        // if it is false – they will be saved from current image. Default is false.
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // As we are using default Cloud Storage

        const request = new ModifyEmfRequest({
            name: this.SampleImageFileName,
            bkColor,
            pageWidth,
            pageHeight,
            borderX,
            borderY,
            fromScratch,
            folder,
            storage,
            format
        });

        console.log(`Call ModifyEmf with params: background color: ${bkColor}, width: ${pageWidth}, height: ${pageHeight}, border x: ${borderX}, border y: ${borderY}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.modifyEmf(request);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false, format), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Rasterize EMF image to PNG using given parameters. Image data is passed in a request stream.
     */
    public async CreateModifiedEmfFromRequestBody() {
        console.log("Update parameters of a EMF image from request body");

        const bkColor = "gray";
        const pageWidth = 300;
        const pageHeight = 300;
        const borderX = 50;
        const borderY = 50;
        const format = "png";
        const fromScratch: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
        const storage = undefined; // As we are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const request = new CreateModifiedEmfRequest({
            imageData: inputStream, bkColor, pageWidth, pageHeight,
            borderX, borderY, fromScratch, outPath, storage, format
        });

        console.log(`Call CreateModifiedEmf with params: background color: ${bkColor}, width: ${pageWidth}, height: ${pageHeight}, border x: ${borderX}, border y: ${borderY}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.createModifiedEmf(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, true, format);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}
