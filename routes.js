"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var EjemploController_1 = require("./src/controllers/EjemploController");
var TemasController_1 = require("./src/controllers/NotesController");
var AlumnoController_1 = require("./src/controllers/AlumnoController");
var PuntajeController_1 = require("./src/controllers/PuntajeController");
var ProfesorController_1 = require("./src/controllers/ProfesorController");
const {getNotes} = require("./src/controllers/NotesController");
exports.AppRoutes = [
    {
        path: '/ejemplo',
        method: 'get',
        action: EjemploController_1.EjemploController.ejemploAction
    },
    {
        path: '/ejemploParams/:nombre/:apellido',
        method: 'get',
        action: EjemploController_1.EjemploController.ejemploActionConParametros,
    },
    {
        path: '/ejemploQParams',
        method: 'get',
        action: EjemploController_1.EjemploController.ejemploActionConQParametros,
    },
    {
        path: '/ejemploPost',
        method: 'post',
        action: EjemploController_1.EjemploController.ejemploActionPost,
    },
    // Este la ruta metodo oficial para el punto 1. ---------------
    {
        path: '/obtenerTemas',
        method: 'get',
        action: TemasController_1.NotesController.getNotes,
    },
    // Este es la ruta oficial para el punto 2. ---------------
    // {
    //     path: '/obtenerTemasPorId/:id',
    //     method: 'get',
    //     action: TemasController_1.TemasController.obtenerTemasPorSP,
    // },
    // Este es la ruta oficial para el punto 3. ---------------
    {
        path: '/obtenerAlumnos',
        method: 'get',
        action: AlumnoController_1.AlumnoController.obtenerAlumnos,
    },
    // Este es la ruta oficial para el punto 4. ---------------
    {
        path: '/obtenerAlumnoCuil/:cuil',
        method: 'get',
        action: AlumnoController_1.AlumnoController.obtenerAlumnoCuil,
    },
    // Este es la ruta oficial para el punto 6. (no hay punto 5)---------------
    {
        path: '/crearAlumno',
        method: 'post',
        action: AlumnoController_1.AlumnoController.crearAlumno,
    },
    // (no hay punto 5)
    // Este es la ruta oficial para el punto 7. ---------------
    {
        path: '/eliminarAlumno/:cuil',
        method: 'get',
        action: AlumnoController_1.AlumnoController.eliminarAlumno,
    },
    // Este es la ruta oficial para el punto 8.---------------
    {
        path: '/modificarAlumno/:cuil',
        method: 'post',
        action: AlumnoController_1.AlumnoController.modificarAlumno,
    },
    // Este es la ruta oficial para el punto 9.---------------
    {
        path: '/registrarPuntaje',
        method: 'post',
        action: PuntajeController_1.PuntajeController.registrarPuntaje,
    },
    // Este es la ruta oficial para el punto 10.---------------
    {
        path: '/modificarPuntaje',
        method: 'post',
        action: PuntajeController_1.PuntajeController.modificarPuntaje,
    },
    // Este es la ruta oficial para el punto 11.---------------
    {
        path: '/obtenerPuntajeCuil/:cuil',
        method: 'post',
        action: PuntajeController_1.PuntajeController.obtenerPuntajeCuil,
    },
    // Este es la ruta oficial para cargar los alumnos en angular.---------------
    {
        path: '/alumnos',
        method: 'get',
        action: AlumnoController_1.AlumnoController.getAlumnos,
    },
    // Este es la ruta alternativa para el punto 11.---------------
    {
        path: '/obtenerPuntajeCuilSP/:cuil',
        method: 'post',
        action: PuntajeController_1.PuntajeController.obtenerPuntajeCuilSP,
    },
    // Esta es la ruta usada para buscar los profesores desde el ForntEnd.
    {
        path: '/profesores',
        method: 'get',
        action: ProfesorController_1.ProfesorController.getProfesores,
    },
    {
        path: '/obtenerReparticiones',
        method: 'get',
        action: EjemploController_1.EjemploController.obtenerReparticiones,
    },
    {
        path: '/obtenerReparticionesPorNombre',
        method: 'get',
        action: EjemploController_1.EjemploController.obtenerReparticionesPorNombre,
    },
    {
        path: '/ejemploParams/:idTema',
        method: 'get',
        action: EjemploController_1.EjemploController.ejemploActionConParametros,
    },
];
//# sourceMappingURL=routes.js.map