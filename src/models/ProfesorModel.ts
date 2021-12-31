import {Expose} from "class-transformer";

export class ProfesorModel {
    @Expose({name: "id_profesor"})
    idProfesor: number;

    @Expose({name: "id_persona"})
    id_persona: number;

    @Expose({name: "id_cargo"})
    id_cargo: number | null;

    @Expose({name: "cuil"})
    cuil: number | null;

    @Expose({name: "nombre"})
    nombre: string;

    @Expose({name: "apellido"})
    apellido: string;

    @Expose({name: "edad"})
    edad: number | null;


    constructor(idProfesor: number, id_persona: number, id_cargo: number | null, cuil: number | null, nombre: string, apellido: string, edad: number | null) {
        this.idProfesor = idProfesor;
        this.id_persona = id_persona;
        this.id_cargo = id_cargo;
        this.cuil = cuil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
