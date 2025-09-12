import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Trophy, 
  Code, 
  Brain, 
  Rocket,
  Star,
  Award,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Download
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'C++', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TensorFlow', level: 88 },
    { name: 'Machine Learning', level: 92 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MySQL', level: 85 }
  ];

  const experiences = [
    {
      title: 'AI Intern',
      company: 'Across the Globe (ATG)',
      period: 'June 2025 - Present',
      description: 'Built an end-to-end personalized educational video and playlist generation system using AI, boosting user engagement by 10%. Wrote a custom code recording engine from scratch, optimizing resource usage and cutting cloud costs by over 50%. Discovered and reported 2 critical intranet security flaws: one exposing salary data without authentication, and a stored XSS enabling credential and cookie theft.',
      technologies: ['AI/ML', 'Python', 'Video Generation', 'Security Auditing', 'Cloud Optimization']
    },
    {
      title: 'AI/ML Assistant',
      company: 'Axios Club, IIIT Bhopal',
      period: 'October 2024 - Present',
      description: 'Conducted training sessions within Axios focused on practical applications of AI/ML concepts, doubling member engagement in project collaborations over six months. Led collaborative development of AI-driven projects that boosted club visibility and increased participation by 30%.',
      technologies: ['Machine Learning', 'TensorFlow', 'Project Leadership', 'Training & Mentoring']
    },
    {
      title: 'Teaching Assistant',
      company: 'IIIT Bhopal',
      period: 'July 2024 - Present',
      description: 'Engineered a centralized Inventory Management System using Python and SQL, replacing a paper-based system. It reduced inventory discrepancies by 40% and saved 20+ staff hours weekly. Collaborated with faculty to design over 20 study materials, including lecture notes and assignments, contributing to a 15% improvement in course satisfaction ratings.',
      technologies: ['Python', 'SQL', 'System Design', 'Educational Content Development']
    }
  ];

  const projects = [
    {
      title: 'College Inventory Management System for IIIT, Bhopal',
      description: 'Managed over 200+ items and transactions across 10+ departments, ensuring secure access. Implemented role-based authentication and inventory tracking, improving efficiency by 30%. The demo and source code can\'t be seen and used because its being used by college officials.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      demo: 'https://puneetinvman.ct.ws/'
    },
    {
      title: 'Gemini-Powered App Automation System',
      description: 'Automated app workflows using Gemini 2.0 Flash via WebSocket and REST, cutting product listing time by 70%. Secured operations with JWT auth and rotating logs; enabled seamless deployments through GitHub Actions CI/CD.',
      technologies: ['Python', 'Gemini API', 'WebSocket', 'JWT', 'GitHub Actions'],
      github: 'https://github.com/Akshit2807/Eco_Cycle',
      demo: 'https://github.com/Akshit2807/Eco_Cycle/releases/tag/v1.52-a2f301a'
    },
    {
      title: 'English to French Translator',
      description: 'Trained an LSTM-based Neural Machine Translation (NMT) model to translate English sentences into French using 232K sentence pairs and reached an average BLEU score of 27.44.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'NMT', 'Neural Networks'],
      github: 'https://github.com/PunVas/NMT',
      demo: 'https://huggingface.co/spaces/puneet0609/translate'
    },
    {
      title: 'Hybrid ANFIS with PSO/GA Optimization',
      description: 'Developed a hybrid ANFIS model optimized via PSO/GA, improving prediction accuracy to 83.16% by tuning membership functions and rule parameters.',
      technologies: ['Python', 'TensorFlow', 'PSO', 'GA', 'ANFIS', 'Optimization'],
      demo: 'https://colab.research.google.com/drive/1OmGUxfjOdgVn3Q7vjVM5kcaoEu3s6j2L?usp=sharing'
    }
  ];

  const achievements = [
    {
      title: '1st Place - Hack-O-Sprint Hackathon',
      description: 'Developed an innovative solution addressing a key industry challenge, outperforming over 50 teams',
      icon: Trophy
    },
    {
      title: '3rd Position - ML Quest Hackathon',
      description: 'Organized by IEEE CIS, GHRCE, Nagpur, showcasing machine learning expertise',
      icon: Award
    },
    {
      title: 'CodeForces Specialist (1400+ Rating)',
      description: 'Demonstrating expertise in complex algorithm design and competitive programming',
      icon: Code
    },
    {
      title: 'Kaggle S5E5 - Ranked 1474/4314',
      description: 'Showcasing practical ML expertise in competitive machine learning',
      icon: Star
    },
    {
      title: 'JEE Advanced 2023 - AIR 10298',
      description: 'Secured All India Rank 10298; JEE Mains 2023: Scored 97.91 percentile',
      icon: GraduationCap
    },
    {
      title: 'GeeksForGeeks Bi-Wizard 17.0 - 66th Position',
      description: 'Achieved 66th position showcasing strong algorithmic understanding',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero tech-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 rounded-none">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl gradient-text">Puneet Vaswani</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Puneet Vaswani
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              AI/ML Engineer & Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Computer Science student at IIIT Bhopal with expertise in AI/ML, competitive programming, 
              and full-stack development. Passionate about building innovative solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up-delay-1">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-slide-up-delay-2">
            <a href="mailto:puneetvaswani0609@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/puneet-v-171885310/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/PunVas" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://codeforces.com/profile/0x0609PVLfa" className="text-muted-foreground hover:text-primary transition-colors">
              <Code className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg">B. Tech in Computer Science and Engineering</h3>
                  <p className="text-primary">Indian Institute of Information Technology, Bhopal</p>
                  <p className="text-muted-foreground">August 2023 - Present</p>
                  <p className="mt-2"><span className="font-semibold">CGPA:</span> 9.05/10</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-up-delay-1">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:shadow-glow transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-primary text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-primary/30">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:shadow-glow transition-all duration-300 group animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      {project.title}
                    </span>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:shadow-glow transition-all duration-300 text-center animate-slide-up">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss opportunities? 
            I'm always open to new challenges and innovative ideas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Card className="glass-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">puneetvaswani0609@gmail.com</p>
            </Card>
            
            <Card className="glass-card border-primary/20 p-6 hover:shadow-glow transition-all duration-300">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 8619661188</p>
            </Card>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow animate-pulse-glow">
            <Mail className="mr-2 h-5 w-5" />
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Puneet Vaswani. Built with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;