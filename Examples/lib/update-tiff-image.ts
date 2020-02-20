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
import {
    AppendTiffRequest,
    ConvertTiffToFaxRequest,
    CreateModifiedTiffRequest,
    DownloadFileRequest,
    ImagingApi,
    ModifyTiffRequest,
} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  TIFF image example.
 */
export class UpdateTiffImage extends ImagingBase {
    protected _SampleImageFileName: string = "TiffSampleImage.tiff";

    /**
     * Creates a new instance of the UpdateTiffImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("TIFF image example");
    }

    /**
     *
     *Update parameters of TIFF image. The image is saved in the cloud
     */
    public async ModifyTiffFromStorage() {
        console.log("Update parameters of a TIFF image from cloud storage");

        await this.UploadSampleImageToCloud();

        // Update parameters of TIFF image
        const compression = "adobedeflate";
        const resolutionUnit = "inch";
        const bitDepth: number = 1;
        const horizontalResolution = 150.0;
        const verticalResolution = 150.0;
        const fromScratch: boolean = undefined;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageTiffRequest =
            new ModifyTiffRequest({
                name: this.SampleImageFileName, bitDepth, compression, resolutionUnit,
                horizontalResolution, verticalResolution, fromScratch, folder, storage
            });

        console.log(`Call ModifyTiff with params: compression: ${compression}, resolution unit: ${resolutionUnit}, bit depth: ${bitDepth}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution} `);

        const updatedImage = await this.ImagingApi.modifyTiff(getImageTiffRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false);

        console.log();
    }

    /**
     *
     *Update parameters of TIFF image, and upload updated image to Cloud Storage
     */
    public async ModifyTiffAndUploadToStorage() {
        console.log("Update parameters of a TIFF image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        // Update parameters of TIFF image
        const compression = "adobedeflate";
        const resolutionUnit = "inch";
        const bitDepth: number = 1;
        const horizontalResolution = 150.0;
        const verticalResolution = 150.0;
        const fromScratch: boolean = undefined;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageTiffRequest =
            new ModifyTiffRequest({
                name: this.SampleImageFileName, bitDepth, compression, resolutionUnit,
                horizontalResolution, verticalResolution, fromScratch, folder, storage
            });

        console.log(`Call ModifyTiff with params: compression: ${compression}, resolution unit: ${resolutionUnit}, bit depth: ${bitDepth}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution} `);

        const updatedImage = await this.ImagingApi.modifyTiff(getImageTiffRequest);
        await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);

        console.log();
    }

    /**
     * Update parameters of TIFF image. Image data is passed in a request stream.
     */
    public async CreateModifiedTiffFromRequestBody() {
        console.log("Update parameters of a TIFF image from request body");

        const compression = "adobedeflate";
        const resolutionUnit = "inch";
        const bitDepth: number = 1;
        const horizontalResolution = 150.0;
        const verticalResolution = 150.0;
        const fromScratch: boolean = undefined;
        const outPath = undefined;
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const postImageTiffRequest = new CreateModifiedTiffRequest({
            imageData: inputStream, bitDepth, compression,
            resolutionUnit, horizontalResolution, verticalResolution, fromScratch, outPath, storage
        });

        console.log(`Call CreateModifiedTiff with params: compression: ${compression}, resolution unit: ${resolutionUnit}, bit depth: ${bitDepth}, horizontal resolution: ${horizontalResolution}, vertical resolution: ${verticalResolution} `);

        const updatedImage = await this.ImagingApi.createModifiedTiff(postImageTiffRequest);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, true);

        console.log();
    }

    /**
     *
     *Update parameters of TIFF image according to fax parameters
     */
    public async ConvertTiffToFaxFromStorage() {
        console.log("Update parameters of TIFF image according to fax parameters.");

        await this.UploadSampleImageToCloud();

        // Update TIFF Image parameters according to fax parameters
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getTiffToFaxRequest = new ConvertTiffToFaxRequest({name: this.SampleImageFileName, storage, folder});

        console.log(`Call ConvertTiffToFax`);

        const updatedImage = await this.ImagingApi.convertTiffToFax(getTiffToFaxRequest);
        this.SaveUpdatedImageToOutput("ConvertTiffToFax.tiff", updatedImage);

        console.log();
    }

    /**
     *
     *Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images)
     */
    public async AppendTiffFromStorage() {
        console.log("Appends existing TIFF image to another existing TIFF image.");

        const appendFileName = "Append.tiff"; // Image file name to be appended to original one

        await this.UploadSampleImageToCloud();
        const localInputImage = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, appendFileName));
        await this.UploadImageToCloud(appendFileName, localInputImage);

        // Update TIFF Image parameters according to fax parameters
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const appendRequest = new AppendTiffRequest({
            name: this.SampleImageFileName,
            appendFile: appendFileName,
            storage,
            folder
        });

        console.log(`Call AppendTiff`);

        await this.ImagingApi.appendTiff(appendRequest);

        // Download updated file to local storage
        const downloadRequest = new DownloadFileRequest({
            path: path.join(this.CloudPath, this.SampleImageFileName),
            storageName: storage
        });
        const updatedImage = await this.ImagingApi.downloadFile(downloadRequest);
        this.SaveUpdatedImageToOutput("AppendToTiff.tiff", updatedImage);

        console.log();
    }
}

