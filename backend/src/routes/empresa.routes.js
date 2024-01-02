"use strict";

const express = require("express");

const empresaController = require("../controllers/empresa.controller.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", empresaController.getEmpresas);
router.get("/:id", empresaController.getEmpresaById);
router.post("/", empresaController.createEmpresa);
router.put("/:id", empresaController.updateEmpresa);
router.delete("/:id", empresaController.deleteEmpresa);
router.get("/user/:email", empresaController.getEmpresasByUser);
router.get("/rut/:rut", empresaController.getEmpresaByRut);

module.exports = router;
