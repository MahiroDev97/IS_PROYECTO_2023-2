"use strict";

const express = require("express");

const postulacionController = require("../controllers/postulacion.controller.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const uploadMiddleware = require("../middlewares/upload.middleware.js");
const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", postulacionController.getPostulaciones);
router.get("/:id", postulacionController.getPostulacionById);
router.post("/", uploadMiddleware, postulacionController.createPostulacion);
router.put("/:id", postulacionController.updatePostulacion);
router.delete("/:id", postulacionController.deletePostulacion);

module.exports = router;
