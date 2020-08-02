import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom:1rem;

  label{
    display:block;
    font-size:1rem;
    line-height:1;
    padding-bottom:0.5rem;
  }
`;
export const InputType = styled.input`
  border:1px solid #eee;
  background:#eee;
  border-radius:8px;
  display:block;
  width:100%;
  font-size:1rem;
  padding:0.8rem;
  transition:0.5s;

  &:focus, &hover{
    outline:none;
    border-color:#fb1;
    background:#fff;
    box-shadow:0 0 0 3px #fea, 0 0 0 4px #fb1;
  }


`;
export const Error = styled.p`
  color:#f31;
  font-size:0.85rem;
  margin-top:0.25rem;
`;
