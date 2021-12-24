import {injectable} from 'inversify';
import {IPuntajeService} from "./interfaces/IPuntajeService";
import {createQueryBuilder, getManager} from "typeorm";
import {plainToClass} from "class-transformer";
import {Puntajes} from "../entities/Puntajes";
import {Temas} from "../entities/Temas";
import {PuntajeModel} from "../models/PuntajeModel";


@injectable()
export class PuntajeService implements IPuntajeService {
    constructor() {}


    }
