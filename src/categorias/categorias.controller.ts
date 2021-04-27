import { Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Request } from 'express';
import { CategoriaDto } from './categorias.dto';
import { Categoria } from './categorias.entity';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {

    constructor(private _categoriaService: CategoriasService) {}

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


}
