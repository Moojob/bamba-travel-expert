
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const tutorId = searchParams.get("tutor");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: tutorId ? `Demande pour le tuteur #${tutorId}` : "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé!",
        description: "Nous vous contacterons bientôt.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-soluetude-600" />,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "+33 1 98 76 54 32"],
      action: {
        text: "Appelez-nous",
        href: "tel:+33123456789",
      },
    },
    {
      icon: <Mail className="h-6 w-6 text-soluetude-600" />,
      title: "Email",
      details: ["contact@soluetude.com", "info@soluetude.com"],
      action: {
        text: "Envoyez-nous un email",
        href: "mailto:contact@soluetude.com",
      },
    },
    {
      icon: <MapPin className="h-6 w-6 text-soluetude-600" />,
      title: "Adresse",
      details: ["123 Rue de l'Education", "75001 Paris, France"],
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
      <section className="relative py-20 bg-soluetude-600 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl md:text-2xl">
              Nous sommes là pour répondre à toutes vos questions et vous aider à trouver la solution éducative parfaite.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative z-10 -mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
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
                      placeholder="Votre numéro de téléphone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-soluetude-600 hover:bg-soluetude-700 w-full md:w-auto"
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
            
            <div className="relative h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937585!2d2.292292615509627!3d48.85836780917369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1620664162945!5m2!1sfr!2sfr"
                className="w-full h-full rounded-lg shadow-md border-0"
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <SectionTitle 
            title="Questions fréquentes"
            subtitle="Trouvez rapidement des réponses à vos questions les plus courantes"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Comment fonctionnent les cours particuliers ?</h3>
              <p className="text-gray-700">
                Après une évaluation initiale, nous assignons un tuteur qui travaillera régulièrement avec l'élève, en personne ou en ligne, selon un horaire convenu. Le tuteur adapte son approche aux besoins spécifiques de l'élève.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quels sont vos tarifs ?</h3>
              <p className="text-gray-700">
                Nos tarifs varient en fonction du niveau scolaire, de la matière et du type de service. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Comment sont sélectionnés vos tuteurs ?</h3>
              <p className="text-gray-700">
                Nos tuteurs passent par un processus de sélection rigoureux qui comprend des vérifications des antécédents, des entretiens approfondis et des évaluations de leurs compétences pédagogiques.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Proposez-vous des cours en ligne ?</h3>
              <p className="text-gray-700">
                Oui, nous proposons des cours en ligne via des plateformes sécurisées. Cette option offre flexibilité et accessibilité tout en maintenant la qualité de notre enseignement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
