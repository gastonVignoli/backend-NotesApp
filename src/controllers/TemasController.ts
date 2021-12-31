// @ts-ignore
import {Request, Response} from 'express';
import {PersonaModel} from "../models/PersonaModel";
import {EjemploServiceBis} from "../services/EjemploServiceBis";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import {TemaService} from "../services/TemaService";
import HttpStatusCode from "../enums/HttpStatusCode";
import {EjemploService} from "../services/EjemploService";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo)

let _temaService = container.get<TemaService>(EjemploTypes.Tema)

    export async function obtenerTemas(request: Request, response: Response) {
        try {
            let respuesta = await _temaService.getTemas();
            if (respuesta) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron datos");
            }
        } catch(error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }

// A partir de aca son métodos que no usamos en el front que fueron ejemplos durante la clase para entender NodeJS

export async function obtenerTemasPorSP(request: Request, response: Response) {
    try {
        let respuesta = await _ejemploService.obtenerTemasPorSP(+request.params.id);
        if (respuesta) {
            return response.status(200).json(respuesta);
        } else {
            return response.status(404).json("No se encontraron datos");
        }
    } catch(error) {
        return response.status(409).json(error)
    }
    /*return response.status(200).json(await _ejemploService.obtenerTemasPorSP(+request.params.id));*/
}

export const TemasController = {
    obtenerTemas,
    obtenerTemasPorSP,
}
