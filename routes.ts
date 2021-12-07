import { ejemploAction, ejemploActionConParametros } from './src/controllers/EjemploController';

export const AppRoutes = [
    {
        path: '/ejemplo',
        method: 'get',
        action: ejemploAction
    },
    {
        path: '/ejemploParams/:nombre/:apellido',
        method: 'get',
        action: ejemploActionConParametros,
    },
];
