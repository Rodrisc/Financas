export class Valores{
    public id: number
    public pessoa_id: number
    public banco_id: number
    public valor: string

    constructor(
        id?: number,
        pessoa_id?: number,
        banco_id?: number,
        valor?: string
    ){
        this.id = id
        this.pessoa_id = pessoa_id
        this.banco_id = banco_id
        this.valor = valor
    }
}