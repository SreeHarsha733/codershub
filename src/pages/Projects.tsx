import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const allProjects = [
    {
      title: "Todo List Application",
      description: "Build a simple todo app with CRUD operations",
      difficulty: "Beginner" as const,
      language: "Python",
      tags: ["Console App", "File I/O", "Functions"],
    },
    {
      title: "Calculator Program",
      description: "Create a calculator with basic arithmetic operations",
      difficulty: "Beginner" as const,
      language: "C",
      tags: ["Functions", "Switch Case", "Input/Output"],
    },
    {
      title: "Student Management System",
      description: "Manage student records with file handling",
      difficulty: "Intermediate" as const,
      language: "C++",
      tags: ["OOP", "File Handling", "Data Structures"],
    },
    {
      title: "Weather Dashboard",
      description: "Fetch and display weather data using APIs",
      difficulty: "Intermediate" as const,
      language: "JavaScript",
      tags: ["API", "Async", "DOM Manipulation"],
    },
    {
      title: "Banking System",
      description: "Implement a banking system with accounts and transactions",
      difficulty: "Advanced" as const,
      language: "Java",
      tags: ["OOP", "Database", "Security"],
    },
    {
      title: "Chat Application",
      description: "Build a real-time chat app with socket programming",
      difficulty: "Advanced" as const,
      language: "Python",
      tags: ["Sockets", "Threading", "Networking"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Classic game with AI opponent",
      difficulty: "Beginner" as const,
      language: "C++",
      tags: ["Game Logic", "Arrays", "Algorithms"],
    },
    {
      title: "URL Shortener",
      description: "Create a URL shortening service",
      difficulty: "Intermediate" as const,
      language: "JavaScript",
      tags: ["Backend", "Database", "REST API"],
    },
    {
      title: "File Compression Tool",
      description: "Implement Huffman coding for file compression",
      difficulty: "Advanced" as const,
      language: "C",
      tags: ["Algorithms", "Data Structures", "File I/O"],
    },
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredProjects = selectedDifficulty === "All" 
    ? allProjects 
    : allProjects.filter(p => p.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Coding Projects
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Practice your skills with hands-on projects and coding challenges
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="All" className="space-y-8">
              <TabsList>
                {difficulties.map((difficulty) => (
                  <TabsTrigger 
                    key={difficulty} 
                    value={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedDifficulty} className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    {filteredProjects.length} projects available
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Project Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2">Start Small</h3>
                <p className="text-muted-foreground text-sm">
                  Begin with beginner projects to build confidence before tackling complex challenges
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2">Read Documentation</h3>
                <p className="text-muted-foreground text-sm">
                  Always refer to official documentation when you're stuck on a problem
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg mb-2">Code Daily</h3>
                <p className="text-muted-foreground text-sm">
                  Consistency is key - try to code at least a little bit every day
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
