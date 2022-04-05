import multer, { Multer, StorageEngine } from 'multer';

const storage: StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    }
})

export const upload: Multer = multer({ storage });
