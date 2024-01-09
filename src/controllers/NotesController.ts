// @ts-ignore
import {Request, Response} from 'express';
import {PersonaModel} from "../models/PersonaModel";
import {EjemploServiceBis} from "../services/EjemploServiceBis";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import {NotesService} from "../services/NotesService";
import HttpStatusCode from "../enums/HttpStatusCode";
import {EjemploService} from "../services/EjemploService";

let _notesService = container.get<NotesService>(EjemploTypes.Note)

    export async function getNotes(request: Request, response: Response) {
        try {
            let respuesta = await _notesService.getNotes();
            if (respuesta) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron datos");
            }
        } catch(error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }

export async function createNote(request: Request, response: Response) {
    try {
        let body = request.body;
        return response.status(HttpStatusCode.OK).json(await _notesService.createNote(body))
    } catch (e) {
        return response.sendStatus(HttpStatusCode.CONFLICT);
    }
}

export async function updateNote(request: Request, response: Response) {
    try {
        let cuerpo = request.body
        return response.status(HttpStatusCode.OK).json(await _notesService.updateNote(cuerpo))
    } catch (e) {
        return response.sendStatus(HttpStatusCode.CONFLICT);
    }
}

export async function deleteNote(request: Request, response: Response) {
    try {
        return response.status(HttpStatusCode.OK).json(await _notesService.deleteNote(+request.params.idNote))
    } catch (e) {
        return response.sendStatus(HttpStatusCode.CONFLICT);
    }
}

// A partir de aca son métodos que no usamos en el front que fueron ejemplos durante la clase para entender NodeJS
//
// export async function obtenerTemasPorSP(request: Request, response: Response) {
//     try {
//         let respuesta = await _ejemploService.obtenerTemasPorSP(+request.params.id);
//         if (respuesta) {
//             return response.status(200).json(respuesta);
//         } else {
//             return response.status(404).json("No se encontraron datos");
//         }
//     } catch(error) {
//         return response.status(409).json(error)
//     }
//     /*return response.status(200).json(await _ejemploService.obtenerTemasPorSP(+request.params.id));*/
// }

export const NotesController = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    // obtenerTemasPorSP,
}
