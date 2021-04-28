import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/categorias/categoria.entity';
import { Not, Repository } from 'typeorm';
import { FilmeDto } from './filme.dto';
import { Filme } from './filme.entity';

@Injectable()
export class FilmeService {

    constructor(
        @InjectRepository(Filme) private _filmeRepository: Repository<Filme>,
        @InjectRepository(Categoria) private _categoriaRepository: Repository<Categoria>
    ) { }


    findAll(): Promise<FilmeDto[]> {
        return this._filmeRepository.find({ relations: ['categoria'] });
    }

    async findById(id: number): Promise<FilmeDto> {
        return await this._filmeRepository.findOne(id);
    }

    async create(filmeDto: FilmeDto): Promise<FilmeDto> {

        const filme = await this._filmeRepository.findOne({ nome: filmeDto.nome })
        if (filme) {
            throw new BadRequestException("O filme já existe")
        }

        return this._filmeRepository.save(filmeDto);
    }


    async edit(id: number, filmeDto: FilmeDto): Promise<FilmeDto> {
        const filmeExistente = await this._filmeRepository.findOne({ nome: filmeDto.nome, id: Not(id) })
        if (filmeExistente != undefined) {
            throw new BadRequestException("Não pode alterar o nome dessa filme para uma filme já existente")
        }

        const filme = await this._filmeRepository.findOne(id);
        if (filme == undefined) {
            throw new NotFoundException("Filme inexistente")
        }

        filme.nome = filmeDto.nome
        
        if (filmeDto.categoria != undefined)
            filme.categoria = await this._categoriaRepository.findOne(filmeDto.categoria.id)

        return this._filmeRepository.save(filme);

    }

    async delete(id: number): Promise<void> {
        await this._filmeRepository.delete(id)
    }



}
