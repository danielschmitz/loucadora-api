import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categorias/categoria.entity';
import { CategoriaModule } from 'src/categorias/categoria.module';
import { CategoriaService } from 'src/categorias/categoria.service';
import { FilmeController } from './filme.controller';
import { Filme } from './filme.entity';
import { FilmeService } from './filme.service';

@Module({
    imports: [TypeOrmModule.forFeature([Filme]), CategoriaModule ],
    controllers: [FilmeController],
    providers: [FilmeService],
})
export class FilmeModule {}
