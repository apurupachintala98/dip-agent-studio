import { Wrench, Package, Plus, Server, Code2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToolsetSection = () => {
  const tools = [
    { name: "Web Search", icon: "🔍", category: "Data" },
    { name: "Calculator", icon: "🔢", category: "Utility" },
    { name: "Email", icon: "📧", category: "Communication" },
    { name: "Database Query", icon: "💾", category: "Data" },
    { name: "API Call", icon: "🔌", category: "Integration" },
    { name: "File Parser", icon: "📄", category: "Utility" },
  ];

  return (
    <section id="toolset" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm mb-4">
              <Wrench className="w-4 h-4 text-primary" />
              <span>Step 3</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Configure{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Agent Tools
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Add tools and integrations to help your agent take action
            </p>
          </div>

          {/* Toolset Card */}
          <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Available Tools</h3>
                <p className="text-muted-foreground">
                  Give your agent access to powerful capabilities
                </p>
              </div>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4 mr-2" />
                Add Tool
              </Button>
            </div>

            {/* Add Tool Options */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {/* From Catalog */}
              <div className="group relative bg-secondary/30 border border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <Package className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Add from catalog</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose from a catalog of existing tools
                    </p>
                  </div>
                </div>
              </div>

              {/* From File/MCP */}
               <div className="group relative bg-secondary/30 border border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                    <Server className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Add from file or MCP server</h4>
                    <p className="text-sm text-muted-foreground">
                      Import external tools from a file or MCP server
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Tools List */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-primary" />
                Selected Tools
              </h4>
              <div className="grid md:grid-cols-3 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                     className="bg-secondary/30 border border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-lg p-4 transition-all cursor-pointer hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium truncate">{tool.name}</h5>
                        <p className="text-xs text-muted-foreground">{tool.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Tool */}
            <div className="bg-secondary/30 border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Create Custom Tool</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Build your own tools with custom functions and integrations
                  </p>
                  <Button variant="outline" size="sm" className="border-border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:shadow-md">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
