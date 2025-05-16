import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color?: string;
}

const ToolCard = ({ title, description, icon: Icon, to, color = 'text-blue-500' }: ToolCardProps) => {
  return (
    <Link
      to={to}
      className="card group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full bg-white dark:bg-gray-800 hover:dark:bg-gray-700"
    >
      <div className="p-6 flex flex-col h-full">
        <div className={`${color} mb-4`}>
          <Icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{description}</p>
        <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
          Usar ferramenta
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;