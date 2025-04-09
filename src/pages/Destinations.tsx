
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap, BookOpen, Building, Users, Heart, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

const destinations = [
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Le Canada offre un système éducatif de premier ordre, une qualité de vie exceptionnelle et des possibilités d'immigration post-diplôme attractives.",
    universities: ["Université de Toronto", "McGill University", "University of British Columbia"],
    advantages: ["Possibilité de travailler pendant les études", "Immigration post-diplôme facilitée", "Environnement multiculturel"],
    languages: ["Anglais", "Français"],
    visaRequirements: "Visa d'études requis, procédure simplifiée",
    category: "Anglophone"
  },
  {
    name: "Royaume-Uni",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Le Royaume-Uni abrite certaines des universités les plus prestigieuses au monde, offrant des programmes d'études de renommée internationale.",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
    advantages: ["Programmes intensifs et courts", "Rayonnement international", "Réseau professionnel mondial"],
    languages: ["Anglais"],
    visaRequirements: "Visa d'études requis, exigences strictes",
    category: "Anglophone"
  },
  {
    name: "Australie",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    description: "L'Australie est reconnue pour son excellence académique, sa qualité de vie et son cadre idéal pour combiner études et expériences enrichissantes.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University"],
    advantages: ["Qualité de vie exceptionnelle", "Possibilité de travailler 20h/semaine", "Visa post-études"],
    languages: ["Anglais"],
    visaRequirements: "Visa d'études requis, procédure standardisée",
    category: "Anglophone"
  },
  {
    name: "États-Unis",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    description: "Les États-Unis proposent une diversité inégalée de programmes académiques dans des institutions reconnues mondialement.",
    universities: ["Harvard University", "Stanford University", "Massachusetts Institute of Technology"],
    advantages: ["Large choix de programmes", "Opportunités professionnelles", "Recherche de pointe"],
    languages: ["Anglais"],
    visaRequirements: "Visa d'études F-1 requis, procédure complexe",
    category: "Anglophone"
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    description: "La France offre un enseignement de qualité à des tarifs accessibles, dans un environnement culturel riche et diversifié.",
    universities: ["Sorbonne Université", "École Polytechnique", "HEC Paris"],
    advantages: ["Frais de scolarité abordables", "Système de santé performant", "Richesse culturelle"],
    languages: ["Français", "Programmes en anglais disponibles"],
    visaRequirements: "Visa d'études requis pour non-Européens",
    category: "Francophone"
  },
  {
    name: "Allemagne",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "L'Allemagne se distingue par son excellence académique, ses programmes en anglais et l'absence de frais de scolarité dans de nombreuses universités publiques.",
    universities: ["Université Technique de Munich", "Université de Heidelberg", "Université Humboldt de Berlin"],
    advantages: ["Études gratuites ou à faible coût", "Économie forte", "Possibilité de rester après les études"],
    languages: ["Allemand", "Nombreux programmes en anglais"],
    visaRequirements: "Visa d'études requis pour non-Européens",
    category: "Europe"
  },
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["Tous", "Anglophone", "Francophone", "Europe"];
  
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
                           selectedCategory === "Tous" || 
                           destination.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Explorez les destinations populaires"
            subtitle="Découvrez les pays les plus prisés par les étudiants internationaux et leurs avantages"
            centered
          />

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Rechercher une destination..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-auto">
                <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="w-full">
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 w-full md:w-auto"
                    >
                      <Filter size={16} />
                      Filtrer par région
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 p-4 border rounded-md bg-white">
                    <div className="space-y-2">
                      <Label>Régions</Label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button 
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category === "Tous" ? null : category)}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover"
                      style={{ maxHeight: '400px' }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <motion.h2 
                      className="text-3xl font-bold mb-4 text-bamba-navy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {destination.name}
                    </motion.h2>
                    <p className="text-gray-700 mb-6">{destination.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Globe size={20} className="text-bamba-navy mr-2" />
                          <h3 className="font-semibold">Langues</h3>
                        </div>
                        <p className="text-gray-700 ml-8">{destination.languages.join(", ")}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-2">
                          <GraduationCap size={20} className="text-bamba-navy mr-2" />
                          <h3 className="font-semibold">Visa</h3>
                        </div>
                        <p className="text-gray-700 ml-8">{destination.visaRequirements}</p>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="mt-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
                        <Link to="/contact">En savoir plus</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <GraduationCap size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucune destination trouvée</h3>
                <p className="text-gray-500">Essayez avec d'autres termes de recherche ou filtres</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 hero-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'aide pour choisir votre destination?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Nos conseillers sont là pour vous aider à trouver la destination qui correspond le mieux à votre profil et à vos objectifs académiques.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Explorer nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
