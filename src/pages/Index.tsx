import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileCode, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import heroImage from "@/assets/hero-coding.jpg";

const Index = () => {
  const featuredResources = [
    {
      title: "Python Basics Guide",
      description: "Complete guide to Python programming fundamentals",
      category: "Python",
      tags: ["Beginner", "Tutorial", "PDF"],
    },
    {
      title: "Data Structures in C++",
      description: "Comprehensive notes on data structures implementation",
      category: "C++",
      tags: ["Intermediate", "Notes", "Examples"],
    },
    {
      title: "Java Design Patterns",
      description: "Essential design patterns every Java developer should know",
      category: "Java",
      tags: ["Advanced", "Patterns", "Best Practices"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Coding hero" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Master Programming with Free Resources
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Access tutorials, guides, projects, and resources to accelerate your coding journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/learn">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What You'll Find Here
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tutorials</h3>
              <p className="text-muted-foreground">
                Step-by-step guides covering various programming languages and concepts
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4">
                <FileCode className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-muted-foreground">
                PDFs, cheat sheets, and downloadable materials for quick reference
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-lg mb-4">
                <Rocket className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground">
                Hands-on coding challenges and mini-projects to build your skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Resources</h2>
            <Button variant="ghost" asChild>
              <Link to="/resources">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of learners mastering programming skills
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/learn">
                Explore Tutorials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
