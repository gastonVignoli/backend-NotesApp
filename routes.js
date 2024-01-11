"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var NotesController_1 = require("./src/controllers/NotesController");
const {getNotes} = require("./src/controllers/NotesController");
exports.AppRoutes = [

    // . ---------------
    {
        path: '/getNotes',
        method: 'get',
        action: NotesController_1.NotesController.getNotes,
    },
// This route is for creating a note. ---------------
    {
        path: '/createNote',
        method: 'post',
        action: NotesController_1.NotesController.createNote,
    },

    // This route is for editig a note..---------------
    {
        path: '/updateNote/',
        method: 'post',
        action: NotesController_1.NotesController.updateNote,
    },

    // This route is for deleting a note. ---------------
    {
        path: '/deleteNote/:idNote',
        method: 'get',
        action: NotesController_1.NotesController.deleteNote,
    },

];
//# sourceMappingURL=routes.js.map