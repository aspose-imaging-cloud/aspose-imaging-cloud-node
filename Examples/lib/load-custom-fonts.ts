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

import * as fs from "fs";
import * as path from "path";
import {ImagingBase} from "./imaging-base";
import {
	UploadFileRequest,
    ConvertImageRequest, 
    ImagingApi,
} from "@asposecloud/aspose-imaging-cloud";

/**
 *  Load custom fonts example.
 */
export class LoadCustomFonts extends ImagingBase {
    protected _SampleImageFileName: string = "ImageWithCustomFonts.emz";

    /**
     * Creates a new instance of the ExportImage class
     * @param imagingApi The imaging API
     * @constructor
     */
    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
        ImagingBase.PrintHeader("Export image example");
    }

    /**
     * Using custom fonts for vector image conversion example.
     */
    public async UsingCustomFontsForVectorImageConversion() {
        console.log("Export an image to another format");

        await this.UploadSampleImageToCloud();
		
		// custom fonts should be loaded to storage to 'Fonts' folder
		// 'Fonts' folder should be placed to the root of the cloud storage
		await this.UploadFontsToCloud();

        // Please refer to https://docs.aspose.cloud/display/imagingcloud/Supported+File+Formats#SupportedFileFormats-Export(SaveAs)
        // for possible output formats
        const format = "png";
        const folder = this.CloudPath; // Input file is saved at the Examples folder in the storage
        const storage = undefined; // Cloud Storage name

        const request = new ConvertImageRequest({name: this.SampleImageFileName, format, folder, storage});

        console.log(`Call Convert with params: format: ${format}`);

        const updatedImage = await this.ImagingApi.convertImage(request);
        await this.SaveUpdatedSampleImageToOutput(updatedImage, false, format);

        console.log();
    }
	
	 private async UploadFontsToCloud(){		
	    const fontsFolder = path.resolve(ImagingBase.ExampleImagesFolder, "Fonts");
		fs.readdir(fontsFolder, (err, files) => {
			if (!err){
			  files.forEach(file => {
				if (path.extname(file) == ".ttf"){
					 const fontContent = fs.readFileSync(file);
					 this.UploadFileToCloud(path.resolve("Fonts", path.basename(file)), fontContent);
				}
			  });
			}
		});
    }

    /**
     * Uploads the file to cloud.
     * @param fileName Name of the file.
     * @param file The file.
     */
    private async UploadFileToCloud(fileName: string, file: Buffer) {
        const uploadFileRequest = new UploadFileRequest({path: fileName, file: file});
        const result = await this.ImagingApi.uploadFile(uploadFileRequest);
        console.log(result.errors.length > 0
            ? `Uploading errors count: ${result.errors.length}`
            : `File ${fileName} is uploaded to cloud storage`);
    }

}

