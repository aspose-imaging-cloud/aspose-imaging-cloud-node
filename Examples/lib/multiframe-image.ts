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
    CreateImageFrameRangeRequest,
    CreateImageFrameRequest,
    ExtractImageFramePropertiesRequest,
    GetImageFramePropertiesRequest, GetImageFrameRangeRequest,
    GetImageFrameRequest,
    ImagingApi
} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  Multiframe example.
 */
export class MultiframeImage extends ImagingBase {
    protected _SampleImageFileName: string = "MultipageSampleImage.djvu";

    /**
     * Creates a new instance of the MultiframeImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Multiframe example");
    }

    /**
     * Get separate frame from existing image
     */
    public async GetImageFrameFromStorage() {
        console.log("Get separate frame from existing image in cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Index of the frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName,
            frameId,
            folder,
            storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("SingleFrame.djvu", imageFrame);

        console.log();
    }

    /**
     * Get separate frame from existing image, and upload the frame to Cloud Storage
     */
    public async GetImageFrameAndUploadToStorage() {
        console.log("Get separate frame from existing image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Index of the frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName,
            frameId,
            folder,
            storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.UploadImageToCloud("SingleFrame.djvu", imageFrame);

        console.log();
    }

    /**
     * Get separate frame from existing image. Image data is passed in a request stream
     */
    public async CreateImageFrameFromRequestBody() {
        console.log("Get separate frame from existing image from request body");

        const frameId: number = 1; // Index of the frame
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const createImageFrameRequest = new CreateImageFrameRequest({
            imageData: inputStream,
            frameId,
            outPath,
            storage
        });

        console.log(`Call CreateImageFrame with params: frame Id: ${frameId}`);

        const imageFrame = await this.ImagingApi.createImageFrame(createImageFrameRequest);
        await this.SaveUpdatedImageToOutput("SingleFrameFromRequest.djvu", imageFrame);

        console.log();
    }

    /**
     * Get separate frame range from existing image
     */
    public async GetImageFrameRangeFromStorage() {
        console.log("Get separate frame range from existing image in cloud storage");

        await this.UploadSampleImageToCloud();

        const startFrameId: number = 1; // Index of the first frame in range
        const endFrameId: number = 4; // Index of the last frame in range
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRangeRequest = new GetImageFrameRangeRequest({
            name: this.SampleImageFileName,
            startFrameId,
            endFrameId,
            folder,
            storage
        });

        console.log(`Call GetImageFrame with params: start frame Id: ${startFrameId}; end frame id: ${endFrameId}`);

        const imageFrames = await this.ImagingApi.getImageFrameRange(getImageFrameRangeRequest);
        await this.SaveUpdatedImageToOutput("FrameRange.djvu", imageFrames);

        console.log();
    }

    /**
     * Get separate frame range from existing image, and upload the frame to Cloud Storage
     */
    public async GetImageFrameRangeAndUploadToStorage() {
        console.log("Get separate frame range from existing image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const startFrameId: number = 1; // Index of the first frame in range
        const endFrameId: number = 4; // Index of the last frame in range
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRangeRequest = new GetImageFrameRangeRequest({
            name: this.SampleImageFileName,
            startFrameId,
            endFrameId,
            folder,
            storage
        });

        console.log(`Call GetImageFrame with params: start frame Id: ${startFrameId}; end frame id: ${endFrameId}`);

        const imageFrames = await this.ImagingApi.getImageFrameRange(getImageFrameRangeRequest);
        await this.UploadImageToCloud("FrameRange.djvu", imageFrames);

        console.log();
    }

    /**
     * Get separate frame range from existing image. Image data is passed in a request stream
     */
    public async CreateImageFrameRangeFromRequestBody() {
        console.log("Get separate frame range from existing image from request body");

        const startFrameId: number = 1; // Index of the first frame in range
        const endFrameId: number = 4; // Index of the last frame in range
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const createImageFrameRangeRequest = new CreateImageFrameRangeRequest({
            imageData: inputStream,
            startFrameId,
            endFrameId,
            outPath,
            storage
        });

        console.log(`Call CreateImageFrame with params: start frame Id: ${startFrameId}; end frame id: ${endFrameId}`);

        const imageFrame = await this.ImagingApi.createImageFrameRange(createImageFrameRangeRequest);
        await this.SaveUpdatedImageToOutput("FrameRangeFromRequest.djvu", imageFrame);

        console.log();
    }

    /**
     * Get separate frame properties of a image
     */
    public async GetImageFramePropertiesFromStorage() {
        console.log("Gets separate frame properties of existing image from cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Number of a frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const imageFramePropertiesRequest =
            new GetImageFramePropertiesRequest({name: this.SampleImageFileName, frameId, folder, storage});

        console.log(`Call GetImageFrameProperties with params: frame Id: ${frameId}`);

        const imagingResponse = await this.ImagingApi.getImageFrameProperties(imageFramePropertiesRequest);
        this.OutputPropertiesToFile("TiffFrameProperties.txt", imagingResponse);

        console.log();
    }

    /**
     * Get separate frame properties of a image. Image data is passed in a request stream.
     */
    public async ExtractImageFramePropertiesFromRequestBody() {
        console.log("Get separate frame properties of existing image from request body");

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        {
            const frameId: number = 1;

            const imageFramePropertiesRequest = new ExtractImageFramePropertiesRequest({
                imageData: inputStream,
                frameId
            });

            console.log(`Call ExtractImageFrameProperties with params: frame Id: ${frameId}`);

            const imagingResponse = await this.ImagingApi.extractImageFrameProperties(imageFramePropertiesRequest);
            this.OutputPropertiesToFile("TiffFramePropertiesFromRequest.txt", imagingResponse);

            console.log();
        }
    }
}
