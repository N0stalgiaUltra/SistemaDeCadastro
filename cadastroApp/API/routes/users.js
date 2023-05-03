const express = require('express')
const router = express.Router()
const User = require('../model/UserModel')

//CRUD 
//Criação/Create
router.post('/', async (req, res)=> {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        city: req.body.city 
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Leitura/Read
//recupera todos 
router.get('/', async (req, res)=> {
     try {
        const users = await User.find()
        res.json(users)
     } catch (error){
        res.status(500).json({message: error.message})
     }

})

//recupera um usuario
router.get('/:id', getUser , (req, res)=> {
    res.json(res.user)

})
//Atualização/Update
//patch pq só atualiza um item passado, se fosse put teria que atualizar todos 
router.patch('/:id', getUser , async (req, res)=> {
    
    /* Verifica se algum dos campos é diff de nulo e substitui */
    if(req.body.username != null)
        res.user.username = req.body.username
    if(req.body.password != null)
        res.user.password = req.body.password
    
    if(req.body.name != null)
        res.user.name = res.body.name
    if(req.body.city != null)
        res.user.city = res.body.city
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})

    }
})
//Exclusão/Delete
router.delete('/:id', getUser , async (req, res)=> {
    try {
        //caso queria deletar mais de um, usar deleteMany()
        await res.user.deleteOne()
        res.json({message: 'Usuario deletado'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

async function getUser(req, res, next){
    let user 
    try {
        user = await User.findById(req.params.id)
        if(user == null)
            return res.status(404).json({message: "Não foi possivel encontrar o usuário"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.user = user 
    next(); 
}

module.exports = router