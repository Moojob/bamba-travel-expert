
// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Layout from "@/components/Layout";
// import SectionTitle from "@/components/SectionTitle";
// import { toast } from "sonner";

// const formSchema = z.object({
//   nom: z.string().min(2, {
//     message: "Le nom doit contenir au moins 2 caractères.",
//   }),
//   prenom: z.string().min(2, {
//     message: "Le prénom doit contenir au moins 2 caractères.",
//   }),
//   email: z.string().email({
//     message: "Veuillez entrer une adresse email valide.",
//   }),
//   telephone: z.string().min(10, {
//     message: "Veuillez entrer un numéro de téléphone valide.",
//   }),
//   paysResidence: z.string().min(1, {
//     message: "Veuillez sélectionner votre pays de résidence.",
//   }),
//   niveauEtude: z.string().min(1, {
//     message: "Veuillez sélectionner votre niveau d'étude.",
//   }),
//   formationSouhaitee: z.string().min(1, {
//     message: "Veuillez sélectionner la formation souhaitée.",
//   }),
//   paysEtude: z.string().min(1, {
//     message: "Veuillez sélectionner le pays d'étude souhaité.",
//   }),
//   genreEcole: z.string().min(1, {
//     message: "Veuillez sélectionner le genre d'école souhaitée.",
//   }),
//   message: z.string().optional(),
//   rgpd: z.boolean().refine((val) => val === true, {
//     message: "Vous devez accepter les conditions pour continuer.",
//   }),
// });

// const Inscription = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       nom: "",
//       prenom: "",
//       email: "",
//       telephone: "",
//       paysResidence: "",
//       niveauEtude: "",
//       formationSouhaitee: "",
//       paysEtude: "",
//       genreEcole: "",
//       message: "",
//       rgpd: false,
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       console.log(values);
//       toast.success("Votre demande d'inscription a été envoyée avec succès!");
//       form.reset();
//       setIsSubmitting(false);
//     }, 1500);
//   }

//   const niveauxEtudes = [
//     "Collège",
//     "Lycée",
//     "Bac",
//     "Bac+1",
//     "Bac+2",
//     "Bac+3",
//     "Bac+4",
//     "Bac+5",
//     "Doctorat",
//   ];

//   const formations = [
//     "Soutien scolaire",
//     "Cours particuliers",
//     "Préparation aux examens",
//     "Études à l'étranger",
//     "Formation professionnelle",
//     "Autre",
//   ];

//   const paysEtudes = [
//     "France",
//     "Canada",
//     "Belgique",
//     "Suisse",
//     "Royaume-Uni",
//     "États-Unis",
//     "Australie",
//     "Allemagne",
//     "Espagne",
//     "Italie",
//     "Autre",
//   ];

//   const genresEcoles = [
//     "École publique",
//     "École privée",
//     "Université",
//     "École d'ingénieur",
//     "École de commerce",
//     "Formation en ligne",
//     "Autre",
//   ];

//   return (
//     <Layout>
//       <section className="py-20 bg-soluetude-600 text-white">
//         <div className="container max-w-4xl">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Inscription</h1>
//           <p className="text-xl">
//             Pour vous inscrire à des cours à domicile, du soutien scolaire ou pour partir étudier à l'étranger, 
//             merci de renseigner les champs du formulaire ci-dessous afin que le contact adéquat puisse revenir 
//             vers vous dans les plus brefs délais, et vous fournir les informations ou l'assistance dont vous avez besoin.
//           </p>
//           <p className="mt-4 text-white/80 italic">« * » indique les champs nécessaires</p>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="container max-w-3xl">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 rounded-lg shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="nom"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Nom *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Nom *" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="prenom"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Prénom *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Prénom *" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Email *" type="email" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
                
//                 <FormField
//                   control={form.control}
//                   name="telephone"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Téléphone *</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Téléphone *" type="tel" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="paysResidence"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Pays de résidence actuel *</FormLabel>
//                     <FormControl>
//                       <select 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                         {...field}
//                       >
//                         <option value="">Pays de résidence actuel *</option>
//                         {paysEtudes.map((pays) => (
//                           <option key={pays} value={pays}>{pays}</option>
//                         ))}
//                       </select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="niveauEtude"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Niveau d'étude actuel *</FormLabel>
//                     <FormControl>
//                       <select 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                         {...field}
//                       >
//                         <option value="">Sélectionnez un niveau *</option>
//                         {niveauxEtudes.map((niveau) => (
//                           <option key={niveau} value={niveau}>{niveau}</option>
//                         ))}
//                       </select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="formationSouhaitee"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Formation souhaitée *</FormLabel>
//                     <FormControl>
//                       <select 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                         {...field}
//                       >
//                         <option value="">Formation souhaitée *</option>
//                         {formations.map((formation) => (
//                           <option key={formation} value={formation}>{formation}</option>
//                         ))}
//                       </select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="paysEtude"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Pays d'étude souhaité *</FormLabel>
//                     <FormControl>
//                       <select 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                         {...field}
//                       >
//                         <option value="">Pays d'étude souhaité *</option>
//                         {paysEtudes.map((pays) => (
//                           <option key={pays} value={pays}>{pays}</option>
//                         ))}
//                       </select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="genreEcole"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Genre d'école souhaitée ? *</FormLabel>
//                     <FormControl>
//                       <select 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//                         {...field}
//                       >
//                         <option value="">Genre d'école souhaitée *</option>
//                         {genresEcoles.map((genre) => (
//                           <option key={genre} value={genre}>{genre}</option>
//                         ))}
//                       </select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Message</FormLabel>
//                     <FormControl>
//                       <Textarea placeholder="Message" {...field} className="min-h-[120px]" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="rgpd"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                     <FormControl>
//                       <Checkbox
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                       />
//                     </FormControl>
//                     <div className="space-y-1 leading-none">
//                       <FormLabel className="text-sm font-normal">
//                         J'accepte que le SoluEtude et utilise ces données dans le cadre de sa Politique de Confidentialité, 
//                         pour m'envoyer des propositions éducatives adaptées à mon projet, sur des programmes ou des offres 
//                         de formation et/ou permettre l'inscription en ligne à ces programmes. Mes données pour ce traitement 
//                         seront conservées pendant trois (3) ans après notre dernière interaction. Vous pouvez vous désinscrire 
//                         de notre liste d'envoi en contactant notre DPO à l'adresse dpo@collegedeparis.fr *
//                       </FormLabel>
//                       <FormMessage />
//                     </div>
//                   </FormItem>
//                 )}
//               />

//               <div className="pt-4">
//                 <Button 
//                   type="submit" 
//                   className="w-full md:w-auto bg-soluetude-600 hover:bg-soluetude-700" 
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'inscription"}
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Inscription;
