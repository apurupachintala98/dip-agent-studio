import { User, Sparkles, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProfileSection = () => {
  return (
    <section id="profile" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm mb-4">
              <User className="w-4 h-4 text-primary" />
              <span>Step 1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Define Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Agent Profile
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Describe what your agent does so people and other agents know when to use it
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Agent Configuration</h3>
                <p className="text-muted-foreground">Set up your agent's basic information</p>
              </div>
              <Button variant="outline" size="icon" className="border-border">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Agent Name */}
              <div className="space-y-2">
                <Label htmlFor="agent-name">Agent Name</Label>
                <Input
                  id="agent-name"
                  placeholder="e.g., Customer Support Assistant"
                  className="bg-secondary/50 border-border"
                />
              </div>

              {/* Model Service Provider */}
              <div className="space-y-2">
                <Label htmlFor="model">LLM Service Provider</Label>
                <Select defaultValue="Cortex">
                  <SelectTrigger className="w-full bg-secondary/50 border-border">
                    <SelectValue placeholder="Choose AI Service Provider" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="Cortex">Snowflake Cortex (Default)</SelectItem>
                    <SelectItem value="EHAP">EHAP</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Choose the AI model that powers your agent
                </p>
              </div>

              {/* Model Selection */}
              <div className="space-y-2">
                <Label htmlFor="model">AI Model</Label>
                <Select defaultValue="llama-3">
                  <SelectTrigger className="w-full bg-secondary/50 border-border">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="llama-3">llama-3-2-90b-vision-instruct (Default)</SelectItem>
                    <SelectItem value="llama-405">llama-3-405b-instruct (Recommended)</SelectItem>
                    <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
                    <SelectItem value="claude">Claude 3 Opus</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Choose the AI model that powers your agent
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="This is a demo general knowledge agent that can answer questions and provide information..."
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
                <p className="text-sm text-muted-foreground">
                  Describe your agent, including its purpose, tools, and capabilities
                </p>
              </div>

              {/* Purpose Tags */}
              <div className="space-y-2">
                <Label>Agent Capabilities</Label>
                <div className="flex flex-wrap gap-2">
                  {["Question Answering", "Data Analysis", "Customer Support", "Content Generation", "Code Assistance"].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 bg-secondary/50 border border-border rounded-lg text-sm hover:bg-secondary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity w-full md:w-auto">
                  Save Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
