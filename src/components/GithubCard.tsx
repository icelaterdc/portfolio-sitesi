import { Card } from './Card';
import { Star, GitFork, Code } from 'lucide-react';

interface GithubCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export function GithubCard({ name, description, language, stars, forks, url }: GithubCardProps) {
  return (
    <Card className="w-full mb-4 hover:bg-slate-700/30">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <h3 className="text-xl font-bold text-blue-300 mb-2">{name}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex gap-4 text-slate-400">
          <div className="flex items-center gap-1">
            <Code size={16} />
            <span>{language}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork size={16} />
            <span>{forks}</span>
          </div>
        </div>
      </a>
    </Card>
  );
}