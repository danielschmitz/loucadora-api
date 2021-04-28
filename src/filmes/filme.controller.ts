import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { FilmeDto } from './filme.dto';
import { Filme } from './filme.entity';
import { FilmeService } from './filme.service';

@Controller('filmes')
export class FilmeController {

    constructor(private _filmeService: FilmeService) {}

    @Get()
    findAll(@Req() _: Request): Promise<FilmeDto[]> {
        return this._filmeService.findAll()
    }
    
    @Get(":id")
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Filme> {
        const filme: Filme = await this._filmeService.findById(id)
        if (filme == undefined) {
            throw new NotFoundException()
        }
        return filme
    }

    @Post()
    create(@Body() FilmeDto : FilmeDto): Promise<FilmeDto>{
        return this._filmeService.create(FilmeDto);
    }

    @Put(":id")
    edit(@Param('id', ParseIntPipe) id: number, @Body() filmeDto : FilmeDto): Promise<FilmeDto>{
        return this._filmeService.edit(id, filmeDto);
    } 

    @Delete(":id")
    async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const filme: Filme = await this._filmeService.findById(id)
        if (filme == undefined) {
            throw new NotFoundException()
        }
        await this._filmeService.delete(id)
        return "ok"
    }

}
