import { DatabaseConnection } from "./database-connection";

var db = null

export default class DatabaseInit {

    constructor(){
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on'))
        this.InitDb()
    }

    private InitDb(){
        var sql = [
            `CREATE TABLE if not exists tb_banco (
                id INT PRIMARY KEY NOT NULL,
                nome TEXT NOT NULL
            );`,

            `CREATE TABLE if not exists tb_pessoa (
                id INT PRIMARY KEY NOT NULL,
                nome TEXT NOT NULL
            );`,

            `CREATE TABLE if not exists tb_valores (
                id INT PRIMARY KEY NOT NULL,
                pessoa_id INT NOT NULL,
                banco_id INT NOT NULL,
                valor TEXT NOT NULL,
                FOREIGN KEY (pessoa_id) REFERENCES tb_pessoa(id),
                FOREIGN KEY (banco_id) REFERENCES tb_banco(id)
            );`
        ]

        db.transaction(
            tx => {
                for (var i = 0; i< sql.length; i++){
                    console.log('sql executado: ' + sql[i])
                    tx.executeSql(sql[i])
                }
            }, (error) => {
                console.log("erro : " + JSON.stringify(error))
                console.log(error)
            }, () => {
                console.log("transação completa")
            }
        )
    }
}