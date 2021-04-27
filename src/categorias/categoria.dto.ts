import { Filme } from "src/filmes/filme.entity";

export class CategoriaDto {
    id: number;
    nome: string;
    filmes: Filme[];
  }