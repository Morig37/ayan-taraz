import { TaxEvent } from './types';

export const taxEvents: TaxEvent[] = [
  {
    id: '1',
    title: 'مهلت ارسال اظهارنامه مالیات بر ارزش افزوده',
    date: '2025-02-15',
    description: 'آخرین مهلت ارسال اظهارنامه مالیات بر ارزش افزوده دوره زمستان',
    type: 'deadline',
    importance: 'high'
  },
  {
    id: '2',
    title: 'پرداخت مالیات حقوق کارمندان',
    date: '2025-02-20',
    description: 'پرداخت مالیات حقوق و دستمزد کارکنان برای ماه جاری',
    type: 'payment',
    importance: 'medium'
  },
  // اضافه کردن رویدادهای بیشتر...
];