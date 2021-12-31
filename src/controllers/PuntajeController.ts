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

    export async function obtenerPuntajeCuil(request: Request, response: Response) {
        try {
            let respuesta = await _puntajeSevice.obtenerPuntajeCuil(request.params.cuil);
            console.log(respuesta)
            if (respuesta) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron puntajes para" +
                    " el numero de CUIL ingresado");
            }
        } catch (error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }

    export async function obtenerPuntajeCuilSP(request: Request, response: Response) {
        try {
            let respuesta = await _puntajeSevice.obtenerPuntajeCuilSP(request.params.cuil);
            console.log(respuesta)
            if (respuesta) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron puntajes para" +
                    " el numero de CUIL ingresado");
            }
        } catch (error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }



export const PuntajeController = {

    registrarPuntaje,
    modificarPuntaje,
    obtenerPuntajeCuil,
    obtenerPuntajeCuilSP
}

