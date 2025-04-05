
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, BookOpen, Target, Award, Clock, Users, Lightbulb, CheckCircle, ArrowRight, Sparkles, GraduationCap, Briefcase, Globe, Map, Languages, Plane } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const primaryServices = [
    {
      title: "Études universitaires",
      description: "Conseils et accompagnement pour intégrer les meilleures universités à l'étranger.",
      icon: <GraduationCap className="h-10 w-10 text-bamba-navy" />,
      features: [
        "Sélection des établissements adaptés",
        "Préparation du dossier d'admission",
        "Suivi des candidatures",
        "Conseils sur les programmes d'études",
      ],
    },
    {
      title: "Visa étudiant",
      description: "Assistance complète pour l'obtention du visa étudiant et les démarches administratives.",
      icon: <Briefcase className="h-10 w-10 text-bamba-navy" />,
      features: [
        "Constitution du dossier de visa",
        "Préparation à l'entretien consulaire",
        "Suivi de la demande",
        "Conseils personnalisés",
      ],
    },
    {
      title: "Logement étudiant",
      description: "Solutions de logement adaptées à votre budget et à vos besoins durant vos études.",
      icon: <Map className="h-10 w-10 text-bamba-navy" />,
      features: [
        "Résidences universitaires",
        "Colocation étudiante",
        "Famille d'accueil",
        "Accompagnement à distance",
      ],
    },
  ];

  const specializedServices = [
    {
      title: "Préparation linguistique",
      description: "Cours de langues et préparation aux tests de langue requis pour étudier à l'étranger.",
      icon: <Languages className="h-6 w-6 text-bamba-navy" />,
    },
    {
      title: "Programmes d'échange",
      description: "Découvrez les programmes d'échange accessibles et enrichissants pour votre parcours.",
      icon: <Globe className="h-6 w-6 text-bamba-navy" />,
    },
    {
      title: "Bourses d'études",
      description: "Identification et demande de bourses d'études pour financer votre projet international.",
      icon: <Award className="h-6 w-6 text-bamba-navy" />,
    },
    {
      title: "Accompagnement à l'installation",
      description: "Support complet pour faciliter votre arrivée et installation dans votre pays d'accueil.",
      icon: <Plane className="h-6 w-6 text-bamba-navy" />,
    },
  ];

  const destinations = [
    "Canada", "Royaume-Uni", "Australie", "États-Unis", 
    "France", "Allemagne", "Espagne", "Italie",
    "Suisse", "Belgique", "Irlande", "Nouvelle-Zélande",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-bamba-navy text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-bamba-green">Nos services</h1>
            <p className="text-xl md:text-2xl">
              Découvrez notre gamme complète de services conçus pour vous accompagner dans votre projet d'études à l'étranger.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
        </div>
      </section>

      {/* Primary Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle 
            title="Nos services principaux"
            subtitle="Des solutions adaptées pour votre projet d'études à l'étranger"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-bamba-navy">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-bamba-green mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-bamba-navy hover:bg-bamba-navy/90">
                    <Link to="/contact">Demander des infos</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Services spécialisés"
            subtitle="Des options complémentaires pour enrichir votre expérience internationale"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/contact" className="text-bamba-navy hover:text-bamba-navy/80 inline-flex items-center font-medium">
                  En savoir plus <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Destinations populaires"
                subtitle="Nous vous accompagnons dans vos projets d'études vers de nombreuses destinations"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {destinations.map((destination, index) => (
                  <div key={index} className="flex items-center">
                    <Globe className="h-5 w-5 text-bamba-navy mr-2" />
                    <span>{destination}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-bamba-navy hover:bg-bamba-navy/90">
                  <Link to="/destinations">Explorer les destinations</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                alt="Globe with various international destinations" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-bamba-navy text-white p-4 rounded-lg shadow-lg hidden lg:block">
                <div className="flex items-center space-x-2">
                  <Globe size={24} />
                  <span className="font-bold">20+ pays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Comment ça marche"
            subtitle="Notre processus en 4 étapes simples"
            centered
          />
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-bamba-navy text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">Consultation</h3>
                <p className="text-gray-600">Nous évaluons vos objectifs, votre profil académique et définissons ensemble votre projet d'études.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-bamba-navy text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">Plan personnalisé</h3>
                <p className="text-gray-600">Nous élaborons un plan d'action complet incluant la sélection des établissements et des programmes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-bamba-navy text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">Accompagnement</h3>
                <p className="text-gray-600">Nous vous guidons à travers le processus d'admission, de demande de visa et de préparation au départ.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-bamba-navy text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">Suivi continu</h3>
                <p className="text-gray-600">Nous continuons à vous soutenir après votre arrivée dans votre pays d'accueil.</p>
              </div>
            </div>
            
            {/* Connection Line (hidden on mobile) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-bamba-navy/20 transform -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bamba-navy text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bamba-green">Prêt à commencer votre aventure internationale ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de votre projet d'études à l'étranger et découvrir comment nous pouvons vous aider.</p>
          <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
