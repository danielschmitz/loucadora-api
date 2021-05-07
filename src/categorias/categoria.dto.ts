import { IsNotEmpty } from "class-validator";
import { Filme } from "src/filmes/filme.entity";

export class CategoriaDto {
    id: number;
    
    @IsNotEmpty({
      message: "Campo nome não pode ser nulo"
    })
    nome: string;
    
    filmes: Filme[];
  }