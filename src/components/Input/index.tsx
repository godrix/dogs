import React, {InputHTMLAttributes} from 'react';

import { Container, InputType, Error } from './styles';

interface InputPros extends InputHTMLAttributes<HTMLInputElement>{
label?:string;
name:string;
}

const Input: React.FC<InputPros> = ({label, name, ...rest}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputType id={name} name={name} {...rest}/>
      <Error>
        Errou
      </Error>
    </Container>
  );
}

export default Input;