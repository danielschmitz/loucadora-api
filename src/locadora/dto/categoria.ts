import { Filme } from "src/locadora/entities/filme.entity";

export class CategoriaDto {
    id: number;
    nome: string;
    filmes: Filme[];
  }