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
 * Class for testing DICOM-related API calls
 */
class DicomApiTests extends ApiTester {

    public async getImageDicomTest(saveResultToStorage: boolean) {
        const name: string = "test.dicom";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageDicomTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImageDicomRequest({ name: fileName, fromScratch, outPath, folder, storage });
                    const response = await this.imagingApi.getImageDicom(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.dicomProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(10).toEqual(originalProperties.dicomProperties.numberOfFrames);
                    expect(originalProperties.width).toEqual(originalProperties.dicomProperties.width);
                    expect(originalProperties.height).toEqual(originalProperties.dicomProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImageDicomTest(saveResultToStorage: boolean) {
        const name: string = "test.dicom";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImageDicomTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImageDicomRequest({ imageData: inputStream, fromScratch, outPath, storage });
                    const response = await this.imagingApi.postImageDicom(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.dicomProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(10).toEqual(originalProperties.dicomProperties.numberOfFrames);
                    expect(originalProperties.width).toEqual(originalProperties.dicomProperties.width);
                    expect(originalProperties.height).toEqual(originalProperties.dicomProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: DicomApiTests = new DicomApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([[true], [false]])(
    "DicomTestSuite_V1_V2",
    (saveResultToStorage) => {
        test(`getImageDicomTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageDicomTest(saveResultToStorage);
        });

        test(`postImageDicomTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageDicomTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
