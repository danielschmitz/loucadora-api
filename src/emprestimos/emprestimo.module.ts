import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmprestimoController } from './emprestimo.controller';
import { Emprestimo } from './emprestimo.entity';
import { EmprestimoService } from './emprestimo.service';

/**
 * Módulo responsável em gerenciar as classes relativas a tabela de Emprestimo
 */
@Module({
    imports: [TypeOrmModule.forFeature([Emprestimo])],
    controllers: [EmprestimoController],
    providers: [EmprestimoService],
    exports: [TypeOrmModule.forFeature([Emprestimo])]
})
export class EmprestimoModule { }
