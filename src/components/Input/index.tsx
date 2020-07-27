import React, {InputHTMLAttributes} from 'react';

import { Container, InputType, Error } from './styles';

interface InputPros extends InputHTMLAttributes<HTMLInputElement>{
label?:string;
name:string;
error?:string | null;
}

const Input: React.FC<InputPros> = ({label, name, value, onChange, onBlur, error = null, ...rest}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputType id={name} name={name} {...rest} onChange={onChange} value={value} onBlur={onBlur}/>
      {error && <Error> {error} </Error>}
      
    </Container>
  );
}

export default Input;