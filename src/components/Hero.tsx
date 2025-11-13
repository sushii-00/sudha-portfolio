import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Hi, I'm <span className="text-primary">Sudha Nippani</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            Data Scientist & Machine Learning Engineer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I build reliable, production-ready AI systems combining machine learning, NLP, multi-agent architectures, and data engineering to solve real business problems and deliver measurable impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <Button 
            size="lg" 
            className="w-full sm:w-auto cursor-pointer"
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ 
                behavior: "smooth" 
              });
            }}
          >
            View My Work
          </Button>

          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto flex items-center gap-2 cursor-pointer group"
            asChild
          >
            <a 
              href="/resume.pdf" 
              download="Sudha_Nippani_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
              Download Resume
            </a>
          </Button>

        </div>
        
        {/* <div className="flex justify-center space-x-6 pt-8">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div> */}

        <div className="flex justify-center space-x-6 pt-8">
        {/* GitHub */}
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a 
            href="https://github.com/sushii-00" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </a>
        </Button>

        {/* LinkedIn */}
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a 
            href="https://www.linkedin.com/in/sudhanippani/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>

        {/* Email */}
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <a 
            href="mailto:sushma.nippani2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-5 w-5" />
          </a>
        </Button>

      </div>

        
        <div className="pt-16">
          <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}