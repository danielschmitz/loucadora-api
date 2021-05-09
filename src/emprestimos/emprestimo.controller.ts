import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { EmprestimoDto } from './emprestimo.dto';
import { Emprestimo } from './emprestimo.entity';
import { EmprestimoService } from './emprestimo.service';

@Controller('emprestimos')
export class EmprestimoController {

    constructor(private _emprestimoService: EmprestimoService) {}

    @Get()
    findAll(@Req() _: Request): Promise<Emprestimo[]> {
        return this._emprestimoService.findAll()
    }
    
    @Get(":id")
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Emprestimo> {
        const emprestimo: Emprestimo = await this._emprestimoService.findById(id)
        if (emprestimo == undefined) {
            throw new NotFoundException()
        }
        return emprestimo
    }

    @Get("comfilmes/:id")
    async findOneWithFilmes(@Param('id', ParseIntPipe) id: number): Promise<Emprestimo> {
        const emprestimo: Emprestimo = await this._emprestimoService.findByIdWithFilmes(id)
        if (emprestimo == undefined) {
            throw new NotFoundException()
        }
        return emprestimo
    }

    @Post()
    create(@Body() emprestimoDto : EmprestimoDto): Promise<Emprestimo>{
        return this._emprestimoService.create(emprestimoDto);
    } 

    @Put(":id")
    edit(@Param('id', ParseIntPipe) id: number, @Body() emprestimo : EmprestimoDto): Promise<Emprestimo>{
        return this._emprestimoService.edit(id, emprestimo);
    } 

    @Delete(":id")
    async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const emprestimo: Emprestimo = await this._emprestimoService.findById(id)
        if (emprestimo == undefined) {
            throw new NotFoundException()
        }
        await this._emprestimoService.delete(id)
        return "ok"
    }
}
