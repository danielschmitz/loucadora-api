import { Filme } from "src/locadora/filmes/filme.entity";

export class CategoriaDto {
    id: number;
    nome: string;
    filmes: Filme[];
  }