"use strict";

const mongoose = require("mongoose");

const formularioSchema = mongoose.Schema({
    worksWithOtherCompanies: {
      type: String,
      enum: ["Si", "No", "No sabe"],
      required: true,
    },
    applicantDetails: [{
      type: String,
      required: true,
    }],
    legalRepresentativeDetails: [{
      type: String,
      required: true,
    }],
  });
  
  const Formulario = mongoose.model("Formulario", formularioSchema);
  
  module.exports = Formulario;