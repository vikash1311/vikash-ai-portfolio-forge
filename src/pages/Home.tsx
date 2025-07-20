import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-neon-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-neon-green rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-10 w-1 h-1 bg-neon-pink rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Vikash
                </span>
                <br />
                <span className="text-foreground">Gautam</span>
              </h1>
              <p className="text-xl lg:text-2xl text-neon-blue font-medium">
                AI & Backend Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                GenAI Innovator | Final Year B.Tech Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in full-stack development, AI/ML, and Generative AI technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:text-neon-blue">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-blue">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-blue">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-neon-blue/20 hover:border-neon-blue/40 transition-colors duration-300">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                    VG
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse delay-500"></div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-neon-blue mb-2">10+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-neon-purple mb-2">3+</div>
              <div className="text-muted-foreground">Internships</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-neon-green mb-2">2026</div>
              <div className="text-muted-foreground">Graduating</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-neon-pink mb-2">AI/ML</div>
              <div className="text-muted-foreground">Specialist</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;