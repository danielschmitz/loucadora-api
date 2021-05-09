import { FilmeModule } from './filmes/filme.module';
import { CategoriaModule } from './categorias/categoria.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './clientes/cliente.module';
import { EmprestimoModule } from './emprestimos/emprestimo.module';

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
    FilmeModule,
    CategoriaModule,
    ClienteModule,
    EmprestimoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
