"use strict";

const { string } = require("joi");
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
                type: String, // cambiar a tipo de archivo que sea necesario.
                required: true,
            },
        },
    ],
    formulario: {
        type: String,
        required : true,
    },
});

const Postulacion = mongoose.model("Postulacion", postulacionSchema);

module.exports = Postulacion;