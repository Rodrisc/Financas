import { DatabaseConnection } from "../banco/database-connection"

export type IPessoa = {
    id?: number,
    nome: string
}

const table = 'tb_pessoa'
const db = DatabaseConnection.getConnection()

export class Pessoa {
    public id: number
    public nome: string

    constructor(pessoa: IPessoa){
        this.id = pessoa.id
        this.nome = pessoa.nome
    }

    static create(pessoa: IPessoa){
        return new Promise((resolve, reject) => {
            db.transaction(
                tx => {
                    tx.executeSql(
                        `INSERT INTO ${table} (nome) VALUES (?)`,
                        [pessoa.nome],
                        (_, { insertId }) => {
                            console.log("ID criado: " + insertId);
                            resolve(insertId);
                        },
                        (_, error) => {
                            console.log("Erro durante a execução SQL:", _);
                            reject(error)
                            return true
                        }
                    );
                },
                error => {
                    console.log("Erro durante a criação:", error);
                    reject(error);
                }
            );
        });
    }

    static delete(pessoa: IPessoa){
        return new Promise((resolve, reject) =>{
            db.transaction(
                tx => {
                    tx.executeSql(
                        `delete from ${table} where id = ?;`, [pessoa.id],
                        (_, {rows}) =>{
                            console.log(`id ${pessoa.id} deletado`)
                            resolve(rows)
                        },
                        (_, error)=>{
                            console.log('erro: '+ error)
                            reject(error)
                            return true
                        }
                    )
                }, error => {
                    console.log("Erro durante a exclusão", error)
                    reject(error)
                }
            )
        })
    }

    static listAll(){
        
    }
}