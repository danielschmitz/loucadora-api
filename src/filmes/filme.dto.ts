import { Categoria } from "src/categorias/categoria.entity";

export class FilmeDto {
    id: number;
    nome: string;
    categoria: Categoria;
  }