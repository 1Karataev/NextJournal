'use client';
import React, {useState} from 'react';
import {Button, IconButton, Typography} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Form from '@/app/components/form/Form';

enum TypeAuth {
    MAIN = 'main',
    MAIL = 'mail',
    REGISTRATION = 'registration',
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
        <Form typeForm='login' typeField={['email', 'password']} labelField={['Email', 'Пароль']}/>
        <Button variant="contained">Регистрация</Button>
      </div>}

      {typeAuth === TypeAuth.REGISTRATION && <div>
        <IconButton onClick={onArrowClick}>
          <ArrowBackIcon/>
        </IconButton>
        <Form typeForm='registration' typeField={['fullName', 'email', 'password']} labelField={['Имя Фамилия', 'Email', 'Пароль']}/>
        <Button variant="contained">Регистрация</Button>
      </div>}
    </div>
  );
};

export default AuthModal;
