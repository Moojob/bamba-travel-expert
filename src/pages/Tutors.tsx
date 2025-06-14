
// import Layout from "@/components/Layout";
// import SectionTitle from "@/components/SectionTitle";
// import TutorCard from "@/components/TutorCard";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { Award } from "lucide-react";

// const Tutors = () => {
//   const tutors = [
//     {
//       id: 1,
//       name: "Sophie Martin",
//       subjects: ["Mathématiques", "Physique", "Chimie"],
//       location: "Paris",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
//       rating: 4.9,
//       bio: "Diplômée de l'École Polytechnique, j'enseigne les mathématiques et la physique depuis 8 ans. J'adapte ma méthode en fonction des besoins spécifiques de chaque élève pour les aider à progresser et à prendre confiance en leurs capacités.",
//     },
//     {
//       id: 2,
//       name: "Thomas Dubois",
//       subjects: ["Français", "Philosophie", "Histoire"],
//       location: "Lyon",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       rating: 4.8,
//       bio: "Agrégé de Lettres Modernes, j'enseigne depuis 12 ans. Ma passion pour la littérature et la philosophie me permet de transmettre aux élèves non seulement des connaissances, mais aussi un amour pour ces disciplines.",
//     },
//     {
//       id: 3,
//       name: "Julie Leroy",
//       subjects: ["Anglais", "Espagnol", "Allemand"],
//       location: "Bordeaux",
//       image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//       rating: 4.7,
//       bio: "Ayant vécu plusieurs années à l'étranger, je suis trilingue et passionnée par l'enseignement des langues. J'utilise des méthodes interactives et immersives pour aider mes élèves à progresser rapidement.",
//     },
//     {
//       id: 4,
//       name: "Marc Bernard",
//       subjects: ["Économie", "Mathématiques", "Management"],
//       location: "Marseille",
//       image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//       rating: 4.9,
//       bio: "Diplômé d'HEC, j'ai travaillé en finance avant de me consacrer à l'enseignement. Mon expérience professionnelle me permet d'offrir une approche pratique et concrète de l'économie et des mathématiques.",
//     },
//     {
//       id: 5,
//       name: "Émilie Petit",
//       subjects: ["SVT", "Physique", "Chimie"],
//       location: "Toulouse",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
//       rating: 4.8,
//       bio: "Docteure en biologie, j'ai une approche pédagogique basée sur l'expérimentation et la compréhension des concepts plutôt que sur la mémorisation. Je m'efforce de rendre les sciences accessibles et passionnantes.",
//     },
//     {
//       id: 6,
//       name: "Alexandre Moreau",
//       subjects: ["Informatique", "Mathématiques", "Physique"],
//       location: "Nice",
//       image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
//       rating: 4.9,
//       bio: "Ingénieur en informatique avec 10 ans d'expérience dans le développement logiciel, j'aime partager ma passion pour la programmation et les sciences. J'adapte mon enseignement au niveau et aux objectifs de chaque élève.",
//     },
//   ];

//   const tutorQualities = [
//     "Expertise académique",
//     "Expérience pédagogique",
//     "Capacité d'adaptation",
//     "Patience et écoute",
//     "Passion pour l'enseignement",
//     "Rigueur et organisation",
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative py-20 bg-soluetude-600 text-white">
//         <div className="container">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos tuteurs</h1>
//             <p className="text-xl md:text-2xl">
//               Découvrez notre équipe de tuteurs hautement qualifiés et passionnés par l'enseignement.
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')" }}>
//         </div>
//       </section>

