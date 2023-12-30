"use strict";

const mongoose = require("mongoose");

const empresaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    giro: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model("Empresa", empresaSchema);
