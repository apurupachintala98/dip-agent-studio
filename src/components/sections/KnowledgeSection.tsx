import { BookOpen, Upload, Database, FileText, Link2, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const KnowledgeSection = () => {
  return (
    <section id="knowledge" className="py-24 relative bg-gradient-to-b from-transparent to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Step 2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Add{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Knowledge Sources
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Provide the specific knowledge your agent needs to accomplish its goals
            </p>
          </div>

          {/* Knowledge Card */}
          <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Knowledge Base</h3>
                <p className="text-muted-foreground">
                  Upload files or connect to content repositories
                </p>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Upload className="w-4 h-4 mr-2" />
                Upload Files
              </Button>
            </div>

            {/* Knowledge Sources Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* File Upload */}
               <div className="group relative bg-secondary/30 border-2 border-dashed border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Upload Documents</h4>
                    <p className="text-sm text-muted-foreground">
                      PDF, DOC, TXT, and more
                    </p>
                  </div>
                </div>
              </div>

              {/* Database Connection */}
              <div className="group relative bg-secondary/30 border-2 border-dashed border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                    <Database className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Connect Database</h4>
                    <p className="text-sm text-muted-foreground">
                      Snowflake Analyst, Snowflake Cortex Search and more
                    </p>
                  </div>
                </div>
              </div>

              {/* Web Connection */}
              <div className="group relative bg-secondary/30 border-2 border-dashed border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <Link2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Web Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Crawl websites and APIs
                    </p>
                  </div>
                </div>
              </div>

              {/* Repository */}
               <div className="group relative bg-secondary/30 border-2 border-dashed border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                    <FolderOpen className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">A2A Agents</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect to other agents
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Knowledge Best Practices */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Knowledge Best Practices
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Keep documents concise and well-structured for better retrieval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use clear headings and sections to organize information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Update knowledge base regularly to maintain accuracy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
