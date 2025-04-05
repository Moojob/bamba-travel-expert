
import { Plane, GraduationCap, Globe, Map, Briefcase, Languages } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Études universitaires",
      description: "Conseils et accompagnement pour intégrer les meilleures universités à l'étranger.",
      icon: <GraduationCap size={36} />,
      link: "/services",
    },
    {
      title: "Visa étudiant",
      description: "Assistance complète pour l'obtention du visa étudiant et les démarches administratives.",
      icon: <Briefcase size={36} />,
      link: "/services",
    },
    {
      title: "Programmes d'échange",
      description: "Découvrez les programmes d'échange accessibles et enrichissants pour votre parcours.",
      icon: <Globe size={36} />,
      link: "/services",
    },
    {
      title: "Logement étudiant",
      description: "Solutions de logement adaptées à votre budget et à vos besoins durant vos études.",
      icon: <Map size={36} />,
      link: "/services",
    },
    {
      title: "Préparation linguistique",
      description: "Cours de langues et préparation aux tests de langue requis pour étudier à l'étranger.",
      icon: <Languages size={36} />,
      link: "/services",
    },
    {
      title: "Accompagnement à l'installation",
      description: "Support complet pour faciliter votre arrivée et installation dans votre pays d'accueil.",
      icon: <Plane size={36} />,
      link: "/services",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Étudiante à Londres",
      content: "BAMBA Travel Expert m'a permis de réaliser mon rêve d'étudier à Londres. Leur accompagnement a été précieux pour mon dossier d'admission et l'obtention du visa.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      role: "Étudiant au Canada",
      content: "Grâce à BAMBA Travel Expert, j'ai pu intégrer une excellente université à Montréal. Les conseils sur le choix du programme et le soutien durant la procédure ont été déterminants.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
    },
    {
      name: "Julie Leroy",
      role: "Étudiante en Australie",
      content: "Mon expérience d'études en Australie a été incroyable, et tout a commencé avec le support expert de BAMBA Travel. Je recommande vivement leurs services pour étudier à l'étranger.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 4,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        title="Réalisez votre rêve d'études à l'étranger"
        subtitle="Accompagnement personnalisé pour votre projet d'études internationales et d'immigration"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        primaryButtonText="Prendre rendez-vous"
        primaryButtonLink="/contact"
        secondaryButtonText="Nos services"
        secondaryButtonLink="/services"
      />

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Nos services"
            subtitle="Des solutions adaptées pour votre projet d'études à l'étranger"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir <span className="text-bamba-navy">BAMBA Travel Expert</span> ?</h2>
              <p className="text-gray-700 mb-6">Chez BAMBA Travel Expert, nous sommes spécialisés dans l'accompagnement des étudiants souhaitant poursuivre leurs études à l'étranger. Notre expertise et notre réseau international font toute la différence.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <GraduationCap size={20} className="text-bamba-navy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Conseillers expérimentés</h3>
                    <p className="text-gray-600">Notre équipe est composée de conseillers ayant eux-mêmes étudié à l'international et connaissant parfaitement les procédures.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe size={20} className="text-bamba-navy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Réseau international</h3>
                    <p className="text-gray-600">Nous collaborons avec plus de 300 établissements d'enseignement dans 20 pays à travers le monde.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Briefcase size={20} className="text-bamba-navy" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Accompagnement complet</h3>
                    <p className="text-gray-600">Du choix de l'établissement à l'installation sur place, nous vous accompagnons à chaque étape de votre projet.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
                  <Link to="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80" 
                alt="Students studying abroad" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <GraduationCap size={24} className="text-bamba-green" />
                  </div>
                  <div>
                    <h4 className="font-bold">98% de réussite</h4>
                    <p className="text-sm text-gray-600">Taux d'acceptation de nos dossiers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Destinations populaires"
            subtitle="Découvrez les pays les plus prisés pour étudier à l'étranger"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Canada', 'Royaume-Uni', 'Australie', 'États-Unis', 'France', 'Allemagne'].map((country) => (
              <div key={country} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-bamba-navy">{country}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
              <Link to="/destinations">Toutes nos destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonial-gradient">
        <div className="container">
          <SectionTitle
            title="Témoignages d'étudiants"
            subtitle="Découvrez les expériences de ceux qui ont fait confiance à BAMBA Travel Expert"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre projet d'études à l'étranger ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à réaliser votre rêve d'étudier à l'international.</p>
          <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
