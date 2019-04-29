// Gets all listings

const getListings = async (req, res) => {
  const db = req.app.get("db");
  try {
    let listings = await db.get_listings();
    console.log(listings);
    res.status(200).send(listings);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Problem retrieving listings." });
  }
};

// Creates a new listing
const createListing = async (req, res) => {
  const db = req.app.get("db");
  let { name, address, city, stateName, zip, mortgage, rent, img } = req.body;
  console.log("creating listing:", req.body);
  try {
    let houseListings = await db.create_listing(
      name,
      address,
      city,
      stateName,
      zip,
      mortgage,
      rent,
      img
    );
    res.status(200).send(houseListings);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Problem adding new listing" });
  }
};

// Deletes an existing listing by id
const deleteListing = async (req, res) => {
  const db = req.app.get("db");
  console.log("delete listing");
  let { id } = req.params;

  try {
    let houseListings = await db.delete_listing(id);
    res.status(200).send(houseListings);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Problem removing listing" });
  }
};

module.exports = { getListings, createListing, deleteListing };
