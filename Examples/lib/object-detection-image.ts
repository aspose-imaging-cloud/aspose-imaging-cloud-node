/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2020 Aspose Pty Ltd. All rights reserved.
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

import {
    CreateObjectBoundsRequest, CreateVisualObjectBoundsRequest,
    GetObjectBoundsRequest,
    GetVisualObjectBoundsRequest,
    ImagingApi
} from "@asposecloud/aspose-imaging-cloud";
import {ImagingBase} from "./imaging-base";
import * as fs from "fs";
import * as path from "path";

/**
 * object detection image example.
 */
export class ObjectDetectionImage extends ImagingBase {

    /**
     * The name of the example image file.
     */
    protected _SampleImageFileName: string = "object_detection_example.jpg";

    public constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Object detection image example:");
    }

    /**
     * Detect objects on an image from a cloud storage.
     * @constructor
     */
    public async DetectObjectsImageFromStorage() {
        console.log(`Detect objects on an image from a cloud storage`);

        await this.UploadSampleImageToCloud();

        const method = "ssd";
        const threshold = 50;
        const includeLabel = true;
        const includeScore = true;
        const allowedLabels = "cat";
        const blockedLabels = "dog";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new GetObjectBoundsRequest({
            name: this.SampleImageFileName,
            method,
            threshold,
            includeLabel,
            includeScore,
            allowedLabels,
            blockedLabels,
            folder,
            storage,
        });

        console.log(`Call ObjectBoundsRequest with params: method: ${method}, threshold: ${threshold}, includeLabel: ${includeLabel}, includeScore: ${includeScore}`);

        try {
            const detectedObjectsList = await this.ImagingApi.getObjectBounds(request);
            console.log(`Objects detected: ${detectedObjectsList.detectedObjects.length}`);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }

    /**
     * Get visualized detected objects and upload it to the cloud storage.
     * @constructor
     */
    public async VisualiizeDetectObjectsAndUploadToStorage() {
        console.log(`Get visualized detected objects and upload it to the cloud storage`);

        await this.UploadSampleImageToCloud();

        const method = "ssd";
        const threshold = 50;
        const includeLabel = true;
        const includeScore = true;
        const allowedLabels = "cat";
        const blockedLabels = "dog";
        const color = "blue";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new GetVisualObjectBoundsRequest({
            name: this.SampleImageFileName,
            method,
            threshold,
            includeLabel,
            includeScore,
            allowedLabels,
            blockedLabels,
            color,
            folder,
            storage,
        });

        console.log(`Call VisualObjectBoundsRequest with params: method: ${method}, threshold: ${threshold}, includeLabel: ${includeLabel}, includeScore: ${includeScore}, color: ${color}`);

        try {
            const updatedImage = await this.ImagingApi.getVisualObjectBounds(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, "jpg");
        } catch (e) {
            console.log(e);
        }

        console.log();
    }


    /**
     * detected object on an image that is passed in a request stream.
     * @constructor
     */
    public async DetectedObjectsImageFromRequestBody() {
        console.log(`detected object on an image that is passed in a request stream`);

        const method = "ssd";
        const threshold = 50;
        const includeLabel = true;
        const includeScore = true;
        const allowedLabels = "cat";
        const blockedLabels = "dog";
        const outPath = null;
        const storage = undefined; // We are using default Cloud Storage
        const imageData = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));

        const request = new CreateObjectBoundsRequest({
            imageData,
            method,
            threshold,
            includeLabel,
            includeScore,
            allowedLabels,
            blockedLabels,
            outPath,
            storage,
        });

        console.log(`Call CreateObjectBoundsRequest with params: method: ${method}, threshold: ${threshold}, includeLabel: ${includeLabel}, includeScore: ${includeScore}`);

        try {
            const detectedObjectsList = await this.ImagingApi.createObjectBounds(request);
            console.log(`Objects detected: ${detectedObjectsList.detectedObjects.length}`);
        } catch (e) {
            console.log(e);
        }

        console.log();
    }


    /**
     * Visualize detected object on an image that is passed in a request stream.
     * @constructor
     */
    public async VisualizeDetectedObjectsImageFromRequestBody() {
        console.log(`Visualize detected object on an image that is passed in a request stream`);

        const method = "ssd";
        const threshold = 50;
        const includeLabel = true;
        const includeScore = true;
        const allowedLabels = "cat";
        const blockedLabels = "dog";
        const outPath = null;
        const storage = undefined; // We are using default Cloud Storage
        const imageData = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));

        const request = new CreateVisualObjectBoundsRequest({
            imageData,
            method,
            threshold,
            includeLabel,
            includeScore,
            allowedLabels,
            blockedLabels,
            outPath,
            storage,
        });

        console.log(`Call CreateVisualObjectBoundsRequest with params: method: ${method}, threshold: ${threshold}, includeLabel: ${includeLabel}, includeScore: ${includeScore}`);

        try {
            const updatedImage = await this.ImagingApi.createVisualObjectBounds(request);
            await this.SaveUpdatedSampleImageToOutput(updatedImage, false, "jpg");
        } catch (e) {
            console.log(e);
        }

        console.log();
    }
}
