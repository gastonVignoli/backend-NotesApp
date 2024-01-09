import {PersonaModel} from '../models/PersonaModel';
import {injectable} from 'inversify';
import {IEjemploService} from "./interfaces/IEjemploService";
import {getManager} from "typeorm";
import {Notes} from "../entities/Notes";
import {Reparticiones} from "../entities/Reparticiones";
import {NotesModel} from "../models/NotesModel";
import {plainToClass} from "class-transformer";



@injectable()
export class EjemploServiceBis implements IEjemploService {
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

    public async obtenerTemas(): Promise<any> {
        try {
            const t: any = await getManager()
                .createQueryBuilder(Notes, "t")
                .addSelect("t.idNote", "id")
                .addSelect("t.nombre", "nombre")
                .addSelect("t.content", "descripcion")
                .addSelect("t.duracion", "duracion")
                .orderBy("t.idNote", "DESC")
                .getRawMany();
// SELECT T.id_tema as id FROM TEMAS T ORDER BY T.id;
            return t;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    public async obtenerReparticiones(): Promise<Reparticiones[]> {
        try {
            const reparticionesRepository = await getManager().getRepository(Reparticiones);
            const p: Reparticiones[] = await reparticionesRepository.find();
            return p;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    async obtenerReparticionesPorNombre(nombre: string ='Municipalidad'): Promise<Reparticiones[]> {
        try {
            const reparticionesRepository = await getManager().getRepository(Reparticiones);
            const p: Reparticiones[] = await reparticionesRepository.find({nombre: nombre});
            return p;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async obtenerTemasPorSP(idTema: number): Promise<NotesModel> {
        try {
            let resultado: NotesModel;
            await getManager()
                .query(`CALL OBT_TEMAS(${idTema})`).then(x => {
                    let result: NotesModel;
                    result = plainToClass(NotesModel, x[0], {
                        excludeExtraneousValues: true
                    });
                    console.error(result);
                    resultado = result;
                }).catch(e => {
                    console.log("No se encontraron registros.");
                });
            return resultado;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

}
