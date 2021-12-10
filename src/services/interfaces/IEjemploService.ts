import {PersonaModel} from "../../models/PersonaModel";

export interface IEjemploService {
    ejemplo(): Promise<any>;

    ejemploConParametros(nobmre: string, apellido: string): Promise<any>

    ejemploConQParametros(nobmre: string, apellido: string): Promise<any>

    ejemploPost(persona:PersonaModel): Promise<any>
}