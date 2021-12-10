// @ts-ignore
import Express, { Request, Response } from 'express';
// @ts-ignore
import bodyParser from 'body-parser';
import 'dotenv/config';
import { AppRoutes } from './routes';

const app = Express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

AppRoutes.forEach((route) => {
   app.use(
       route.path,
       (request: Request, response: Response, next: Function) => {
           route
               .action(request, response)
               .then(() => next)
               .catch((err) => next(err));
       }
   )
});

//Iniciamos el servidor express
const startServer = async () => {
    // @ts-ignore
    await app.listen(process.env.PORT || 8080, () => {
        // @ts-ignore
        console.log(`Server running on http://127.0.0.1:${ process.env.PORT }`);
    });
};

(async () => {
    await startServer();
})();
