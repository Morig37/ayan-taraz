export interface User {
    id: string;
    email: string;
    role: 'admin' | 'consultant' | 'user';
    name: string;
  }
  
  export interface Appointment {
    id: string;
    userId: string;
    consultantId: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
  }
  