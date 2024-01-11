import {NotesController} from "./src/controllers/NotesController";

export const AppRoutes = [


    // . ---------------
    {
        path: '/getNotes',
        method: 'get',
        action: NotesController.getNotes,
    },
// This route is for creating a note. ---------------
    {
        path: '/createNote',
        method: 'post',
        action: NotesController.createNote,
    },

    // This route is for editig a note..---------------
    {
        path: '/updateNote/',
        method: 'post',
        action: NotesController.updateNote,
    },

    // This route is for deleting a note. ---------------
    {
        path: '/deleteNote/:idNote',
        method: 'get',
        action: NotesController.deleteNote,
    },

];
