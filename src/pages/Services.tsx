import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Layers, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layers,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern frameworks and technologies. From responsive frontends to robust backend APIs.",
      features: [
        "React & Next.js development",
        "Spring Boot & Node.js APIs",
        "Responsive UI/UX design",
        "Performance optimization"
      ],
      technologies: ["React", "Spring Boot", "Node.js", "TypeScript", "Tailwind CSS"],
      color: "neon-blue",
      pricing: "Starting from ₹15,000"
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Scalable and secure backend systems with RESTful APIs, microservices architecture, and cloud integration.",
      features: [
        "RESTful API development",
        "Microservices architecture",
        "Database design & optimization",
        "Cloud deployment & scaling"
      ],
      technologies: ["Spring Boot", "Express.js", "MySQL", "MongoDB", "AWS"],
      color: "neon-purple",
      pricing: "Starting from ₹12,000"
    },
    {
      icon: Database,
      title: "Database Design & Integration",
      description: "Efficient database design, optimization, and integration with your applications for optimal performance and scalability.",
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration services",
        "Performance monitoring"
      ],
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "neon-green",
      pricing: "Starting from ₹8,000"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Integrate intelligent features into your applications using machine learning models, LLMs, and generative AI technologies.",
      features: [
        "Custom AI model development",
        "LLM integration & fine-tuning",
        "Prompt engineering",
        "AI-powered automation"
      ],
      technologies: ["Python", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"],
      color: "neon-pink",
      pricing: "Starting from ₹20,000"
    },
    {
      icon: Zap,
      title: "Prompt Engineering",
      description: "Expert prompt engineering services for optimizing AI model performance and achieving better results from language models.",
      features: [
        "Custom prompt optimization",
        "Chain-of-thought prompting",
        "Multi-modal prompt design",
        "Performance evaluation"
      ],
      technologies: ["OpenAI", "Claude", "Gemini", "LangChain"],
      color: "neon-blue",
      pricing: "Starting from ₹5,000"
    },
    {
      icon: Users,
      title: "DSA Mentoring",
      description: "Personalized mentoring in Data Structures & Algorithms to help you ace technical interviews and improve problem-solving skills.",
      features: [
        "Personalized learning paths",
        "Mock interview sessions",
        "Problem-solving techniques",
        "Career guidance"
      ],
      technologies: ["Java", "Python", "C++", "LeetCode", "System Design"],
      color: "neon-green",
      pricing: "₹2,000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions to bring your ideas to life with cutting-edge AI and development expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              {/* Icon & Title */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg bg-${service.color}/20 flex items-center justify-center mb-4 group-hover:bg-${service.color}/30 transition-colors duration-300`}>
                  <service.icon className={`w-6 h-6 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className={`w-4 h-4 text-${service.color} mt-0.5 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-bold text-${service.color}`}>{service.pricing}</span>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            My <span className="text-primary">Development Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals" },
              { step: "02", title: "Planning", desc: "Technical architecture and project roadmap" },
              { step: "03", title: "Development", desc: "Agile development with regular updates" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{phase.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-accent/10 backdrop-blur-sm border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. I'm here to help you 
              leverage the power of AI and modern technology to solve your business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
              >
                Schedule a Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;