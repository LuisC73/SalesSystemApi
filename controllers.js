import { Seller, Sale } from "./models.js";

// Vendedor

export function readSeller(req, res) {
  return Seller.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function readSeller(req, res) {
  return Seller.findOne({ idSeller: req.params.idSeller }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function deleteSeller(req, res) {
  return Seller.findOneAndRemove(
    { idSeller: req.params.idSeller },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function updateSeller(req, res) {
  return Seller.findOneAndUpdate(
    { idSeller: req.params.idSeller },
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
    name: req.body.name,
    email: req.body.email,
    totalCommission: req.body.totalCommission,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

// ------ Venta

export function readArticulos(req, res) {
  return Articulo.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function readArticulo(req, res) {
  return Articulo.findOne({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function deleteArticulo(req, res) {
  return Articulo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}

export function updateArticulo(req, res) {
  return Articulo.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, precio: req.body.precio } },
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
}

export function createArticulo(req, res) {
  return new Articulo({
    nombre: req.body.nombre,
    precio: req.body.precio,
  }).save((err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
}
