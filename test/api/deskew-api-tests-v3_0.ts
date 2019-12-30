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

import * as imaging from "../../lib/api";
import {ApiTester} from "../base/api-tester";

/**
 * Class for testing deskew API calls
 */
class DeskewApiTests extends ApiTester {

    public async deskewImageTest(formatExtension: string, resizeProportionally: boolean, bkColor: string) {
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
                    "deskewImageTest",
                    `Input image: ${name}; Output format: ${formatExtension}; ResizeProportionally: ${resizeProportionally}; BkColor: ${bkColor};`,
                    name,
                    async () => {
                        const request: imaging.DeskewImageRequest = new imaging.DeskewImageRequest({ name, resizeProportionally, bkColor,
                            folder, storage });
                        return await this.imagingApi.deskewImage(request);
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

    public async createDeskewedImageTest(
        formatExtension: string,
        saveResultToStorage: boolean,
        resizeProportionally: boolean,
        bkColor: string) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            const outName = `${name}_deskew.${formatExtension}`;

            await this.testPostRequest(
                    "createDeskewedImageTest",
                    saveResultToStorage,
                    `Input image: ${name}; Output format: ${formatExtension}; ResizeProportionally: ${resizeProportionally}; bkColor: ${bkColor};`,
                    name,
                    outName,
                    async (inputStream, outPath) => {
                        const request: imaging.CreateDeskewedImageRequest
                            = new imaging.CreateDeskewedImageRequest(
                                { imageData: inputStream, resizeProportionally, bkColor, outPath, storage });
                        return await this.imagingApi.createDeskewedImage(request);
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

const testClass: DeskewApiTests = new DeskewApiTests();
const useExtendedTests: boolean = process.env.ExtendedTests === "true";

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([["jpg", true, true, null], ["jpg", false, false, "green"]])(
    "DeskewTestSuite_V3",
    (formatExtension, saveResultToStorage, resizeProportionally, bkColor) => {
        if (!saveResultToStorage) {
            test(`deskewImageTest`, async () => {
                await testClass.deskewImageTest(formatExtension, resizeProportionally, bkColor);
            });
        }

        test(`createDeskewedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createDeskewedImageTest(formatExtension, saveResultToStorage, resizeProportionally, bkColor);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([
        [".bmp", true, true, null],  [".bmp", false, true, null],
        [".dicom", true, true, null], [".dicom", false, true, null],
        /* TODO: enable after IMAGINGCLOUD-51 is resolved
        [".gif", true], [".gif", false], 
        */
        [".j2k", true, true, null], [".j2k", false, true, null],
        [".png", true, true, null], [".png", false, true, null],
        [".psd", true, true, null], [".psd", false, true, null],
        [".jpg", true, true, null], [".jpg", false, true, null],
        [".tiff", true, true, null], [".tiff", false, true, null],
        [".webp", true, true, null], [".webp", false, true, null],
        [".dng", true, true, null], [".dng", false, true, null],
        [".djvu", true, true, null], [".djvu", false, true, null],
        ])
        ("DeskewTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage, resizeProportionally, bkColor) => {
            if (!saveResultToStorage) {
                test(`deskewImageTest`, async () => {
                    await testClass.deskewImageTest(formatExtension, resizeProportionally, bkColor);
                });
            }
    
            test(`createDeskewedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.createDeskewedImageTest(formatExtension, saveResultToStorage, resizeProportionally, bkColor);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
