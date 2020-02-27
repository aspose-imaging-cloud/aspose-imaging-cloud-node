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

import * as imaging from "../../lib/api";
import {ApiTester} from "../base/api-tester";

/**
 * Class for testing grayscale API calls
 */
class GrayscaleApiTests extends ApiTester {

    public async grayscaleImageTest(formatExtension: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            await this.testGetRequest(
                    "grayscaleImageTest",
                    `Input image: ${name}; Output format: ${formatExtension};`,
                    name,
                    async () => {
                        const request: imaging.GrayscaleImageRequest = new imaging.GrayscaleImageRequest({ name,
                            folder, storage });
                        return await this.imagingApi.grayscaleImage(request);
                    },
                    (originalProperties, resultProperties) => {
                        expect(originalProperties).toBeTruthy();
                        expect(originalProperties.bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                        return Promise.resolve();
                    },
                    folder,
                    storage);
        }
    }

    public async createGrayscaledImageTest(
        formatExtension: string,
        saveResultToStorage: boolean) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            const outName = `${name}_grayscale.${formatExtension}`;

            await this.testPostRequest(
                    "createGrayscaledImageTest",
                    saveResultToStorage,
                    `Input image: ${name}; Output format: ${formatExtension}`,
                    name,
                    outName,
                    async (inputStream, outPath) => {
                        const request: imaging.CreateGrayscaledImageRequest
                            = new imaging.CreateGrayscaledImageRequest(
                                { imageData: inputStream, outPath, storage });
                        return await this.imagingApi.createGrayscaledImage(request);
                    },
                    (originalProperties, resultProperties) => {
                        expect(originalProperties).toBeTruthy();
                        expect(originalProperties.bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                        return Promise.resolve();
                    },
                    folder,
                    storage);
        }
    }
}

const testClass: GrayscaleApiTests = new GrayscaleApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([["jpg", true], ["jpg", false]])(
    "GrayscaleTestSuite_V3",
    (formatExtension, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`grayscaleImageTest`, async () => {
                await testClass.grayscaleImageTest(formatExtension);
            });
        }

        test(`createGrayscaledImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createGrayscaledImageTest(formatExtension, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

