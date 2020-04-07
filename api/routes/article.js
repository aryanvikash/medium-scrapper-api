const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Article.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// router.post("/", (req, res, next) => {
//   const product = new Article({
//     _id: new mongoose.Types.ObjectId(),
//     title: req.body.title,
//     para: req.body.para
//   });
//   product
//     .save()
//     .then(result => {
//       // console.log(result);
//       res.status(200).json({
//         message: "Success",
//         Createdproduct: product
//       });
//     })
//     .catch(err => {
//       res.status(404).json({ error: err });
//     });
// });

// router.get("/:ProductId", (req, res, next) => {
//   const Id = req.params.ProductId;
//   Product.findById(Id)
//     .exec()
//     .then(doc => {
//       console.log(doc);
//       res.status(200).json(doc);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.patch("/:ProductId", (req, res, next) => {
//   const Id = req.param.ProductId;
//   console.log(Id);
//   res.status(200).json({
//     message: "Product Updated"
//     // ID: Id
//   });
// });

// router.delete("/:ProductId", (req, res, next) => {
//   const Id = req.param.ProductId;
//   console.log(Id);
//   res.status(200).json({
//     message: "Deleted Product"
//     // ID: Id
//   });
// });

module.exports = router;
