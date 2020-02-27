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

import * as fs from "fs";
import * as path from "path";
import {ImagingApi, ImagingResponse, UploadFileRequest} from "@asposecloud/aspose-imaging-cloud";

/**
 * Modify image example.
 */
export abstract class ImagingBase {

    /**
     * The cloud path.
     */
    protected readonly CloudPath: string = "Examples";

    private readonly _ImagingApi: ImagingApi;

    /**
     * Creates a new instance of the ImagingBase class
     * @param imagingApi The imaging API
     * @constructor
     */
    protected constructor(imagingApi: ImagingApi) {
        this._ImagingApi = imagingApi;
    }

    /**
     * The output folder path.
     */
    public static get OutputFolder(): string {
        return path.resolve(__dirname, '..', "Output");
    }

    /**
     * The example images folder path.
     */
    protected static get ExampleImagesFolder(): string {
        return path.resolve(__dirname, '..', "Images");
    }

    /**
     * Gets the imaging API.
     */
    protected get ImagingApi(): ImagingApi {
        return this._ImagingApi;
    }

    /**
     * Gets the name of the example image file.
     */
    protected abstract _SampleImageFileName: string;

    /**
     * Gets the name of the example image file.
     */
    protected get SampleImageFileName(): string {
        return this._SampleImageFileName;
    }

    /**
     * Prints the example header.
     * @param header The example header.
     */
    protected static PrintHeader(header: string) {
        console.log(header);
        console.log();
    }

    /**
     * Gets the name of the modified sample image file.
     * @param fromRequest If set to true - created from request.
     * @param newFormatExtension The new format extension.
     * @return The name of the modified sample image file.
     */
    protected GetModifiedSampleImageFileName(fromRequest: boolean = false, newFormatExtension: string = null): string {
        const nameWithNewExtension = newFormatExtension != null
            ? this.SampleImageFileName.substr(0, this.SampleImageFileName.lastIndexOf(".")) + newFormatExtension
            : this.SampleImageFileName;

        return fromRequest ? `ModifiedFromRequest${nameWithNewExtension}` : `Modified${nameWithNewExtension}`;
    }

    /**
     * Uploads the example image to cloud.
     */
    protected async UploadSampleImageToCloud() {
        const localInputImage = fs.readFileSync(path.join(ImagingBase.ExampleImagesFolder, this.SampleImageFileName));
        await this.UploadImageToCloud(this.SampleImageFileName, localInputImage);
    }

    /**
     * Uploads the image to cloud.
     * @param imageName Name of the image.
     * @param image The image.
     */
    protected async UploadImageToCloud(imageName: string, image: Buffer) {
        const uploadFileRequest = new UploadFileRequest({path: path.join(this.CloudPath, imageName), file: image});
        const result = await this.ImagingApi.uploadFile(uploadFileRequest);
        console.log(result.errors.length > 0
            ? `Uploading errors count: ${result.errors.length}`
            : `Image ${imageName} is uploaded to cloud storage`);
    }

    /**
     * Saves the updated image to local output folder.
     * @param updatedImage The updated image.
     * @param fromRequest If set to true - created from request.
     * @param newFormatExtension The new format extension.
     */
    protected async SaveUpdatedSampleImageToOutput(updatedImage: Buffer, fromRequest: boolean, newFormatExtension: string = null) {
        const newFileName = this.GetModifiedSampleImageFileName(fromRequest, newFormatExtension);

        this.SaveUpdatedImageToOutput(newFileName, updatedImage);
    }

    /**
     * Saves the updated image to output folder.
     * @param imageName Name of the image.
     * @param updatedImage The updated image.
     */
    protected async SaveUpdatedImageToOutput(imageName: string, updatedImage: Buffer) {
        const filePath = path.resolve(path.join(ImagingBase.OutputFolder, imageName));
        fs.writeFile(filePath, updatedImage, (err) => {
            if (err) {
                throw err;
            }

            console.log(`Image ${imageName} is saved to ${path.dirname(filePath)}`);
        });
    }

    /**
     * Outputs the properties to file.
     * @param fileName Name of the file.
     * @param imagingResponse The imaging response.
     */
    protected OutputPropertiesToFile(fileName: string, imagingResponse: ImagingResponse) {
        const filePath = path.resolve(path.join(ImagingBase.OutputFolder, fileName));

        const writeStream = fs.createWriteStream(filePath);

        writeStream.write(`Width: ${imagingResponse.width}`);
        writeStream.write(`Height: ${imagingResponse.height}`);
        writeStream.write(`Horizontal resolution: ${imagingResponse.horizontalResolution}`);
        writeStream.write(`Vertical resolution: ${imagingResponse.verticalResolution}`);
        writeStream.write(`Bits per pixel: ${imagingResponse.bitsPerPixel}`);

        if (imagingResponse.tiffProperties != null) {
            writeStream.write("Tiff properties:");

            writeStream.write(`Frames count: ${imagingResponse.tiffProperties.frames.length}`);
            writeStream.write(`Camera owner name: ${imagingResponse.tiffProperties.exifData && imagingResponse.tiffProperties.exifData.cameraOwnerName || null}`);
            writeStream.write(`Byte order: ${imagingResponse.tiffProperties.byteOrder}`);
        }
    }
}
