"use strict";

const { string } = require("joi");
const mongoose = require("mongoose");

const postulacionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  documents: [
    {
      path: {
        type: String,
        required: true,
      },
    },
  ],
  estado: {
    type: String,
    enum: ["Pendiente", "Aprobado", "Rechazado"],
    default: "Pendiente",
  },
});

const Postulacion = mongoose.model("Postulacion", postulacionSchema);

module.exports = Postulacion;