//       {/* Selection Process Section */}
//       <section className="section-padding bg-white">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <SectionTitle 
//                 title="Notre processus de sélection"
//                 subtitle="Nous ne choisissons que les meilleurs tuteurs pour garantir un enseignement de qualité"
//               />
//               <p className="text-gray-700 mb-6">
//                 Chez SoluEtude, nous mettons un point d'honneur à sélectionner des tuteurs non seulement compétents dans leur domaine, mais aussi dotés d'excellentes aptitudes pédagogiques. Notre processus rigoureux garantit que chaque tuteur possède les qualités nécessaires pour accompagner efficacement les élèves vers la réussite.
//               </p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
//                 {tutorQualities.map((quality, index) => (
//                   <div key={index} className="flex items-center">
//                     <Award className="h-5 w-5 text-soluetude-600 mr-2" />
//                     <span>{quality}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <p className="text-gray-700 mb-6">
//                 Tous nos tuteurs passent par un entretien approfondi, des vérifications de références et une période de formation pour s'assurer qu'ils correspondent à nos standards élevés.
//               </p>
//             </div>
            
//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
//                 alt="Teacher explaining to students" 
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden lg:block">
//                 <div className="text-center">
//                   <div className="font-bold text-2xl text-soluetude-600">90%+</div>
//                   <p className="text-gray-600">Taux de réussite</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tutors Section */}
//       <section className="section-padding bg-gray-50">
//         <div className="container">
//           <SectionTitle 
//             title="Rencontrez notre équipe"
//             subtitle="Des tuteurs passionnés et qualifiés dans diverses matières"
//             centered
//           />
          
//           <div className="space-y-6">
//             {tutors.map((tutor) => (
//               <TutorCard key={tutor.id} {...tutor} />
//             ))}
//           </div>
          
//           <div className="mt-12 text-center">
//             <p className="text-gray-700 mb-6">
//               Ceci n'est qu'un aperçu de notre équipe de tuteurs qualifiés. Contactez-nous pour trouver le tuteur parfait pour vos besoins spécifiques.
//             </p>
//             <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
//               <Link to="/contact">Contacter pour plus d'informations</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 hero-gradient text-white">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">Ce que nos élèves disent de nos tuteurs</h2>
            
//             <div className="relative px-10">
//               <div className="text-4xl font-serif text-white/30 absolute top-0 left-0">"</div>
//               <p className="text-xl italic mb-6">
//                 La tutrice de ma fille chez SoluEtude a complètement transformé son attitude envers les mathématiques. Elle est passionnée, patiente et sait comment expliquer des concepts difficiles de manière claire. Ma fille attend maintenant ses séances avec impatience !
//               </p>
//               <div className="text-4xl font-serif text-white/30 absolute bottom-0 right-0">"</div>
//             </div>
            
//             <div className="mt-6">
//               <p className="font-semibold">Marie Durand</p>
//               <p className="text-sm text-white/80">Parent d'élève</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Us Section */}
//       <section className="section-padding bg-white">
//         <div className="container">
//           <div className="bg-soluetude-50 rounded-xl p-8 md:p-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">Rejoignez notre équipe de tuteurs</h2>
//                 <p className="text-gray-700 mb-6">
//                   Vous êtes passionné par l'enseignement et souhaitez partager vos connaissances ? Rejoignez notre équipe de tuteurs et contribuez à la réussite de nos élèves.
//                 </p>
//                 <ul className="space-y-2 mb-6">
//                   <li className="flex items-start">
//                     <Award className="h-5 w-5 text-soluetude-600 mr-2 mt-1" />
//                     <span>Horaires flexibles</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Award className="h-5 w-5 text-soluetude-600 mr-2 mt-1" />
//                     <span>Développement professionnel continu</span>
//                   </li>
//                   <li className="flex items-start">
//                     <Award className="h-5 w-5 text-soluetude-600 mr-2 mt-1" />
//                     <span>Rémunération compétitive</span>
//                   </li>
//                 </ul>
//                 <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
//                   <Link to="/contact">Postuler comme tuteur</Link>
//                 </Button>
//               </div>
//               <div className="relative">
//                 <img 
//                   src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
//                   alt="Teacher working with students" 
//                   className="rounded-lg shadow-md"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Tutors;
