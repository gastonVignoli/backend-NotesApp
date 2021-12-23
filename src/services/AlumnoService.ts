import {injectable} from 'inversify';
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {getManager} from "typeorm";
import {plainToClass} from "class-transformer";
import {Alumnos} from "../entities/Alumnos";
import {Temas} from "../entities/Temas";
import {AlumnoModel} from "../models/AlumnoModel";
import {Personas} from "../entities/Personas";
import {Reparticiones} from "../entities/Reparticiones";


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

    public async obtenerAlumnoCuil(cuil: number): Promise<any> {
        try {
            console.log(cuil)
            let resultado: AlumnoModel;
            await getManager()
                /*Este SP es artesanal hecho solo para este metodo, "VLI" por Vignoli */
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


    public async crearAlumno(body: any): Promise<any>{
        try{
            let alumno: Alumnos = new Alumnos();
            let persona: Personas = new Personas();
            let reparticion: Reparticiones = await  this.obtenerReparticionesPorNombre(body.reparticion);
            persona.nombre = body.nombre;
            persona.apellido = body.apellido;
            persona.edad = body.edad;
            persona.cuil = body.cuil;
            alumno.idReparticion2 = reparticion;
            await getManager().transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.save(persona);
                alumno.idPersona2 = persona;
                await transactionalEntityManager.save(alumno);
                console.log(alumno);
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }

    }

    private async obtenerReparticionesPorNombre(nombre: string): Promise<any>{
        let repositoryReparticiones = getManager().getRepository(Reparticiones);
        return repositoryReparticiones.findOne({nombre: nombre});
    }
}
