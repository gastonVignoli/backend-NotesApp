import {injectable} from 'inversify';
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {getManager} from "typeorm";
import {plainToClass} from "class-transformer";
import {Alumnos} from "../entities/Alumnos";
import {Temas} from "../entities/Temas";
import {AlumnoModel} from "../models/AlumnoModel";


@injectable()
export class AlumnoService implements IAlumnoService {
    constructor() {
    }


    public async obtenerAlumnos(): Promise<any> {
        try {
            const alumnosRepository = await getManager().getRepository(Alumnos);
            const p: Alumnos[] = await alumnosRepository.find();
            return p;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    public async obtenerAlumnoCuil(cuil: number): Promise<AlumnoModel> {
        try {
            console.log(cuil)
            let resultado: AlumnoModel;
            await getManager()
                /*Este SP es artesanal hecho solo para este metodo, VLI por "Vignoli" */
                .query(`CALL VLI_ALUMNOSXCUIL(${cuil})`).then(x => {
                    let result: AlumnoModel;
                    result = plainToClass(AlumnoModel, x[0], {
                        excludeExtraneousValues: true
                    });
                    console.log(x)
                    console.error(result);
                    resultado = result;
                }).catch(e => {
                    console.log("No se encontraron Alumnos");
                });
            return resultado;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    public async crearAlumno(alumno: AlumnoModel) {

    }

}
