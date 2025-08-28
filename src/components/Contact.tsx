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
      value: "chaturvedi.d.shreya@gmail.com",  
      href: "mailto:chaturvedi.d.shreya@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7862082847",  
      href: "tel:7862082847",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",   
      href: "#",
      color: "text-red-500"
    }
  ];

const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/damnthatsyoushreya",  
      username: "@damnthatsyoushreya",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shreya-chaturvedi-ba1280218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",   // ✅ updated
      username: "shreya-chaturvedi",
      color: "hover:text-blue-600"
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
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-transparent to-secondary/20">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
  Let's Work Together
</h2>

      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
        Have a project in mind? Looking for a team lead for your next hackathon? 
        Or just want to chat about tech? I'd love to hear from you!
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card className="glass-card border-0 shadow-card p-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold gradient-accent-text flex items-center gap-2">
            <Send className="w-5 h-5" />
            Send Me a Message
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
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
              rows={5}
              className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 text-white border-0 rounded-xl py-4 text-lg font-semibold shadow-glow flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info & Social Links */}
      <div className="space-y-6">
        {/* Contact Information */}
        <Card className="glass-card border-0 shadow-card p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold gradient-text">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/20 transition-all duration-200"
              >
                <div className={`p-2 rounded-full bg-secondary/50 ${contact.color}`}>
                  <contact.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">{contact.label}</div>
                  <div className="text-sm text-muted-foreground">{contact.value}</div>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card className="glass-card border-0 shadow-card p-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold gradient-accent-text">Connect With Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/20 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <social.icon className={`w-5 h-5 ${social.color}`} />
                  <div>
                    <div className="font-semibold">{social.label}</div>
                    <div className="text-sm text-muted-foreground">{social.username}</div>
                  </div>
                </div>
                <Badge variant="outline" className="px-3 py-1 text-sm">Follow</Badge>
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Fun Call-to-Action */}
        <Card className="glass-card border-0 shadow-card p-6 text-center">
          <Coffee className="w-10 h-10 mx-auto text-amber-500 mb-3" />
          <h3 className="text-lg font-bold gradient-accent-text mb-2">Let's Grab a Virtual Coffee!</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Always up for discussing new ideas, sharing experiences, or collaborating on exciting projects.
          </p>
          <Badge className="bg-gradient-primary text-white border-0 px-4 py-1 text-sm font-semibold">
            Available for exciting opportunities ✨
          </Badge>
        </Card>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;