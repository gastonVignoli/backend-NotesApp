import {Expose} from "class-transformer";

export class AlumnoModel {
    @Expose({name: "id_alumno"})
    id_alumno: number;

    @Expose({name: "id_persona"})
    id_persona: number;

    @Expose({name: "id_reparticion"})
    id_reparticion: number | null;

    @Expose({name: "cuil"})
    cuil: number | null;

    @Expose({name: "nombre"})
    nombre: string;

    @Expose({name: "apellido"})
    apellido: string;

    @Expose({name: "edad"})
    edad: number | null;


    constructor(id_alumno: number, id_persona: number, id_reparticion: number | null, cuil: number | null, nombre: string, apellido: string, edad: number | null) {
        this.id_alumno = id_alumno;
        this.id_persona = id_persona;
        this.id_reparticion = id_reparticion;
        this.cuil = cuil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}