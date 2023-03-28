import React from 'react';
import {useForm} from 'react-hook-form';
import {ILoginFormData, loginSchema, registrationSchema} from '@/app/components/form/shemaValidation';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, TextField} from '@mui/material';

interface PropType {
  typeForm: string;
  typeField: Array<string>;
  labelField: Array<string>
}


const Form: React.FC<PropType> = ({typeForm, typeField, labelField}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<ILoginFormData>({
    resolver: yupResolver(getTypeSchema()),
  });

  function getTypeSchema() {
    return typeForm === 'login' ? loginSchema : registrationSchema;
  }

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {typeField.map((e, i) => {
        return (<TextField
          id="e"
          error={!!errors[e]?.message}
          {...register(e)}
          name={e}
          helperText={errors[e]?.message}
          key={e}
          label={labelField[i]}
          style={{marginBottom: '20px'}}
        />);
      })}
      <Button type='submit' variant="contained">Войти</Button>
    </form>
  );
};

export default Form;
