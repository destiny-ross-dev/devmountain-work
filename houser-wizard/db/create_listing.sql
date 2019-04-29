INSERT INTO houser_listings (name, address, city, state, zipcode, mortage, rent, img) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
SELECT * FROM houser_listings;