const api = require('./api')
const express = require('express')

const server = express()

server.use(express.json())

server.listen(3001)


server.get('/',(req,res) =>{
    return res.send({
        message: 'luiz gonzaga da costa souza neto'
    })
})

server.get('/Luizgcsneto', async (req, res)=>{
    try{
        const { data } = await api.get('luizgcsneto/1')

        return res.send({name: data.name})
    }catch(error){
        res.send({error: error.message})
    }
})