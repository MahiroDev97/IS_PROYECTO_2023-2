"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const EmpresaService = require("../services/empresa.service");
const { empresaBodySchema, empresaIdSchema } = require("../schema/empresa.schema");
const { handleError } = require("../utils/errorHandler");


/**
 * 
 * Crea una nueva empresa
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function createEmpresa(req, res) {
    try {
        const { body } = req;
        const { error: bodyError } = empresaBodySchema.validate(body);
        if (bodyError) return respondError(req, res, 400, bodyError.message);
    
        const [newEmpresa, empresaError] = await EmpresaService.createEmpresa(body);
    
        if (empresaError) return respondError(req, res, 400, empresaError);
        if (!newEmpresa) {
        return respondError(req, res, 400, "No se creo la empresa");
        }
    
        respondSuccess(req, res, 201, newEmpresa);
    } catch (error) {
        handleError(error, "empresa.controller -> createEmpresa");
        respondError(req, res, 500, "No se creo la empresa");
    }
}

/**
 * 
 * Obtiene todas las empresas
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getEmpresas(req, res) {
  try {
    const [empresas, errorEmpresas] = await EmpresaService.getEmpresas();
    if (errorEmpresas) return respondError(req, res, 404, errorEmpresas);

    empresas.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, empresas);
  } catch (error) {
    handleError(error, "empresa.controller -> getEmpresas");
    respondError(req, res, 400, error.message);
  }
}



/**
 * 
 * Obtiene una empresa por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function getEmpresaById(req, res) {
    try {
        const { params } = req;
        const { error: paramsError } = empresaIdSchema.validate(params);
        if (paramsError) return respondError(req, res, 400, paramsError.message);
    
        const [empresa, errorEmpresa] = await EmpresaService.getEmpresaById(params.id);
    
        if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    
        respondSuccess(req, res, 200, empresa);
    } catch (error) {
        handleError(error, "empresa.controller -> getEmpresaById");
        respondError(req, res, 400, error.message);
    }
}

/**
 * 
 * Actualiza una empresa por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function updateEmpresa(req, res) {
    try {
        const { params, body } = req;
        const { error: paramsError } = empresaIdSchema.validate(params);
        if (paramsError) return respondError(req, res, 400, paramsError.message);
    
        const { error: bodyError } = empresaBodySchema.validate(body);
        if (bodyError) return respondError(req, res, 400, bodyError.message);
    
        const [empresa, errorEmpresa] = await EmpresaService.updateEmpresa(params.id, body);
    
        if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    
        respondSuccess(req, res, 200, empresa);
    } catch (error) {
        handleError(error, "empresa.controller -> updateEmpresa");
        respondError(req, res, 400, error.message);
    }
}

/**
 * 
 * Elimina una empresa por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */

async function deleteEmpresa(req, res) {
    try {
        const { params } = req;
        const { error: paramsError } = empresaIdSchema.validate(params);
        if (paramsError) return respondError(req, res, 400, paramsError.message);
    
        const [empresa, errorEmpresa] = await EmpresaService.deleteEmpresa(params.id);
    
        if (errorEmpresa) return respondError(req, res, 404, errorEmpresa);
    
        respondSuccess(req, res, 200, empresa);
    } catch (error) {
        handleError(error, "empresa.controller -> deleteEmpresa");
        respondError(req, res, 400, error.message);
    }
}

module.exports = {
    getEmpresas,
    createEmpresa,
    getEmpresaById,
    updateEmpresa,
    deleteEmpresa,
};
