"use strict";

const Empresa = require("../models/empresa.model.js");
const { handleError } = require("../utils/errorHandler");
const User = require("../models/user.model.js");

async function createEmpresa(empresa){
    try{
        const { name, giro, rut, address, user} = empresa;
        const empresaFound = await Empresa.findOne({name: empresa.name});
        if(empresaFound) return [null, "La empresa ya existe"];
        const userFound = await User.findById(user);
        if(!userFound) return [null, "El usuario no existe"];
        const newEmpresa = new Empresa({
            name,
            giro,
            rut,
            address,
            user
        });
        await newEmpresa.save();
        return [newEmpresa, null];
    } catch (error) {
        handleError(error, "empresa.service -> createEmpresa");
    }
}

async function getEmpresaById(id){
    try {
        const empresaFound = await Empresa.findById(id);
        if(!empresaFound) return [null, "Empresa no encontrada"];
        return [empresaFound, null];
    } catch (error) {
        handleError(error, "empresa.service -> getEmpresaById");
    }
}

async function getEmpresas(){
    try {
        const empresas = await Empresa.find();
        if(!empresas) return [null, "No hay empresas"];
        return [empresas, null];
    } catch (error) {
        handleError(error, "empresa.service -> getEmpresas");
    }
}

async function updateEmpresa(id, empresa){
    try {
        const empresaFound = await Empresa.findById(id);
        if(!empresaFound) return [null, "Empresa no encontrada"];

        
        const {name,giro,rut,address,user} = empresa;
        if(name) empresaFound.name = name;
        if(giro) empresaFound.giro = giro;
        if(rut) empresaFound.rut = rut;
        if(address) empresaFound.address = address;
        if(user) empresaFound.user = user;
        

        await empresaFound.save();
        return [empresaFound, null];
    } catch (error) {
        handleError(error, "empresa.service -> updateEmpresa");
    }
}

async function deleteEmpresa(id){
    try {
        const empresaFound = await Empresa.findById(id);
        if(!empresaFound) return [null, "Empresa no encontrada"];
        await Empresa.findByIdAndDelete(id);
        return [empresaFound, null];
    } catch (error) {
        handleError(error, "empresa.service -> deleteEmpresa");
    }
}

module.exports = {
    createEmpresa,
    getEmpresaById,
    getEmpresas,
    updateEmpresa,
    deleteEmpresa
};