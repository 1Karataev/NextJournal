'use client';
import React, {useState} from 'react';
import {Button, IconButton, TextField, Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

enum TypeAuth {
    MAIN = 'main',
    MAIL = 'mail',
}

const AuthModal = () => {
  const [typeAuth, setTypeAuth] = useState<TypeAuth>(TypeAuth.MAIN);

  const onTypeAuthClick = (e: React.MouseEvent<HTMLElement>, type: TypeAuth) => {
    e.preventDefault();
    setTypeAuth(type);
  };

  const onArrowClick = () => {
    setTypeAuth(TypeAuth.MAIN);
  };

  return (
    <div>
      <Typography>Вход в TJ</Typography>

      {typeAuth === TypeAuth.MAIN && <div>
        <Button variant="contained">Вконтакте</Button>
        <Button variant="contained" onClick={(e) => onTypeAuthClick(e, TypeAuth.MAIL)}>Через почту</Button></div>}

      {typeAuth === TypeAuth.MAIL && <div>
        <IconButton onClick={onArrowClick}>
          <ArrowBackIcon/>
        </IconButton>
        <TextField
          required
          id="outlined-required"
          label="Почта"
          style={{marginBottom: '20px'}}
        />
        <TextField
          required
          id="outlined-required"
          label="Пароль"
        /></div>}
    </div>
  );
};

export default AuthModal;
