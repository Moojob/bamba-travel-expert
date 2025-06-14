
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap, BookOpen, Building, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Le Canada offre un système éducatif de premier ordre, une qualité de vie exceptionnelle et des possibilités d'immigration post-diplôme attractives.",
    universities: ["Université de Toronto", "McGill University", "University of British Columbia"],
    advantages: ["Possibilité de travailler pendant les études", "Immigration post-diplôme facilitée", "Environnement multiculturel"]
  },
  {
    name: "Royaume-Uni",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Le Royaume-Uni abrite certaines des universités les plus prestigieuses au monde, offrant des programmes d'études de renommée internationale.",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
    advantages: ["Programmes intensifs et courts", "Rayonnement international", "Réseau professionnel mondial"]
  },
  {
    name: "Australie",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    description: "L'Australie est reconnue pour son excellence académique, sa qualité de vie et son cadre idéal pour combiner études et expériences enrichissantes.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University"],
    advantages: ["Qualité de vie exceptionnelle", "Possibilité de travailler 20h/semaine", "Visa post-études"]
  },
  {
    name: "États-Unis",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    description: "Les États-Unis proposent une diversité inégalée de programmes académiques dans des institutions reconnues mondialement.",
    universities: ["Harvard University", "Stanford University", "Massachusetts Institute of Technology"],
    advantages: ["Large choix de programmes", "Opportunités professionnelles", "Recherche de pointe"]
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    description: "La France offre un enseignement de qualité à des tarifs accessibles, dans un environnement culturel riche et diversifié.",
    universities: ["Sorbonne Université", "École Polytechnique", "HEC Paris"],
    advantages: ["Frais de scolarité abordables", "Système de santé performant", "Richesse culturelle"]
  },
  {
    name: "Allemagne",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "L'Allemagne se distingue par son excellence académique, ses programmes en anglais et l'absence de frais de scolarité dans de nombreuses universités publiques.",
    universities: ["Université Technique de Munich", "Université de Heidelberg", "Université Humboldt de Berlin"],
    advantages: ["Études gratuites ou à faible coût", "Économie forte", "Possibilité de rester après les études"]
  },
];

const Destinations = () => {
  return (
    <Layout>
      <Hero 
        title="Destinations pour étudier à l'étranger"
        subtitle="Découvrez les meilleures destinations pour réaliser votre projet d'études internationales"
        image="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80"
        primaryButtonText="Prendre rendez-vous"
        primaryButtonLink="/contact"
        secondaryButtonText="Nos services"
        secondaryButtonLink="/services"
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle 
            title="Explorez les destinations populaires"
            subtitle="Découvrez les pays les plus prisés par les étudiants internationaux et leurs avantages"
            centered
          />

          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <div key={destination.name} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full lg:w-1/2">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-bamba-navy">{destination.name}</h2>
                  <p className="text-gray-700 mb-6">{destination.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Building size={20} className="text-bamba-navy mr-2" />
                      <h3 className="font-semibold">Universités renommées</h3>
                    </div>
                    <ul className="list-disc list-inside ml-6 text-gray-700">
                      {destination.universities.map((uni) => (
                        <li key={uni}>{uni}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Heart size={20} className="text-bamba-green mr-2" />
                      <h3 className="font-semibold">Avantages</h3>
                    </div>
                    <ul className="list-disc list-inside ml-6 text-gray-700">
                      {destination.advantages.map((adv) => (
                        <li key={adv}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
                      <Link to="/contact">En savoir plus</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bamba-green">Besoin d'aide pour choisir votre destination?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Nos conseillers sont là pour vous aider à trouver la destination qui correspond le mieux à votre profil et à vos objectifs académiques.</p>
          <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
