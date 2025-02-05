// src/pages/Registration.tsx
import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledTextField } from '../components/common/FormFields';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('نام الزامی است')
    .min(2, 'نام باید حداقل 2 حرف باشد'),
  lastName: Yup.string()
    .required('نام خانوادگی الزامی است')
    .min(2, 'نام خانوادگی باید حداقل 2 حرف باشد'),
  email: Yup.string()
    .email('ایمیل نامعتبر است')
    .required('ایمیل الزامی است'),
  mobile: Yup.string()
    .matches(/^09[0-9]{9}$/, 'شماره موبایل نامعتبر است')
    .required('شماره موبایل الزامی است'),
  password: Yup.string()
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .matches(/[a-zA-Z]/, 'رمز عبور باید شامل حروف باشد')
    .matches(/[0-9]/, 'رمز عبور باید شامل اعداد باشد')
    .required('رمز عبور الزامی است'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'رمز عبور مطابقت ندارد')
    .required('تکرار رمز عبور الزامی است'),
});

const RegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // ارسال اطلاعات به سرور
        console.log('Form submitted:', values);
        // اینجا کد ارسال به سرور را اضافه کنید
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            ثبت‌نام در آیان تراز
          </Typography>
          
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  fullWidth
                  name="firstName"
                  label="نام"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <StyledTextField
                  fullWidth
                  name="lastName"
                  label="نام خانوادگی"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>

              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  name="email"
                  label="ایمیل"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  name="mobile"
                  label="شماره موبایل"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledTextField
                  fullWidth
                  name="password"
                  label="رمز عبور"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledTextField
                  fullWidth
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  ثبت‌نام
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegistrationPage;