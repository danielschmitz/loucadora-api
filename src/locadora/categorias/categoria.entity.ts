import { Filme } from 'src/locadora/filmes/filme.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("Categorias")
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany( () => Filme, filme => filme.categoria)
  filmes: Filme[];
}