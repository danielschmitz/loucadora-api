import { CategoriasService } from './categorias/categorias.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasController } from './categorias/categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/categorias.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [AppController, CategoriasController],
  providers: [
    CategoriasService, AppService],
})
export class AppModule { }
