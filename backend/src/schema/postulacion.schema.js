"use strict";

const Joi = require("joi");

const postulacionBodySchema = Joi.object({
  empresa: Joi.string().required().messages({
    "string.empty": "La empresa no puede estar vacía.",
    "any.required": "La empresa es obligatoria.",
    "string.base": "La empresa debe ser de tipo string.",
  }),
  tipo: Joi.string().required().messages({
    "string.empty": "El tipo no puede estar vacío.",
    "any.required": "El tipo es obligatorio.",
    "string.base": "El tipo debe ser de tipo string.",
    "string.only": "El tipo debe ser Comercial o De Alcoholes.",
  }),
  documentos: Joi.array().items(
    Joi.object({
      nombre: Joi.string().required().messages({
        "string.empty": "El nombre no puede estar vacío.",
        "any.required": "El nombre es obligatorio.",
        "string.base": "El nombre debe ser de tipo string.",
      }),
      url: Joi.string().required().messages({
        "string.empty": "La url no puede estar vacía.",
        "any.required": "La url es obligatoria.",
        "string.base": "La url debe ser de tipo string.",
      }),
    }),
  ),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales.",
});

module.exports = { postulacionBodySchema };
