export type pessoa = {
    id?: number,
    nome: string
}

export class Pessoa {
    public id: number
    public nome: string

    constructor(id?: number, nome?: string){
        this.id = id
        this.nome = nome
    }

    create(pessoa: pessoa) {
        
    }

    delete(pessoa: pessoa){
        
    }
}