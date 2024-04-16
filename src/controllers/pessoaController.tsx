import { IPessoa, Pessoa } from "../models/pessoa";
import { SQLError, SQLStatementErrorCallback } from "expo-sqlite";



export default class PessoaController {

    static create(pessoa: IPessoa) {
        Pessoa.create(pessoa)
    }

    static delete(pessoa: IPessoa){
        const id = Pessoa.delete(pessoa)
        return id
        
    }
    
}
