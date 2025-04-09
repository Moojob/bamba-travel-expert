
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle, Users, BookOpen, Award, Target, Heart, Globe, Map, Clock, Briefcase, Plane, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services pour garantir les meilleurs résultats pour votre projet d'études.",
      icon: <Award className="h-8 w-8 text-bamba-navy" />,
    },
    {
      title: "Personnalisation",
      description: "Nous adaptons notre approche aux besoins uniques de chaque étudiant pour maximiser ses chances de réussite.",
      icon: <Target className="h-8 w-8 text-bamba-navy" />,
    },
    {
      title: "Expertise internationale",
      description: "Notre équipe possède une connaissance approfondie des systèmes éducatifs internationaux et des procédures d'immigration.",
      icon: <Globe className="h-8 w-8 text-bamba-navy" />,
    },
    {
      title: "Engagement",
      description: "Nous nous engageons pleinement dans la réussite de votre projet d'études à l'étranger et d'immigration.",
      icon: <CheckCircle className="h-8 w-8 text-bamba-navy" />,
    },
  ];

  const achievements = [
    { 
      number: "8+", 
      label: "Années d'expérience", 
      icon: <Clock className="h-6 w-6" /> 
    },
    { 
      number: "3000+", 
      label: "Étudiants accompagnés", 
      icon: <Users className="h-6 w-6" /> 
    },
    { 
      number: "98%", 
      label: "Taux de satisfaction", 
      icon: <Heart className="h-6 w-6" /> 
    },
    { 
      number: "300+", 
      label: "Partenaires universitaires", 
      icon: <BookOpen className="h-6 w-6" /> 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-bamba-navy text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              À propos de BAMBA Travel Expert
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Découvrez qui nous sommes et comment nous aidons les étudiants à réaliser leur rêve d'études à l'étranger.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')" }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bamba-navy via-bamba-navy/80 to-transparent"></div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-gray-50 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-full text-bamba-navy">
                    {item.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-bamba-navy mb-1">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Notre histoire"
                subtitle="Comment BAMBA Travel Expert est devenu un leader dans l'accompagnement des étudiants internationaux"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Fondé en 2015 par un groupe de passionnés ayant eux-mêmes étudié à l'étranger, <span className="text-bamba-navy font-semibold">BAMBA Travel Expert</span> est né de la conviction que chaque étudiant mérite un accompagnement personnalisé pour réaliser son projet d'études internationales.
                </p>
                <p>
                  Au fil des années, nous avons développé une expertise unique qui combine connaissance approfondie des systèmes éducatifs internationaux, maîtrise des procédures d'immigration et attention personnalisée aux besoins de chaque étudiant.
                </p>
                <p>
                  Aujourd'hui, BAMBA Travel Expert est fier d'avoir aidé des milliers d'étudiants à intégrer des établissements prestigieux à travers le monde, à obtenir leurs visas et à s'installer avec succès dans leur pays d'accueil.
                </p>
              </div>

              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button asChild className="bg-bamba-navy hover:bg-opacity-90">
                    <Link to="/contact">Discutez avec un conseiller</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students studying abroad" 
                className="rounded-lg shadow-xl"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-bamba-navy text-white p-6 rounded-lg shadow-lg hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold">2015</h3>
                  <p>Année de fondation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Ce que nous offrons"
            subtitle="Services complets pour votre réussite académique et votre expérience internationale"
            centered
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bamba-navy"
              variants={itemVariants}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-bamba-navy">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conseil académique</h3>
              <p className="text-gray-600">
                Orientation personnalisée pour choisir le programme d'études et l'institution qui correspondent le mieux à votre profil et à vos objectifs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bamba-navy"
              variants={itemVariants}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-bamba-navy">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Services d'immigration</h3>
              <p className="text-gray-600">
                Assistance complète pour la préparation et la soumission de votre demande de visa étudiant avec un taux de réussite de 98%.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-bamba-navy"
              variants={itemVariants}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-bamba-navy">
                <Plane size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support à l'intégration</h3>
              <p className="text-gray-600">
                Aide pour trouver un logement, ouvrir un compte bancaire et s'adapter à votre nouvel environnement à l'étranger.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle 
            title="Nos valeurs"
            subtitle="Les principes qui guident notre approche d'accompagnement"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Notre équipe"
            subtitle="Des experts dédiés à la réussite de votre projet international"
            centered
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Thomas Bernard" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Thomas Bernard</h3>
                  <p className="text-white/80">Fondateur & Directeur</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Ancien étudiant international avec plus de 10 ans d'expérience dans le conseil en éducation internationale.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Claire Dubois" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Claire Dubois</h3>
                  <p className="text-white/80">Conseillère en Immigration</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Spécialiste des procédures de visa et d'immigration pour étudiants internationaux.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Marc Lambert" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">Marc Lambert</h3>
                  <p className="text-white/80">Conseiller Éducatif</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Expert en systèmes éducatifs internationaux et programmes d'études à l'étranger.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre aventure internationale ?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">Nos experts sont là pour vous accompagner à chaque étape de votre parcours d'études à l'étranger et d'immigration.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-bamba-navy hover:bg-gray-100">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
