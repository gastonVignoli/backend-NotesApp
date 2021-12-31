import {EjemploController, obtenerReparticiones} from "./src/controllers/EjemploController";
import {TemasController} from "./src/controllers/TemasController";
import {AlumnoController} from "./src/controllers/AlumnoController";
import {modificarPuntaje, PuntajeController} from "./src/controllers/PuntajeController";
import {ProfesorController} from "./src/controllers/PorfesorController";

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
// Este es la ruta oficial para el punto 7. ---------------

    {
        path: '/eliminarAlumno/:cuil',
        method: 'get',
        action: AlumnoController.eliminarAlumno,
    },

 // Este es la ruta oficial para el punto 8.---------------

    {
        path: '/modificarAlumno/:cuil',
        method: 'post',
        action: AlumnoController.modificarAlumno,
    },
 // Este es la ruta oficial para el punto 9.---------------

    {
        path: '/registrarPuntaje',
        method: 'post',
        action: PuntajeController.registrarPuntaje,
    },
// Este es la ruta oficial para el punto 10.---------------

    {
        path: '/modificarPuntaje',
        method: 'post',
        action: PuntajeController.modificarPuntaje,
    },
// Este es la ruta oficial para el punto 11.---------------

    {
        path: '/obtenerPuntajeCuil/:cuil',
        method: 'post',
        action: PuntajeController.obtenerPuntajeCuil,
    },
// Este es la ruta oficial para cargar los alumnos en angular.---------------

    {
        path: '/alumnos',
        method: 'get',
        action: AlumnoController.getAlumnos,
    },
// Este es la ruta alternativa para el punto 11.---------------

    {
        path: '/obtenerPuntajeCuilSP/:cuil',
        method: 'post',
        action: PuntajeController.obtenerPuntajeCuilSP,
    },

// Esta es la ruta usada para buscar los profesores desde el ForntEnd.

    {
        path: '/profesores',
        method: 'get',
        action: ProfesorController.getProfesores,
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
