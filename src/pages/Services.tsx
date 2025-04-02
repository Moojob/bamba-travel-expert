
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, BookOpen, Target, Award, Clock, Users, Lightbulb, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const Services = () => {
  const primaryServices = [
    {
      title: "Cours particuliers",
      description: "Des séances individuelles avec un tuteur dédié pour un accompagnement sur mesure.",
      icon: <Book className="h-10 w-10 text-soluetude-600" />,
      features: [
        "Accompagnement personnalisé",
        "Suivi régulier des progrès",
        "Flexibilité des horaires",
        "Adaptation au rythme de l'élève",
      ],
    },
    {
      title: "Aide aux devoirs",
      description: "Un soutien quotidien pour aider les élèves à accomplir leurs devoirs efficacement.",
      icon: <BookOpen className="h-10 w-10 text-soluetude-600" />,
      features: [
        "Accompagnement régulier",
        "Organisation et planification",
        "Méthodes de travail efficaces",
        "Vérification et correction",
      ],
    },
    {
      title: "Préparation aux examens",
      description: "Des programmes intensifs pour préparer les étudiants aux examens importants.",
      icon: <Target className="h-10 w-10 text-soluetude-600" />,
      features: [
        "Révision complète du programme",
        "Entraînements aux examens",
        "Techniques de gestion du stress",
        "Méthodologie adaptée au type d'examen",
      ],
    },
  ];

  const specializedServices = [
    {
      title: "Cours en ligne",
      description: "Des cours à distance pour un apprentissage flexible et accessible.",
      icon: <Sparkles className="h-6 w-6 text-soluetude-600" />,
    },
    {
      title: "Cours en groupe",
      description: "Des sessions en petit groupe pour favoriser l'apprentissage collaboratif.",
      icon: <Users className="h-6 w-6 text-soluetude-600" />,
    },
    {
      title: "Stages intensifs",
      description: "Des programmes concentrés pendant les vacances scolaires pour combler les lacunes.",
      icon: <Clock className="h-6 w-6 text-soluetude-600" />,
    },
    {
      title: "Cours de méthodologie",
      description: "Des techniques d'étude efficaces pour améliorer l'organisation et la rétention.",
      icon: <Lightbulb className="h-6 w-6 text-soluetude-600" />,
    },
  ];

  const subjects = [
    "Mathématiques", "Français", "Anglais", "Physique-Chimie",
    "SVT", "Histoire-Géographie", "Philosophie", "Économie",
    "Espagnol", "Allemand", "Informatique", "Littérature",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-soluetude-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos services</h1>
            <p className="text-xl md:text-2xl">
              Découvrez notre gamme complète de services éducatifs conçus pour répondre aux besoins spécifiques de chaque élève.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
        </div>
      </section>

      {/* Primary Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle 
            title="Nos services principaux"
            subtitle="Des solutions éducatives adaptées à tous les besoins"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-8 transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
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
            subtitle="Des options complémentaires pour enrichir l'expérience d'apprentissage"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="bg-soluetude-100 w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/contact" className="text-soluetude-600 hover:text-soluetude-800 inline-flex items-center font-medium">
                  En savoir plus <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Matières enseignées"
                subtitle="Nous couvrons un large éventail de disciplines pour tous les niveaux scolaires"
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-soluetude-600 mr-2" />
                    <span>{subject}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
                  <Link to="/contact">Demander des infos</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                alt="Student studying different subjects" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-soluetude-600 text-white p-4 rounded-lg shadow-lg hidden lg:block">
                <div className="flex items-center space-x-2">
                  <Book size={24} />
                  <span className="font-bold">Tous niveaux</span>
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
                <div className="bg-soluetude-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Nous évaluons les besoins spécifiques de l'élève et définissons des objectifs clairs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-soluetude-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-2">Sélection du tuteur</h3>
                <p className="text-gray-600">Nous trouvons le tuteur parfait qui correspond aux besoins et à la personnalité de l'élève.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-soluetude-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-2">Plan personnalisé</h3>
                <p className="text-gray-600">Nous élaborons un programme d'étude sur mesure adapté aux objectifs de l'élève.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center relative z-10">
                <div className="bg-soluetude-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold mb-2">Suivi continu</h3>
                <p className="text-gray-600">Nous évaluons régulièrement les progrès et ajustons le programme si nécessaire.</p>
              </div>
            </div>
            
            {/* Connection Line (hidden on mobile) */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-soluetude-200 transform -translate-y-1/2 hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-soluetude-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.</p>
          <Button asChild size="lg" className="bg-white text-soluetude-700 hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
