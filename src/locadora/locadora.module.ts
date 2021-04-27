import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './controllers/categoria';
import { FilmeController } from './controllers/filme';
import { Categoria } from './entities/categoria.entity';
import { Filme } from './entities/filme.entity';
import { CategoriaService } from './services/categoria';
import { FilmeService } from './services/filme';

@Module({
    imports: [TypeOrmModule.forFeature([Categoria, Filme])],
    controllers: [CategoriaController,FilmeController],
    providers: [CategoriaService,FilmeService],
})
export class LocadoraModule {}
