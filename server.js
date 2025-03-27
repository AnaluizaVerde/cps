const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
//const PORT = 3000;

const PORT = process.env.PORT || 3000;

//MIDLEWARE PARA DEFINIR CONTENT-SECURITY POLICY
app.use(
    helmet({
        contenSecurityPolicy:{
            directives:{
                defaultSrc: ["'self'"], //APENAS RECURSOS DO PROPRIO DOMINIO
                //scriptSrc: ["'self'"],//BLOQUEIA SCRIPT INLINE E EXTERNOS 
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", "https://fonts.google.com"],
                fontSrc:["'self'", "https://fonts.gstatic.com"],
            }
        }
    })
);
//conectando ao banco
const URL = process.env.URL
mongoose.connect(URL)
.then(() =>{
    console.log("Banco conectado!!!")
})
.catch((error) => {
    console.log(error)
})


app.use(express.static("public"));
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})