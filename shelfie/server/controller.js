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

const updateProduct = async (req, res) => {
  // console.log("postingProduct");
  const db = req.app.get("db");
  let { product, price, productImage } = req.body;
  let { productid } = req.params;
  console.log(req.body, req.params);

  try {
    let updatedProduct = await db.update_product(
      product,
      price,
      productImage,
      productid
    );
    res.status(200).send(updatedProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Problem updating item" });
  }
};

const deleteProduct = async (req, res) => {
  const db = req.app.get("db");
  let { productid } = req.params;

  try {
    let newList = await db.delete_product(productid);
    res.status(200).send(newList);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: `Problem deleting` });
  }
};

module.exports = { getInventory, postProduct, updateProduct, deleteProduct };
