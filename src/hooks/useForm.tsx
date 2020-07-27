import React, {useState} from 'react';
import {regexEmail} from '../utils/regex';
const types = {
  email:{
    regex:regexEmail,
    message:'Preencha com um email valido'
  },
  userName:{
    regex:regexEmail,
    message:'O nome de usuario não pode ter caracteres especiais'
  }
}

interface TypesValidation {
  type: 'email' | 'userName' | false
}

export function useForm({type}:TypesValidation) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>('');

  function validate(value:string){
    if(type === false) {
      return true;
    }

    if(value.length === 0){
      setError('Preencha um valor');
      return false;
    }
    
    if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message);
      return false;
    }else{
      setError(null)
      return true
    }
  }

  function onChange({target}: React.ChangeEvent<HTMLInputElement>){
    if(error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: ()=>validate(value),
    onBlur:()=> validate(value)
  };
}

