
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle, Users, BookOpen, Award, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services éducatifs pour garantir les meilleurs résultats.",
      icon: <Award className="h-8 w-8 text-soluetude-600" />,
    },
    {
      title: "Personnalisation",
      description: "Nous adaptons notre approche aux besoins uniques de chaque élève pour maximiser son potentiel.",
      icon: <Target className="h-8 w-8 text-soluetude-600" />,
    },
    {
      title: "Passion",
      description: "Nos tuteurs sont passionnés par l'enseignement et transmettent cette passion à leurs élèves.",
      icon: <Heart className="h-8 w-8 text-soluetude-600" />,
    },
    {
      title: "Engagement",
      description: "Nous nous engageons pleinement dans la réussite académique et personnelle de chaque élève.",
      icon: <CheckCircle className="h-8 w-8 text-soluetude-600" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-soluetude-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de SoluEtude</h1>
            <p className="text-xl md:text-2xl">
              Découvrez qui nous sommes et comment nous aidons les élèves à réaliser leur plein potentiel.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')" }}>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Notre histoire"
                subtitle="Comment SoluEtude est devenu un leader dans le soutien scolaire"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Fondé en 2010 par un groupe d'enseignants passionnés, SoluEtude est né de la conviction que chaque élève mérite un accompagnement personnalisé pour réaliser son plein potentiel académique.
                </p>
                <p>
                  Au fil des années, nous avons développé une approche pédagogique unique qui combine expertise académique, méthodes d'enseignement innovantes et attention personnalisée aux besoins de chaque élève.
                </p>
                <p>
                  Aujourd'hui, SoluEtude est fier d'avoir aidé des milliers d'élèves à améliorer leurs résultats scolaires, gagner en confiance et développer des compétences d'apprentissage qui leur serviront tout au long de leur vie.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Student studying" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-soluetude-600 text-white p-6 rounded-lg shadow-lg hidden lg:block">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p>Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Nos valeurs"
            subtitle="Les principes qui guident notre approche pédagogique"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle 
            title="Notre équipe"
            subtitle="Des professionnels dédiés à la réussite de vos enfants"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                alt="Thomas Bernard" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Thomas Bernard</h3>
                <p className="text-soluetude-600 mb-3">Fondateur & Directeur</p>
                <p className="text-gray-600">
                  Ancien professeur de mathématiques avec plus de 15 ans d'expérience dans l'éducation.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                alt="Claire Dubois" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Claire Dubois</h3>
                <p className="text-soluetude-600 mb-3">Directrice Pédagogique</p>
                <p className="text-gray-600">
                  Spécialiste en sciences de l'éducation avec une expertise dans les méthodes d'apprentissage innovantes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                alt="Marc Lambert" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Marc Lambert</h3>
                <p className="text-soluetude-600 mb-3">Responsable des Tuteurs</p>
                <p className="text-gray-600">
                  Enseignant expérimenté spécialisé dans le recrutement et la formation de tuteurs de qualité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-soluetude-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <p className="text-xl">Élèves accompagnés</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-xl">Tuteurs qualifiés</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-xl">Taux de satisfaction</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Matières enseignées</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
