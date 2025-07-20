import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI & GenAI Intern",
      company: "YBI Foundation",
      period: "June 2025 - July 2025",
      location: "Remote",
      type: "Internship",
      description: [
        "Developed and deployed AI models using cutting-edge Generative AI technologies",
        "Worked on prompt engineering and fine-tuning large language models",
        "Collaborated with cross-functional teams to integrate AI solutions into existing systems",
        "Contributed to research and development of innovative AI applications"
      ],
      technologies: ["Python", "TensorFlow", "LangChain", "OpenAI", "Prompt Engineering"],
      color: "neon-blue"
    },
    {
      title: "AI Intern",
      company: "StaxTech",
      period: "July 2025 - August 2025",
      location: "Remote",
      type: "Internship",
      description: [
        "Implemented machine learning algorithms for business intelligence solutions",
        "Developed predictive models for data analytics and insights generation",
        "Optimized existing AI workflows for better performance and accuracy",
        "Created comprehensive documentation for AI model deployment"
      ],
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask", "Docker"],
      color: "neon-purple"
    },
    {
      title: "Volunteer",
      company: "Heeds Foundation",
      period: "May 2025",
      location: "Community Service",
      type: "Volunteer",
      description: [
        "Contributed to community development initiatives focused on education",
        "Organized and participated in tech workshops for underprivileged students",
        "Mentored students in programming fundamentals and career guidance",
        "Developed educational resources and learning materials"
      ],
      technologies: ["Teaching", "Mentoring", "Community Outreach", "Educational Planning"],
      color: "neon-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through various roles that shaped my expertise in AI, development, and community impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-background z-10`}></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className={`w-5 h-5 text-${exp.color}`} />
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold mb-2">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className={`text-xs border-${exp.color}/50 text-${exp.color} hover:bg-${exp.color}/10`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
            <Users className="w-8 h-8 text-neon-blue mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Worked with diverse teams across different organizations and cultures
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
            <Briefcase className="w-8 h-8 text-neon-purple mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Professional Growth</h3>
            <p className="text-sm text-muted-foreground">
              Gained hands-on experience in AI/ML, software development, and project management
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300 md:col-span-2 lg:col-span-1">
            <Calendar className="w-8 h-8 text-neon-green mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              Constantly upgrading skills and staying updated with latest technology trends
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;