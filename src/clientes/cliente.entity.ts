import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Clientes")
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
    
    @Column()
    telefone: string;
    
    @Column()
    email: string;

}
