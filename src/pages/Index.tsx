import { Plane, GraduationCap, Globe, Map, Briefcase, Languages, ChevronDown, ChevronUp, Calculator, BarChart, PieChart, Award, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import BudgetCalculator from "@/components/BudgetCalculator";
import { motion } from "framer-motion";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqItems = [
    {
      question: "Quels sont les documents requis pour un visa étudiant ?",
      answer: "Les documents généralement requis comprennent une lettre d'acceptation d'une institution reconnue, une preuve de moyens financiers, un passeport valide, des relevés bancaires, et parfois une preuve de compétence linguistique comme le TOEFL ou IELTS. Notez que les exigences varient selon le pays de destination."
    },
    {
      question: "Puis-je travailler pendant mes études à l'étranger ?",
      answer: "Oui, de nombreux pays permettent aux étudiants internationaux de travailler à temps partiel pendant leurs études. Par exemple, au Canada et en Australie, vous pouvez généralement travailler jusqu'à 20 heures par semaine pendant les sessions d'études, et à temps plein pendant les vacances."
    },
    {
      question: "Quelles sont les bourses disponibles pour les étudiants internationaux ?",
      answer: "De nombreuses bourses sont disponibles, notamment des bourses gouvernementales, institutionnelles, et privées. Nos conseillers peuvent vous aider à identifier les opportunités de financement adaptées à votre profil et à vos objectifs académiques."
    },
    {
      question: "Comment puis-je obtenir un titre de séjour permanent après mes études ?",
      answer: "Plusieurs pays comme le Canada, l'Australie et la Nouvelle-Zélande offrent des voies d'accès à la résidence permanente pour les diplômés internationaux. Nos experts en immigration peuvent vous guider tout au long de ce processus et vous aider à maximiser vos chances."
    },
  ];

  const statistics = [
    { icon: <Award size={28} />, value: "98%", label: "Taux de réussite des demandes de visa" },
    { icon: <GraduationCap size={28} />, value: "5000+", label: "Étudiants accompagnés" },
    { icon: <Globe size={28} />, value: "20+", label: "Pays de destination" },
    { icon: <Clock size={28} />, value: "15", label: "Années d'expertise" },
  ];

  return (
    <Layout>
      <Hero 
        title="Réalisez votre rêve d'études à l'étranger"
        subtitle="Accompagnement personnalisé pour votre projet d'études internationales et d'immigration"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        primaryButtonText="Prendre rendez-vous"
        primaryButtonLink="/contact"
        secondaryButtonText="Nos services"
        secondaryButtonLink="/services"
      >
        <div className="mt-12 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2 text-white/80">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Hero>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Nos services"
            subtitle="Des solutions adaptées pour votre projet d'études à l'étranger"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Calculez votre budget d'études"
            subtitle="Estimez le coût de vos études à l'étranger selon votre destination"
            centered
          />
          <BudgetCalculator />
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Témoignage vidéo"
            subtitle="Découvrez l'expérience de nos étudiants racontée en vidéo"
            centered
          />
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <AspectRatio ratio={16/9} className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/sJGAMSvQrh8" 
                  title="Témoignage d'étudiant - BAMBA Travel Expert"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </AspectRatio>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold">Témoignage d'Étudiants Internationaux</h3>
                <p className="text-gray-600">Expériences vécues lors des études à l'étranger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle
            title="Questions fréquentes"
            subtitle="Des réponses à vos interrogations sur les études à l'étranger et l'immigration"
            centered
          />
          <div className="max-w-3xl mx-auto mt-8">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200"
                >
                  <span className="font-medium text-left">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-bamba-navy flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-bamba-navy flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50 rounded-b-lg -mt-1 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle
            title="Destinations populaires"
            subtitle="Découvrez les pays les plus prisés pour étudier à l'étranger"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Canada', 'Royaume-Uni', 'Australie', 'États-Unis', 'France', 'Allemagne'].map((country) => (
              <motion.div
                key={country}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-bamba-navy">{country}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
              <Link to="/destinations">Toutes nos destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding testimonial-gradient">
        <div className="container">
          <SectionTitle
            title="Témoignages d'étudiants"
            subtitle="Découvrez les expériences de ceux qui ont fait confiance à BAMBA Travel Expert"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Prêt à transformer votre avenir ?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2" /> Pour les étudiants
                </h3>
                <p className="mb-4">Accédez aux meilleures universités à l'étranger et construisez votre future carrière avec notre accompagnement personnalisé.</p>
                <Button asChild size="lg" className="w-full bg-white text-bamba-navy hover:bg-gray-100">
                  <Link to="/contact">Consultation étudiante</Link>
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2" /> Pour l'immigration
                </h3>
                <p className="mb-4">Concrétisez votre projet d'immigration grâce à notre expertise et maximisez vos chances de succès.</p>
                <Button asChild size="lg" className="w-full bg-bamba-green text-white hover:bg-bamba-green/90">
                  <Link to="/contact">Consultation immigration</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
