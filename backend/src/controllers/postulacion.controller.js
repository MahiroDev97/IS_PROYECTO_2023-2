"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler.js");
const { handleError } = require("../utils/errorHandler.js");
const PostulacionService = require("../services/postulacion.service.js");
const { postulacionBodySchema } = require("../schema/postulacion.schema.js");

async function createPostulacion(req, res) {
  try {
    let { body } = req;
    body.documentos = req.files.map((file) => ({
      nombre: file.originalname,
      url: file.path,
    }));
    const { error } = postulacionBodySchema.validate(body);
    if (error) return respondError(req, res, 400, error.message);
    const [postulacion, errorPostulacion] =
      await PostulacionService.createPostulacion(body);
    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);
    if (!postulacion)
      return respondError(req, res, 400, "No se pudo crear la postulación");
    respondSuccess(req, res, 201, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller.js -> createPostulacion");
    res.status(500).json({ error: error.message });
  }
}

async function getPostulaciones(req, res) {
  try {
    const [postulaciones, errorPostulaciones] =
      await PostulacionService.getPostulaciones();
    if (errorPostulaciones)
      return res.status(404).json({ error: errorPostulaciones });

    postulaciones.length === 0
      ? res.status(204).send()
      : res.status(200).json(postulaciones);
  } catch (error) {
    handleError(error, "postulacion.controller.js -> getPostulaciones");
    res.status(500).json({ error: error.message });
  }
}

async function getPostulacionById(req, res) {
  try {
    const { id } = req.params;
    const [postulacion, errorPostulacion] =
      await PostulacionService.getPostulacionById(id);
    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);
    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller.js -> getPostulacionById");
    respondError(req, res, 500, error.message);
  }
}

async function updatePostulacion(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;
    const [postulacion, errorPostulacion] =
      await PostulacionService.updatePostulacion(id, body);
    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);
    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller.js -> updatePostulacion");
    respondError(req, res, 500, error.message);
  }
}

async function deletePostulacion(req, res) {
  try {
    const { id } = req.params;
    const [postulacion, errorPostulacion] =
      await PostulacionService.deletePostulacion(id);
    if (errorPostulacion) return respondError(req, res, 404, errorPostulacion);
    respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller.js -> deletePostulacion");
    respondError(req, res, 500, error.message);
  }
}

module.exports = {
  createPostulacion,
  getPostulaciones,
  getPostulacionById,
  updatePostulacion,
  deletePostulacion,
};
