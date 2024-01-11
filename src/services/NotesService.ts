import {injectable} from 'inversify';
import {createQueryBuilder, getManager} from "typeorm";
import {Notes} from "../entities/Notes";
import {INotesService} from "./interfaces/INotesService";




@injectable()
export class NotesService implements INotesService {
    constructor() {}

    public async getNotes() {
        try {
            const notesRepository = await getManager().getRepository(Notes);
            const p: Notes[] = await notesRepository.find();
            return p;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    public async createNote(body: any): Promise<any>{
        try{
            let note: Notes = new Notes();
            note.title = body.title;
            note.content = body.content;
            note.archived = false;
            await getManager().transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.save(note);
                console.log(note);
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }

    public async updateNote(body: any): Promise<any> {
        try{
            await getManager().transaction(async (transactionalEntityManager)=>{
                await transactionalEntityManager.createQueryBuilder()
                    .update(Notes).set({
                        title: body.title,
                        content: body.content,
                        archived: body.archived})
                    .where(`id_note = ${body.idNote}`)
                    .execute();
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }

    public async deleteNote(idNote: number): Promise<boolean> {
        try{
            await getManager().transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.createQueryBuilder()
                    .delete()
                    .from(Notes)
                    .where(`id_note = ${idNote}`)
                    .execute();
            });
            return true;
        }catch (e){
            console.error(e);
            return false;
        }
    }

}
