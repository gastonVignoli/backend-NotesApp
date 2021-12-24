import {injectable} from 'inversify';
import {IPuntajeService} from "./interfaces/IPuntajeService";
import {createQueryBuilder, getManager} from "typeorm";
import {Puntajes} from "../entities/Puntajes";
import {Personas} from "../entities/Personas";
import {Alumnos} from "../entities/Alumnos";


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
            console.log("Felicitaciones Ud. llego al servicio! --------------------------------------------------------------------------+++++++++++++++++++++++++++++++++")
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
}
