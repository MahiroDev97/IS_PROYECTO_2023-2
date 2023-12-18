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
      path: Joi.string().required(),
    }),
  ),
  estado: Joi.string()
    .valid("Pendiente", "Aprobado", "Rechazado")
    .default("Pendiente"),
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
