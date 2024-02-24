-- # Crianção da tabela com suas referencias.
CREATE TABLE tb_banco (
    id INT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL
);

CREATE TABLE tb_pessoa (
    id INT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL
);

CREATE TABLE tb_valores (
    id INT PRIMARY KEY NOT NULL,
    pessoa_id INT NOT NULL,
    banco_id INT NOT NULL,
    valor TEXT NOT NULL,
    FOREIGN KEY (pessoa_id) REFERENCES tb_pessoa(id),
    FOREIGN KEY (banco_id) REFERENCES tb_banco(id)
);


