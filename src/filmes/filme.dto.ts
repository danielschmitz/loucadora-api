import { CategoriaDto } from "src/categorias/categoria.dto";

export class FilmeDto {
    id: number;
    nome: string;
    categoria: CategoriaDto;
  }