"use strict";

const mongoose = require("mongoose");

const postulacionSchema = new mongoose.Schema(
  {
    empresa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empresa",
      required: true,
    },
    tipo: {
      type: String,
      enum: ["Comercial", "De Alcoholes"],
      required: true,
    },
    documentos: [
      {
        nombre: {
          type: String,
          required: true,
        },
        url: {
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
    comentariosRevisor: {
      type: String,
    },
    fechaenvio: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);

const Postulacion = mongoose.model("Postulacion", postulacionSchema);

module.exports = Postulacion;
