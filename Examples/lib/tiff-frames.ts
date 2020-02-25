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
    CreateImageFrameRequest,
    ExtractImageFramePropertiesRequest,
    GetImageFramePropertiesRequest,
    GetImageFrameRequest,
    ImagingApi
} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

/**
 *  TIFF frames example.
 */
export class TiffFrames extends ImagingBase {
    protected _SampleImageFileName: string = "TiffFrameSampleImage.tiff";

    /**
     * Creates a new instance of the TiffFrames class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("TIFF frames example");
    }

    /**
     * Get separate frame from existing TIFF image
     */
    public async GetImageFrameFromStorage() {
        console.log("Get separate frame from existing TIFF image in cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Number of a frame
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const saveOtherFrames: boolean = false; // Result will include just the specified frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName, frameId, newWidth, newHeight,
            x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, folder, storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("SingleFrame.tiff", imageFrame);

        console.log();
    }

    /**
     * Get separate frame from existing TIFF image, and upload the frame to Cloud Storage
     */
    public async GetImageFrameAndUploadToStorage() {
        console.log("Get separate frame from existing TIFF image and upload to cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Number of a frame
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const saveOtherFrames: boolean = false; // Result will include just the specified frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName, frameId, newWidth, newHeight,
            x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, folder, storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.UploadImageToCloud("SingleFrame.tiff", imageFrame);

        console.log();
    }

    /**
     * Resize a TIFF frame
     */
    public async ResizeImageFrameFromStorage() {
        console.log("Resize frame from existing TIFF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 0; // Number of a frame
        const newWidth: number = 300;
        const newHeight: number = 300;
        const saveOtherFrames: boolean = false; // Result will include just the specified frame
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName, frameId, newWidth, newHeight,
            saveOtherFrames: saveOtherFrames, folder: folder, storage: storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, new width: ${newWidth}, new height: ${newHeight}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("ResizeFrame.tiff", imageFrame);

        console.log();
    }

    /**
     * Crop a TIFF frame
     */
    public async CropImageFrameFromStorage() {
        console.log("Crop frame from existing TIFF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 0; // Number of a frame
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        // Result will include just the specified frame
        const saveOtherFrames: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName,
            frameId,
            x: x,
            y: y,
            rectWidth: rectWidth,
            rectHeight: rectHeight,
            saveOtherFrames: saveOtherFrames,
            folder: folder,
            storage: storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("CropFrame.tiff", imageFrame);

        console.log();
    }

    /**
     * Rotate/Flip a TIFF frame
     */
    public async RotateFlipImageFrameFromStorage() {
        console.log("Rotate/flip frame from existing TIFF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 0; // Number of a frame
        const rotateFlipMethod = "Rotate90FlipX";
        // Result will include just the specified frame
        const saveOtherFrames: boolean = false;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName, frameId,
            rotateFlipMethod: rotateFlipMethod, saveOtherFrames: saveOtherFrames, folder: folder, storage: storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, rotate/flip method: ${rotateFlipMethod}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("RotateFlipFrame.tiff", imageFrame);

        console.log();
    }

    /**
     * Gets all image frames from storage
     */
    public async GetAllImageFramesFromStorage() {
        console.log("Gets all image frames from existing TIFF image from cloud storage");

        await this.UploadSampleImageToCloud();

        const frameId: number = 1; // Number of a frame
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        // Result will include all other frames
        const saveOtherFrames: boolean = true;
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // We are using default Cloud Storage

        const getImageFrameRequest = new GetImageFrameRequest({
            name: this.SampleImageFileName, frameId, newWidth, newHeight,
            x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, folder, storage
        });

        console.log(`Call GetImageFrame with params: frame Id: ${frameId}, new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.getImageFrame(getImageFrameRequest);
        await this.SaveUpdatedImageToOutput("OtherFrames.tiff", imageFrame);

        console.log();
    }

    /**
     * Get separate frame from existing TIFF image. Image data is passed in a request stream
     */
    public async CreateImageFrameFromRequestBody() {
        console.log("Get separate frame from existing TIFF image from request body");

        const frameId: number = 1;
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod = "Rotate90FlipX";
        const saveOtherFrames: boolean = false;
        const outPath = undefined; // Path to updated file (if this is empty, response contains streamed image).
        const storage = undefined; // We are using default Cloud Storage

        const inputStream = fs.readFileSync(path.resolve(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        const createImageFrameRequest = new CreateImageFrameRequest({
            imageData: inputStream, frameId, newWidth,
            newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod, saveOtherFrames, outPath, storage
        });

        console.log(`Call CreateImageFrame with params: frame Id: ${frameId}, new width: ${newWidth}, new height: ${newHeight}, x: ${x}, y: ${y}, rect width: ${rectWidth}, rectHeight: ${rectHeight}, rotate/flip method: ${rotateFlipMethod}, save other frames: ${saveOtherFrames}`);

        const imageFrame = await this.ImagingApi.createImageFrame(createImageFrameRequest);
        await this.SaveUpdatedImageToOutput("SingleFrameFromRequest.tiff", imageFrame);

        console.log();
    }

    /**
     * Get separate frame properties of a TIFF image
     */
    public async GetImageFramePropertiesFromStorage() {
        console.log("Gets separate frame properties of existing TIFF image from cloud storage");

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
     * Get separate frame properties of a TIFF image. Image data is passed in a request stream.
     */
    public async ExtractImageFramePropertiesFromRequestBody() {
        console.log("Get separate frame properties of existing TIFF image from request body");

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
