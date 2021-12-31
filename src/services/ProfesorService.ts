import {injectable} from 'inversify';
import {createQueryBuilder, getManager} from "typeorm";
import {plainToClass} from "class-transformer";
import {Profesores} from "../entities/Profesores";
import {Temas} from "../entities/Temas";
import {ProfesorModel} from "../models/ProfesorModel";
import {Personas} from "../entities/Personas";
import {IProfesorService} from "./interfaces/IProfesorService";



@injectable()
export class ProfesorService implements IProfesorService {
    constructor() {}

    public async getProfesores() {
        let resultado: ProfesorModel;
        await getManager()
            /* Este SP fue hecho de manera artesanal solo para este método, "VLI" por Vignoli */
            .query(`CALL VLI_GETPROFESORES`).then(x => {
                let result: ProfesorModel;
                result = plainToClass(ProfesorModel, x[0], {
                    excludeExtraneousValues: true
                });
                // console.log(x)
                // console.error(result);
                resultado = result;
            }).catch(e => {
                console.log("No se encontraron Profesores");
            });
        return resultado;
    }


}
