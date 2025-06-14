
// import Layout from "@/components/Layout";
// import SectionTitle from "@/components/SectionTitle";
// import { CheckCircle, Users, BookOpen, Award, Target, Heart, Globe, Map } from "lucide-react";

// const About = () => {
//   const values = [
//     {
//       title: "Excellence",
//       description: "Nous visons l'excellence dans tous nos services pour garantir les meilleurs résultats pour votre projet d'études.",
//       icon: <Award className="h-8 w-8 text-bamba-navy" />,
//     },
//     {
//       title: "Personnalisation",
//       description: "Nous adaptons notre approche aux besoins uniques de chaque étudiant pour maximiser ses chances de réussite.",
//       icon: <Target className="h-8 w-8 text-bamba-navy" />,
//     },
//     {
//       title: "Expertise internationale",
//       description: "Notre équipe possède une connaissance approfondie des systèmes éducatifs internationaux et des procédures d'immigration.",
//       icon: <Globe className="h-8 w-8 text-bamba-navy" />,
//     },
//     {
//       title: "Engagement",
//       description: "Nous nous engageons pleinement dans la réussite de votre projet d'études à l'étranger et d'immigration.",
//       icon: <CheckCircle className="h-8 w-8 text-bamba-navy" />,
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative py-20 bg-bamba-navy text-white">
//         <div className="container">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de BAMBA Travel Expert</h1>
//             <p className="text-xl md:text-2xl">
//               Découvrez qui nous sommes et comment nous aidons les étudiants à réaliser leur rêve d'études à l'étranger.
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')" }}>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="section-padding bg-white">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <SectionTitle 
//                 title="Notre histoire"
//                 subtitle="Comment BAMBA Travel Expert est devenu un leader dans l'accompagnement des étudiants internationaux"
//               />
//               <div className="space-y-4 text-gray-700">
//                 <p>
//                   Fondé en 2015 par un groupe de passionnés ayant eux-mêmes étudié à l'étranger, BAMBA Travel Expert est né de la conviction que chaque étudiant mérite un accompagnement personnalisé pour réaliser son projet d'études internationales.
//                 </p>
//                 <p>
//                   Au fil des années, nous avons développé une expertise unique qui combine connaissance approfondie des systèmes éducatifs internationaux, maîtrise des procédures d'immigration et attention personnalisée aux besoins de chaque étudiant.
//                 </p>
//                 <p>
//                   Aujourd'hui, BAMBA Travel Expert est fier d'avoir aidé des milliers d'étudiants à intégrer des établissements prestigieux à travers le monde, à obtenir leurs visas et à s'installer avec succès dans leur pays d'accueil.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
//                 alt="Students studying abroad" 
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-bamba-navy text-white p-6 rounded-lg shadow-lg hidden lg:block">
//                 <div className="text-center">
//                   <h3 className="text-2xl font-bold">8+</h3>
//                   <p>Années d'expérience</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container">
//           <SectionTitle 
//             title="Nos valeurs"
//             subtitle="Les principes qui guident notre approche d'accompagnement"
//             centered
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
//                 <div className="flex justify-center mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="section-padding bg-white">
//         <div className="container">
//           <SectionTitle 
//             title="Notre équipe"
//             subtitle="Des experts dédiés à la réussite de votre projet international"
//             centered
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
//               <img 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
//                 alt="Thomas Bernard" 
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-1">Thomas Bernard</h3>
//                 <p className="text-bamba-navy mb-3">Fondateur & Directeur</p>
//                 <p className="text-gray-600">
//                   Ancien étudiant international avec plus de 10 ans d'expérience dans le conseil en éducation internationale.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
//               <img 
//                 src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
//                 alt="Claire Dubois" 
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-1">Claire Dubois</h3>
//                 <p className="text-bamba-navy mb-3">Conseillère en Immigration</p>
//                 <p className="text-gray-600">
//                   Spécialiste des procédures de visa et d'immigration pour étudiants internationaux.
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
//               <img 
//                 src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
//                 alt="Marc Lambert" 
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-1">Marc Lambert</h3>
//                 <p className="text-bamba-navy mb-3">Conseiller Éducatif</p>
//                 <p className="text-gray-600">
//                   Expert en systèmes éducatifs internationaux et programmes d'études à l'étranger.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-bamba-navy text-white">
//         <div className="container">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">3000+</div>
//               <p className="text-xl">Étudiants accompagnés</p>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
//               <p className="text-xl">Pays de destination</p>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
//               <p className="text-xl">Taux de satisfaction</p>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
//               <p className="text-xl">Partenaires universitaires</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default About;
