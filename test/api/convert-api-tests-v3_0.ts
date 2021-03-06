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
 * Class for testing convert API calls
 */
class ConvertApiTests extends ApiTester {

    public async convertImageTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);
        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.BasicInputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {

                await this.testGetRequest(
                        "convertImageTest",
                        `Input image: ${name}; Output format: ${format}`,
                        name,
                        async () => {
                            const request: imaging.ConvertImageRequest = new imaging.ConvertImageRequest({ name, format, 
                                folder, storage });
                            const response = await this.imagingApi.convertImage(request);
                            return response;
                        },
                        null,
                        folder,
                        storage);
            }
        }
    }

    public async createConvertedImageTest(formatExtension: string, saveResultToStorage: boolean, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        let outName: string = null;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);
        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.BasicInputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const format of formatsToExport) {
                outName = `${name}.${format}`;

                await this.testPostRequest(
                        "createConvertedImageTest",
                        saveResultToStorage,
                        `Input image: ${name}; Output format: ${format}`,
                        name,
                        outName,
                        async (inputStream, outPath) => {
                            const request: imaging.CreateConvertedImageRequest = new imaging.CreateConvertedImageRequest({ imageData: inputStream, format,  
                                outPath, storage });
                            const response = await this.imagingApi.createConvertedImage(request);
                            return response;
                        },
                        null,
                        folder,
                        storage);
            }
        }
    }
}

const testClass: ConvertApiTests = new ConvertApiTests();
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
    "ConvertTestSuite_V3",
    (formatExtension, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`convertImageTest`, async () => {
                await testClass.convertImageTest(formatExtension);
            });
        }

        test(`createConvertedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createConvertedImageTest(formatExtension, saveResultToStorage);
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
        ("ConvertTestSuite_Extended_V3",
        (formatExtension, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`convertImageTest`, async () => {
                    await testClass.convertImageTest(formatExtension);
                });
            }
    
            test(`createConvertedImageTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
                await testClass.createConvertedImageTest(formatExtension, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
