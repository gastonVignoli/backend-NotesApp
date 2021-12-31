import {injectable} from 'inversify';
import {IPuntajeService} from "./interfaces/IPuntajeService";
import {createQueryBuilder, getManager} from "typeorm";
import {Puntajes} from "../entities/Puntajes";
import {Personas} from "../entities/Personas";
import {Alumnos} from "../entities/Alumnos";
import {AlumnoModel} from "../models/AlumnoModel";
import {plainToClass} from "class-transformer";
import {PuntajeBandejaModel} from "../models/PuntajeBandejaModel";


@injectable()
export class PuntajeService implements IPuntajeService {
    constructor() {}


    public async registrarPuntaje(cuerpo: any): Promise<any> {
        try{
            let puntaje: Puntajes = new Puntajes();
            // aca para cargar un puntaje es necesario poner todo por id , si despues queda tiempo se puede cambiar
            puntaje.idPuntaje = cuerpo.idPuntaje;
            puntaje.idAlumno = cuerpo.idAlumno;
            puntaje.idProfesor = cuerpo.idProfesor;
            puntaje.idTema = cuerpo.idTema;
            puntaje.interes = cuerpo.interes;
            puntaje.complejidad = cuerpo.complejidad;
            puntaje.entendimiento = cuerpo.entendimiento;
            puntaje.valoracion = cuerpo.valoracion;
            puntaje.observaciones = cuerpo.observaciones
            await getManager().transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.save(puntaje);
                console.log(puntaje);
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }

    public async modificarPuntaje(cuerpo: any): Promise<any> {
        try{
            await getManager().transaction(async (transactionalEntityManager)=>{
                await transactionalEntityManager.createQueryBuilder()
                    .update(Puntajes).set({
                        idPuntaje: cuerpo.idPuntaje,
                        idAlumno: cuerpo.idAlumno,
                        idProfesor: cuerpo.idProfesor,
                        idTema: cuerpo.idTema,
                        interes: cuerpo.interes,
                        complejidad: cuerpo.complejidad,
                        entendimiento: cuerpo.entendimiento,
                        valoracion: cuerpo.valoracion,
                        observaciones: cuerpo.observaciones})
                    .where(`id_puntaje = ${cuerpo.idPuntaje}`)
                    .execute();
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }

    public async obtenerPuntajeCuil(cuil: string): Promise<any> {
        try {

            let idPersona = await this.obtenerPersonaPorCuil(cuil);
            let idAlumno =  await this.obtenerAlumnoPorIdPersona(idPersona)

            const repositoryPuntajes = getManager().getRepository(Puntajes)
            const puntaje = await repositoryPuntajes.find({where: {idAlumno : idAlumno}})
            return puntaje

        } catch (error) {
            console.log(`------------------Hubo un Error: ------------------${error}`)
            return "No se encontraron datos"
        }
    }

    private async obtenerPersonaPorCuil(cuil: string) {
        let persona: Personas[] = await getManager().getRepository(Personas)
            .find({cuil: cuil});
        let idPersona : number = persona[0].idPersona;
        return idPersona;    }

    private async obtenerAlumnoPorIdPersona(idPersona: number) {
        let alumno: Alumnos[] = await getManager().getRepository(Alumnos)
            .find({idPersona: idPersona});
        let idAlumno : number = alumno[0].idAlumno;
        return idAlumno;

    }

    public async obtenerPuntajeCuilSP(cuil:string): Promise<any> {
        try {
            console.log(`El cuil que llego al service del BackEnd es: ${cuil}`)
            let resultado: PuntajeBandejaModel;
            await getManager()
                /* Este SP fue hecho de manera artesanal solo para este método, "VLI" por Vignoli */
                .query(`CALL VLI_PUNTAJESXCUIL(${cuil})`).then(x => {
                    let result: PuntajeBandejaModel;
                    result = plainToClass(PuntajeBandejaModel, x[0], {
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
}
