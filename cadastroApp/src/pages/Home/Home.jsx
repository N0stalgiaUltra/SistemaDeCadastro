import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import './Home.css'

export function Home() {
const [user, setUser] = useState({username: '', password: ''})
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()

function handlerAddUser(){
    setUser({
      username: username,
      password: password
    })
    //console.log(user.username + ' ' + user.password);
}

function handleRegisterPage(){
    navigate('register')
}

useEffect(()=>{
  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
      setUser({
        username: data.username,
        password: data.password,
      })

      console.log(data);
  })
}, [])

return (
  <div className='LoginPage'> 
    <header>
      <h1> Treinamento Pagina de Login e Cadastro </h1>
    </header>
    <main> 
      <div className='LoginBox'>
        <h1> Faça seu Login </h1>

        <input 
          type='text' 
          placeholder='Digite Seu Login'
          onChange={e => setUsername(e.target.value)}
          /> 
        
        <input 
          type='password' 
          placeholder='Digite Sua Senha'
          onChange={e => setPassword(e.target.value)}/>

        <button 
          type='button' 
          onClick={handlerAddUser}> Fazer Login </button>

        
      </div>

      <div className='RegisterButton'> 
        <button type='button'
        onClick={handleRegisterPage}> Clique aqui e faça seu registro </button>
      </div>
    </main>
  </div>
  )
}

