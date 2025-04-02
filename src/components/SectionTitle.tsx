
interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
