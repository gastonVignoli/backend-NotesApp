import {Container} from "inversify";
import EjemploTypes from "./types/types";
import {EjemploServiceBis} from "./EjemploServiceBis";
import {IEjemploService} from "./interfaces/IEjemploService";
import {IAlumnoService} from "./interfaces/IAlumnoService";
import {AlumnoService} from "./AlumnoService";
import {IPuntajeService} from "./interfaces/IPuntajeService";
import {PuntajeService} from "./PuntajeService";
import {IProfesorService} from "./interfaces/IProfesorService";
import {ProfesorService} from "./ProfesorService";
import {INotesService} from "./interfaces/INotesService";
import {NotesService} from "./NotesService";

const container = new Container();


// @ts-ignore
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);
container.bind<IAlumnoService>(EjemploTypes.Alumno).to(AlumnoService);
container.bind<IPuntajeService>(EjemploTypes.Puntaje).to(PuntajeService);
container.bind<IProfesorService>(EjemploTypes.Profesor).to(ProfesorService);
container.bind<INotesService>(EjemploTypes.Note).to(NotesService);

export default container;
