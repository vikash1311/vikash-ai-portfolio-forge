import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Brain, Code, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST APIs"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "AI/ML", items: ["LangChain", "OpenAI", "TensorFlow", "Python"] },
    { category: "Cloud & Tools", items: ["AWS", "Docker", "Git", "Postman"] },
    { category: "Languages", items: ["Java", "JavaScript", "Python", "SQL"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI enthusiast and full-stack developer crafting intelligent solutions 
            for tomorrow's challenges
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-neon-blue mr-3" />
              <h2 className="text-2xl font-bold">My Journey</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an AI-focused B.Tech student passionate about creating intelligent systems that solve real-world problems. 
              My expertise spans full-stack development using the MERN stack and Spring Boot, combined with cutting-edge 
              AI/ML technologies and Generative AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through various internships and projects, I've built practical solutions that combine Large Language Models, 
              web development, and cloud deployment to address complex challenges in healthcare, career guidance, and beyond.
            </p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-neon-purple mr-3" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">B.Tech in Artificial Intelligence</h3>
                <p className="text-muted-foreground">G.H. Raisoni College of Engineering</p>
                <p className="text-sm text-neon-blue">Expected Graduation: 2026</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Software Engineering</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-16">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-neon-green mr-3" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* What I Do */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <div className="flex items-center mb-8">
            <Rocket className="w-8 h-8 text-neon-pink mr-3" />
            <h2 className="text-2xl font-bold">What I Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Building robust web applications with modern frameworks like React, Spring Boot, and Node.js. 
                I focus on creating scalable, maintainable, and user-friendly solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">AI/ML Integration</h3>
              <p className="text-muted-foreground">
                Implementing intelligent features using machine learning models, LLMs, and generative AI 
                to enhance user experiences and automate complex processes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Problem Solving</h3>
              <p className="text-muted-foreground">
                Analyzing complex business requirements and designing efficient solutions that leverage 
                both traditional software engineering and modern AI capabilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Mentoring</h3>
              <p className="text-muted-foreground">
                Helping fellow students master Data Structures & Algorithms and sharing knowledge 
                about emerging technologies in the AI space.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;