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
import {CreateModifiedJpeg2000Request, ImagingApi, ModifyJpeg2000Request,} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Update JPEG2000 image example.
 */
export class UpdateJpeg2000Image extends ImagingBase {
    protected _SampleImageFileName: string = "UpdateJPEG2000SampleImage.jp2";

    /**
     * Creates a new instance of the UpdateJpeg2000Image class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Update JPEG2000 image example");
    }

    /**
     * Update parameters of existing JPEG2000 image. The image is saved in the cloud.
     */
    public async ModifyJpeg2000FromStorage() {
        console.log("Update parameters of a Jpeg2000 image from cloud storage");

        await this.UploadSampleImageToCloud();

        const codec = "jp2";
        const comment = "Aspose";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageJpeg2000Request =
            new ModifyJpeg2000Request({
                name: this.SampleImageFileName,
                comment,
                codec,
                fromScratch,
                folder,
                storage
            });

        console.log(`Call ModifyJpeg2000 with params: codec: ${codec}, comment: ${comment}`);

        try {
            const updatedImage = await this.ImagingApi.modifyJpeg2000(getImageJpeg2000Request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Update parameters of existing JPEG2000 image, and upload updated image to Cloud Storage
     */
    public async ModifyJpeg2000AndUploadToStorage() {
        console.log("Update parameters of a Jpeg2000 image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const codec = "jp2";
        const comment = "Aspose";
        const fromScratch: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageJpeg2000Request =
            new ModifyJpeg2000Request({
                name: this.SampleImageFileName,
                comment,
                codec,
                fromScratch,
                folder,
                storage
            });

        console.log(`Call ModifyJpeg2000 with params: codec: ${codec}, comment: ${comment}`);

        try {
            const updatedImage = await this.ImagingApi.modifyJpeg2000(getImageJpeg2000Request);
            await this.UploadImageToCloud(this.GetModifiedSampleImageFileName(false), updatedImage);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Update parameters of existing JPEG2000 image. Image data is passed in a request stream
     */
    public async CreateModifiedJpeg2000FromRequestBody() {
        console.log("Update parameters of a Jpeg2000 image from request body");

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        {
            const codec = "jp2";
            const comment = "Aspose";
            const fromScratch: boolean = false;
            const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image)
            const storage = undefined; // We are using default Cloud Storage

            const postImageJpeg2000Request = new CreateModifiedJpeg2000Request({
                imageData: inputStream,
                comment,
                codec,
                fromScratch,
                outPath,
                storage
            });

            console.log(`Call CreateModifiedJpeg2000 with params: codec: ${codec}, comment: ${comment}`);

            try {
                const updatedImage = await this.ImagingApi.createModifiedJpeg2000(postImageJpeg2000Request);
                await this.SaveUpdatedSampleImageToOutput(updatedImage, true);
            } catch (e) {
                console.log(e);
            }

            console.log();
        }
    }
}
