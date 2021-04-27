import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaDto } from './categoria.dto';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {

    constructor(@InjectRepository(Categoria) private _categoriaRepository: Repository<Categoria>) { }


    findAll(): Promise<CategoriaDto[]> {
        return this._categoriaRepository.find();
    }

    async findById(id: number): Promise<CategoriaDto> {
        return await this._categoriaRepository.findOne(id);
    }

    async create(categoriaDto: CategoriaDto): Promise<CategoriaDto> {

        const categoria = await this._categoriaRepository.findOne({nome: categoriaDto.nome})
        if (categoria) {
            throw new BadRequestException("A categoria já existe")
        }

        return this._categoriaRepository.save(categoriaDto);
    }


}
