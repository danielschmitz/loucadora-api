import { CategoriasService } from './categorias/categorias.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasController } from './categorias/categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/categorias.entity';
import { ConfigModule } from '@nestjs/config';

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
    TypeOrmModule.forFeature([Categoria]),
  ],
  controllers: [AppController, CategoriasController],
  providers: [
    CategoriasService, AppService],
})
export class AppModule { }
