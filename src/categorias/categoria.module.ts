import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria.controller';
import { Categoria } from './categoria.entity';
import { CategoriaService } from './categoria.service';

/**
 * Módulo responsável em gerenciar as classes relativas a tabela de Categoria
 */
@Module({
    imports: [TypeOrmModule.forFeature([Categoria])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule.forFeature([Categoria])]
})
export class CategoriaModule { }
