const db = require("../config/db");

const novoUsuario = {
  nome: "Thais",
  email: "thais@gmail.com",
  senha: "123456",
};

//update db('...').where({...}).update({...})

async function exercicio() {
  const { qtde } = await db("usuarios").count("* as qtde").first();

  if (qtde === 1) {
    await db("usuarios").insert(novoUsuario);
  }

  let { id, nome } = await db("usuarios").select("id", "nome").limit(1).first();
  console.log(id, nome);

  await db("usuarios")
    .where({ id })
    .update({ nome: "Pedro Garcia", email: "pedro@gmail.com" });

  return await db("usuarios").where({ id });
}

exercicio()
  .then((usuario) => console.log(usuario))
  .finally(() => db.destroy());
