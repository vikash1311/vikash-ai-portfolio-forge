import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const Home = () => {

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-neon-blue/30 rounded-full animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold animate-slide-up">
                <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                  Vikash
                </span>
                <br />
                <span className="text-foreground">Gautam</span>
              </h1>
              
              {/* Static Role */}
              <div className="h-8 lg:h-12">
                <p className="text-xl lg:text-2xl text-neon-blue font-medium">
                  AI & Backend Developer
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-delay">
                Final Year B.Tech Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-delay-2">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in full-stack development, AI/ML, and Generative AI technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delay">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon hover:scale-105 transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-neon-blue hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-neural"
                asChild
              >
                <a href="https://github.com/vikash1311" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-neon-purple hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-neural"
                asChild
              >
                <a href="https://linkedin.com/in/vikash2808" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-neon-green hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-neural"
                asChild
              >
                <a href="mailto:gautam7.ven@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-neon-cyan hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-neural"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Sg932khHGcnauPaUAH-MAiJ2oRu9u1MA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced AI Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-neural p-1 group-hover:animate-pulse-ai">
                  <img 
                    src="/lovable-uploads/05f1625c-9752-4f03-8cca-feb32e52ea42.png" 
                    alt="Vikash Gautam" 
                    
                  />
                  </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-6 w-2 h-2 bg-neon-yellow rounded-full animate-pulse-ai"></div>
                <div className="absolute top-1/3 left-2 w-2 h-2 bg-neon-orange rounded-full animate-neural-glow"></div> 
                <div className="absolute bottom-4 right-8 w-4 h-4 bg-neon-green/50 rounded-full animate-ping"></div>
                <div className="absolute top-8 left-12 w-3 h-3 bg-neon-purple/50 rounded-full animate-ping delay-1000"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl font-bold text-neon-blue mb-2 group-hover:animate-pulse">10+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl font-bold text-neon-purple mb-2 group-hover:animate-pulse">3+</div>
              <div className="text-muted-foreground">Internships</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-neon-green/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl font-bold text-neon-green mb-2 group-hover:animate-pulse">2026</div>
              <div className="text-muted-foreground">Graduating</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-neon-pink/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="text-3xl font-bold text-neon-pink mb-2 group-hover:animate-pulse">AI/ML</div>
              <div className="text-muted-foreground">Specialist</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
