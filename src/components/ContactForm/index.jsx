import { useFormik } from 'formik';
import sprite from '../../images/sprite.svg';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import {
  ButtonStyled,
  IconBox,
  InputBox,
  InputStyled,
} from './ContactForm.styled';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      discord: '',
      address: '',
    },
    validationSchema: yup.object({
      discord: yup
        .string()
        .matches(/^@/, 'discord must start from @')
        .min(2, 'Must be 2 characters or more')
        .max(32, 'Must be 32 characters or less')
        .trim()
        .required('Required'),
      address: yup
        .string()
        .max(30, 'Must be 30 characters or less')
        .trim()
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success(`${values.discord}, welcome to our community!  `, {
        duration: 4000,
        position: 'top-right',
      });
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBox>
        <IconBox>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-discord-blue`}></use>
          </svg>
        </IconBox>
        <InputStyled
          name="discord"
          placeholder="@username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          $error={formik.touched.username && formik.errors.username}
        />
      </InputBox>
      <InputBox>
        <IconBox>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-metaMask`}></use>
          </svg>
        </IconBox>
        <InputStyled
          type="text"
          name="address"
          placeholder="Wallet address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          $error={formik.touched.address && formik.errors.address}
        />
      </InputBox>
      <ButtonStyled type="submit">Mint</ButtonStyled>
    </form>
  );
}

export default ContactForm;
