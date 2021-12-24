import {AlumnoModel} from "../../models/AlumnoModel";

export interface IAlumnoService {

    obtenerAlumnos(): Promise<any>;

    obtenerAlumnoCuil(cuil: number): Promise<any>;

    crearAlumno(body: any): Promise<any>;

    eliminarAlumno(cuil: string): Promise<any>;

    modificarAlumno(cuil: string, body: any): Promise<any>;



}