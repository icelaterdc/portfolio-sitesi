import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './components/Card';
import { GithubCard } from './components/GithubCard';
import { ProjectCard } from './components/ProjectCard';
import { useGithubRepos } from './hooks/useGithubRepos';
import { 
  Github, Twitter, Linkedin, Instagram, 
  Code, Database, Globe, Smartphone,
  Mail, User, Briefcase, BookOpen
} from 'lucide-react';
import { config } from './config';

function App() {
  const { repos, loading } = useGithubRepos();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Selam, ben IceLater
          </h1>
          <p className="text-xl text-slate-300">
            Full Stack Geliştirici & UI/UX Tasarımcı
          </p>
        </motion.div>

        {/* Hakkımda */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Hakkımda</h2>
          <Card>
            <div className="flex items-start gap-4">
              <User className="text-blue-300" size={24} />
              <div>
                <p className="text-slate-300 leading-relaxed">
                  Discord bot yapımıyla başladığım yazılım serüvenimde 2D oyun tasarlama yeteneğine kadar ulaşmış tam yığın gelistiriciyim. 17 yaşındayım, müzik dinlemeyi ve bazen de anime izlemeyi severim. Sevdiğim bilgisayar oyunlarının arasında Call of Duty, The Last of Us, Detroit Become Human, Genshin Impact, Pubg Mobile, Minecraft, Among US yer almaktadır.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Projelerim */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Projelerim</h2>
          <div className="space-y-4">
            <ProjectCard
              title="E-Ticaret Platformu"
              description="Modern ve ölçeklenebilir e-ticaret çözümü"
              icon={<Globe size={24} />}
            />
            <ProjectCard
              title="Mobil Uygulama"
              description="React Native ile geliştirilmiş cross-platform uygulama"
              icon={<Smartphone size={24} />}
            />
            <ProjectCard
              title="Backend API"
              description="Node.js ve Express ile geliştirilmiş RESTful API"
              icon={<Database size={24} />}
            />
          </div>
        </section>

        {/* GitHub Projeleri */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">GitHub Projelerim</h2>
          {loading ? (
            <p className="text-slate-300">Projeler yükleniyor...</p>
          ) : (
            <div className="space-y-4">
              {repos.map((repo: any) => (
                <GithubCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description || 'Açıklama bulunmuyor'}
                  language={repo.language || 'Belirtilmemiş'}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                  url={repo.html_url}
                />
              ))}
            </div>
          )}
        </section>

        {/* Sosyal Medya */}
        <section>
          <h2 className="text-3xl font-bold text-blue-300 mb-6">Sosyal Medya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:bg-slate-700/30">
              <a 
                href={`https://github.com/${config.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Github className="text-blue-300" size={24} />
                <span className="text-slate-300">GitHub</span>
              </a>
            </Card>
            <Card className="hover:bg-slate-700/30">
              <a 
                href={`https://twitter.com/${config.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Twitter className="text-blue-300" size={24} />
                <span className="text-slate-300">Twitter</span>
              </a>
            </Card>
            <Card className="hover:bg-slate-700/30">
              <a 
                href={`https://linkedin.com/in/${config.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Linkedin className="text-blue-300" size={24} />
                <span className="text-slate-300">LinkedIn</span>
              </a>
            </Card>
            <Card className="hover:bg-slate-700/30">
              <a 
                href={`https://instagram.com/${config.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="text-blue-300" size={24} />
                <span className="text-slate-300">Instagram</span>
              </a>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
