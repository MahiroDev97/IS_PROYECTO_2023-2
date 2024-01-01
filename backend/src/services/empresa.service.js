"use strict";

const Empresa = require("../models/empresa.model.js");
const { handleError } = require("../utils/errorHandler.js");
const User = require("../models/user.model.js");

async function createEmpresa(empresa) {
  try {
    const { nombre, giro, rut, direccion, user } = empresa;
    const empresaFound = await Empresa.findOne({ rut: empresa.rut });
    if (empresaFound) return [null, "Empresa ya existe"];
    const userFound = await User.findById(user);
    if (!userFound) return [null, "Usuario no existe"];
    const newEmpresa = new Empresa({
      nombre,
      giro,
      rut,
      direccion,
      user,
    });
    const myEmpresa = await newEmpresa.save();
    return [myEmpresa, null];
  } catch (error) {
    handleError(error, "empresa.service.js -> createEmpresa");
  }
}

async function getEmpresas() {
  try {
    const empresas = await Empresa.find().populate("user");
    return [empresas, null];
  } catch (error) {
    handleError(error, "product.service.js -> getEmpresas");
  }
}

async function getEmpresaById(id) {
  try {
    const empresa = await Empresa.findById(id).populate("user");
    return [empresa, null];
  } catch (error) {
    handleError(error, "product.service.js -> getEmpresaById");
  }
}

async function getEmpresasByUser(userEmail) {
  try {
    const user = await User.findOne({ email: userEmail });
    const empresas = await Empresa.find({ user: user._id }).populate("user");
    return [empresas, null];
  } catch (error) {
    handleError(error, "empresa.service.js -> getEmpresasByUser");
  }
}

async function updateEmpresa(id, empresa) {
  try {
    const { nombre, giro, rut, direccion, user } = empresa;
    const empresaFound = await Empresa.findOne({ rut: empresa.rut });
    if (empresaFound) return [null, "Empresa ya existe"];
    const userFound = await User.findOne({ username: user });
    if (!userFound) return [null, "Usuario no existe"];
    const empresaUpdated = await Empresa.findByIdAndUpdate(
      id,
      {
        nombre,
        giro,
        rut,
        direccion,
        user: userFound._id,
      },
      { new: true },
    );
    return [empresaUpdated, null];
  } catch (error) {
    handleError(error, "product.service.js -> updateEmpresa");
  }
}

async function deleteEmpresa(id) {
  try {
    await Empresa.findByIdAndDelete(id);
    return [true, null];
  } catch (error) {
    handleError(error, "product.service.js -> deleteEmpresa");
  }
}

module.exports = {
  createEmpresa,
  getEmpresas,
  getEmpresaById,
  updateEmpresa,
  deleteEmpresa,
  getEmpresasByUser,
};
