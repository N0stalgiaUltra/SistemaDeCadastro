import { useState, useEffect } from 'react'
import './Register.css'

export function Register(){
    const [user, setUser] = useState({username: '', password: '', name: '', city: ''})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    
    function createUser(){
        console.log(`${username}, ${password}, ${name}, ${city}`)
    }
    
    return (
        <div className="registerPage">
            <header> <h1> Cadastro </h1> </header>
            
            <main> 
                <div className='registerForm'>
                    <form> 
                        <input 
                            type='text' 
                            placeholder='Digite Seu Username'
                            onChange={e => setUsername(e.target.value)}
                        /> 
                        <input 
                            type='password' 
                            placeholder='Digite sua senha'
                            onChange={e => setPassword(e.target.value)}
                        /> 
                        <input 
                            type='text' 
                            placeholder='Digite Seu Nome'
                            onChange={e => setName(e.target.value)}
                        /> 
                        <input 
                            type='text' 
                            placeholder='Digite sua cidade'
                            onChange={e => setCity(e.target.value)}
                        /> 
                    </form>
                    
                    <button onClick={createUser}> Enviar </button>
                </div>
            </main>
           
        </div>
            
    )
}