import { IsEmail, IsNotEmpty } from "class-validator";

export class ClienteDto {
    id: number;
    
    @IsNotEmpty({
        message: "Campo nome não pode ser nulo"
    })
    nome: string;
    
    telefone: string;
    
    @IsEmail({},{message: "Campo email inválido"})
    email: string;

}
