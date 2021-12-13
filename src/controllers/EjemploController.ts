// @ts-ignore
import {Request, Response} from 'express';
import {PersonaModel} from "../models/PersonaModel";
import {EjemploService} from "../services/EjemploService";
import {EjemploServiceBis} from "../services/EjemploServiceBis";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";

let _ejemploService = container.get<EjemploServiceBis>(EjemploTypes.Ejemplo)

export async function ejemploAction(request: Request, response: Response) {
    /*    let service: EjemploService = new EjemploService();
        return service.ejemploAction(request, response);*/
    let service: EjemploServiceBis = new EjemploServiceBis();
    return response.status(200).json(
        service.ejemplo()
    )
}

export async function ejemploActionConParametros(request: Request, response: Response) {
    /*let service: EjemploService = new EjemploService();
    return service.ejemploActionConParametros(request, response);*/

    /*let service: EjemploServiceBis = new EjemploServiceBis();
    return response.status(200).json(
        await service.ejemploConParametros(request.params.nombre, request.params.apellido)
    );*/
    return response.status(200).json(
        await _ejemploService.ejemploConParametros(request.params.nombre, request.params.apellido)
    );
}

export async function ejemploActionConQParametros(request: Request, response: Response) {
    let service: EjemploService = new EjemploService();
    return service.ejemploActionConQParametros(request, response);
}

export async function ejemploActionPost(request: Request, response: Response) {
    /*let service: EjemploService = new EjemploService();
    return service.ejemploActionPost(request, response);*/

    let service: EjemploServiceBis = new EjemploServiceBis();
    return response.status(200).json(
        service.ejemploPost(request.body)
    );
}

export async function obtenerTemas(request: Request, response: Response) {
    return response.status(200).json(await _ejemploService.obtenerTemas());
}

export async function obtenerReparticiones(request: Request, response: Response) {
    return response.status(200).json(await _ejemploService.obtenerReparticiones());
}


export async function obtenerReparticionesPorNombre(request: Request, response: Response) {
    return response.status(200).json(await _ejemploService.obtenerReparticionesPorNombre());
}

export async function obtenerTemasPorSP(request: Request, response: Response) {
    return response.status(200).json(await _ejemploService.obtenerTemasPorSP(+request.params.id));
}

export const EjemploController = {
    ejemploAction,
    ejemploActionConParametros,
    ejemploActionConQParametros,
    ejemploActionPost,
    obtenerTemas,
    obtenerReparticiones,
    obtenerReparticionesPorNombre,
    obtenerTemasPorSP,
}