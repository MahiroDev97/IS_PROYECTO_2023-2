"use strict";

const handleError = require("../utils/errorHandler");
const Postulacion = require("../models/postulacion.model");
const Empresa = require("../models/empresa.model");
const { func } = require("joi");

async function createPostulacion(postulacion) {
  try {
    const { empresa, tipo, documentos } = postulacion;
    console.log(documentos);
    const empresaFound = await Empresa.findById(empresa);
    if (!empresaFound) return [null, "Empresa no existe"];
    const newPostulacion = new Postulacion({
      empresa,
      tipo,
      documentos,
    });
    await newPostulacion.save();
    return [newPostulacion, null];
  } catch (error) {
    handleError(error, "postulacion.service.js -> createPostulacion");
  }
}

async function getPostulaciones() {
  try {
    const postulaciones = await Postulacion.find()
      .populate({
        path: "empresa",
        populate: {
          path: "user",
        },
      })
      .exec();
    if (!postulaciones || postulaciones.length === 0)
      return [null, "No hay postulaciones disponibles."];
    return [postulaciones, null];
  } catch (error) {
    handleError(error, "postulacion.service.js -> getPostulaciones");
  }
}

async function getPostulacionById(id) {
  try {
    const postulacion = await Postulacion.findById(id).populate({
      path: "empresa",
      populate: {
        path: "user",
      },
    });
    return [postulacion, null];
  } catch (error) {
    handleError(error, "postulacion.service.js -> getPostulacionById");
  }
}

async function getPostulacionesByUser(userEmail) {
  try {
    const postulaciones = await Postulacion.find()
      .populate({
        path: "empresa",
        populate: {
          path: "user",
          match: { email: userEmail },
        },
      })
      .exec();
    console.log(postulaciones);
    if (!postulaciones || postulaciones.length === 0)
      return [null, "No hay postulaciones disponibles."];
    return [postulaciones, null];
  } catch (error) {
    handleError(error, "postulacion.service.js -> getPostulaciones");
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
    handleError(error, "postulacion.service.js -> updatePostulacion");
  }
}

async function deletePostulacion(id) {
  try {
    const postulacionFound = await Postulacion.findById(id);
    if (!postulacionFound) return [null, "Postulacion no encontrada"];
    await Postulacion.findByIdAndDelete(id);
    return [postulacionFound, null];
  } catch (error) {
    handleError(error, "postulacion.service.js -> deletePostulacion");
  }
}

module.exports = {
  createPostulacion,
  getPostulaciones,
  getPostulacionById,
  updatePostulacion,
  deletePostulacion,
  getPostulacionesByUser,
};
