"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler.js");
const EmpresaService = require("../services/empresa.service.js");
const { empresaBodySchema } = require("../schema/empresa.schema.js");

async function createEmpresa(req, res) {
  try {
    const { body } = req;
    const { error } = empresaBodySchema.validate(body);
    if (error) return respondError(req, res, 400, error.message);
    const [empresa, errorEmpresa] = await EmpresaService.createEmpresa(body);
    if (errorEmpresa) return respondError(res, errorEmpresa);
    return respondSuccess(res, empresa);
  } catch (error) {
    handleError(error, "empresa.controller.js -> createEmpresa");
    respondError(res, req, 500, error.message);
  }
}

async function getEmpresas(req, res) {
  try {
    const [empresas, errorEmpresas] = await EmpresaService.getEmpresas();
    if (errorEmpresas) return respondError(req, res, 404, errorEmpresas);

    empresas.lenght === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, empresas);
  } catch (error) {
    handleError(error, "empresa.controller.js -> getEmpresas");
    respondError(req, res, 500, error.message);
  }
}

async function getEmpresaById(req, res) {
  try {
    const { id } = req.params;
    const [empresa, errorEmpresa] = await EmpresaService.getEmpresaById(id);
    if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    respondSuccess(req, res, 200, empresa);
  } catch (error) {
    handleError(error, "empresa.controller.js -> getEmpresaById");
    respondError(req, res, 500, error.message);
  }
}

async function updateEmpresa(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;
    const [empresa, errorEmpresa] = await EmpresaService.updateEmpresa(
      id,
      body,
    );
    if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    respondSuccess(req, res, 200, empresa);
  } catch (error) {
    handleError(error, "empresa.controller.js -> updateEmpresa");
    respondError(req, res, 500, error.message);
  }
}

async function deleteEmpresa(req, res) {
  try {
    const { id } = req.params;
    const [empresa, errorEmpresa] = await EmpresaService.deleteEmpresa(id);
    if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    respondSuccess(req, res, 200, empresa);
  } catch (error) {
    handleError(error, "empresa.controller.js -> deleteEmpresa");
    respondError(req, res, 500, error.message);
  }
}

module.exports = {
  createEmpresa,
  getEmpresas,
  getEmpresaById,
  updateEmpresa,
  deleteEmpresa,
};
