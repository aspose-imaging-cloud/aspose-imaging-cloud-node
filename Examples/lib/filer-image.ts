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
import {BigRectangularFilterProperties, FilterEffectImageRequest, ImagingApi} from "@asposecloud/aspose-imaging-cloud";

export class FilterImage extends ImagingBase {
    protected _SampleImageFileName: string = "FilterEffectSampleImage.psd";

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Filter image example:")
    }

    /**
     * Applies filtering effect to an image from cloud storage.
     * @constructor
     */
    public async FilterImageFromStorage() {
        console.log("Apply filtering effect to an image from cloud storage");

        await this.UploadSampleImageToCloud();

        const filterType = "BigRectangular";
        const filterProperties = new BigRectangularFilterProperties();
        const format = "gif";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new FilterEffectImageRequest({
            name: this._SampleImageFileName,
            filterType,
            filterProperties,
            format,
            folder,
            storage
        });

        console.log(`Call FilterEffectImage with params: filter type: ${filterType}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.filterEffectImage(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Applies filtering effect to an image and uploads to Cloud Storage
     * @constructor
     */
    public async FilterImageAndUploadToStorage() {
        console.log("Apply filtering effect to an image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const filterType = "BigRectangular";
        const filterProperties = new BigRectangularFilterProperties();
        const format = "gif";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new FilterEffectImageRequest({
            name: this._SampleImageFileName,
            filterType,
            filterProperties,
            format,
            folder,
            storage
        });

        console.log(`Call FilterEffectImage with params: filter type: ${filterType}, format: ${format}`);

        try {
            const updatedImage = await this.ImagingApi.filterEffectImage(request);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false, format), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}
