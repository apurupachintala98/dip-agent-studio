import { Play, BarChart3, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TestingSection = () => {
  return (
    <section id="testing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm mb-4">
              <Play className="w-4 h-4 text-primary" />
              <span>Step 5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Test &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Monitor
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your agent's responses and monitor performance in real-time
            </p>
          </div>

          {/* Testing Interface */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chat Interface */}
            <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Test Chat</h3>
                  <p className="text-sm text-muted-foreground">Try your agent</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6 h-96 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">What is the capital of France?</p>
                  </div>
                </div>

                {/* Agent Response */}
                <div className="flex justify-start">
                  <div className="bg-secondary/50 border border-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">The capital of France is <span className="font-semibold">Paris</span>.</p>
                  </div>
                </div>

                {/* System Info */}
                <div className="flex justify-center">
                  <div className="bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
                    <p className="text-xs text-accent text-success">Success in 2.0s</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message to test your agent..."
                  className="bg-secondary/50 border-border"
                />
                <Button size="icon" className="bg-gradient-primary hover:opacity-90 transition-opacity flex-shrink-0">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Observability Panel */}
            <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                  <BarChart3 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Observability</h3>
                  <p className="text-sm text-muted-foreground">Monitor execution</p>
                </div>
              </div>

              <Tabs defaultValue="input" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                  <TabsTrigger value="input">Input</TabsTrigger>
                  <TabsTrigger value="output">Output</TabsTrigger>
                  <TabsTrigger value="logs">Logs</TabsTrigger>
                </TabsList>

                <TabsContent value="input" className="space-y-3 mt-4">
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono bg-primary/20 px-2 py-1 rounded text-primary" style={{border: "1px solid #000"}}>T</span>
                      <span className="text-sm font-medium">action</span>
                    </div>
                    <p className="text-sm text-muted-foreground">saveContext</p>
                  </div>
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono bg-primary/20 px-2 py-1 rounded text-primary" style={{border: "1px solid #000"}}>T</span>
                      <span className="text-sm font-medium">input</span>
                    </div>
                    <p className="text-sm text-muted-foreground">What is the capital of France</p>
                  </div>
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono bg-primary/20 px-2 py-1 rounded text-primary" style={{border: "1px solid #000"}}>T</span>
                      <span className="text-sm font-medium">system_message</span>
                    </div>
                    <p className="text-sm text-muted-foreground">You are a helpful assistant</p>
                  </div>
                </TabsContent>

                <TabsContent value="output" className="space-y-3 mt-4">
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Human</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">What is the capital of France</p>
                  </div>
                  <div className="bg-secondary/30 border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">AI</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">The capital of France is Paris.</p>
                  </div>
                </TabsContent>

                <TabsContent value="logs" className="space-y-3 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">15 Tokens</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-muted-foreground">Success in 2.0s</span>
                    </div>
                    <div className="bg-secondary/30 border border-border rounded-lg p-3">
                      <p className="text-xs font-mono text-muted-foreground">
                        [Session: 0d1bd...] When chat message received
                      </p>
                    </div>
                    <div className="bg-secondary/30 border border-border rounded-lg p-3">
                      <p className="text-xs font-mono text-muted-foreground">
                        AI Agent → Simple Memory
                      </p>
                    </div>
                    <div className="bg-secondary/30 border border-border rounded-lg p-3">
                      <p className="text-xs font-mono text-muted-foreground">
                        Snowflake Cortex
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-secondary/30 border border-border rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Success</div>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-accent">1.8s</div>
                  <div className="text-xs text-muted-foreground">Avg Time</div>
                </div>
                <div className="bg-secondary/30 border border-border rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">342</div>
                  <div className="text-xs text-muted-foreground">Queries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
