import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {
  Home,
  Videos,
  Articles,
  Tutorials,
  Registration,
  Collaboration,
  TaxCalculator,
  MiniBook,
  Survey,
  ConsultationRequest,
} from './pages';
import { TaxCalendarPage } from './pages/TaxCalendar';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="videos" element={<Videos />} />
        <Route path="articles" element={<Articles />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="register" element={<Registration />} />
        <Route path="collaboration" element={<Collaboration />} />
        <Route path="tax-calculator" element={<TaxCalculator />} />
        <Route path="mini-book" element={<MiniBook />} />
        <Route path="survey" element={<Survey />} />
        <Route path="consultation" element={<ConsultationRequest />} />
        <Route path="/tax-calendar" element={<TaxCalendarPage />} />
      </Route>
    </Routes>
  );
}