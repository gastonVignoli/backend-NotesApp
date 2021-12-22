import {AlumnoModel} from "../../models/AlumnoModel";

export interface IAlumnoService {

    obtenerAlumnos(): Promise<any>;

    obtenerAlumnoCuil(cuil: number): Promise<any>;



}