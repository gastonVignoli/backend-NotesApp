import {injectable} from 'inversify';
import {createQueryBuilder, getManager} from "typeorm";
import {Temas} from "../entities/Temas";
import {ITemaService} from "./interfaces/ITemaService";



@injectable()
export class TemaService implements ITemaService {
    constructor() {}

    public async getTemas() {
        try {
            const temasRepository = await getManager().getRepository(Temas);
            const p: Temas[] = await temasRepository.find();
            return p;
        } catch (e) {
            console.log(e);
            return [];
        }
    }


}
