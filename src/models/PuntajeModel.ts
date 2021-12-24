import {Expose} from "class-transformer";

export class AlumnoModel {
    @Expose({name: "id_puntaje"})
    id_puntaje: number;

    @Expose({name: "id_alumno"})
    id_alumno: number;

    @Expose({name: "id_profesor"})
    id_profesor: number;

    @Expose({name: "id_tema"})
    id_tema: number;

    @Expose({name: "interes"})
    interes: number | null;

    @Expose({name: "entendimiento"})
    entendimiento: number | null;

    @Expose({name: "valoracion"})
    valoracion: number | null;

    @Expose({name: "observaciones"})
    observaciones: string | null;


    constructor(id_puntaje: number, id_alumno: number, id_profesor: number, id_tema: number, interes: number | null, entendimiento: number | null, valoracion: number | null, observaciones: string | null) {
        this.id_puntaje = id_puntaje;
        this.id_alumno = id_alumno;
        this.id_profesor = id_profesor;
        this.id_tema = id_tema;
        this.interes = interes;
        this.entendimiento = entendimiento;
        this.valoracion = valoracion;
        this.observaciones = observaciones;
    }
}