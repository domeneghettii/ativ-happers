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

suspeitosRoutes.post("/", (req, res) => {
    const {
        nome,
        idade,
        envolvimento,
        descricaoFisica
    } = req.body;

    //Validação se a idade é um número inteiro
    if(! Number.isInteger(idade)) {
        return res.status(400).send({ message: "Insira uma idade válida!" });
    }
    //Validação se a pessoa inseriu um nome
    if(!nome, !idade, !envolvimento) {
        return res.status(400).send({ message: "Insira um nome!" });
    }
    //Validação do sim ou não no envolvimento
    if(envolvimento != "sim" && envolvimento != "não") {
        return res.status(400).send({ message: "Digite 'sim' ou 'não'!" });
    }
    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 999999) + 1),
        nome,
        idade,
        envolvimento,
        descricaoFisica
    };
    suspeitos.push(novoSuspeito);
    return res.status(201).send({ message: "Suspeito cadastrado!", novoSuspeito} );
});

//Rota para editar um suspeito
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((suspect) => suspect.id === Number(id)
    );

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito ainda não encontrado!" });
    }

    const { nome, idade, envolvimento, descricaoFisica } = req.body

    if(!nome || !idade || !envolvimento){
        return res.status(400).send({ message: "Completar todos os campos!" });
    }

    suspeito.nome = nome
    suspeito.idade = idade
    suspeito.envolvimento = envolvimento
    suspeito.descricaoFisica = descricaoFisica

    return res.status(200).send({
        message: "Suspeito renovado!",
        suspeito,
    })
});

//Rota para deletar um suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params
    
    const suspeito = suspeitos.find((suspect) => suspect.id === Number(id))
    
    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    };

    suspeitos = suspeitos.filter((suspect) => suspect.id !== Number(id))

    return res.status(200).send({
        message: "Suspeito deletado!",
        suspeito,
    });
});

export default suspeitosRoutes;