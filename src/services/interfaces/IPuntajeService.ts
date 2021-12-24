import {PuntajeModel} from "../../models/PuntajeModel";

export interface IPuntajeService {

    registrarPuntaje(cuerpo: any): Promise<any>;

    modificarPuntaje(cuerpo: any): Promise<any>;


}