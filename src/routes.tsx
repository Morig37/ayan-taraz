import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const Videos = lazy(() => import('./pages/Videos'));
const Articles = lazy(() => import('./pages/Articles'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Registration = lazy(() => import('./pages/Registration'));
const Collaboration = lazy(() => import('./pages/Collaboration'));
const TaxCalculator = lazy(() => import('./pages/TaxCalculator'));
const MiniBook = lazy(() => import('./pages/MiniBook'));
const Survey = lazy(() => import('./pages/Survey'));
const ConsultationRequest = lazy(() => import('./pages/ConsultationRequest'));
const TaxCalendarPage = lazy(() => import('./pages/TaxCalendar'));
const PaymentVerification = lazy(() => import('./pages/PaymentVerification'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="tax-calendar" element={<TaxCalendarPage />} />
          <Route path="payment/verify" element={<PaymentVerification />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
