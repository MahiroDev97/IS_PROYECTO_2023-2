"use strict";

const mongoose = require("mongoose");

const empresaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    giro: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});