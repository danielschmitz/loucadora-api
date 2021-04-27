import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { CategoriaDto } from './categoria.dto';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';

@Controller('categorias')
export class CategoriaController {

    constructor(private _categoriaService: CategoriaService) {}

    @Get()
    findAll(@Req() _: Request): Promise<CategoriaDto[]> {
        return this._categoriaService.findAll()
    }
    
    @Get(":id")
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        const categoria: Categoria = await this._categoriaService.findById(id)
        if (categoria == undefined) {
            throw new NotFoundException()
        }
        return categoria
    }

    @Post()
    create(@Body() categoriaDto : CategoriaDto): Promise<CategoriaDto>{
        return this._categoriaService.create(categoriaDto);
    } 

    @Put(":id")
    edit(@Param('id', ParseIntPipe) id: number, @Body() categoriaDto : CategoriaDto): Promise<CategoriaDto>{
        return this._categoriaService.edit(id, categoriaDto);
    } 

    @Delete(":id")
    async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const categoria: Categoria = await this._categoriaService.findById(id)
        if (categoria == undefined) {
            throw new NotFoundException()
        }
        await this._categoriaService.delete(id)
        return "ok"
    }
}
