
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, MapPin, BookOpen } from "lucide-react";

interface TutorCardProps {
  id: number;
  name: string;
  subjects: string[];
  location: string;
  image: string;
  rating: number;
  bio: string;
}

const TutorCard = ({ id, name, subjects, location, image, rating, bio }: TutorCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 md:h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full shadow-sm flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
            <span className="font-medium text-sm">{rating}</span>
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {subjects.map((subject, index) => (
              <span 
                key={index} 
                className="bg-soluetude-100 text-soluetude-700 text-xs px-2 py-1 rounded-full"
              >
                {subject}
              </span>
            ))}
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-1" /> 
            <span className="text-sm">{location}</span>
          </div>
          <p className={`text-gray-700 mb-4 ${!expanded && 'line-clamp-2'}`}>
            {bio}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="outline" 
              className="text-soluetude-600 border-soluetude-600 hover:bg-soluetude-50"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Voir moins" : "Voir plus"}
            </Button>
            <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
              <Link to={`/contact?tutor=${id}`}>Contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
