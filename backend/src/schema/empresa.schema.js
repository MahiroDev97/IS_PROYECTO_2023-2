"use strct";

const Joi = require("joi");

const empresaBodySchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "El nombre de la empresa no puede estar vacio",
    "any.required": "El nombre de la empresa es obligatorio",
    "string.base": "El nombre de la empresa debe ser de tipo string",
  }),
  giro: Joi.string().required().messages({
    "string.empty": "El giro de la empresa no puede estar vacio",
    "any.required": "El giro de la empresa es obligatorio",
    "string.base": "El giro de la empresa debe ser de tipo string",
  }),
  rut: Joi.string().required().messages({
    "string.empty": "El rut de la empresa no puede estar vacio",
    "any.required": "El rut de la empresa es obligatorio",
    "string.base": "El rut de la empresa debe ser de tipo string",
  }),
  address: Joi.string().required().messages({
    "string.empty": "La direccion de la empresa no puede estar vacia",
    "any.required": "La direccion de la empresa es obligatoria",
    "string.base": "La direccion de la empresa debe ser de tipo string",
  }),

  user: Joi.string().require().messages({
    
  }),
}).messages({
  "object.unknown": "No se permiten propiedades adicionales",
});

const empresaIdSchema = Joi.object({
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

module.exports = { empresaBodySchema, empresaIdSchema };
