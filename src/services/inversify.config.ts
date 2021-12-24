import {Container} from "inversify";
import EjemploTypes from "./types/types";
import {EjemploServiceBis} from "./EjemploServiceBis";
import {IEjemploService} from "./interfaces/IEjemploService";
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {AlumnoService} from "./AlumnoService";
import {IPuntajeService} from "./interfaces/IPuntajeService";
import {PuntajeService} from "./PuntajeService";

const container = new Container();


// @ts-ignore
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);
container.bind<IAlumnoService>(EjemploTypes.Alumno).to(AlumnoService);
container.bind<IPuntajeService>(EjemploTypes.Puntaje).to(PuntajeService);

export default container;