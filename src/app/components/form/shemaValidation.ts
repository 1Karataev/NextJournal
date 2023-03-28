import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Неверный формат почты')
    .required('Email обязателен'),
  password: yup.string().min(6, 'Длина пароля должна быть не менее 6 символов')
    .required('Пароль обязятелен'),
});

export const registrationSchema = yup.object().shape({
  fullName: yup.string()
    .required('Имя обязательное поле'),
})
  .concat(loginSchema);



export type ILoginFormData = yup.InferType<typeof loginSchema>;
export type IRegistrationFormData = yup.InferType<typeof registrationSchema>;
