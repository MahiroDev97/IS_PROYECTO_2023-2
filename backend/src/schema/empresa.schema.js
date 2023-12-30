"use strict";

const Joi = require("joi");

const empresaBodySchema = Joi.object({
  nombre: Joi.string().required().messages({
    "string.empty": "El nombre no puede estar vacío.",
    "any.required": "El nombre es obligatorio.",
    "string.base": "El nombre debe ser de tipo string.",
  }),
  giro: Joi.string().required().messages({
    "string.empty": "El giro no puede estar vacío.",
    "any.required": "El giro es obligatorio.",
    "string.base": "El giro debe ser de tipo string.",
  }),
  rut: Joi.string().required().messages({
    "string.empty": "El rut no puede estar vacío.",
    "any.required": "El rut es obligatorio.",
    "string.base": "El rut debe ser de tipo string.",
  }),
  direccion: Joi.string().required().messages({
    "string.empty": "La dirección no puede estar vacía.",
    "any.required": "La dirección es obligatoria.",
    "string.base": "La dirección debe ser de tipo string.",
  }),
  user: Joi.string().required().messages({
    "string.empty": "El usuario no puede estar vacío.",
    "any.required": "El usuario es obligatorio.",
    "string.base": "El usuario debe ser de tipo string.",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { empresaBodySchema };
