
export function getFileUrl(file?: Express.Multer.File) {
    const url = 'http://localhost:3000/static/';
    const filename = file?.filename || 'not-avaible.png';
    return url+filename;
}