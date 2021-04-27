import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Categorias")
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}