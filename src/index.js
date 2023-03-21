const express = require('express');
const app = express();

//setting app
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(express.json());


//routes
app.get('/user',(req,res)=> {
    res.status(200).json({ "id": "0001",
               "name": "Juan Perez",
               "fono": "75848949",
               "edad": "25"});
});


//levantando el servicio HHTP
app.listen(app.get('port'),()=>{
    console.log(`Servidor iniciado! ${app.get('port')}`);
} );