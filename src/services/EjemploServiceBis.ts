import {PersonaModel} from "../models/PersonaModel";
import {injectable} from "inversify";
import {IEjemploService} from "./interfaces/IEjemploService";


@injectable()

export class EjemploServiceBis implements IEjemploService{
    constructor() {
    }

    public async ejemplo() {
        return "Esto es un ejemplo.";
    }

    public async ejemploConParametros(nobmre: string, apellido: string): Promise<string> {
        return `Hola ${nobmre} ${apellido}`;
    }
    public async ejemploConQParametros(nobmre: string, apellido: string){
        return `Hola ${nobmre} ${apellido}`;
    }
    public async ejemploPost(persona: PersonaModel) {
        return `Hola ${persona.nombre} ${persona.apellido} y tengo ${persona.edad}`;
    }


}