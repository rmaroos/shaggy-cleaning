import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuickRequestProvider } from './contexts/QuickRequestContext';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceCategory } from './pages/ServiceCategory';
import { ServiceDetail } from './pages/ServiceDetail';
import { Locations } from './pages/Locations';
import { LocationDetail } from './pages/LocationDetail';
import { About } from './pages/About';
import { Faqs } from './pages/Faqs';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <QuickRequestProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<ServiceCategory />} />
            <Route path="/services/:category/:service" element={<ServiceDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:location" element={<LocationDetail />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-a-free-quote" element={<Quote />} />
            <Route path="/privacy-policy" element={<Legal page="privacy" />} />
            <Route path="/terms" element={<Legal page="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QuickRequestProvider>
    </BrowserRouter>);

}