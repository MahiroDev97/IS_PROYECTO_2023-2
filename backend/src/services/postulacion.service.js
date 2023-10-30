"use strict";

const postulacion = require("../models/postulacion.model.js");
const {handleError} = require("../helpers/errorHandler.helper.js");
const { func } = require("joi");
const Postulacion = require("../models/postulacion.model.js");


async function createPostulacion(postulacion){
    try {
        const newPostulacion = new postulacion(postulacion);
        await newPostulacion.save();
        return [newPostulacion, null];
    } catch (error) {
        handleError(error, "postulacion.service -> createPostulacion");
    }
}

async function getPostulacionById(id){
    try {
        const postulacionFound = await postulacion.findById(id);
        if(!postulacionFound) return [null, "Postulacion no encontrada"];
        return [postulacionFound, null];
    } catch (error) {
        handleError(error, "postulacion.service -> getPostulacionById");
    }
}

async function getPostulaciones(){
    try {
        const postulaciones = await postulacion.find();
        if(!postulaciones) return [null, "No hay postulaciones"];
        return [postulaciones, null];
    } catch (error) {
        handleError(error, "postulacion.service -> getPostulaciones");
    }
}

async function updatePostulacion(id, postulacion){
    try {
        const postulacionFound = await Postulacion.findById(id);
        if(!postulacionFound) return [null, "Postulacion no encontrada"];

        const {user, documents, formulario} = postulacion;
        if(user) postulacionFound.user = user;
        if(documents) postulacionFound.documents = documents;
        if(formulario) postulacionFound.formulario = formulario;
    } catch (error) {
        handleError(error, "postulacion.service -> updatePostulacion");
    }
};

async function deletePostulacion(id){
    try {
        const postulacionFound = await Postulacion.findById(id);
        if(!postulacionFound) return [null, "Postulacion no encontrada"];
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

