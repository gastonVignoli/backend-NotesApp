import "reflect-metadata";
import Express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { AppRoutes } from './routes';
import {connectDB} from "./database";
import cors = require('cors');
const app = Express();

/**
 * app.use(bp.json())examina las solicitudes donde Content-Type: application/json está presente el encabezado y transforma
 * la entrada JSON basada en texto en variables accesibles a JS en req.body. app.use(bp.urlencoded({extended: true})
 * hace lo mismo con las solicitudes codificadas en URL. el extended: trueprecisa que el req.bodyobjeto contendrá valores
 * de cualquier tipo en lugar de solo cadenas.
 * **/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors(
    {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }
))
AppRoutes.forEach((route) => {

    app.use(
        route.path,
        (request: Request, response: Response, next: Function) => {
            route
                .action(request, response)
                .then(() => next)
                .catch((e: any) => next(e));
        }
    );
});




// Iniciamos el servidor express
const startServer = async () => {
    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server running on http://127.0.0.1:${PORT}`);
    });
};

(async () => {
    await connectDB();
    await startServer();
})();
