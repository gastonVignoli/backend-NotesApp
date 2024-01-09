import {injectable} from 'inversify';
import {createQueryBuilder, getManager} from "typeorm";
import {Notes} from "../entities/Notes";
import {INotesService} from "./interfaces/INotesService";
import {Alumnos} from "../entities/Alumnos";
import {Personas} from "../entities/Personas";
import {Reparticiones} from "../entities/Reparticiones";
import {Puntajes} from "../entities/Puntajes";



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

    public async updateNote(cuerpo: any): Promise<any> {
        try{
            await getManager().transaction(async (transactionalEntityManager)=>{
                await transactionalEntityManager.createQueryBuilder()
                    .update(Notes).set({
                        title: cuerpo.title,
                        content: cuerpo.content,
                        archived: cuerpo.archived})
                    .where(`id_note = ${cuerpo.idNote}`)
                    .execute();
            });
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }

    public async deleteNote(idNote: number): Promise<any> {
        try{
            await getManager().transaction(async (transactionalEntityManager) => {
                //elimino nota
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
