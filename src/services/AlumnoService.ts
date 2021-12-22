import {PersonaModel} from '../models/PersonaModel';
import {injectable} from 'inversify';
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {getManager} from "typeorm";
import {plainToClass} from "class-transformer";
import {Alumnos} from "../entities/Alumnos";



@injectable()
export class AlumnoService implements IAlumnoService {
    constructor() {
    }

    public async ejemplo() {
        return 'Esto es un ejemplo.';
    }

    public async ejemploConParametros(nombre: string, apellido: string): Promise<string> {
        return `Hola ${nombre} ${apellido}`;
    }

    public async ejemploConQParametros(nombre: string, apellido: string) {
        return `Hola ${nombre} ${apellido}`;
    }

    public async ejemploPost(persona: PersonaModel) {
        return `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`;
    }

    public async obtenerAlumnos(): Promise<any> {
        try {
            const a: any = await getManager()
                .createQueryBuilder(Alumnos, "a")
                .addSelect("a.id_alumno", "id_alumno")
                .addSelect("a.id_persona", "id_persona")
                .addSelect("a.id_reparticion", "id_reparticion")
                .addSelect("a.cuil", "cuil")
                .addSelect("a.nombre", "nombre")
                .addSelect("a.apellido", "apellido")
                .addSelect("a.edad", "edad")
                .orderBy("a.id_alumno", "DESC")
                .getRawMany();
// SELECT T.id_tema as id FROM TEMAS T ORDER BY T.id;
            return a;
        } catch (e) {
            console.error(e);
            return null;
        }
    }



}
