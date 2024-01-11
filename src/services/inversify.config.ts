import {Container} from "inversify";
import EjemploTypes from "./types/types";
import {INotesService} from "./interfaces/INotesService";
import {NotesService} from "./NotesService";

const container = new Container();


// @ts-ignore

container.bind<INotesService>(EjemploTypes.Note).to(NotesService);

export default container;
