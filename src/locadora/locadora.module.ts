import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categorias/categoria.controller';
import { FilmeController } from './filmes/filme.controller';
import { Categoria } from './categorias/categoria.entity';
import { Filme } from './filmes/filme.entity';
import { CategoriaService } from './categorias/categoria.service';
import { FilmeService } from './filmes/filme.service';

@Module({
    imports: [TypeOrmModule.forFeature([Categoria, Filme])],
    controllers: [CategoriaController,FilmeController],
    providers: [CategoriaService,FilmeService],
})
export class LocadoraModule {}
