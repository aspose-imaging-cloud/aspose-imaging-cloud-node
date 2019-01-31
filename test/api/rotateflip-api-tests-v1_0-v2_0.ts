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
 * Class for testing rotate/flip API calls
 */
class RotateFlipApiTests extends ApiTester {

    public async getImageRotateFlipTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
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
            if (inputFile.Name.endsWith(formatExtension)) {
                name = inputFile.Name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {
                outName = `${name}_rotateFlip.${format}`;

                await this.testGetRequest(
                        "getImageRotateFlipTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format}; Method: ${method}`,
                        name,
                        outName,
                        async (fileName, outPath) => {
                            const request: imaging.GetImageRotateFlipRequest = new imaging.GetImageRotateFlipRequest({ name: fileName, format, method, outPath, 
                                folder, storage });
                            const response = await this.imagingApi.getImageRotateFlip(request);
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

    public async postImageRotateFlipTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
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
            if (inputFile.Name.endsWith(formatExtension)) {
                name = inputFile.Name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {
                outName = `${name}_rotateFlip.${format}`;

                await this.testPostRequest(
                        "postImageRotateFlipTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format}; Method: ${method}`,
                        name,
                        outName,
                        async (inputStream, outPath) => {
                            const request: imaging.PostImageRotateFlipRequest = new imaging.PostImageRotateFlipRequest({ imageData: inputStream, format, method, 
                                outPath, storage });
                            const response = await this.imagingApi.postImageRotateFlip(request);
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

describe.each([[".jpg", true], [".jpg", false]])(
    "RotateFlipTestSuite_V1_V2",
    (formatExtension, saveResultToStorage) => {
        test(`getImageRotateFlipTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageRotateFlipTest(formatExtension, saveResultToStorage);
        });

        test(`postImageRotateFlipTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageRotateFlipTest(formatExtension, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

if (useExtendedTests) {
    console.log("Extended tests enabled");
    
    describe.each([
        [".bmp", true],  [".bmp", false], 
        [".dicom", true], [".dicom", false], 
        /* TODO: enable after IMAGINGCLOUD-51 is resolved
        [".gif", true], [".gif", false], 
        */
        [".j2k", true], [".j2k", false],
        [".png", true], [".png", false],
        [".psd", true], [".psd", false],
        [".jpg", true], [".jpg", false],
        [".tiff", true], [".tiff", false],
        [".webp", true], [".webp", false],
        ])
        ("RotateFlipTestSuite_Extended_V1_V2",
        (formatExtension, saveResultToStorage) => {
            test(`getImageRotateFlipTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.getImageRotateFlipTest(formatExtension, saveResultToStorage);
            });
    
            test(`postImageRotateFlipTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.postImageRotateFlipTest(formatExtension, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
