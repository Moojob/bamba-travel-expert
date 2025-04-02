
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-soluetude-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page non trouvée</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild className="bg-soluetude-600 hover:bg-soluetude-700">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
