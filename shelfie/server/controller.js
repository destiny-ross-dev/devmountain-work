const getInventory = async (req, res) => {
  console.log("getInventory");
  const db = req.app.get("db");

  try {
    let inventory = await db.get_inventory();
    console.log(inventory);
    res.status(200).send(inventory);
  } catch (err) {
    console.log(err);
  }
};

const postProduct = async (req, res) => {
  // console.log("postingProduct");
  const db = req.app.get("db");
  let { product, price, productImage } = req.body;
  console.log(req.body);

  try {
    let updatedProductList = await db.create_product(
      product,
      price,
      productImage
    );
    res.status(200).send(updatedProductList);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Problem creating new item" });
  }
};

module.exports = { getInventory, postProduct };
