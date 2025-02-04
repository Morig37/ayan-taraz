import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Analytics } from './components/admin/Analytics';
import { UserManagement } from './components/admin/UserManagement';
import { ReportGenerator } from './components/admin/ReportGenerator';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { ContactForm } from './components/home/ContactForm';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="reports" element={<ReportGenerator />} />
      </Route>
      <Route path="/" element={
        <>
          <Hero />
          <Services />
          <ContactForm />
        </>
      } />
    </Routes>
  );
}

export default App;
