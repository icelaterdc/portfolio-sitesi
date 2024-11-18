import { Card } from './Card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export function ProjectCard({ title, description, icon, link }: ProjectCardProps) {
  return (
    <Card className="w-full mb-4">
      <div className="flex items-start gap-4">
        <div className="text-blue-300 p-2 bg-blue-900/20 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-blue-300">{title}</h3>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <p className="text-slate-300 mt-2">{description}</p>
        </div>
      </div>
    </Card>
  );
}