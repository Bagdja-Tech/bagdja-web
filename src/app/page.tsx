"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getLanguageFromUrl, getTranslations, type Language } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function HomeContent() {
  const searchParams = useSearchParams();
  const lang = getLanguageFromUrl(searchParams);
  const t = getTranslations(lang);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t.contact.form.success);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = "6281234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(t.hero.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">
              Bagdja Development Group
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-slate-900 transition font-medium">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-700 hover:text-slate-900 transition font-medium">
                {t.nav.services}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-slate-900 transition font-medium">
                {t.nav.pricing}
              </a>
              <a href="#how-we-work" className="text-gray-700 hover:text-slate-900 transition font-medium">
                {t.nav.howWeWork}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-slate-900 transition font-medium">
                {t.nav.contact}
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-900 transition shadow-lg text-lg"
            >
              {t.hero.ctaConsultation}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg text-lg"
            >
              {t.hero.ctaWhatsApp}
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 space-y-6 text-lg leading-relaxed">
              <p className="text-xl font-medium">
                {t.about.content1}
              </p>
              <p>
                {t.about.content2}
              </p>
              <p>
                {t.about.content3}
              </p>
              <p>
                {t.about.content4}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.softwareDev.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.softwareDev.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.website.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.website.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.integration.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.integration.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.bugFixing.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.bugFixing.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.maintenance.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.maintenance.description}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-slate-700 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.services.consulting.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.services.consulting.description}
              </p>
            </div>
          </div>
          
          {/* CTA after Services */}
          <div className="mt-16 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-900 transition shadow-lg text-lg"
            >
              {t.services.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-800 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.pricing.website.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{t.pricing.website.price}</span>
                <span className="text-gray-600 ml-2">{t.pricing.website.priceLabel}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {t.pricing.website.description}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-slate-900 transition"
              >
                {t.pricing.website.cta}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-800 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.pricing.webApp.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{t.pricing.webApp.price}</span>
                <span className="text-gray-600 ml-2">{t.pricing.webApp.priceLabel}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {t.pricing.webApp.description}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-slate-900 transition"
              >
                {t.pricing.webApp.cta}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-800 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.pricing.mobile.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{t.pricing.mobile.price}</span>
                <span className="text-gray-600 ml-2">{t.pricing.mobile.priceLabel}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {t.pricing.mobile.description}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-slate-900 transition"
              >
                {t.pricing.mobile.cta}
              </a>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-slate-800 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.pricing.maintenance.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{t.pricing.maintenance.price}</span>
                <span className="text-gray-600 ml-2">{t.pricing.maintenance.priceLabel}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {t.pricing.maintenance.description}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-slate-900 transition"
              >
                {t.pricing.maintenance.cta}
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm italic">
              {t.pricing.disclaimer}
            </p>
          </div>

          {/* CTA after Pricing */}
          <div className="mt-16 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg text-lg"
            >
              {t.pricing.cta}
            </a>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.howWeWork.title}</h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              {t.howWeWork.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.howWeWork.step1.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howWeWork.step1.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.howWeWork.step2.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howWeWork.step2.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.howWeWork.step3.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howWeWork.step3.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.howWeWork.step4.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.howWeWork.step4.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.whyUs.title}
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.whyUs.delivery.title}
              </h3>
              <p className="text-gray-600">
                {t.whyUs.delivery.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.whyUs.partner.title}
              </h3>
              <p className="text-gray-600">
                {t.whyUs.partner.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.whyUs.communication.title}
              </h3>
              <p className="text-gray-600">
                {t.whyUs.communication.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.whyUs.support.title}
              </h3>
              <p className="text-gray-600">
                {t.whyUs.support.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t.whyUs.business.title}
              </h3>
              <p className="text-gray-600">
                {t.whyUs.business.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-1 bg-slate-800 mx-auto mb-2"></div>
            <p className="mt-6 text-lg text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="mb-8 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-md text-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.contact.whatsappCta}
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-slate-800 text-gray-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-900 transition shadow-md text-lg"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Bagdja Development Group
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    {t.nav.pricing}
                  </a>
                </li>
                <li>
                  <a href="#how-we-work" className="hover:text-white transition">
                    {t.nav.howWeWork}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    {t.nav.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {t.footer.remoteService}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-gray-300">
            <p>
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

