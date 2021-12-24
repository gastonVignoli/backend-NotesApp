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
// Este la ruta metodo oficial para el punto 1. ---------------
    {
        path: '/obtenerTemas',
        method: 'get',
        action: TemasController.obtenerTemas,
    },
// Este es la ruta oficial para el punto 2. ---------------
    {
        path: '/obtenerTemasPorId/:id',
        method: 'get',
        action: TemasController.obtenerTemasPorSP,
    },
// Este es la ruta oficial para el punto 3. ---------------

    {
        path: '/obtenerAlumnos',
        method: 'get',
        action: AlumnoController.obtenerAlumnos,
    },
// Este es la ruta oficial para el punto 4. ---------------

    {
        path: '/obtenerAlumnoCuil/:cuil',
        method: 'get',
        action: AlumnoController.obtenerAlumnoCuil,
    },
// Este es la ruta oficial para el punto 6. (no hay punto 5)---------------

    {
        path: '/crearAlumno',
        method: 'post',
        action: AlumnoController.crearAlumno,
    },
// (no hay punto 5)
// Este es la ruta oficial para el punto 6. ---------------

    {
        path: '/eliminarAlumno/:cuil',
        method: 'get',
        action: AlumnoController.eliminarAlumno,
    },

 // Este es la ruta oficial para el punto 7.---------------

    {
        path: '/modificarAlumno/:cuil',
        method: 'post',
        action: AlumnoController.modificarAlumno,
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
