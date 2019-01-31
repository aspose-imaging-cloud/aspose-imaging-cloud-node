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

import * as imaging from "../../../lib/api";
import { ApiTester } from "../../base/api-tester";

export abstract class TestImagingAIBase extends ApiTester {

    protected SearchContextId: string;

    protected readonly CloudTestFolderPrefix: string = "ImagingAICloudTestNodeJS";

    protected readonly OriginalDataFolder: string = "ImagingAiSdk";

    private readonly WaitTimeoutInMinutes: number = 5;

    public async beforeEach() {
        this.SearchContextId = await this.createSearchContext();
    }

    public async afterEach() {
        if (this.SearchContextId) {
            await this.deleteSearchContext(this.SearchContextId);
        }

        const isExist: boolean = await this.getIsExistAsync(this.TempFolder, this.TestStorage);

        if (isExist) {
            await this.deleteFolderAsync(this.TempFolder, this.TestStorage);
        }
    }

    protected getStoragePath(imageName: string, folder: string = ""): string {
        if (!folder) {
            folder = this.OriginalDataFolder;
        }

        return folder + "/" + imageName;
    }

    protected async createSearchContext() {
        const status = await this.imagingApi.postCreateSearchContext(new imaging.PostCreateSearchContextRequest({ storage: this.TestStorage }));
        expect("OK").toEqual(status.status.toUpperCase());
        return status.id;
    }

    protected async deleteSearchContext(searchContextId: string) {
        await this.imagingApi.deleteSearchContext(new imaging.DeleteSearchContextRequest({ searchContextId, storage: this.TestStorage}));
    }

    protected async getSearchContextStatus(searchContextId: string) {
        const status = await this.imagingApi.getSearchContextStatus(new imaging.GetSearchContextStatusRequest({ searchContextId, storage: this.TestStorage }));
        expect("OK").toEqual(status.status.toUpperCase());
        return status.searchStatus;
    }

    protected async addImageFeaturesToSearchContext(storageSourcePath: string, isFolder: boolean = false) {
        let request: imaging.PostSearchContextExtractImageFeaturesRequest;
        if (isFolder) {
            request = new imaging.PostSearchContextExtractImageFeaturesRequest({ 
                searchContextId: this.SearchContextId, imageId: "", imagesFolder: storageSourcePath, storage: this.TestStorage });
        } else {
            request = new imaging.PostSearchContextExtractImageFeaturesRequest({ 
                searchContextId: this.SearchContextId, imageId: storageSourcePath, storage: this.TestStorage });
        }

        await this.imagingApi.postSearchContextExtractImageFeatures(request);

        await this.waitSearchContextIdle();
    }

    protected async waitSearchContextIdle(maxTimeMilliseconds: number = this.WaitTimeoutInMinutes * 60 * 1000) {
        const timeout: number = 10000;
        const startTime: number = new Date().getTime();
        let status: imaging.SearchContextStatus;

        do {
            status = await this.imagingApi.getSearchContextStatus(new imaging.GetSearchContextStatusRequest({ 
                searchContextId: this.SearchContextId, storage: this.TestStorage }));
            if (status.searchStatus !== "Idle") {
                await this.sleep(timeout);
            } else {
                break;
            }
        } while ((new Date().getTime() - startTime) < maxTimeMilliseconds);
    }

    protected sleep(milliseconds: number) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    protected async runTestWithLogging(testMethodWithParams: string, testAction: () => Promise<void>) {
        let passed: boolean = false;

        console.log(testMethodWithParams);
        try {
                await testAction.call(null);
                passed = true;
            } catch (err) {
                console.log(err);
                throw err;
            }

        console.log(`Test passed: ${passed}`);
    }
}
