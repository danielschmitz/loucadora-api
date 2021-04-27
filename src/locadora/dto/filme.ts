import { Categoria } from "src/locadora/entities/categoria.entity";

export class FilmeDto {
    id: number;
    nome: string;
    categoria: Categoria;
  }