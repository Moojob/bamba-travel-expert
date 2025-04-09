
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, GraduationCap, Briefcase, Map, Languages, Globe, Award, Plane } from "lucide-react";
import { motion } from "framer-motion";

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
      <section className="relative py-24 bg-gradient-to-r from-bamba-navy to-blue-800 text-white overflow-hidden">
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-bamba-green">Nos Solutions</h1>
            <p className="text-xl md:text-2xl">
              Notre expertise à votre service pour réaliser votre projet d'études à l'international.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Primary Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle 
            title="Nos services principaux"
            subtitle="Des solutions adaptées pour votre projet d'études à l'étranger"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
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
                  <Button asChild className="bg-bamba-navy hover:bg-bamba-navy/90 transition-all duration-300">
                    <Link to="/contact">Demander des infos</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Solutions complémentaires"
            subtitle="Des options pour enrichir votre expérience internationale"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center"
              >
                <div className="bg-blue-100 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-bamba-navy">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/contact" className="text-bamba-navy hover:text-bamba-navy/80 inline-flex items-center font-medium">
                  En savoir plus <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle 
            title="Notre méthodologie"
            subtitle="Un accompagnement en 4 étapes pour votre réussite"
            centered
          />
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Évaluation personnalisée de votre profil académique et définition de votre projet d'études."
                },
                {
                  step: 2,
                  title: "Planification",
                  description: "Élaboration d'un plan d'action sur mesure incluant la sélection des établissements."
                },
                {
                  step: 3,
                  title: "Accompagnement",
                  description: "Suivi complet pour les admissions, demandes de visa et préparation au départ."
                },
                {
                  step: 4,
                  title: "Suivi continu",
                  description: "Support après votre arrivée pour assurer votre intégration et votre réussite."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center relative z-10"
                >
                  <div className="bg-bamba-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-bamba-navy">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-bamba-navy/20 transform -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bamba-navy to-blue-800 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bamba-green">Prêt à commencer votre aventure internationale ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de votre projet d'études à l'étranger.</p>
            <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100 transition-all duration-300">
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
