import {EjemploController, obtenerReparticiones} from "./src/controllers/EjemploController";
import {TemasController} from "./src/controllers/TemasController";
import {AlumnoController} from "./src/controllers/AlumnoController";

export const AppRoutes = [
    {
        path: '/ejemplo',
        method: 'get',
        action: EjemploController.ejemploAction
    },
    {
        path: '/ejemploParams/:nombre/:apellido',
        method: 'get',
        action: EjemploController.ejemploActionConParametros,
    },
    {
        path: '/ejemploQParams',
        method: 'get',
        action: EjemploController.ejemploActionConQParametros,
    },
    {
        path: '/ejemploPost',
        method: 'post',
        action: EjemploController.ejemploActionPost,
    },
    // Este es el metodo oficial par ael punto 1. ---------------
    {
        path: '/obtenerTemas',
        method: 'get',
        action: TemasController.obtenerTemas,
    },
// Este es el metodo oficial par ael punto 2. ---------------
    {
        path: '/obtenerTemasPorId/:id',
        method: 'get',
        action: TemasController.obtenerTemasPorSP,
    },
// Este es el metodo oficial par ael punto 3. ---------------

    {
        path: '/obtenerAlumnos',
        method: 'get',
        action: AlumnoController.obtenerAlumnos,
    },
// Este es el metodo oficial par ael punto 4. ---------------

    {
        path: '/obtenerAlumnoCuil/:cuil',
        method: 'get',
        action: AlumnoController.obtenerAlumnoCuil,
    },
// Este es el metodo oficial par ael punto 5. ---------------


    {
        path: '/crearAlumno',
        method: 'get',
        action: AlumnoController.crearAlumno,
    },
    {
        path: '/obtenerReparticiones',
        method: 'get',
        action: EjemploController.obtenerReparticiones,
    },

    {
        path: '/obtenerReparticionesPorNombre',
        method: 'get',
        action: EjemploController.obtenerReparticionesPorNombre,
    },

    {
        path: '/ejemploParams/:idTema',
        method: 'get',
        action: EjemploController.ejemploActionConParametros,
    },
];
