import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import http from 'http';
import helmet from 'helmet';
import logger from 'morgan';
import compress from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import routes from './routes/index'

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

// secure apps by setting various HTTP headers
app.use(
    helmet({ dnsPrefetchControl: false, frameguard: false, ieNoOpen: false })
);

// compress request data for easy transport
app.use(compress());
app.use(methodOverride());

// parse body params and attach them to res.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all API versions are marked here within the app
app.use('/api/v1', routes);

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Okra income app is live! at: ${PORT}`)
})