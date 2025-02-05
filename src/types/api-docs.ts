// src/types/api-docs.ts
export interface APIEndpoint {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description: string;
    authentication?: boolean;
    parameters?: {
      name: string;
      type: string;
      required: boolean;
      description: string;
    }[];
    requestBody?: {
      type: string;
      properties: {
        [key: string]: {
          type: string;
          description: string;
          required?: boolean;
        };
      };
    };
    responses: {
      [key: string]: {
        description: string;
        schema?: any;
      };
    };
    examples?: {
      request?: any;
      response?: any;
    };
  }
  
  export interface APIGroup {
    name: string;
    description: string;
    endpoints: APIEndpoint[];
  }