import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const allResources = [
    {
      title: "Python Complete Reference",
      description: "A comprehensive guide covering all Python fundamentals",
      category: "Python",
      tags: ["PDF", "Complete Guide", "Beginner"],
    },
    {
      title: "Data Structures Cheat Sheet",
      description: "Quick reference for all common data structures",
      category: "C++",
      tags: ["Cheat Sheet", "Reference", "Algorithms"],
    },
    {
      title: "Java Interview Questions",
      description: "Top 100 Java interview questions with answers",
      category: "Java",
      tags: ["Interview", "Q&A", "Advanced"],
    },
    {
      title: "C Programming Notes",
      description: "Detailed notes covering C programming concepts",
      category: "C",
      tags: ["Notes", "Tutorial", "Foundation"],
    },
    {
      title: "JavaScript ES6+ Guide",
      description: "Modern JavaScript features and best practices",
      category: "JavaScript",
      tags: ["ES6", "Modern JS", "Web Dev"],
    },
    {
      title: "SQL Query Handbook",
      description: "Essential SQL queries and optimization techniques",
      category: "SQL",
      tags: ["Database", "Queries", "Optimization"],
    },
    {
      title: "Python Data Science Toolkit",
      description: "Libraries and tools for data science in Python",
      category: "Python",
      tags: ["Data Science", "NumPy", "Pandas"],
    },
    {
      title: "C++ STL Complete Guide",
      description: "Master the Standard Template Library in C++",
      category: "C++",
      tags: ["STL", "Advanced", "Templates"],
    },
    {
      title: "React Hooks Cheat Sheet",
      description: "Quick reference for all React hooks",
      category: "JavaScript",
      tags: ["React", "Hooks", "Frontend"],
    },
  ];

  const categories = ["All", "Python", "C", "C++", "Java", "JavaScript", "SQL"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = selectedCategory === "All" 
    ? allResources 
    : allResources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <section className="bg-gradient-primary py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Resources Library
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Download PDFs, cheat sheets, and guides to accelerate your learning
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="All" className="space-y-8">
              <TabsList className="flex flex-wrap h-auto gap-2">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">
                    {filteredResources.length} resources available
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard key={resource.title} {...resource} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
