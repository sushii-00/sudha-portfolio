import { Card, CardContent } from "./ui/card";
import { Brain, Database, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With hands-on experience in building production-grade AI systems, I specialize in developing scalable machine learning and LLM-driven applications. 
            I focus on designing end-to-end solutions, from multi-agent architectures and RAG pipelines to computer vision and OCR systems, that solve real business problems and deliver measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-muted-foreground">
              I’m seeking data science and ML roles where I can apply my skills to real business problems.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Python</span>   
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Deep Learning</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Science</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">NLP   </span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">LLMs  </span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">LangChain</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">LangGraph</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">RAG   </span> 
              <span className="px-3 py-1 bg-muted rounded-full text-sm">OpenCV</span>  
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Pandas</span> 
              <span className="px-3 py-1 bg-muted rounded-full text-sm">SQL  </span>              
              <span className="px-3 py-1 bg-muted rounded-full text-sm">Scikit-Learn</span>  
              <span className="px-3 py-1 bg-muted rounded-full text-sm">PyTorch</span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm">MLOps Basics</span>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in supervised/unsupervised learning, deep learning, 
                    and model deployment at scale.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Data Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing data workflows, ETL processes, OCR pipelines, and vector-store integrations. Skilled at cleaning, transforming, and preparing data for analytics and ML applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="mb-2">Analytics & Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Transforming raw data into compelling visualizations 
                    and actionable business intelligence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}