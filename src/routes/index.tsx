import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Reports from '@/pages/Reports';
import Users from '@/pages/Users';
import Ministries from '@/pages/Ministries';
import Volunteers from '@/pages/Volunteers';
import Families from '@/pages/Families';
import Schedule from '@/pages/Schedule';
import FixedEvents from '@/pages/FixedEvents';
import Settings from '@/pages/Settings';
import AcceptInvite from '@/pages/AcceptInvite';
import Index from '@/pages/Index';
import { ROUTES } from '@/constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.INDEX} element={<Index />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.ACCEPT_INVITE} element={<AcceptInvite />} />

      {/* Protected Routes */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.REPORTS} element={<Reports />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.MINISTRIES} element={<Ministries />} />
        <Route path={ROUTES.VOLUNTEERS} element={<Volunteers />} />
        <Route path={ROUTES.FAMILIES} element={<Families />} />
        <Route path={ROUTES.SCHEDULE} element={<Schedule />} />
        <Route path={ROUTES.FIXED_EVENTS} element={<FixedEvents />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}