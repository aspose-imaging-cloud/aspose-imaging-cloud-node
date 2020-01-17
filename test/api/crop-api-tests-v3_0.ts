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
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing crop API calls
 */
class CropApiTests extends ApiTester {

    public async cropImageTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const x: number = 10;
        const y: number = 10;
        const width: number = 100;
        const height: number = 150;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);
        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {
                await this.testGetRequest(
                        "cropImageTest",
                        `Input image: ${name}; Output format: ${format ? format : "null"}; Width: ${width}; Height: ${height}; X: ${x}; Y: ${y}`,
                        name,
                        async () => {
                            const request: imaging.CropImageRequest = new imaging.CropImageRequest({ name, x, y, width, height,
                                format, folder, storage });
                            const response = await this.imagingApi.cropImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            expect(width).toEqual(resultProperties.width);
                            expect(height).toEqual(resultProperties.height);
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }

    public async createCroppedImageTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const x: number = 10;
        const y: number = 10;
        const width: number = 100;
        const height: number = 150;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        let outName: string = null;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);
        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {
                outName = `${name}_crop.${format ? format : formatExtension}`;

                await this.testPostRequest(
                        "createCroppedImageTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format ? format : "null"}; Width: ${width}; Height: ${height}; X: ${x}; Y: ${y}`,
                        name,
                        outName,
                        async (inputStream, outPath) => {
                            const request: imaging.CreateCroppedImageRequest = new imaging.CreateCroppedImageRequest({ imageData: inputStream, x, y, width, height,
                                format, outPath, storage });
                            const response = await this.imagingApi.createCroppedImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            expect(width).toEqual(resultProperties.width);
                            expect(height).toEqual(resultProperties.height);
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }
}

const testClass: CropApiTests = new CropApiTests();
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

describe.each([[".jpg", true, [null]], [".jpg", false, [null]]])(
    "CropTestSuite_V3",
    (formatExtension, saveResultToStorage, additionalExportFormats) => {

        if (!saveResultToStorage) {
            test(`cropImageTest`, async () => {
                await testClass.cropImageTest(formatExtension, additionalExportFormats);
            });
        }

        test(`createCroppedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createCroppedImageTest(formatExtension, saveResultToStorage, additionalExportFormats);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([
        [".bmp", true, [null]],  [".bmp", false, [null]],
        [".dicom", true], [".dicom", false],
        /* TODO: enable after IMAGINGCLOUD-51 is resolved
        [".gif", true], [".gif", false],
        */
        [".j2k", true, [null]], [".j2k", false, [null]],
        [".png", true, [null]], [".png", false, [null]],
        [".psd", true, [null]], [".psd", false, [null]],
        [".jpg", true, [null]], [".jpg", false, [null]],
        [".tiff", true, [null]], [".tiff", false, [null]],
        [".webp", true, [null]], [".webp", false, [null]],
        ])
        ("CropTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage, additionalExportFormats) => {
            if (!saveResultToStorage) {
                test(`cropImageTest`, async () => {
                    await testClass.cropImageTest(formatExtension, additionalExportFormats);
                });
            }
    
            test(`createCroppedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.createCroppedImageTest(formatExtension, saveResultToStorage, additionalExportFormats);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
