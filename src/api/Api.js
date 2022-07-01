import React from 'react'
import catImg from './assets/pexels-henda-watani-320014.jpg'
import './Api.css';

const Api = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function upInputs(event) {
    const login = { name, email, password }

    localStorage.setItem('login', JSON.stringify(login))
  }

  return (
    <div className='flex'>
      <div>
        <img className='img' src={catImg} alt="cat-pixel" />
      </div>

      <form onSubmit={upInputs} className='form'>
        <h1>Cats Social</h1>

        <label htmlFor='name'>Nome:</label>
        <input id='name' type="text" value={name} placeholder="José santos Souza" onChange={(event) => setName(event.target.value)} />
        
        <label  htmlFor='email'>E-mail:</label>
        <input id='email' type="email" value={email} placeholder="jose@gmail.com:" onChange={(event) => setEmail(event.target.value)} />
       
        <label  htmlFor='password'>Senha:</label>
        <input id='password' type="password" value={password} placeholder="*********" onChange={(event) => setPassword(event.target.value)} />
        
        <button>Enter the page</button>
      </form>
    </div>
  )
}

export default Api