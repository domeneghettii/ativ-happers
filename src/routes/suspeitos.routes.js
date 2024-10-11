import { Router } from "express";

const suspeitosRoutes = Router();

// Array com os suspeitos
let suspeitos = [
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Beyonce",
    idade: 43,
    envolvimento: true,
    descricaoFisica: [ "Loira", "Pele Morena", "Alta" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Travis Scott",
    idade: 33,
    envolvimento: false,
    descricaoFisica: [ "Tatuado", "Pele Negra", "cabelo crespo" ],
},
{
    id: Math.floor(Math.random() * 1000000),
    nome: "Drake",
    idade: 37,
    envolvimento: true,
    descricaoFisica: [ "Cabelo Crespo", "Pele Branca", "Alto", "Tatuado"],
},
];

// Rota para listar todos os suspeitos cadastrados
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
  
export default suspeitosRoutes;