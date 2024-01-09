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


}
