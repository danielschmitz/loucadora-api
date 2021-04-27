import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmeDto } from '../dto/filme';
import { Filme } from '../entities/filme.entity';

@Injectable()
export class FilmeService {

    constructor(@InjectRepository(Filme) private _filmeRepository: Repository<Filme>) { }


    findAll(): Promise<FilmeDto[]> {
        return this._filmeRepository.find();
    }

    async findById(id: number): Promise<FilmeDto> {
        return await this._filmeRepository.findOne(id);
    }

    async create(FilmeDto: FilmeDto): Promise<FilmeDto> {

        const filme = await this._filmeRepository.findOne({nome: FilmeDto.nome})
        if (filme) {
            throw new BadRequestException("O filme já existe")
        }

        return this._filmeRepository.save(FilmeDto);
    }


}
