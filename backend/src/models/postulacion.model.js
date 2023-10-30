"use strict";

const mongoose = require("mongoose");

const postulacionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    documents: [
        {
            nombre: {
                type: String,
                required: true,
            },
            archivo: {
                type: Buffer,
                required: true,
            },
        },
    ],
    formulario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Formulario",
        required: true,
    },
});

const Postulacion = mongoose.model("Postulacion", postulacionSchema);

module.exports = Postulacion;