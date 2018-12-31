/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018 Aspose Pty Ltd. All rights reserved.
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
 * Class for testing TIFF-related API calls
 */
class TiffApiTests extends ApiTester {

    public async getImageTiffTest(saveResultToStorage: boolean) {
        const name: string = "test.tiff";
        const fromScratch: boolean = false;
        const compression: string = "adobedeflate";
        const resolutionUnit: string = "inch";
        const bitDepth: number = 1;
        const horizontalResolution: number = 150;
        const verticalResolution: number = 150;
        const outName: string = `${name}_specific.tiff`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageTiffTest", 
                saveResultToStorage,
                `Input image: ${name}; Compression: ${compression}; Resolution unit: ${resolutionUnit}; Bit depth: ${bitDepth}; 
                    Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImageTiffRequest({ name: fileName, compression, resolutionUnit, bitDepth, fromScratch, 
                        horizontalResolution, verticalResolution, outPath, folder, storage });
                    const response = await this.imagingApi.getImageTiff(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();

                    let bits: number = bitDepth;
                    if (bitDepth > 1) {
                        bits = bits * 4;
                    }
                    
                    expect(bits).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(resultProperties.verticalResolution);
                    expect(horizontalResolution).toEqual(resultProperties.horizontalResolution);

                    expect(originalProperties.tiffProperties.frames.length).toEqual(resultProperties.tiffProperties.frames.length);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImageTiffTest(saveResultToStorage: boolean) {
        const name: string = "test.tiff";
        const fromScratch: boolean = false;
        const compression: string = "adobedeflate";
        const resolutionUnit: string = "inch";
        const bitDepth: number = 1;
        const horizontalResolution: number = 150;
        const verticalResolution: number = 150;
        const outName: string = `${name}_specific.tiff`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImageTiffTest", 
                saveResultToStorage,
                `Input image: ${name}; Compression: ${compression}; Resolution unit: ${resolutionUnit}; Bit depth: ${bitDepth}; 
                    Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImageTiffRequest({ imageData: inputStream, compression, resolutionUnit, bitDepth, fromScratch, 
                        horizontalResolution, verticalResolution, outPath, storage });
                    const response = await this.imagingApi.postImageTiff(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();

                    let bits: number = bitDepth;
                    if (bitDepth > 1) {
                        bits = bits * 4;
                    }
                    
                    expect(bits).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(resultProperties.verticalResolution);
                    expect(horizontalResolution).toEqual(resultProperties.horizontalResolution);

                    expect(originalProperties.tiffProperties.frames.length).toEqual(resultProperties.tiffProperties.frames.length);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async getTiffToFaxTest() {
        const name: string = "test.tiff";
        const outName: string = `${name}_fax.tiff`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getTiffToFaxTest", 
                true,
                `Input image: ${name}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetTiffToFaxRequest({ name: fileName, storage, folder, outPath });
                    const response = await this.imagingApi.getTiffToFax(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();
                    expect(1).toEqual(resultProperties.bitsPerPixel);
                    expect(196).toEqual(resultProperties.verticalResolution);
                    expect(204).toEqual(resultProperties.horizontalResolution);
                    expect(1728).toEqual(resultProperties.width);
                    expect(2200).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postTiffAppendTest() {
        console.log("postTiffAppendTest");

        const inputFileName: string = "test.tiff";
        const folder: string = this.TempFolder;

        if (!this.checkInputFileExists(inputFileName)) {
          throw new Error(`Input file ${inputFileName} doesn't exist in the specified storage folder: ${folder}. Please, upload it first.`);
        }

        const resultFileName: string = inputFileName + "_merged.tiff";
        let outPath: string = null;
        const storage: string = this.TestStorage;

        let passed: boolean = false;

        try {
          console.log("Input image: " + inputFileName);

          outPath = folder + "/" + resultFileName;
        
          if (await this.getIsExistAsync(outPath, storage)) {
              await this.deleteFileAsync(outPath, storage);
          }

          await this.copyInputFile(inputFileName, resultFileName, folder, storage);

          const request: imaging.PostTiffAppendRequest = new imaging.PostTiffAppendRequest({ name: resultFileName, appendFile: inputFileName, storage, folder});
          await this.imagingApi.postTiffAppend(request);

          const resultInfo = await this.getStorageFileInfo(folder, resultFileName, storage);
          if (resultInfo == null) {
                  throw new Error(
                      `Result file ${resultFileName} doesn't exist in the specified storage folder: ${folder}. Result isn't present in the storage by an unknown reason.`);
          }

          const resultProperties = await this.imagingApi.getImageProperties(
            new imaging.GetImagePropertiesRequest({ name: resultFileName, folder, storage }));
          expect(resultProperties).toBeTruthy();
          const originalProperties = await this.imagingApi.getImageProperties(
            new imaging.GetImagePropertiesRequest({ name: inputFileName, folder, storage }));
          expect(originalProperties).toBeTruthy();

          expect(resultProperties).toBeTruthy();
          expect(originalProperties).toBeTruthy();
          expect(resultProperties.tiffProperties).toBeTruthy();
          expect(originalProperties.tiffProperties).toBeTruthy();
          expect(originalProperties.tiffProperties.frames.length * 2).toEqual(resultProperties.tiffProperties.frames.length);
          expect(originalProperties.width).toEqual(resultProperties.width);
          expect(originalProperties.height).toEqual(resultProperties.height);

          passed = true;

      } catch (e) {
          ApiTester.FailedAnyTest = true;
          console.log(e);
          throw e;
      } finally {
          if (!ApiTester.FailedAnyTest && passed && this.RemoveResult && await this.getIsExistAsync(outPath, storage)) {
             await this.deleteFileAsync(outPath, storage);
          }

          console.log(`Test passed: ${passed}`);
      }
    }
}

const testClass: TiffApiTests = new TiffApiTests();

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
    "TiffTestSuite_V1_V2",
    (saveResultToStorage) => {
        test(`getImageTiffTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageTiffTest(saveResultToStorage);
        });

        test(`postImageTiffTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageTiffTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

test(`getTiffToFaxTest`, async () => {
    await testClass.getTiffToFaxTest();
});

test(`postTiffAppendTest`, async () => {
    await testClass.postTiffAppendTest();
});
