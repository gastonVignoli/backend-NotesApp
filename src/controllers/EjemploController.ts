import { Request, Response } from 'express';

export async function ejemploAction(request: Request, response: Response) {
    /*    return "Esto es un ejemplo";*/

    return response.status(200).send('Esto es un ejemplo.');
}

export async function ejemploActionConParametros(request: Request, response: Response) {
    return response
        .status(201)
        .json(`Hola ${ request.params.nombre } ${ request.params.apellido }`);
}
