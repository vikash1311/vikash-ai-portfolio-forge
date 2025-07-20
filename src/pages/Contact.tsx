import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gautam7.ven@gmail.com",
      link: "mailto:gautam7.ven@gmail.com",
      color: "neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9307231784",
      link: "tel:+919307231784",
      color: "neon-green"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vikash1311",
      link: "https://linkedin.com/in/vikash1311",
      color: "neon-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vikash1311",
      link: "https://github.com/vikash1311",
      color: "neon-pink"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-neon-blue mr-3" />
                <h2 className="text-2xl font-bold">Send Me a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Quick Facts */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${info.color}/20 flex items-center justify-center group-hover:bg-${info.color}/30 transition-colors duration-200`}>
                      <info.icon className={`w-5 h-5 text-${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-neon-green mr-2" />
                <h3 className="text-lg font-bold">Availability</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span className="text-sm">Available for new projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span className="text-sm">Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span className="text-sm">Open to collaboration</span>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-neon-purple mr-2" />
                <h3 className="text-lg font-bold">Location</h3>
              </div>
              <p className="text-muted-foreground">
                Based in India<br />
                Available for remote work globally
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Timezone: IST (UTC+5:30)</p>
                <p>Preferred communication: Email, LinkedIn</p>
              </div>
            </Card>

            {/* Quick Response */}
            <Card className="p-6 bg-gradient-accent/10 backdrop-blur-sm border-accent/20">
              <h3 className="text-lg font-bold mb-3">Need a Quick Response?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent inquiries or quick questions, feel free to reach out directly via LinkedIn or email.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href="https://linkedin.com/in/vikash1311" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Message on LinkedIn
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;