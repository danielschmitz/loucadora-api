import { CategoriaDto } from "src/categorias/categoria.dto";
import { IsNotEmpty } from 'class-validator';

export class FilmeDto {
    id: number;
    
    @IsNotEmpty({message: "Campo nome nao pode ser nulo"})
    nome: string;

    categoria: CategoriaDto;

    @IsNotEmpty({message: "Campo lançamento nao pode ser nulo"})
    lancamento: Date;
  }