"user strict";

const Joi = require("joi");

const postulacionBodySchema = Joi.object({
  user: Joi.string().required().messages({
    "string.empty": "El usuario no puede estar vacio",
    "any.required": "El usuario es obligatorio",
    "string.base": "El usuario debe ser de tipo string",
  }),
  documents: Joi.array().items(
    Joi.object({
      nombre: Joi.string().required().messages({
        "string.empty": "El nombre del documento no puede estar vacio",
        "any.required": "El nombre del documento es obligatorio",
        "string.base": "El nombre del documento debe ser de tipo string",
      }),
      archivo: Joi.string().required().messages({
        "string.empty": "El archivo del documento no puede estar vacio",
        "any.required": "El archivo del documento es obligatorio",
        "string.base": "El archivo del documento debe ser de tipo string",
      }),
    }),
  ),
  formulario: Joi.string().required().messages({
    "string.empty": "El formulario no puede estar vacio",
    "any.required": "El formulario es obligatorio",
    "string.base": "El formulario debe ser de tipo string",
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales",
});

const postulacionIdSchema = Joi.object({
  id: Joi.string()
    .required()
    .pattern(/^(?:[0-9a-fA-F]{24}|[0-9a-fA-F]{12})$/)
    .messages({
      "string.empty": "El id no puede estar vacio",
      "any.required": "El id es obligatorio",
      "string.base": "El id debe ser de tipo string",
      "string.pattern.base": "El id proporcionado no es un ObjectId valido",
    }),
});

module.exports = { postulacionBodySchema, postulacionIdSchema };
