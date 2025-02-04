export interface TaxEvent {
    id: string;
    title: string;
    date: string;
    description: string;
    type: 'deadline' | 'reminder' | 'payment';
    importance: 'high' | 'medium' | 'low';
  }