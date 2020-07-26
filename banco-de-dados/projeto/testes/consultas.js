const db = require("../config/db");
const { where } = require("../config/db");

// db("perfis")
//   .then((res) => res.map((p) => p.nome))
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db("perfis")
//   .select("nome", "id")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db.select("nome", "id")
//   .from("perfis")
//   .limit(4)
//   .offset(5)
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

db("perfis")
  // .where({ id: 2 })
  // .first()
  // .where("nome", "like", "%m%")
  // .whereNot({ id: 2 })
  .whereIn("id", [1, 2, 3])
  .then((res) => console.log(res))
  .finally(() => db.destroy());
