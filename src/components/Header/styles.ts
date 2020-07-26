import styled from 'styled-components';
import userImage from '../../assets/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  width:100%;
  position:fixed;
  z-index:100;
  top:0px;
  background:#FFFFFF;

  nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:4rem;
  }

  .logo{
    padding: 0.5rem 0;
  }

  .login{
    color:#333;
    display:flex;
    align-items:center;
  }

  .login::after{
    content:'';
    display:inline-block;
    width:14px;
    height:17px;
    background:url(${userImage}) no-repeat center center;
    margin-left:0.5rem;
    position:relative;
    top:-1px;
  }
`;
