import {createGlobalStyle, keyframes} from 'styled-components';
import backgroundImage from '../assets/login.jpg';
const animeLeft = keyframes`
to {
  opacity:1;
  transform:initial
}
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

  *{
    box-sizing:border-box;

  }

  body{
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
    --primary-color: #fb1;

    padding-top:4rem;
    color:#333;
    margin:0;
    font-family:var(--type-first);
  }

  h1, h2, h3, h4, p{
    margin:0px;
  }

  ul, li{
    list-style:none;
    padding:0px;
    margin:0px;
  }

  img{
    display:block;
    max-width:100%;
  }

  button, input{
    display:block;
    font-size:1rem;
    font-family:var(--type-first);
  }

  a{
    text-decoration:none;
    color:#333;
  }

  form{
    margin-bottom:2rem;
  }

  .container{
    max-width:50rem;
    padding:0 1rem;
    margin:0 auto;
  }

  .title{
    font-family:var(--type-second);
    line-height:1;
    font-size:3rem;
    margin: 1rem 0;
    position:relative;
    z-index:1;
  }

  .title::after{
    content:'';
    display:block;
    width:1.5rem;
    height:1.5rem;
    background:var(--primary-color);
    position:absolute;
    bottom:5px;
    left:-5px;
    border-radius:0.2rem;
    z-index:-1;
  }

  .subTitle{
    font-family: var(--type-second);
    line-height:1;
    font-size:2rem;
  }

  .subTitle::after{
    content:'';
    display:block;
    background:#aaa;
    height:.5rem;
    width:3rem;
    border-radius:0.1rem;
  }

  .title::after{
    content:'';
    display:block;
    width:1.5rem;
    height:1.5rem;
    background:var(--primary-color);
    position:absolute;
    bottom:5px;
    left:-5px;
    border-radius:0.2rem;
    z-index:-1;
  }

  .animeLeft{
    opacity:0;
    transform:translateX(-28px);
    animation:${animeLeft} .3s forwards;
  }

  .login{
    display:grid;
    grid-template-columns: 1fr 1fr;
    min-height:100vh;
    gap:2rem;

    &:before{
      display:block;
      content:'';
      background:url(${backgroundImage}) no-repeat center center;
      background-size:cover;
    }
  }

  .forms{
    max-width:30rem;
    padding:1rem;
  }

  @media (max-width: 40rem){
    .login{
      grid-template-columns:1fr;

      &:before{
        display:none;
      }
    }

    .forms{
      max-width:100%;
    }
  }
`;


