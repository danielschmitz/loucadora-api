import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CategoriaDto } from '../dto/categoria';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {

    constructor(@InjectRepository(Categoria) private _categoriaRepository: Repository<Categoria>) { }


    findAll(): Promise<CategoriaDto[]> {
        return this._categoriaRepository.find({order:{id:'ASC'}});
    }

    async findById(id: number): Promise<CategoriaDto> {
        return await this._categoriaRepository.findOne(id);
    }

    async create(categoriaDto: CategoriaDto): Promise<CategoriaDto> {

        const categoria = await this._categoriaRepository.findOne({nome: categoriaDto.nome})
        if (categoria != undefined) {
            throw new BadRequestException("A categoria já existe")
        }

        return this._categoriaRepository.save(categoriaDto);
    }

    async edit(id: number, categoriaDto: CategoriaDto) : Promise<CategoriaDto>{
        const categoriaExistente = await this._categoriaRepository.findOne({nome: categoriaDto.nome, id: Not(id)})
        if (categoriaExistente != undefined) {
            throw new BadRequestException("Não pode alterar o nome dessa categoria para uma categoria já existente")
        }

        const categoria = await this._categoriaRepository.findOne(id);
        if (categoria == undefined) {
            throw new NotFoundException("Categoria inexistente")
        }

        categoria.nome = categoriaDto.nome;

        return this._categoriaRepository.save(categoria);

    }

}
