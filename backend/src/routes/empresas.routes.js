"use strict";

const express = require("express");

const empresaController = require("../controllers/empresa.controller.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");
const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", empresaController.getEmpresas);
router.post(
  "/",
  authorizationMiddleware.isUser,
  empresaController.createEmpresa,
);
router.get("/:id", empresaController.getEmpresaById);
router.put(
  "/:id",
  authorizationMiddleware.isUser,
  empresaController.updateEmpresa,
);
router.delete(
  "/:id",
  authorizationMiddleware.isUser,
  empresaController.deleteEmpresa,
);

module.exports = router;
