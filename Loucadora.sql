-- elephantsql.com 

CREATE TABLE "Categorias" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar
);

CREATE TABLE "Filmes" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar,
  "lancamento" date,
  "popularidade" int,
  "capa" bigint,
  "categoria_id" int
);

CREATE TABLE "Clientes" (
  "id" SERIAL PRIMARY KEY,
  "nome" varchar,
  "telefone" varchar,
  "email" varchar
);

CREATE TABLE "Emprestimos" (
  "id" SERIAL PRIMARY KEY,
  "cliente_id" int,
  "filme_id" int,
  "dataInicial" date,
  "dataFinal" date,
  "valor" decimal
);

ALTER TABLE "Filmes" ADD FOREIGN KEY ("categoria_id") REFERENCES "Categorias" ("id");

ALTER TABLE "Emprestimos" ADD FOREIGN KEY ("cliente_id") REFERENCES "Clientes" ("id");

ALTER TABLE "Emprestimos" ADD FOREIGN KEY ("filme_id") REFERENCES "Filmes" ("id");
