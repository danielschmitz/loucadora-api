import { Categoria } from "src/locadora/categorias/categoria.entity";

export class FilmeDto {
    id: number;
    nome: string;
    categoria: Categoria;
  }