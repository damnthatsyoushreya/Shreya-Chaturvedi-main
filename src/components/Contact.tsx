import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shreya.developer@gmail.com",
      href: "mailto:shreya.developer@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shreya-dev",
      username: "@shreya-dev",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shreya-dev",
      username: "shreya-dev",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/shreya_codes",
      username: "@shreya_codes",
      color: "hover:text-blue-400"
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
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Looking for a team lead for your next hackathon? 
            Or just want to chat about tech? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-accent-text flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell me about your project, idea, or just say hello! ✨"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 rounded-xl py-6 text-lg font-semibold shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full bg-secondary/50 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-muted-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-accent-text">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                      <div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {social.label}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {social.username}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="group-hover:border-primary transition-colors">
                      Follow
                    </Badge>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Fun Call-to-Action */}
            <Card className="glass-card border-0 shadow-card bg-gradient-accent/10">
              <CardContent className="text-center p-8 space-y-4">
                <div className="text-4xl mb-4">
                  <Coffee className="w-12 h-12 mx-auto text-amber-500" />
                </div>
                <h3 className="text-xl font-bold gradient-accent-text">
                  Let's Grab a Virtual Coffee!
                </h3>
                <p className="text-muted-foreground">
                  Always up for discussing new ideas, sharing experiences, or collaborating on exciting projects.
                </p>
                <Badge className="bg-gradient-primary text-white border-0 px-6 py-2 font-semibold">
                  Available for exciting opportunities ✨
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;