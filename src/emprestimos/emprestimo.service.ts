import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { EmprestimoDto } from './emprestimo.dto';
import { Emprestimo } from './emprestimo.entity';

@Injectable()
export class EmprestimoService {

    constructor(@InjectRepository(Emprestimo) private _emprestimoRepository: Repository<Emprestimo>) { }


    async findAll(): Promise<Emprestimo[]> {
        return await this._emprestimoRepository.find({order:{id:'ASC'}});
    }

    async findById(id: number): Promise<Emprestimo> {
        return await this._emprestimoRepository.findOne(id);
    }

    async findByIdWithFilmes(id: number): Promise<Emprestimo> {
        return await this._emprestimoRepository.findOne(id, {relations:["filmes"]});
    }

    async create(emprestimoDto: EmprestimoDto): Promise<Emprestimo> {

        const emprestimoExistente = await this._emprestimoRepository.findOne({id: emprestimoDto.id})
        if (emprestimoExistente) {
            throw new BadRequestException("A emprestimo já existe")
        }

        return this._emprestimoRepository.save(emprestimoDto);
    }

    async edit(id: number, emprestimoDto: EmprestimoDto) : Promise<Emprestimo>{
        const emprestimoExistente = await this._emprestimoRepository.findOne({id: Not(id)})
        if (emprestimoExistente) {
            throw new BadRequestException("Não pode alterar o nome dessa emprestimo para uma emprestimo já existente")
        }

        const emprestimo = await this._emprestimoRepository.findOne(id);
        if (!emprestimo) {
            throw new NotFoundException("Emprestimo inexistente")
        }

        return this._emprestimoRepository.save(emprestimo);

    }

    async delete(id: number): Promise<void> {
        await this._emprestimoRepository.delete(id)
    }

}
