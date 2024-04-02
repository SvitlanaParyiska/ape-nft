import { useFormik } from 'formik';
import sprite from '../../images/sprite.svg';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import {
  ButtonStyled,
  ErrorMessage,
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
        .min(2, 'must be 2 characters or more')
        .max(32, 'must be 32 characters or less')
        .trim()
        .required('required'),
      address: yup
        .string()
        .min(5, 'must be 5 characters or more')
        .max(30, 'must be 30 characters or less')
        .trim()
        .required('required'),
    }),
    onSubmit: (values, actions) => {
      toast.success(`${values.discord}, welcome to our community!  `, {
        duration: 4000,
        position: 'top-right',
      });
      actions.resetForm();
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
        <div>
          <InputStyled
            type="text"
            name="discord"
            placeholder="@username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discord}
            $error={formik.errors.discord && formik.touched.discord}
            $success={
              !formik.errors.discord &&
              formik.touched.discord &&
              formik.values.discord
                ? 'success'
                : ''
            }
            autoComplete="off"
          />
          {(formik.errors.discord && formik.touched.discord) ||
          (!formik.errors.discord && formik.touched.discord) ? (
            <ErrorMessage
              color={
                !formik.errors.discord && formik.touched.discord
                  ? '#3CBF61'
                  : null
              }
            >
              {!formik.errors.discord ? 'success' : formik.errors.discord}
            </ErrorMessage>
          ) : null}
        </div>
      </InputBox>
      <InputBox>
        <IconBox>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-metaMask`}></use>
          </svg>
        </IconBox>
        <div>
          <InputStyled
            type="text"
            name="address"
            placeholder="Wallet address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            $error={formik.errors.address && formik.touched.address}
            $success={
              !formik.errors.address &&
              formik.touched.address &&
              formik.values.address
                ? 'success'
                : ''
            }
            autoComplete="off"
          />
          {(formik.errors.address && formik.touched.address) ||
          (!formik.errors.address && formik.touched.address) ? (
            <ErrorMessage
              color={
                !formik.errors.address && formik.touched.address
                  ? '#3CBF61'
                  : null
              }
            >
              {!formik.errors.address ? 'success' : formik.errors.address}
            </ErrorMessage>
          ) : null}
        </div>
      </InputBox>
      <ButtonStyled type="submit">MINT</ButtonStyled>
    </form>
  );
}

export default ContactForm;
