import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaDto } from './categorias.dto';
import { Categoria } from './categorias.entity';

@Injectable()
export class CategoriasService {


    constructor(@InjectRepository(Categoria) private _categoriaRepository: Repository<Categoria>) { }


    findAll(): Promise<CategoriaDto[]> {
        return this._categoriaRepository.find();
    }

    async findById(id: number): Promise<CategoriaDto> {
        return await this._categoriaRepository.findOne(id);
    }


}
