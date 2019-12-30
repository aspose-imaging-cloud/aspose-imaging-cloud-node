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
 * Class for testing update API calls
 */
class UpdateApiTests extends ApiTester {

    public async updateImageTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod: string = "Rotate90FlipX";
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
                        "updateImageTest",
                        `Input image: ${name}; Output format: ${format ? format : "null"}; New width: ${newWidth}; New height: ${newHeight}; X: ${x}; Y: ${y}; 
                            Rect width: ${rectWidth}; Rect height: ${rectHeight}; Rotate/flip method: ${rotateFlipMethod}`,
                        name,
                        async () => {
                            const request: imaging.UpdateImageRequest = new imaging.UpdateImageRequest({ name, newWidth, newHeight, x, y, rectWidth,
                                rectHeight, rotateFlipMethod, format, folder, storage });
                            const response = await this.imagingApi.updateImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            expect(rectWidth).toEqual(resultProperties.height);
                            expect(rectHeight).toEqual(resultProperties.width);
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }

    public async createUpdatedImageTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const newWidth: number = 300;
        const newHeight: number = 450;
        const x: number = 10;
        const y: number = 10;
        const rectWidth: number = 200;
        const rectHeight: number = 300;
        const rotateFlipMethod: string = "Rotate90FlipX";
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
                outName = `${name}_update.${format ? format : formatExtension}`;

                await this.testPostRequest(
                        "createUpdatedImageTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format ? format : "null"}; New width: ${newWidth}; New height: ${newHeight}; X: ${x}; Y: ${y}; 
                            Rect width: ${rectWidth}; Rect height: ${rectHeight}; Rotate/flip method: ${rotateFlipMethod}`,
                        name,
                        outName,
                        async (inputStream, outPath) => {
                            const request: imaging.CreateUpdatedImageRequest = new imaging.CreateUpdatedImageRequest({ imageData: inputStream, newWidth, newHeight,
                                x, y, rectWidth, rectHeight, rotateFlipMethod, format, outPath, storage });
                            const response = await this.imagingApi.createUpdatedImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            expect(rectWidth).toEqual(resultProperties.height);
                            expect(rectHeight).toEqual(resultProperties.width);
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }
}

const testClass: UpdateApiTests = new UpdateApiTests();
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

describe.each([[".jpg", true], [".jpg", false]])(
    "UpdateTestSuite_V3",
    (formatExtension, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`updateImageTest`, async () => {
                await testClass.updateImageTest(formatExtension);
            });
        }

        test(`createUpdatedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createUpdatedImageTest(formatExtension, saveResultToStorage);
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
        [".dicom", true, [null]], [".dicom", false, [null]],
        /* TODO: enable after IMAGINGCLOUD-51 is resolved
        [".gif", true, [null]], [".gif", false, [null]],
        */
        [".j2k", true, [null]], [".j2k", false, [null]],
        [".png", true, [null]], [".png", false, [null]],
        [".psd", true], [".psd", false],
        [".jpg", true, [null]], [".jpg", false, [null]],
        [".tiff", true, [null]], [".tiff", false, [null]],
        [".webp", true, [null]], [".webp", false, [null]],
        ])
        ("UpdateTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`updateImageTest`, async () => {
                    await testClass.updateImageTest(formatExtension);
                });
            }

            test(`createUpdatedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.createUpdatedImageTest(formatExtension, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
