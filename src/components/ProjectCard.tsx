import { Code, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, difficulty, language, tags }: ProjectCardProps) => {
  const difficultyColor = {
    Beginner: "bg-green-500/10 text-green-700 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
    Advanced: "bg-red-500/10 text-red-700 border-red-500/20",
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Code className="h-8 w-8 text-primary mb-2" />
          <Badge className={difficultyColor[difficulty]}>{difficulty}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{language}</Badge>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <Button variant="ghost" className="w-full justify-between mt-4">
            View Details
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
