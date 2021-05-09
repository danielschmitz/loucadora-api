import { Filme } from 'src/filmes/filme.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("Emprestimos")
export class Emprestimo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataInicial: Date;

  @Column()
  dataFinal: Date;

  @Column()
  valor: number;

  

  
}