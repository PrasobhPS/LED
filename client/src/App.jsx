import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import NetworkPage from './pages/NetworkPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPage from './pages/PrivacyPage';
import ProjectsPage from './pages/ProjectsPage';
import TermsPage from './pages/TermsPage';

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage />, handle: { title: 'SANS GLOWMETRIC | Custom LED Walls', active: 'home' } },
      { path: 'about', element: <AboutPage />, handle: { title: 'About | SANS GLOWMETRIC', active: 'about' } },
      { path: 'network', element: <NetworkPage />, handle: { title: 'Our Screens | SANS GLOWMETRIC', active: 'network' } },
      { path: 'projects', element: <ProjectsPage />, handle: { title: 'Projects | SANS GLOWMETRIC', active: 'projects' } },
      { path: 'partners', element: <PartnersPage />, handle: { title: 'Partners | SANS GLOWMETRIC', active: 'partners' } },
      { path: 'contact', element: <ContactPage />, handle: { title: 'Contact | SANS GLOWMETRIC', active: 'contact' } },
      { path: 'privacy', element: <PrivacyPage />, handle: { title: 'Privacy Policy | SANS GLOWMETRIC', active: '' } },
      { path: 'terms', element: <TermsPage />, handle: { title: 'Terms & Conditions | SANS GLOWMETRIC', active: '' } },
      { path: 'advertise', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
