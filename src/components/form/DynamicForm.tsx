import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText
} from '@mui/material';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'select';
  options?: { label: string; value: string | number }[];
  validation?: ValidationRule[];
  multiple?: boolean;
}

interface ValidationRule {
  type: 'required' | 'email' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern';
  message: string;
  params?: number | string | RegExp;
}

interface DynamicFormProps {
  fields: FormField[];
  onSubmit: (data: any) => void;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const schema = yup.object().shape(
    fields.reduce((acc, field) => {
      let validator: yup.AnySchema = yup.mixed();

      field.validation?.forEach(rule => {
        switch (rule.type) {
          case 'required':
            validator = yup.string().required(rule.message);
            break;
          case 'email':
            validator = yup.string().email(rule.message);
            break;
          case 'min':
            validator = yup.number().min(Number(rule.params), rule.message);
            break;
          case 'max':
            validator = yup.number().max(Number(rule.params), rule.message);
            break;
          case 'minLength':
            validator = yup.string().min(Number(rule.params), rule.message);
            break;
          case 'maxLength':
            validator = yup.string().max(Number(rule.params), rule.message);
            break;
          case 'pattern':
            if (rule.params instanceof RegExp) {
              validator = yup.string().matches(rule.params, rule.message);
            }
            break;
        }
      });

      return { ...acc, [field.name]: validator };
    }, {})
  );

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl fullWidth margin="normal" error={!!error}>
              {field.type === 'select' ? (
                <>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    value={value}
                    onChange={onChange}
                    label={field.label}
                    multiple={field.multiple}
                  >
                    {field.options?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              ) : (
                <TextField
                  label={field.label}
                  type={field.type}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            </FormControl>
          )}
        />
      ))}
    </form>
  );
};