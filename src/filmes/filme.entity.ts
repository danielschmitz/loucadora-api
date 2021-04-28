import { Categoria } from 'src/categorias/categoria.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("Filmes")
export class Filme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  lancamento: Date;

  @ManyToOne(()=>Categoria, categoria => categoria.filmes)
  categoria: Categoria;
}