import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css'
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Header from '../../components/Header';


const api = axios.create({
  baseURL: "http://localhost:3000"
});

function Register() {
  const [users, setUsers] = useState([]);
  const [name, setNewUser] = useState('');
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');
  const [confirmar, setNewConfirmar] = useState('');

  useEffect(() => {
    api.get('/')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      });
  }, []);

  function newUser() {
    api
      .post('/cadastro', {
        name,
        email,
        senha,
        confirmar 
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
        <Header />
         <Banner image="shadow" /> 
         <p>Faça seu cadastro e aproveite os benefícios exclusivos para membros.<br/>
         Faça parte dessa comunidade vibrante! </p>     
      <form className= {styles.form} >      
      <input placeholder='Nome' onChange={e=>setNewUser(e.target.value)} />
      <input placeholder='Email' onChange={e=>setNewEmail(e.target.value)} />
      <input placeholder='Senha' onChange={e=>setNewSenha(e.target.value)} />
      <input placeholder='Confirmar' onChange={e=>setNewConfirmar(e.target.value)} />
      <button onClick={newUser} >Cadastrar</button>
      </form>
      <Footer/>
    </div>
    
  );
}

export default Register;
