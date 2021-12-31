import {Request, Response} from 'express';
import {AlumnoService} from "../services/AlumnoService";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import HttpStatusCode from "../enums/HttpStatusCode";
import {ReplSet} from "typeorm";
import * as http from "http";
import {ProfesorService} from "../services/ProfesorService";




let _profesorSevice = container.get<ProfesorService>(EjemploTypes.Profesor)

    export async function getProfesores(request: Request, response: Response) {
        try {
            let respuesta = await _profesorSevice.getProfesores();
            if (respuesta) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron datos");
            }
        } catch (error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }


export const ProfesorController = {
    getProfesores

}
