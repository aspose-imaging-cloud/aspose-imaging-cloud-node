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
 * Class for testing JPEG2000-related API calls
 */
class Jpeg2000ApiTests extends ApiTester {

    public async modifyJpeg2000Test() {
        const name: string = "test.j2k";
        const codec: string = "jp2";
        const comment: string = "Aspose";
        const fromScratch: boolean = false;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyJpeg2000Test", 
                `Input image: ${name}; Comment: ${comment}; Codec: ${codec}`,
                name,
                async () => {
                    const request = new imaging.ModifyJpeg2000Request({ name, comment, codec, fromScratch, folder, storage });
                    const response = await this.imagingApi.modifyJpeg2000(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.jpeg2000Properties).toBeTruthy();
                    expect(originalProperties.jpeg2000Properties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(resultProperties.jpeg2000Properties.comments).toBeTruthy();
                    expect(originalProperties.jpeg2000Properties.comments).toBeTruthy();
                    expect(resultProperties.jpeg2000Properties.comments[0]).toEqual(comment);
                    expect(originalProperties.jpeg2000Properties.comments[2]).toContain(comment);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedJpeg2000Test(saveResultToStorage: boolean) {
        const name: string = "test.j2k";
        const codec: string = "jp2";
        const comment: string = "Aspose";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.jp2`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedJpeg2000Test", 
                saveResultToStorage,
                `Input image: ${name}; Comment: ${comment}; Codec: ${codec}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedJpeg2000Request({ imageData: inputStream, comment, codec, fromScratch, outPath, storage });
                    const response = await this.imagingApi.createModifiedJpeg2000(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.jpeg2000Properties).toBeTruthy();
                    expect(originalProperties.jpeg2000Properties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(resultProperties.jpeg2000Properties.comments).toBeTruthy();
                    expect(originalProperties.jpeg2000Properties.comments).toBeTruthy();
                    expect(resultProperties.jpeg2000Properties.comments[0]).toEqual(comment);
                    expect(originalProperties.jpeg2000Properties.comments[2]).toContain(comment);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: Jpeg2000ApiTests = new Jpeg2000ApiTests();

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
    "Jpeg2000TestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifyJpeg2000Test`, async () => {
                await testClass.modifyJpeg2000Test();
            });
        }

        test(`createModifiedJpeg2000Test: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedJpeg2000Test(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
