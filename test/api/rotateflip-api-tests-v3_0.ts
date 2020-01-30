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
 * Class for testing rotate/flip API calls
 */
class RotateFlipApiTests extends ApiTester {

    public async rotateFlipImageTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const method: string = "Rotate90FlipX";
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
                        "rotateFlipImageTest",
                        `Input image: ${name}; Output format: ${format ? format : "null"}; Method: ${method}`,
                        name,
                        async () => {
                            const request: imaging.RotateFlipImageRequest = new imaging.RotateFlipImageRequest({ name, method, format,
                                folder, storage });
                            const response = await this.imagingApi.rotateFlipImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            try {
                                expect(originalProperties.height).toEqual(resultProperties.width);
                            } catch (error) {
                                expect(originalProperties.height - 1).toEqual(resultProperties.width);
                            }
        
                            try {
                                expect(originalProperties.width).toEqual(resultProperties.height);
                            } catch (error) {
                                expect(originalProperties.width - 1).toEqual(resultProperties.height);
                            }
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }

    public async createRotateFlippedImageTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const method: string = "Rotate90FlipX";
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
                outName = `${name}_rotateFlip.${format ? format : formatExtension}`;

                await this.testPostRequest(
                        "createRotateFlippedImageTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format ? format : "null"}; Method: ${method}`,
                        name,
                        outName,
                        async (inputStream, outPath) => {
                            const request: imaging.CreateRotateFlippedImageRequest = new imaging.CreateRotateFlippedImageRequest({ imageData: inputStream, method, format,
                                outPath, storage });
                            const response = await this.imagingApi.createRotateFlippedImage(request);
                            return response;
                        },
                        (originalProperties, resultProperties) => {
                            expect(originalProperties).toBeTruthy();
                            try {
                                expect(originalProperties.height).toEqual(resultProperties.width);
                            } catch (error) {
                                expect(originalProperties.height - 1).toEqual(resultProperties.width);
                            }
        
                            try {
                                expect(originalProperties.width).toEqual(resultProperties.height);
                            } catch (error) {
                                expect(originalProperties.width - 1).toEqual(resultProperties.height);
                            }
                            return Promise.resolve();
                        },
                        folder,
                        storage);
            }
        }
    }
}

const testClass: RotateFlipApiTests = new RotateFlipApiTests();
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
    "RotateFlipTestSuite_V3",
    (formatExtension, saveResultToStorage, additionalExportFormats) => {
        if (!saveResultToStorage) {
            test(`rotateFlipImageTest`, async () => {
                await testClass.rotateFlipImageTest(formatExtension, additionalExportFormats);
            });
        }

        test(`createRotateFlippedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createRotateFlippedImageTest(formatExtension, saveResultToStorage, additionalExportFormats);
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
        [".dicom", true, []], [".dicom", false, []],
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
        ("RotateFlipTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage, additionalExportFormats) => {
            if (!saveResultToStorage) {
                test(`rotateFlipImageTest`, async () => {
                    await testClass.rotateFlipImageTest(formatExtension, additionalExportFormats);
                });
            }
    
            test(`createRotateFlippedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.createRotateFlippedImageTest(formatExtension, saveResultToStorage, additionalExportFormats);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
