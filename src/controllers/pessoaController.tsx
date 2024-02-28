import { Pessoa } from "../models/pessoa";
import { DatabaseConnection } from "../banco/database-connection";
import { SQLError, SQLStatementErrorCallback } from "expo-sqlite";

const table = 'pessoa'
const db = DatabaseConnection.getConnection()

export default class PessoaController {

    create(pessoa: Pessoa) {
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

    delete(pessoa: Pessoa){
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
    
}
