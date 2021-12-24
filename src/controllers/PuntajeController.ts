import {Request, Response} from 'express';
import {PuntajeService} from "../services/PuntajeService";
import container from "../services/inversify.config";
import EjemploTypes from "../services/types/types";
import HttpStatusCode from "../enums/HttpStatusCode";
import {ReplSet} from "typeorm";
import * as http from "http";




let _puntajeSevice = container.get<PuntajeService>(EjemploTypes.Puntaje)




export const AlumnoController = {

}

