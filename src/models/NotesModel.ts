import {Expose} from "class-transformer";

export class NotesModel {
    @Expose({name: "id_note"})
    idNote: number;

    @Expose({name: "title"})
    title: string | null;

    @Expose({name: "content"})
    content: string | null;




    constructor(idNote: number, title: string | null, content: string | null) {
        this.idNote = idNote;
        this.title = title;
        this.content = content;
    }
}