"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const PostulacionService = require("../services/postulacion.service");
const {
  postulacionBodySchema,
  postulacionIdSchema,
} = require("../schema/postulacion.schema");
const { handleError } = require("../utils/errorHandler");

/**
 *
 *
 * Obtiene todas las postulaciones
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function getPostulaciones(req, res) {
  try {
    const [postulaciones, errorPostulaciones] =
      await PostulacionService.getPostulaciones();
    if (errorPostulaciones)
      return respondError(req, res, 404, errorPostulaciones);

    postulaciones.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, postulaciones);
  } catch (error) {
    handleError(error, "postulacion.controller -> getPostulaciones");
    respondError(req, res, 400, error.message);
  }
}

/**
 *
 * Crea una nueva postulacion
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function createPostulacion(req, res) {
  try {
    const { body } = req;
    const { error: bodyError } = postulacionBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [newPostulacion, postulacionError] =
      await PostulacionService.createPostulacion(body);

    if (postulacionError) return respondError(req, res, 400, postulacionError);
    if (!newPostulacion) {
      return respondError(req, res, 400, "No se creo la postulacion");
    }

    respondSuccess(req, res, 201, newPostulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> createPostulacion");
    respondError(req, res, 500, "No se creo la postulacion");
  }
}

/**
 *
 * Obtiene una postulacion por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function getPostulacionById(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = postulacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const [postulacion, errorPostulacion] =
      await PostulacionService.getPostulacionById(params.id);

    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);

    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> getPostulacionById");
    respondError(req, res, 400, error.message);
  }
}

/**
 *
 * Actualiza una postulacion por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function updatePostulacion(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = postulacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = postulacionBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [postulacion, errorPostulacion] =
      await PostulacionService.updatePostulacion(params.id, body);

    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);

    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> updatePostulacion");
    respondError(req, res, 400, error.message);
  }
}

/**
 *
 * Elimina una postulacion por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function deletePostulacion(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = postulacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const [postulacion, errorPostulacion] =
      await PostulacionService.deletePostulacion(params.id);

    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);

    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> deletePostulacion");
    respondError(req, res, 400, error.message);
  }
}

module.exports = {
  getPostulaciones,
  createPostulacion,
  getPostulacionById,
  updatePostulacion,
  deletePostulacion,
};
