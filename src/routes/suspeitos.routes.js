import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos
let suspeitos = [
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Beyonce",
    idade: 43,
    envolvimento: "sim",
    descricaoFisica: [ "Loira", "Pele Morena", "Alta" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Travis Scott",
    idade: 33,
    envolvimento: "não",
    descricaoFisica: [ "Tatuado", "Pele Negra", "cabelo crespo" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Drake",
    idade: 37,
    envolvimento: "sim",
    descricaoFisica: [ "Cabelo Crespo", "Pele Branca", "Alto", "Tatuado"],
},
];

export default suspeitosRoutes;