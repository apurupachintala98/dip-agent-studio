import { Cpu, FileEdit, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const BehaviorSection = () => {
  return (
    <section id="behavior" className="py-24 relative bg-gradient-to-b from-card/30 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm mb-4">
              <Cpu className="w-4 h-4 text-primary" />
              <span>Step 4</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Define Agent{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Behavior
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specify how your agent should respond and any restrictions it should follow
            </p>
          </div>

          {/* Behavior Card */}
          <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <FileEdit className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Behavior Instructions</h3>
                <p className="text-muted-foreground">
                  Define how and where your agent should react to requests
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Instructions Input */}
              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="Ex: Answer customer questions on return and cancellation policies with clear, friendly responses, referencing policy details, and escalating complex cases as needed"
                  rows={6}
                  className="bg-secondary/50 border-border resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  Specify what your agent should do, how it should respond, and any restrictions
                </p>
              </div>

              {/* Example Prompts */}
              <div className="bg-secondary/30 border border-border rounded-xl p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Example Instructions
                </h4>
                <div className="space-y-3">
                  <div className="bg-card/40 rounded-lg p-4 border border-border">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Customer Support:</span> "Answer customer questions with empathy and clarity. Always check the knowledge base first. If unsure, escalate to a human agent."
                    </p>
                  </div>
                  <div className="bg-card/40 rounded-lg p-4 border border-border">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Data Analysis:</span> "Analyze datasets and provide insights. Always cite sources. Use visualizations when helpful. Flag any data quality issues."
                    </p>
                  </div>
                  <div className="bg-card/40 rounded-lg p-4 border border-border">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Content Creation:</span> "Generate creative content that matches brand voice. Keep tone professional yet friendly. Always fact-check claims before publishing."
                    </p>
                  </div>
                </div>
              </div>

              {/* Behavioral Guidelines */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Tone & Style</h5>
                  <p className="text-sm text-muted-foreground">
                    Define personality and communication style
                  </p>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Constraints</h5>
                  <p className="text-sm text-muted-foreground">
                    Set boundaries and limitations
                  </p>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-4">
                  <h5 className="font-semibold mb-2">Escalation</h5>
                  <p className="text-sm text-muted-foreground">
                    When to involve humans
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity w-full md:w-auto">
                  Save Behavior
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
