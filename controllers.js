import { Seller, Sale } from "./models.js";

// Vendedor

export function readSellers(req, res) {
  return Seller.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function readSeller(req, res) {
  return Seller.findOne({ idSeller: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function deleteSeller(req, res) {
  return Seller.findOneAndRemove(
    { idSeller: req.params.id },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function updateSeller(req, res) {
  return Seller.findOneAndUpdate(
    { idSeller: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        totalCommission: req.body.totalCommission,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function createSeller(req, res) {
  return new Seller({
    idSeller: req.body.idSeller,
    name: req.body.name,
    email: req.body.email,
    totalCommission: req.body.totalCommission,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

// ------ Venta

export function readSales(req, res) {
  return Sale.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function readSale(req, res) {
  return Sale.findOne({ idSeller: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function deleteSale(req, res) {
  return Sale.findOneAndRemove(
    { idSeller: req.params.id },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function updateSale(req, res) {
  return Sale.findOneAndUpdate(
    { idSeller: req.params.id },
    {
      $set: {
        zone: req.body.zone,
        date: req.body.date,
        saleValue: req.body.saleValue,
      },
    },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function createSale(req, res) {
  return new Sale({
    idSeller: req.body.idSeller,
    zone: req.body.zone,
    date: req.body.date,
    saleValue: req.body.saleValue,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}
