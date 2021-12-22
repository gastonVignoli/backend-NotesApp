import {Container} from "inversify";
import EjemploTypes from "./types/types";
import {EjemploServiceBis} from "./EjemploServiceBis";
import {IEjemploService} from "./interfaces/IEjemploService";
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {AlumnoService} from "./AlumnoService";

const container = new Container();


// @ts-ignore
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);
container.bind<IAlumnoService>(EjemploTypes.Alumno).to(AlumnoService);

export default container;