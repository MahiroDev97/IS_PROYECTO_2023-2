"use strict";

const postulacion = require("../models/postulacion.model.js");
const { handleError } = require("../utils/errorHandler");
const { func } = require("joi");
const Postulacion = require("../models/postulacion.model.js");
const { storage } = require("../middlewares/upload.middleware.js");

async function createPostulacion(postulacion) {
  try {
    const { user, documents, formulario } = postulacion;
    const newPostulacion = new Postulacion({
      user,
      documents,
      formulario,
    });
    await newPostulacion.save();
    return [newPostulacion, null];
  } catch (error) {
    handleError(error, "postulacion.service -> createPostulacion");
  }
}

async function getPostulacionById(id) {
  try {
    const postulacionFound = await postulacion.findById(id);
    if (!postulacionFound) return [null, "Postulacion no encontrada"];
    return [postulacionFound, null];
  } catch (error) {
    handleError(error, "postulacion.service -> getPostulacionById");
  }
}

async function getPostulaciones() {
  try {
    const postulaciones = await Postulacion.find().populate("user").exec();
    if (!postulaciones || postulaciones.length === 0)
      return [null, "No hay postulaciones"];
    return [postulaciones, null];
  } catch (error) {
    handleError(error, "postulacion.service -> getPostulaciones");
  }
}

async function updatePostulacion(id, postulacion) {
  try {
    const postulacionFound = await Postulacion.findById(id);
    if (!postulacionFound) return [null, "Postulacion no encontrada"];
    const postulacionUpdated = await Postulacion.findByIdAndUpdate(
      id,
      postulacion,
      {
        new: true,
      },
    );
    return [postulacionUpdated, null];
  } catch (error) {
    handleError(error, "postulacion.service -> updatePostulacion");
  }
}

async function deletePostulacion(id) {
  try {
    const postulacionFound = await Postulacion.findById(id);
    if (!postulacionFound) return [null, "Postulacion no encontrada"];
    await Postulacion.findByIdAndDelete(id);
    return [postulacionFound, null];
  } catch (error) {
    handleError(error, "postulacion.service -> deletePostulacion");
  }
}

module.exports = {
  createPostulacion,
  getPostulacionById,
  getPostulaciones,
  updatePostulacion,
  deletePostulacion,
};
