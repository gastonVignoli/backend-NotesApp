import {Expose} from "class-transformer";

export class PuntajeBandejaModel {
    @Expose({name: "id_puntaje"})
    idPuntaje: number;

    @Expose({name: "id_alumno"})
    idAlumno: number;

    @Expose({name: "profesor"})
    profesor: string;

    @Expose({name: "tema"})
    tema: string;

    @Expose({name: "interes"})
    interes: number | null;

    @Expose({name: "complejidad"})
    complejidad: number | null;

    @Expose({name: "entendimiento"})
    entendimiento: number | null;

    @Expose({name: "valoracion"})
    valoracion: number | null;

    @Expose({name: "observaciones"})
    observaciones: string | null;


    constructor(id_puntaje: number, id_alumno: number, profesor: string, tema: string, interes: number | null, complejidad: number | null, entendimiento: number | null, valoracion: number | null, observaciones: string | null) {
        this.idPuntaje = id_puntaje;
        this.idAlumno = id_alumno;
        this.profesor = profesor;
        this.tema = tema;
        this.interes = interes;
        this.complejidad = complejidad;
        this.entendimiento = entendimiento;
        this.valoracion = valoracion;
        this.observaciones = observaciones;
    }
}
