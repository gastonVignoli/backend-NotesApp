import {Expose} from "class-transformer";

export class AlumnoModel {
    @Expose({name: "id_alumno"})
    idAlumno: number;

    @Expose({name: "id_persona"})
    id_persona: number;

    @Expose({name: "id_reparticion"})
    id_reparticion: number | null;

    @Expose({name: "reparticion"})
    reparticion: string | null;

    @Expose({name: "cuil"})
    cuil: number | null;

    @Expose({name: "nombre"})
    nombre: string;

    @Expose({name: "apellido"})
    apellido: string;

    @Expose({name: "edad"})
    edad: number | null;


    constructor(id_alumno: number, id_persona: number, id_reparticion: number | null, cuil: number | null,
                nombre: string, apellido: string, edad: number | null, reparticion: string | null) {
        this.idAlumno = id_alumno;
        this.id_persona = id_persona;
        this.id_reparticion = id_reparticion;
        this.cuil = cuil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.reparticion = reparticion
    }
}
