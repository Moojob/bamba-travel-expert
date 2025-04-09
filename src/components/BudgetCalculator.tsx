
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Landmark, Building, Utensils, BookOpen } from "lucide-react";

type CountryData = {
  tuition: number;
  residence: number;
  apartment: number;
  homestay: number;
  living: number;
};

type AccommodationType = 'residence' | 'apartment' | 'homestay';

const BudgetCalculator = () => {
  const [country, setCountry] = useState<string>("canada");
  const [duration, setDuration] = useState<number>(12); // en mois
  const [accommodationType, setAccommodationType] = useState<AccommodationType>("residence");
  const [totalCost, setTotalCost] = useState<number>(0);
  
  const costData: Record<string, CountryData> = {
    canada: {
      tuition: 15000, // par an
      residence: 800, // par mois
      apartment: 1200, // par mois
      homestay: 950, // par mois
      living: 600, // par mois (nourriture, transport, etc.)
    },
    uk: {
      tuition: 20000,
      residence: 1000,
      apartment: 1500, 
      homestay: 1100,
      living: 800,
    },
    australia: {
      tuition: 22000,
      residence: 900,
      apartment: 1400,
      homestay: 1050, 
      living: 700,
    },
    usa: {
      tuition: 30000,
      residence: 1200,
      apartment: 1800,
      homestay: 1300,
      living: 1000,
    },
    france: {
      tuition: 4000,
      residence: 600,
      apartment: 900,
      homestay: 800,
      living: 500,
    },
    germany: {
      tuition: 1500,
      residence: 650,
      apartment: 850,
      homestay: 750,
      living: 550,
    }
  };

  useEffect(() => {
    // Calculer le coût total
    const countryData = costData[country];
    const accommodationCost = countryData[accommodationType] * duration;
    const livingCost = countryData.living * duration;
    const tuitionCost = (countryData.tuition / 12) * duration;
    
    const total = accommodationCost + livingCost + tuitionCost;
    setTotalCost(Math.round(total));
  }, [country, duration, accommodationType]);

  // Fonction pour gérer le changement de type d'hébergement avec validation de type
  const handleAccommodationChange = (value: string) => {
    // Vérifier que la valeur est du type AccommodationType avant de la définir
    if (value === 'residence' || value === 'apartment' || value === 'homestay') {
      setAccommodationType(value);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center mb-6 text-bamba-navy">
        <Calculator className="mr-2" size={24} />
        <h3 className="text-xl font-semibold">Calculateur de budget</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Pays de destination</label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez un pays" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="uk">Royaume-Uni</SelectItem>
              <SelectItem value="australia">Australie</SelectItem>
              <SelectItem value="usa">États-Unis</SelectItem>
              <SelectItem value="france">France</SelectItem>
              <SelectItem value="germany">Allemagne</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Type de logement</label>
          <Select value={accommodationType} onValueChange={handleAccommodationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez un type de logement" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residence">Résidence universitaire</SelectItem>
              <SelectItem value="apartment">Appartement</SelectItem>
              <SelectItem value="homestay">Famille d'accueil</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Durée des études: {duration} mois</label>
          <Slider 
            value={[duration]} 
            min={1}
            max={48}
            step={1}
            onValueChange={(values) => setDuration(values[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1 mois</span>
            <span>24 mois</span>
            <span>48 mois</span>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-4 text-bamba-navy">Budget estimé</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
              <Landmark className="text-bamba-navy mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Frais de scolarité</p>
                <p className="font-semibold">{Math.round((costData[country as keyof typeof costData].tuition / 12) * duration).toLocaleString()} €</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
              <Building className="text-bamba-navy mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Logement</p>
                <p className="font-semibold">{Math.round(costData[country as keyof typeof costData][accommodationType as keyof typeof costData.canada] * duration).toLocaleString()} €</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-md shadow-sm">
              <Utensils className="text-bamba-navy mr-2" size={20} />
              <div>
                <p className="text-sm text-gray-500">Dépenses courantes</p>
                <p className="font-semibold">{Math.round(costData[country as keyof typeof costData].living * duration).toLocaleString()} €</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-2xl font-bold text-bamba-navy">{totalCost.toLocaleString()} €</div>
            <p className="text-sm text-gray-500">Budget total estimé</p>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-2 text-center">
          <p>Ce calculateur fournit une estimation basée sur des moyennes. Les coûts réels peuvent varier.</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
