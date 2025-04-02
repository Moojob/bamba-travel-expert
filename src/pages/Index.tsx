
import { Book, Clock, Award, Users, Target, Lightbulb } from "lucide-react";
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
      title: "Cours particuliers",
      description: "Des cours personnalisés pour répondre aux besoins spécifiques de chaque élève.",
      icon: <Book size={36} />,
      link: "/services",
    },
    {
      title: "Aide aux devoirs",
      description: "Un soutien régulier pour aider les élèves à accomplir leurs devoirs efficacement.",
      icon: <Clock size={36} />,
      link: "/services",
    },
    {
      title: "Préparation aux examens",
      description: "Des programmes intensifs pour préparer les étudiants aux examens importants.",
      icon: <Award size={36} />,
      link: "/services",
    },
    {
      title: "Cours en groupe",
      description: "Des sessions en petit groupe pour favoriser l'apprentissage collaboratif.",
      icon: <Users size={36} />,
      link: "/services",
    },
    {
      title: "Suivi personnalisé",
      description: "Un suivi régulier pour mesurer les progrès et ajuster les méthodes d'enseignement.",
      icon: <Target size={36} />,
      link: "/services",
    },
    {
      title: "Méthodologie",
      description: "Des techniques d'étude efficaces pour améliorer l'organisation et la retention.",
      icon: <Lightbulb size={36} />,
      link: "/services",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Parent d'élève",
      content: "SoluEtude a aidé mon fils à améliorer considérablement ses notes en mathématiques. Son tuteur est patient et explique les concepts complexes de manière claire et accessible.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
    },
    {
      name: "Thomas Dubois",
      role: "Étudiant en université",
      content: "Grâce à SoluEtude, j'ai pu rattraper mon retard en physique et réussir mes examens. Je recommande vivement leurs services à tous les étudiants en difficulté.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 5,
    },
    {
      name: "Julie Leroy",
      role: "Lycéenne",
      content: "Mon tuteur chez SoluEtude m'a aidée à préparer mon bac de français. Ses conseils et sa méthode ont été précieux, et j'ai obtenu une excellente note.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      rating: 4,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        title="Révélez le potentiel académique de votre enfant"
        subtitle="Cours particuliers et accompagnement scolaire personnalisé pour tous les niveaux"
        image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            subtitle="Des solutions adaptées à tous les besoins éducatifs"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir <span className="text-soluetude-600">SoluEtude</span> ?</h2>
              <p className="text-gray-700 mb-6">Chez SoluEtude, nous sommes dédiés à la réussite académique de chaque élève. Notre approche personnalisée et nos tuteurs expérimentés font toute la différence.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-soluetude-100 p-2 rounded-full">
                      <Award size={20} className="text-soluetude-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Tuteurs qualifiés</h3>
                    <p className="text-gray-600">Tous nos tuteurs sont soigneusement sélectionnés et possèdent une solide expérience dans leur domaine.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-soluetude-100 p-2 rounded-full">
                      <Target size={20} className="text-soluetude-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Approche personnalisée</h3>
                    <p className="text-gray-600">Nous adaptons nos méthodes d'enseignement au style d'apprentissage et aux besoins de chaque élève.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-soluetude-100 p-2 rounded-full">
                      <Clock size={20} className="text-soluetude-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Flexibilité horaire</h3>
                    <p className="text-gray-600">Nous proposons des horaires flexibles pour s'adapter au planning chargé des élèves et des familles.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
                  <Link to="/about">En savoir plus sur nous</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80" 
                alt="Students working together" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Award size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">98% de réussite</h4>
                    <p className="text-sm text-gray-600">Taux de satisfaction de nos élèves</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonial-gradient">
        <div className="container">
          <SectionTitle
            title="Ce que disent nos élèves"
            subtitle="Découvrez les expériences de ceux qui ont fait confiance à SoluEtude"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à booster la réussite scolaire ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter des besoins spécifiques de votre enfant et découvrir comment nous pouvons l'aider à atteindre ses objectifs.</p>
          <Button asChild size="lg" className="bg-white text-soluetude-700 hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
