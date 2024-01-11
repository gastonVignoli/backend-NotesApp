// @ts-ignore
import {Request, Response} from 'express';
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import {NotesService} from "../services/NotesService";
import HttpStatusCode from "../enums/HttpStatusCode";

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


export const NotesController = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
}
