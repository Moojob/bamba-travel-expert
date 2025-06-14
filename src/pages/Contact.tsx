import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: searchParams.get("subject") || "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.current) {
        throw new Error('Le formulaire n\'est pas correctement initialisé');
      }

      console.log('Envoi du formulaire avec les données:', formData);
      
      // Utilisation exclusive de import.meta.env pour Vite
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Les identifiants EmailJS ne sont pas correctement configurés dans les variables d\'environnement');
      }

      console.log('Envoi avec les paramètres:', { serviceId, templateId, publicKey });

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      console.log('EmailJS response:', result);
      
      if (result.status === 200) {
        toast.success('Message envoyé avec succès !');
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('Erreur lors de l\'envoi du message');
      }
    } catch (error) {
      console.error('Erreur détaillée:', error);
      toast.error(`Erreur: ${error instanceof Error ? error.message : 'Une erreur inconnue est survenue'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-soluetude-600" />,
      title: "Téléphone",
      details: ["+221 77 656 25 40", " +1 819-921-2540"],
      action: {
        text: "Appelez-nous",
        href: "tel:+221776562540",
      },
    },
    {
      icon: <Mail className="h-6 w-24 text-soluetude-600" />,
      title: "Email",
      details: ["infos.bamba.travel.expert@gmail.com"],
      action: {
        text: "Envoyez-nous un email",
        href: "mailto:infos.bamba.travel.expert@gmail.com",
      },
    },
    {
      icon: <MapPin className="h-6 w-6 text-soluetude-600" />,
      title: "Adresse",
      details: ["45 Bédard, Québec - Canada"],
      action: {
        text: "Obtenez les directions",
        href: "https://maps.google.com",
      },
    },
    {
      icon: <Clock className="h-6 w-6 text-soluetude-600" />,
      title: "Heures d'ouverture",
      details: ["Lun-Ven: 9h - 19h", "Sam: 10h - 16h"],
      action: {
        text: "Voir les horaires",
        href: "#horaires",
      },
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-bamba-navy text-white overflow-hidden">
        <div className="container">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Contactez-nous</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans la concrétisation de vos projets d'études à l'international.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-bamba-navy to-transparent z-10"></div>
              <img 
                src="/contactez-nous.png" 
                alt="Contactez-nous pour vos projets d'études" 
                className="w-full h-40 md:h-80 object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative z-10 -mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg p-1 shadow-md border border-gray-100 ${
                  item.title === 'Email' ? 'md:col-span-1' : ''
                }`}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a 
                  href={item.action.href} 
                  className="text-soluetude-600 hover:text-soluetude-800 font-medium inline-flex items-center"
                  target={item.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.action.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Envoyez-nous un message"
                subtitle="Nous vous répondrons dans les plus brefs délais"
              />
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-bamba-navy hover:bg-opacity-90 text-white w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.234391104498!2d-71.2400791844259!3d46.81305647922362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9b8b5e8c4d5e5%3A0x5f9b8b5e8c4d5e5!2s45%20Rue%20B%C3%A9dard%2C%20Qu%C3%A9bec%2C%20QC%20G1M%201A2%2C%20Canada!5e0!3m2!1sfr!2ssn!4v1620664162945!5m2!1sfr!2ssn"
                className="w-full h-full border-0"
                loading="lazy"
                title="Localisation de BAMBA Travel Expert - 45 Rue Bédard, Québec, Canada"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">❓ Questions fréquentes</h2>
        <p className="text-center text-gray-600 mb-10">Trouvez des réponses claires à vos interrogations avant de démarrer votre projet avec Bamba Travel Expert.</p>

        <div className="space-y-4">
          {/* Question 1 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Comment fonctionne l'accompagnement pour les démarches d'études à l'étranger ?
            </summary>
            <p className="mt-2 text-gray-700">Dès votre premier contact, nous évaluons ensemble votre profil et vos objectifs. Ensuite, nous vous guidons étape par étape : choix de la destination, admission dans les établissements, démarches administratives, visa, logement, etc.</p>
          </details>

          {/* Question 2 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Bamba Travel Expert garantit-il l'obtention du visa ?
            </summary>
            <p className="mt-2 text-gray-700">Non, la décision finale appartient toujours aux autorités consulaires. Cependant, notre rôle est de maximiser vos chances avec un dossier solide, structuré et conforme aux exigences.</p>
          </details>

          {/* Question 3 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Quels types de services proposez-vous exactement ?
            </summary>
            <p className="mt-2 text-gray-700">Nous offrons un accompagnement complet incluant : conseils personnalisés, constitution du dossier, inscription dans les écoles/universités, préparation à l'entretien consulaire, réservation du billet d'avion, orientation une fois sur place, et plus encore.</p>
          </details>

          {/* Question 4 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Dans quels pays accompagnez-vous les étudiants ?
            </summary>
            <p className="mt-2 text-gray-700">Nous travaillons principalement avec des établissements situés au Canada, Royaume-Uni, France, Allemagne, Australie et États-Unis. Nous étendons continuellement notre réseau selon les besoins de nos clients.</p>
          </details>

          {/* Question 5 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Quels sont vos tarifs ?
            </summary>
            <p className="mt-2 text-gray-700">Nos tarifs dépendent du type de service choisi et de la complexité du dossier. Un devis clair et personnalisé vous est toujours proposé après un premier échange gratuit.</p>
          </details>

          {/* Question 6 */}
          <details className="group bg-white shadow-md rounded-lg p-4">
            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
              Mes informations personnelles sont-elles en sécurité ?
            </summary>
            <p className="mt-2 text-gray-700">Oui. Nous appliquons une politique stricte de confidentialité et utilisons des plateformes sécurisées pour la gestion de vos documents et données personnelles.</p>
          </details>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
