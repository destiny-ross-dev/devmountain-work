const getInventory = async (req, res) => {
  console.log("getInventory");
  const db = req.app.get("db");

  try {
    let inventory = await db.getInventory();
    console.log(inventory);
    res.status(200).send(inventory);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getInventory };
