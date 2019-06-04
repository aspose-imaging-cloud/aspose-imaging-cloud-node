/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2019 Aspose Pty Ltd. All rights reserved.
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

import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing TIFF-related frame GET API calls
 */
class TiffGetFramesApiTests extends ApiTester {

    public async getImageSingleFrameTest() {
        const name: string = "test.tiff";
        const frameId: number = 2;
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod: string = "Rotate90FlipX";
        const saveOtherFrames: boolean = false;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageSingleFrameTest", 
                `Input image: ${name}; Frame ID: ${frameId}; New width: ${newWidth}; New height: ${newHeight}; X: ${x}; Y: ${y}; Rect width: ${rectWidth}; 
                    Rect height: ${rectHeight}; Rotate/flip method: ${rotateFlipMethod}; Save other frames: ${saveOtherFrames}`,
                name,
                async () => {
                    const request = new imaging.GetImageFrameRequest({ name, frameId, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod,
                        saveOtherFrames, folder, storage });
                    const response = await this.imagingApi.getImageFrame(request);
                    return response;
                },
                async (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties.frames).toBeTruthy();
                    expect(1).toEqual(resultProperties.tiffProperties.frames.length);

                    // please note that rotation was performed, so switching of width and height comparison is valid
                    expect(rectHeight).toEqual(resultProperties.tiffProperties.frames[0].width);
                    expect(rectWidth).toEqual(resultProperties.tiffProperties.frames[0].height);
                    expect(rectHeight).toEqual(resultProperties.tiffProperties.frames[0].frameOptions.imageWidth);
                    expect(rectWidth).toEqual(resultProperties.tiffProperties.frames[0].frameOptions.imageLength);
                    expect(rectHeight).toEqual(resultProperties.width);
                    expect(rectWidth).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async getImageAllFramesTest() {
        const name: string = "test.tiff";
        const frameId: number = 2;
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod: string = "Rotate90FlipX";
        const saveOtherFrames: boolean = true;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageAllFramesTest", 
                `Input image: ${name}; Frame ID: ${frameId}; New width: ${newWidth}; New height: ${newHeight}; X: ${x}; Y: ${y}; Rect width: ${rectWidth}; 
                    Rect height: ${rectHeight}; Rotate/flip method: ${rotateFlipMethod}; Save other frames: ${saveOtherFrames}`,
                name,
                async () => {
                    const request = new imaging.GetImageFrameRequest({ name, frameId, newWidth, newHeight, x, y, rectWidth, rectHeight, rotateFlipMethod,
                        saveOtherFrames, folder, storage });
                    const response = await this.imagingApi.getImageFrame(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(originalProperties.tiffProperties.frames).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties.frames).toBeTruthy();

                    expect(originalProperties.tiffProperties.frames.length).toEqual(resultProperties.tiffProperties.frames.length);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(originalProperties.width).toEqual(resultProperties.width);

                    // please note that rotation was performed, so switching of width and height comparison is valid
                    expect(rectHeight).toEqual(resultProperties.tiffProperties.frames[frameId].width);
                    expect(rectWidth).toEqual(resultProperties.tiffProperties.frames[frameId].height);
                    expect(rectHeight).toEqual(resultProperties.tiffProperties.frames[frameId].frameOptions.imageWidth);
                    expect(rectWidth).toEqual(resultProperties.tiffProperties.frames[frameId].frameOptions.imageLength);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: TiffGetFramesApiTests = new TiffGetFramesApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

test(`getImageSingleFrameTest`, async () => {
    await testClass.getImageSingleFrameTest();
});

test(`getImageAllFramesTest`, async () => {
    await testClass.getImageAllFramesTest();
});
