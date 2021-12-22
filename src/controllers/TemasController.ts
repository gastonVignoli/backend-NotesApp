// @ts-ignore
import {Request, Response} from 'express';
import {PersonaModel} from "../models/PersonaModel";
import {EjemploService} from "../services/EjemploService";
import {EjemploServiceBis} from "../services/EjemploServiceBis";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo)

export async function obtenerTemas(request: Request, response: Response) {
    try {
        let respuesta = await _ejemploService.obtenerTemas();
        if (respuesta) {
            return response.status(200).json(respuesta);
        } else {
            return response.status(404).json("No se encontraron datos");
        }
        console.log(respuesta)
    } catch(error) {
        return response.status(409).json(error)
    }
    /*
        return response.status(200).json(await _ejemploService.obtenerTemas());
    */
}
export async function obtenerTemasPorSP(request: Request, response: Response) {
    return response.status(200).json(await _ejemploService.obtenerTemasPorSP(+request.params.id));
}

export const TemasController = {
    obtenerTemas,
    obtenerTemasPorSP,
}