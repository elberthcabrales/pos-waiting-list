"use client";

import { WaitlistForm } from '@/components/ui/waitlist-form';
import { Bot, BarChart3, TrendingUp } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Toaster />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Revolutionize Your Store with AISellink POS
          </h1>
          <p className="text-xl text-gray-300">
            AI-powered insights for smarter inventory, sales, and decision-making.
          </p>
          <WaitlistForm />
        </div>
        
        <div className="flex-1">
          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6 rounded-2xl border border-white/10 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-blue-400" />
              <span className="text-sm text-gray-300">AISellink Assistant</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-gray-300">What are my best-selling products this month?</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <p className="text-blue-300">Based on your sales data:</p>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li>1. Organic Avocados (1,234 units)</li>
                  <li>2. Fresh Bread (987 units)</li>
                  <li>3. Local Honey (756 units)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Features for Modern Retail
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bot className="w-6 h-6 text-blue-400" />}
              title="AI-Powered Assistant"
              description="Get instant answers about your business performance and smart recommendations."
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-violet-400" />}
              title="Smart Analytics"
              description="Real-time insights into sales trends, customer behavior, and inventory levels."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-green-400" />}
              title="Predictive Ordering"
              description="AI-driven suggestions for optimal inventory levels and reorder timing."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10">
      <div className="bg-black/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}