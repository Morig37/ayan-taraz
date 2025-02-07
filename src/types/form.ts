// src/types/form.ts
export interface FormField {
  name: string;
  label: string;
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'select'
    | 'date'
    | 'file'
    | 'textarea';
  required?: boolean;
  validation?: {
    type: string;
    params?: any;
    message: string;
  }[];
  options?: { label: string; value: any }[];
  defaultValue?: any;
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  rows?: number;
}

export interface FormConfig {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  submitLabel?: string;
  resetLabel?: string;
  layout?: 'vertical' | 'horizontal';
  columns?: 1 | 2 | 3;
}

export interface FormSubmission {
  id: string;
  formId: string;
  data: any;
  submittedBy: string;
  submittedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}
