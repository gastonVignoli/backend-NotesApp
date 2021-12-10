import {Container} from "inversify";
import EjemploTypes from "./types/types";
import {EjemploServiceBis} from "./EjemploServiceBis";
import {IEjemploService} from "./interfaces/IEjemploService";

const container = new Container();


// @ts-ignore
container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBis);

export default container;