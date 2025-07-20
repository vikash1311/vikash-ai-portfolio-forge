import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Brain, Heart, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Career Assistant",
      subtitle: "AI Resume & Job Matcher",
      description: "An intelligent career guidance platform that analyzes resumes using NLP and provides personalized job recommendations. Features AI-powered skill gap analysis and career path suggestions using Generative AI.",
      features: [
        "NLP-based resume analyzer with keyword extraction",
        "Skill-gap suggestions powered by GenAI",
        "Job matching algorithm with compatibility scoring",
        "Interactive career roadmap generation",
        "Real-time market trend analysis"
      ],
      technologies: ["Spring Boot", "React", "LangChain", "OpenAI", "MySQL", "JWT", "REST APIs"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      githubLink: "#",
      color: "neon-blue",
      icon: Brain
    },
    {
      title: "HealthBridge",
      subtitle: "Appointment Booking & Doctor ChatBot",
      description: "A comprehensive healthcare platform featuring intelligent appointment scheduling and an AI-powered doctor consultation chatbot. Includes secure patient record management and telemedicine capabilities.",
      features: [
        "AI chatbot for initial medical consultations",
        "Smart appointment scheduling with conflict resolution",
        "Secure patient record management system",
        "Real-time doctor availability tracking",
        "Prescription and medical history integration"
      ],
      technologies: ["React", "Node.js", "MongoDB", "DialogFlow", "Socket.io", "JWT", "HIPAA Compliance"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      githubLink: "#",
      color: "neon-green",
      icon: Heart
    },
    {
      title: "EduConnect Platform",
      subtitle: "Student Collaboration Hub",
      description: "A social learning platform that connects students for collaborative projects and study groups. Features AI-powered study partner matching and personalized learning recommendations.",
      features: [
        "AI-based study partner matching algorithm",
        "Real-time collaborative study sessions",
        "Gamified learning progress tracking",
        "Resource sharing and discussion forums",
        "Performance analytics and insights"
      ],
      technologies: ["Next.js", "Express", "PostgreSQL", "WebRTC", "Redis", "Machine Learning"],
      image: "/api/placeholder/600/400",
      demoLink: "#",
      githubLink: "#",
      color: "neon-purple",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that combine cutting-edge AI technology with practical applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <project.icon className={`w-20 h-20 text-${project.color} opacity-20`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  </div>
                  {/* Tech badges overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-xs">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-background/80 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className={`text-lg font-medium text-${project.color}`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className={`text-xs border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        className={`bg-gradient-primary hover:shadow-neon transition-all duration-300`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`border-${project.color}/50 text-${project.color} hover:bg-${project.color}/10`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:text-primary"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that push the boundaries of AI and technology. 
              Let's build something amazing together!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;