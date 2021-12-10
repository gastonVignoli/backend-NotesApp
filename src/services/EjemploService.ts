import {Request, Response} from "express";
import {PersonaModel} from "../models/PersonaModel";

export class EjemploService {
    constructor() {
    }

    public async ejemploAction(request: Request, response: Response) {
        return response.status(200).json("Esto es un ejemplo.")
    }

    public async ejemploActionConParametros(request: Request, response: Response) {
        const result = `Hola mi nombre es ${request.params.nombre} ${request.params.apellido}`
        return response
            .status(201)
            .send(result);
    }

    public async ejemploActionConQParametros(request: Request, response: Response) {
        const result = `Hola mi nombre es ${request.query.nombre} ${request.query.apellido}`
        return response
            .status(201)
            .json(result);
    }

    public async ejemploActionPost(request: Request, response: Response) {
        let persona: PersonaModel = request.body;
        return response
            .status(201)
            .json(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad}`);
    }

}