ImagesCol = new FilesCollection({
    collectionName: 'Images',
    storagePath: '/data',
    debug: true,

    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 10485760) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
});
