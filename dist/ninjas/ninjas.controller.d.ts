import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasController {
    getNinjas(type: string): {
        type: string;
    }[];
    getOneNinja(id: string): {
        id: string;
    };
    createninja(createninjadto: CreateNinjaDto): {
        name: string;
    };
    updateNinja(id: string, updateNinjadto: UpdateNinjaDto): {
        id: string;
        name: UpdateNinjaDto;
    };
    removveNinja(): {};
}
