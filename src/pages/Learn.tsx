import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Learn = () => {
  const languages = [
    {
      name: "Python",
      description: "Start your programming journey with Python's simple syntax",
      level: "Beginner Friendly",
      topics: ["Basics", "Data Types", "Functions", "OOP"],
      color: "text-blue-600",
    },
    {
      name: "C Programming",
      description: "Master the fundamentals of programming with C",
      level: "Foundation",
      topics: ["Syntax", "Pointers", "Memory Management", "Data Structures"],
      color: "text-purple-600",
    },
    {
      name: "C++",
      description: "Learn object-oriented programming and advanced concepts",
      level: "Intermediate",
      topics: ["OOP", "STL", "Templates", "Advanced Concepts"],
      color: "text-indigo-600",
    },
    {
      name: "Java",
      description: "Build robust applications with Java",
      level: "Intermediate",
      topics: ["OOP", "Collections", "Multithreading", "Spring Framework"],
      color: "text-red-600",
    },
    {
      name: "JavaScript",
      description: "Create interactive web applications",
      level: "Beginner Friendly",
      topics: ["ES6+", "DOM", "Async/Await", "React"],
      color: "text-yellow-600",
    },
    {
      name: "SQL",
      description: "Master database queries and management",
      level: "Essential",
      topics: ["Queries", "Joins", "Optimization", "Design"],
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Learn to Code
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Choose a programming language and start your learning journey with comprehensive tutorials
              </p>
            </div>
          </div>
        </section>

        {/* Language Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language) => (
                <Card 
                  key={language.name}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Book className={`h-8 w-8 ${language.color}`} />
                      <Badge variant="secondary">{language.level}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{language.name}</CardTitle>
                    <CardDescription>{language.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2">Topics covered:</p>
                        <div className="flex flex-wrap gap-2">
                          {language.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                        <span className="text-sm font-medium">Start Learning</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Recommended Learning Path</h2>
            <div className="max-w-3xl space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <CardTitle>Start with the Basics</CardTitle>
                  </div>
                  <CardDescription>
                    Choose Python or JavaScript for a beginner-friendly introduction to programming
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <CardTitle>Build Strong Foundations</CardTitle>
                  </div>
                  <CardDescription>
                    Learn C/C++ to understand low-level programming and data structures
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <CardTitle>Specialize and Practice</CardTitle>
                  </div>
                  <CardDescription>
                    Choose your path (Web, Mobile, Systems) and work on real projects
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
