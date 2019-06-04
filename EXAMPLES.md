### Imaging - Save as: convert image from storage to another format
```ts
// optional parameters are base URL, API version and debug mode
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
        
try {
    // get local image
    const localInputImage = fs.readFileSync("test.png");

    // upload local image to storage
    const uploadFileRequest =
        new imaging.UploadFileRequest({ path: "ExampleFolderNet/inputImage.png", file: localInputImage });
    const result: imaging.FilesUploadResult = await imagingApi.uploadFile(uploadFileRequest);
    // inspect result.errors list if there were any
    // inspect result.uploaded list for uploaded file names

    // convert image from storage to JPEG
     const getSaveAsRequest =
        new imaging.GetImageSaveAsRequest({
            name: "inputImage.png", format: "jpg", folder: "ExampleFolderNet" });

    const convertedFile =
        await imagingApi.getImageSaveAs(getSaveAsRequest);

    // process resulting image
    // for example, save it to storage
    uploadFileRequest =
        new imaging.UploadFileRequest({ path: "ExampleFolderNet/resultImage.jpg", file: convertedFile });
    result = await imagingApi.uploadFile(uploadFileRequest);
    // inspect result.errors list if there were any
    // inspect result.uploaded list for uploaded file names
} finally {
    // remove files from storage
    await imagingApi.deleteFile(
        new imaging.DeleteFileRequest({ path: "ExampleFolderNet/inputImage.png" }));
    await imagingApi.deleteFile(
        new imaging.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
}

// other Imaging requests typically follow the same principles regarding stream/storage relations
```

### Imaging - Save as: convert image from stream to another format
```ts
// optional parameters are base URL, API version and debug mode
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
        
try {
    // get local image
    const localInputImage = fs.readFileSync("test.png");

    // convert image from request stream to JPEG and save it to storage
    // please, use outPath parameter for saving the result to storage
    const postSaveToStorageRequest =
        new imaging.PostImageSaveAsRequest({
    imageData: localInputImage, format: "jpg", outPath: "ExampleFolderNet/resultImage.jpg" });

    await imagingApi.postImageSaveAs(postSaveToStorageRequest);

    // download saved image from storage and process it
    const savedFile =
       await imagingApi.downloadFile(
           new imaging.DownloadFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
    
    // convert image from request stream to JPEG and read it from resulting stream
    // please, set outPath parameter as null to return result in request stream instead of saving to storage
    const postSaveToStreamRequest =
        new imaging.PostImageSaveAsRequest({ imageData: localInputImage, format: "jpg", outPath: null });

    // process resulting image from response stream
    const resultPostImageStream = await imagingApi.postImageSaveAs(postSaveToStreamRequest);
} finally {
    // remove files from storage
    await imagingApi.deleteFile(
        new imaging.DeleteFileRequest({ path: "ExampleFolderNet/resultImage.jpg" }));
}

// other Imaging requests typically follow the same principles regarding stream/storage relations
```

### Imaging.AI - Compare two images
```ts
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(
    new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// specify images for comparing (image ID is a path to image in storage)
const imageInStorage1 = "WorkFolder\Image1.jpg";
const imageInStorage2 = "WorkFolder\Image2.jpg";
  
// compare images
const response = await imagingApi.postSearchContextCompareImages(
    new imaging.PostSearchContextCompareImagesRequest({ 
        searchContextId, imageId1: imageInStorage1, imageId2: imageInStorage2 }));
const similarity = response.results[0].similarity;
```

### Imaging.AI - Find similar images
```ts
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(
    new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({ 
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(
    new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const imageFromStorage: boolean = true;
 
let results: imaging.SearchResultsSet;
if (imageFromStorage) {
    // use search image from storage
    const storageImageId = "searhImage.jpg";
    results = await imagingApi.getSearchContextFindSimilar(
        new imaging.GetSearchContextFindSimilarRequest({ 
            searchContextId: apiResponse.id, similarityThreshold: 90,
                maxCount: 5, imageData: null, imageId: storageImageId }));
} else {
    // load search image as a stream
    const imageStream: Buffer = fs.readFileSync("yourLocalImagePath");
    results = await imagingApi.getSearchContextFindSimilar(
            new imaging.GetSearchContextFindSimilarRequest({ 
                searchContextId: apiResponse.id, similarityThreshold: 90, 
                    maxCount: 5, imageData: imageStream }));
}
             
// process search results
for (const searchResult of results.results) {
   console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Find duplicate images
```ts
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(
    new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({ 
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(
    new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    

// request finding duplicates
const response = await imagingApi.getSearchContextFindDuplicates(
    new imaging.GetSearchContextFindDuplicatesRequest({ searchContextId, similarityThreshold: 90 }));
 
// process duplicates search results
for (const duplicates of response.duplicates) {
    console.log("Duplicates:");
    for (const duplicate of duplicates.duplicateImages) { 
        console.log(
           `ImageName: ${duplicate.imageId}, Similarity: ${duplicate.similarity}`);
    }
}
```

### Imaging.AI - Search images by tags
```ts
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(
    new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({
        searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(
    new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
        await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const tag = "MyTag";
// load tag image as a stream
const tagImageStream: Buffer = fs.readFileSync("yourLocalImage");
await imagingApi.postSearchContextAddTag(
    new imaging.PostSearchContextAddTagRequest({ 
        imageData: tagImageStream, searchContextId, tagName: tag }));
 
// serialize search tags collection to JSON
const searchTags = JSON.stringify([ tag ]);
 
// search images by tags
const response = await imagingApi.postSearchContextFindByTags(
    new imaging.PostSearchContextFindByTagsRequest({ 
        tags: searchTags, searchContextId, similarityThreshold: 90, maxCount: 10 }));
 
// process search results
for (const searchResult of response.results) {
    console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Delete search context
```ts
// search context is stored in the storage, and in case if search context is not needed anymore it should be removed
await imagingApi.deleteSearchContext(new imaging.DeleteSearchContextRequest({ searchContextId }));
```

### Exception handling and error codes
```ts
try {
    await imagingApi.deleteSearchContext(
        new imaging.DeleteSearchContextRequest({ searchContextId: "xxx" }));
} catch (err) {
    console.log(`Error status code: ${err.statusCode}`);
    console.log(`Error message: ${err.message}`);
    // inspect err.error
}
```