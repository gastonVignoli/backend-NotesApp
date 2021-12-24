import {Request, Response} from 'express';
import {PuntajeService} from "../services/PuntajeService";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import HttpStatusCode from "../enums/HttpStatusCode";
import {ReplSet} from "typeorm";
import * as http from "http";




let _puntajeSevice = container.get<PuntajeService>(EjemploTypes.Puntaje)

    export async function registrarPuntaje(request: Request, response: Response) {
        try {
            let cuerpo = request.body
            return response.status(HttpStatusCode.OK).json(await _puntajeSevice.registrarPuntaje(cuerpo))
        } catch (e) {
            return response.sendStatus(HttpStatusCode.CONFLICT);
        }
    }

    export async function modificarPuntaje(request: Request, response: Response) {
        try {
            let cuerpo = request.body
            return response.status(HttpStatusCode.OK).json(await _puntajeSevice.modificarPuntaje(cuerpo))
        } catch (e) {
            return response.sendStatus(HttpStatusCode.CONFLICT);
        }
    }



export const PuntajeController = {

    registrarPuntaje,
    modificarPuntaje
}

