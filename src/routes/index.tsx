import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Users from '@/pages/Users';
import Ministries from '@/pages/Ministries';
import Volunteers from '@/pages/Volunteers';
import Families from '@/pages/Families';
import Schedule from '@/pages/Schedule';
import FixedEvents from '@/pages/FixedEvents';
import ForgotPassword from '@/pages/ForgotPassword';
import AcceptInvite from '@/pages/AcceptInvite';
import Index from '@/pages/Index';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<ForgotPassword />} />
      <Route path="/aceitar-convite" element={<AcceptInvite />} />

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/ministerios" element={<Ministries />} />
        <Route path="/voluntarios" element={<Volunteers />} />
        <Route path="/familias" element={<Families />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/eventos-fixos" element={<FixedEvents />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}