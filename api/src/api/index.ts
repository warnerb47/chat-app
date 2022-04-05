import express, { Application, json } from 'express';
import { upload } from '../config/multerConfig';
import { envKeys } from '../interfaces';
import { router } from './routes';

const app: Application = express();

app.use(express.static('public'))

app.use(json());
app.post('/upload', upload.array('avatar'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req?.files?.length });
});
app.use('/service', router);
app.get('', (req, res) =>{
    res.send('Welcome several traveler');
})

export function startServer() {
    app.listen(process.env[envKeys.PORT], () => {
        console.log('rest api avaible on: http://localhost:' + process.env[envKeys.PORT]);
    });    
}
