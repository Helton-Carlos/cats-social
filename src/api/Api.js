import React from 'react'
import catImg from './assets/pexels-henda-watani-320014.jpg'
import './Api.css';

const Api = () => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function upInputs(event) {
    event.preventDefault();
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
        <input type="text" value={name} placeholder="Digite seu nome:" onChange={(event) => setName(event.target.value)} />
        <input type="email" value={email} placeholder="Digite seu e-mail:" onChange={(event) => setEmail(event.target.value)} />
        <input type="password" value={password} placeholder="Digite seu password:" onChange={(event) => setPassword(event.target.value)} />
        <button>Enter the page</button>
      </form>
    </div>
  )
}

export default Api