"use strict";

const empresa = require("../models/empresa.model.js");
const { handleError } = require("../utils/errorHandler");
const user = require("../models/user.model.js");
const User = require("../models/user.model.js");

async function createEmpresa(empresa){
    try {
        const { user, name, description, logo, address, phone, email, web } = empresa;
        const empresaFound = await Empresa.findOne({email: empresa.email});
        if(empresaFound) return [null, "La empresa ya existe"];
        if(!user) return [null, "El usuario no existe"];

        const newEmpresa = new Empresa({
            user,
            name,
            description,
            logo,
            address,
            phone,
            email,
            web
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

        const {user, name, description, logo, address, phone, email, web} = empresa;
        if(user) empresaFound.user = user;
        if(name) empresaFound.name = name;
        if(description) empresaFound.description = description;
        if(logo) empresaFound.logo = logo;
        if(address) empresaFound.address = address;
        if(phone) empresaFound.phone = phone;
        if(email) empresaFound.email = email;
        if(web) empresaFound.web = web;

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

