import { Plane, GraduationCap, Globe, Map, Briefcase, Languages } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    // {
    //   title: "Programmes d'échange",
    //   description: "Découvrez les programmes d'échange accessibles et enrichissants pour votre parcours.",
    //   icon: <Globe size={36} />,
    //   link: "/services",
    // },
    // {
    //   title: "Logement étudiant",
    //   description: "Solutions de logement adaptées à votre budget et à vos besoins durant vos études.",
    //   icon: <Map size={36} />,
    //   link: "/services",
    // },
    // {
    //   title: "Préparation linguistique",
    //   description: "Cours de langues et préparation aux tests de langue requis pour étudier à l'étranger.",
    //   icon: <Languages size={36} />,
    //   link: "/services",
    // },
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
                    <p className="text-gray-600">Nous collaborons avec des établissements d'enseignement dans plus de 6 pays à travers le monde.</p>
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
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/why_me.png" 
                alt="Pourquoi choisir BAMBA Travel Expert" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg max-w-xs hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <GraduationCap size={20} className="text-bamba-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">90% de réussite</h4>
                    <p className="text-xs text-gray-600">Taux d'acceptation de nos dossiers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Témoignage vidéo"
            subtitle="Découvrez le parcours de nos étudiants à l'international"
            centered
          />
          
          <div className="max-w-2xl mx-auto mt-12">
            <div className="aspect-[9/16] w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DMKGUzt7pFw?autoplay=0&showinfo=0&controls=1"
                title="Témoignage étudiant - BAMBA Travel Expert"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Pape Maguette Large</h3>
              <p className="text-gray-600">Étudiant international</p>
              <p className="mt-4 text-gray-700">Découvrez l'expérience de Pape Maguette, étudiant parti à l'étranger grâce à BAMBA Travel Expert.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bamba-green">Prêt à concrétiser votre projet de voyage à l’étranger ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de votre projet d'études ou d'immigration et découvrir comment nous pouvons vous aider.</p>
          <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
