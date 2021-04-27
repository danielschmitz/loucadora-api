import { CategoriaService } from './categorias/categoria.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaController } from './categorias/categoria.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/categoria.entity';
import { ConfigModule } from '@nestjs/config';
import { FilmeService } from './filmes/filme.service';
import { FilmeController } from './filmes/filme.controller';
import { Filme } from './filmes/filme.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: process.env.NODE_ENV == "development"
    }),
    TypeOrmModule.forFeature([Categoria, Filme]),
  ],
  controllers: [AppController, CategoriaController, FilmeController],
  providers: [
    CategoriaService, FilmeService, AppService],
})
export class AppModule { }
