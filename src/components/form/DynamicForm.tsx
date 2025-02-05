// src/components/form/DynamicForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { FormConfig } from '../../types/form';

interface Props {
  config: FormConfig;
  onSubmit: (data: any) => Promise<void>;
  initialValues?: any;
}

export const DynamicForm: React.FC<Props> = ({
  config,
  onSubmit,
  initialValues,
}) => {
  // ساخت اسکیمای اعتبارسنجی
  const schema = yup.object().shape(
    config.fields.reduce((acc, field) => {
      let validator = yup.mixed();

      field.validation?.forEach((rule) => {
        switch (rule.type) {
          case 'required':
            validator = validator.required(rule.message);
            break;
          case 'email':
            validator = yup.string().email(rule.message);
            break;
          case 'min':
            validator = yup.number().min(rule.params, rule.message);
            break;
          case 'max':
            validator = yup.number().max(rule.params, rule.message);
            break;
          case 'minLength':
            validator = yup.string().min(rule.params, rule.message);
            break;
          case 'maxLength':
            validator = yup.string().max(rule.params, rule.message);
            break;
          case 'pattern':
            validator = yup.string().matches(rule.params, rule.message);
            break;
        }
      });

      return { ...acc, [field.name]: validator };
    }, {})
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const renderField = (field: FormField) => {
    const commonProps = {
      fullWidth: true,
      size: 'small' as const,
      disabled: field.disabled || isSubmitting,
    };

    switch (field.type) {
      case 'select':
        return (
          <FormControl {...commonProps} error={!!errors[field.name]}>
            <InputLabel>{field.label}</InputLabel>
            <Controller
              name={field.name}
              control={control}
              defaultValue={field.defaultValue || ''}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={field.label}
                  value={value}
                  onChange={onChange}
                  multiple={field.multiple}
                >
                  {field.options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText>
              {errors[field.name]?.message as string}
            </FormHelperText>
          </FormControl>
        );

      case 'date':
        return (
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.defaultValue || null}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                label={field.label}
                value={value}
                onChange={onChange}
                slotProps={{
                  textField: {
                    ...commonProps,
                    error: !!errors[field.name],
                    helperText: errors[field.name]?.message as string,
                  },
                }}
              />
            )}
          />
        );

      case 'textarea':
        return (
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.defaultValue || ''}
            render={({ field: { onChange, value } }) => (
              <TextField
                {...commonProps}
                label={field.label}
                value={value}
                onChange={onChange}
                multiline
                rows={field.rows || 4}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            )}
          />
        );

      default:
        return (
          <Controller
            name={field.name}
            control={control}
            defaultValue={field.defaultValue || ''}
            render={({ field: { onChange, value } }) => (
              <TextField
                {...commonProps}
                type={field.type}
                label={field.label}
                value={value}
                onChange={onChange}
                placeholder={field.placeholder}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message as string}
              />
            )}
          />
        );
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {config.title}
      </Typography>
      {config.description && (
        <Typography color="text.secondary" paragraph>
          {config.description}
        </Typography>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {config.fields.map((field) => (
            <Grid
              item
              xs={12}
              md={12 / (config.columns || 1)}
              key={field.name}
            >
              {renderField(field)}
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting && <CircularProgress size={20} color="inherit" />
            }
          >
            {config.submitLabel || 'ثبت'}
          </Button>
          <Button
            type="button"
            variant="outlined"
            disabled={isSubmitting}
            onClick={() => reset()}
          >
            {config.resetLabel || 'پاک کردن'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};