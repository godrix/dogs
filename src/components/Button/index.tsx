import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({children, loading=false, ...rest}) => {
return <Container {...rest} disabled={loading}>{children}</Container>;
}

export default Button;