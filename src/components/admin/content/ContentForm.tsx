import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Content } from '../../../types/content';
import { useTheme } from '../../../hooks/useTheme';

interface ContentFormProps {
  type: 'article' | 'tutorial';
  initialData?: Content;
  onSubmit: (values: any) => Promise<void>;
}

const validationSchema = Yup.object({
  title: Yup.string()
    .required('عنوان الزامی است')
    .min(5, 'عنوان باید حداقل 5 کاراکتر باشد'),
  summary: Yup.string()
    .required('خلاصه الزامی است')
    .max(300, 'خلاصه نباید بیشتر از 300 کاراکتر باشد'),
  content: Yup.string().required('محتوا الزامی است'),
  categoryId: Yup.string().required('دسته‌بندی الزامی است'),
  tags: Yup.array().min(1, 'حداقل یک برچسب الزامی است'),
});

export const ContentForm: React.FC<ContentFormProps> = ({
  type,
  initialData,
  onSubmit,
}) => {
  const [tagInput, setTagInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const formik = useFormik({
    initialValues: {
      title: initialData?.title ?? '',
      summary: initialData?.summary ?? '',
      content: initialData?.content ?? '',
      categoryId: initialData?.category?.id ?? '',
      tags: initialData?.tags ?? [],
      thumbnail: initialData?.thumbnail ?? '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        await onSubmit(values);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleAddTag = () => {
    if (tagInput.trim() && !formik.values.tags.includes(tagInput.trim())) {
      formik.setFieldValue('tags', [...formik.values.tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    formik.setFieldValue(
      'tags',
      formik.values.tags.filter((tag: string) => tag !== tagToRemove)
    );
  };

  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 3, direction: theme.direction }}>
        <Typography variant="h5" gutterBottom>
          {initialData ? 'ویرایش' : 'ایجاد'} {type === 'article' ? 'مقاله' : 'آموزش'}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="title"
                label="عنوان"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="summary"
                label="خلاصه"
                multiline
                rows={3}
                value={formik.values.summary}
                onChange={formik.handleChange}
                error={formik.touched.summary && Boolean(formik.errors.summary)}
                helperText={formik.touched.summary && formik.errors.summary}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>دسته‌بندی</InputLabel>
                <Select
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                  error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
                >
                  <MenuItem value="tax">مالیات</MenuItem>
                  <MenuItem value="accounting">حسابداری</MenuItem>
                  <MenuItem value="business">کسب و کار</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  label="برچسب‌ها"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
              </Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {formik.values.tags.map((tag: string) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => handleRemoveTag(tag)}
                  />
                ))}
              </Box>
              {formik.touched.tags && formik.errors.tags && (
                <Typography color="error" variant="caption">
                  {formik.errors.tags as string}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <ReactQuill
                value={formik.values.content}
                onChange={(value) => formik.setFieldValue('content', value)}
                style={{ height: '300px', marginBottom: '50px' }}
              />
              {formik.touched.content && formik.errors.content && (
                <Typography color="error" variant="caption">
                  {formik.errors.content}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={() => window.history.back()}>
                  انصراف
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={formik.isSubmitting || isLoading}
                >
                  {isLoading ? 'در حال پردازش...' : (initialData ? 'به‌روزرسانی' : 'ایجاد')}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};