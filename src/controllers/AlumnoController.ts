// @ts-ignore
import {Request, Response} from 'express';
import {AlumnoService} from "../services/AlumnoService";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";

let _alumnoSevice = container.get<AlumnoService>(EjemploTypes.Alumno)

export async function obtenerAlumnos(request: Request, response: Response) {
    try {
        let respuesta = await _alumnoSevice.obtenerAlumnos();
        if (respuesta) {
            return response.status(200).json(respuesta);
        } else {
            return response.status(404).json("No se encontraron datos");
        }
    } catch (error) {
        return response.status(409).json(error)
    }
}

    export async function obtenerAlumnoCuil(request: Request, response: Response) {
        try {
            let respuesta = await _alumnoSevice.obtenerAlumnoCuil(+request.params.cuil);
            console.log(respuesta)
            if (respuesta.length > 0) {
                return response.status(200).json(respuesta);
            } else {
                return response.status(404).json("No se encontraron datos");
            }
        } catch (error) {
            return response.status(409).json(error)
        }
    }


export async function crearAlumno(request: Request, response: Response) {
    try {
        let respuesta = await _alumnoSevice.crearAlumno(request.body);
        return response.status(200).json(respuesta);

    } catch (error) {
        return response.status(409).json(error)
    }
}

        export const AlumnoController = {
            obtenerAlumnos,
            obtenerAlumnoCuil,
            crearAlumno,
        }

