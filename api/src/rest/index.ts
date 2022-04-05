import express, { Application, json } from 'express';
import { envKeys } from '../interfaces';
import { router } from './routes';

const app: Application = express();


app.use(json());
app.use('/service', router);
app.get('', (req, res) =>{
    res.send('Welcome several traveler');
})

export function startServer() {
    app.listen(process.env[envKeys.PORT], () => {
        console.log('rest api avaible on: http://localhost:' + process.env[envKeys.PORT]);
    });    
}
