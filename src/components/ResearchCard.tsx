import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Research {
  id: string;
  title: string;
  venue?: string;
  year?: number;
  description: string;
  link: string;
  cta?: string;
}

interface ResearchCardProps {
  research: Research;
}

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="px-4 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-base font-semibold line-clamp-2">
              {research.title}
            </CardTitle>
            {research.venue && (
              <div className="text-xs text-muted-foreground mt-1">
                {research.venue} {research.year ? `· ${research.year}` : ""}
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4 pt-2 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {research.description}
        </p>

        <div className="flex items-center justify-between">
          <div /> {/* spacer - reserved for tags in future */}

          <Button asChild variant="outline" size="sm">
            <a
              href={research.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {research.cta ?? "View"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
