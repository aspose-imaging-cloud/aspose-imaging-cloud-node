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
import {ExtractImagePropertiesRequest, GetImagePropertiesRequest, ImagingApi} from "asposeimagingcloud";
import * as fs from "fs";
import * as path from "path";

/**
 * Image properties example.
 */
export class ImageProperties extends ImagingBase {

    protected _SampleImageFileName: string = "PropertiesOfSampleImage.tiff";

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Image properties example");
    }

    /**
     * Get properties of an image, which is store in the cloud.
     * @constructor
     */
    public async GetImagePropertiesFromStorage() {
        console.log("Get properties of an image in cloud storage");

        await this.UploadSampleImageToCloud();

        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImagePropertiesRequest = new GetImagePropertiesRequest({
            name: this.SampleImageFileName,
            folder,
            storage
        });

        console.log(`Call GetImageProperties`);

        const imagingResponse = await this.ImagingApi.getImageProperties(getImagePropertiesRequest);

        this.OutputPropertiesToFile("ImageProperties.txt", imagingResponse);

        console.log();
    }

    /**
     * Get properties of an image. Image data is passed in a request stream.
     * @constructor
     */
    public async ExtractImagePropertiesFromRequestBody() {
        console.log("Get properties of an image from request body");

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const imagePropertiesRequest = new ExtractImagePropertiesRequest({imageData: inputStream});

        console.log(`Call ExtractImageProperties`);

        const imagingResponse = await this.ImagingApi.extractImageProperties(imagePropertiesRequest);
        this.OutputPropertiesToFile("ImagePropertiesFromRequest.txt", imagingResponse);

        console.log();
    }
}

