import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeController } from './filme.controller';
import { Filme } from './filme.entity';
import { FilmeService } from './filme.service';

@Module({
    imports: [TypeOrmModule.forFeature([Filme])],
    controllers: [FilmeController],
    providers: [FilmeService],
})
export class FilmeModule {}
