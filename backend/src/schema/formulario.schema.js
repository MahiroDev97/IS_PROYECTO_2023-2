"use strict";

const Joi = require("joi");

const formularioBodySchema = Joi.object({
  worksWithOtherCompanies: Joi.string().required().messages({
    "string.empty": "El nombre de la compañia no puede estar vacío",
    "any.required": "El nombre de la empresa es obligatorio",
    "string.base": "El nombre de la empresa debe ser de tipo string",
  }),
  aplicantDetails: Joi.string().required().messages({
    "string.empty": "El tipo de aplicación no puede estar vacio",
    "any.required": "El tipo de aplicación es obligatorio",
    "string.base": "El tipo de aplicación debe ser de tipo string",
  }),
  legalRepresentativeDetail: Joi.string().required().messages({
    "string.empty": "El nombre del representante no puede estar vacio",
    "any.required": "El nombre del representante es obligatorio",
    "string.base": "El nombre del representante debe ser de tipo string",
  }),
}).messages({
    "object.unknown": "No se permiten propiedades adicionales",
});

const formularioIdSchema = Joi.object({
    id: Joi.string()
      .required()
      .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
      .messages({
        "string.empty": "El id no puede estar vacío.",
        "any.required": "El id es obligatorio.",
        "string.base": "El id debe ser de tipo string.",
        "string.pattern.base": "El id proporcionado no es un ObjectId válido.",
      }),
  });

  module.exports = { formularioBodySchema, formularioIdSchema };
