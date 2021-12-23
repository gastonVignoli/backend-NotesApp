import {Request, Response} from 'express';
import {AlumnoService} from "../services/AlumnoService";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import HttpStatusCode from "../enums/HttpStatusCode";
import {ReplSet} from "typeorm";
import * as http from "http";




let _alumnoSevice = container.get<AlumnoService>(EjemploTypes.Alumno)

export async function obtenerAlumnos(request: Request, response: Response) {
    try {
        let respuesta = await _alumnoSevice.obtenerAlumnos();
        if (respuesta) {
            return response.status(HttpStatusCode.OK).json(respuesta);
        } else {
            return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron datos");
        }
    } catch (error) {
        return response.status(HttpStatusCode.CONFLICT).json(error)
    }
}

    export async function obtenerAlumnoCuil(request: Request, response: Response) {
        try {
            let respuesta = await _alumnoSevice.obtenerAlumnoCuil(+request.params.cuil);
            console.log(respuesta)
            if (respuesta.length > 0) {
                return response.status(HttpStatusCode.OK).json(respuesta);
            } else {
                return response.status(HttpStatusCode.NOT_FOUND).json("No se encontraron datos");
            }
        } catch (error) {
            return response.status(HttpStatusCode.CONFLICT).json(error)
        }
    }


export async function crearAlumno(request: Request, response: Response) {
    try{
        let body = request.body;
        return response.status(HttpStatusCode.OK).json(await _alumnoSevice.crearAlumno(body))
    }catch (e) {
        return response.sendStatus(HttpStatusCode.CONFLICT);
    }
}

        export const AlumnoController = {
            obtenerAlumnos,
            obtenerAlumnoCuil,
            crearAlumno,
        }

