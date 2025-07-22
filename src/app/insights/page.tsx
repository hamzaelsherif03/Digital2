"use client";

import React, { useState } from 'react';
import { insightsMetadata } from '@/lib/metadata';
import HeaderNav from '@/components/HeaderNav';
import FooterSection from '@/components/FooterSection';
import PostCard from '@/components/blog/PostCard';
import SearchAndFilter from '@/components/blog/SearchAndFilter';
import SecurityBadges from '@/components/SecurityBadges';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, TrendingUp, Users, ArrowRight, Lightbulb } from 'lucide-react';
import { getAllBlogPosts, getFeaturedBlogPosts, getAllCategories, getAllTags } from '@/lib/content';
import type { BlogPost } from '@/lib/content';

// Mock data for demonstration - in production, this would come from the content files
const mockPosts: BlogPost[] = [
  {
    slug: "mvp-to-market-in-7-days",
    title: "From MVP to Market in 7 Days: The Complete Startup Launch Framework",
    excerpt: "Discover the proven framework that has helped 200+ startups launch their MVP and acquire their first customers in just one week. No theory, just actionable steps.",
    content: "",
    author: "Sarah Chen",
    publishDate: "January 15, 2024",
    readingTime: "12 min read",
    category: "MVP Development",
    tags: ["MVP", "Startup", "Launch Strategy", "Product Development", "Customer Validation"],
    featured: true,
  },
  {
    slug: "scaling-without-breaking",
    title: "Scaling Without Breaking: The 5 Critical Systems Every Growing Startup Needs",
    excerpt: "From 10 to 10,000 users: Learn the essential systems and processes that prevent your startup from collapsing under its own success. Real case studies included.",
    content: "",
    author: "Marcus Rodriguez",
    publishDate: "January 10, 2024",
    readingTime: "15 min read",
    category: "Growth & Scale",
    tags: ["Scaling", "Systems", "Infrastructure", "Operations", "Growth Strategy"],
    featured: false,
  },
  {
    slug: "digital-transformation-playbook",
    title: "The Enterprise Digital Transformation Playbook: From Legacy to Leading Edge",
    excerpt: "A step-by-step guide for enterprise leaders to navigate digital transformation successfully. Includes frameworks, timelines, and real transformation case studies.",
    content: "",
    author: "Dr. Elena Vasquez",
    publishDate: "January 5, 2024",
    readingTime: "18 min read",
    category: "Enterprise",
    tags: ["Digital Transformation", "Enterprise", "Technology Strategy", "Change Management", "Innovation"],
    featured: false,
  }
];

const mockCategories = ["MVP Development", "Growth & Scale", "Enterprise", "Digital Strategy", "Product Management"];
const mockTags = ["MVP", "Startup", "Scaling", "Digital Transformation", "Enterprise", "Growth Strategy", "Systems", "Innovation", "Product Development", "Technology Strategy"];

const stats = [
  { label: "Articles Published", value: "50+", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Downloads", value: "10,000+", icon: <Download className="w-5 h-5" /> },
  { label: "Monthly Readers", value: "25,000+", icon: <Users className="w-5 h-5" /> },
  { label: "Success Stories", value: "200+", icon: <TrendingUp className="w-5 h-5" /> },
];

const resources = [
  {
    title: "The 7-Day Launch Framework",
    description: "Complete step-by-step guide to launch your MVP in one week",
    type: "PDF Guide",
    downloads: "2,847"
  },
  {
    title: "Startup Scaling Checklist",
    description: "Essential checklist for growing from 10 to 10,000 users",
    type: "Checklist",
    downloads: "1,923"
  },
  {
    title: "Digital Transformation Roadmap",
    description: "Enterprise-grade transformation planning template",
    type: "Template",
    downloads: "1,456"
  }
];

export default function InsightsPage() {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(mockPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const featuredPosts = mockPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredPosts(mockPosts.filter(post => post.category === category));
    } else {
      setFilteredPosts(mockPosts);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline mb-8 leading-tight tracking-tight">
                Digital Acceleration
                <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mb-12">
                Actionable frameworks, proven strategies, and real case studies from building 200+ successful digital products. Learn from our experience and accelerate your journey.
              </p>

              {/* Trust signals */}
              <div className="mb-12">
                <p className="text-sm text-foreground/50 mb-4 uppercase tracking-wider">Trusted Content</p>
                <SecurityBadges 
                  variant="horizontal" 
                  showDescription={false}
                  className="justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 rounded-2xl p-6 shadow-lg" style={{ animationDelay: `${400 + index * 100}ms` }}>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                  Featured Articles
                </h2>
                <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
                  Our most popular and impactful content, chosen by our community of founders and builders.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    featured={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Download Resources */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                Free Resources & Templates
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Practical tools and frameworks you can use immediately to accelerate your business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {resources.map((resource, index) => (
                <div
                  key={resource.title}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-lg hover:shadow-luxury transition-all duration-500 hover:scale-105 rounded-3xl">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">{resource.type}</Badge>
                        <span className="text-xs text-foreground/60">{resource.downloads} downloads</span>
                      </div>
                      <CardTitle className="text-lg font-bold font-headline">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full group relative overflow-hidden rounded-2xl py-3 text-base font-semibold transition-all duration-500 hover:scale-105 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-primary-foreground backdrop-blur-xl">
                        <Download className="w-4 h-4 mr-2" />
                        <span className="relative z-10">Download Free</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-2xl border border-primary/20 shadow-2xl rounded-3xl">
                <CardContent className="p-8 lg:p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Get New Insights Weekly</h3>
                  <p className="text-foreground/70 mb-8 text-lg">
                    Join 5,000+ founders and get our latest frameworks, case studies, and actionable insights delivered to your inbox.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 px-6 py-4 rounded-2xl bg-background/50 border border-primary/20 text-sm focus:border-primary/50 focus:outline-none backdrop-blur-xl"
                    />
                    <Button type="submit" className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-foreground/50">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-32">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
                All Articles
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Explore our complete library of insights, frameworks, and case studies.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <Badge
                variant={selectedCategory === '' ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-2 rounded-full text-sm font-medium"
                onClick={() => handleCategoryFilter('')}
              >
                All Articles
              </Badge>
              {mockCategories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-6 py-2 rounded-full text-sm font-medium"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Search and Filter */}
            <SearchAndFilter
              posts={mockPosts}
              categories={mockCategories}
              tags={mockTags}
              onFilteredPosts={setFilteredPosts}
              className="mb-16"
            />

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  featured={false}
                  index={index}
                />
              ))}
            </div>

            {/* Load More */}
            {regularPosts.length > 0 && (
              <div className="text-center mt-16 animate-in fade-in duration-500">
                <Button variant="outline" size="lg" className="group border-primary/20 hover:bg-primary/5 rounded-2xl px-8 py-4 transition-all duration-300">
                  <span>Load More Articles</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 tracking-tight">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
                Don't just read about success—create it. Our accelerator programs provide the frameworks, tools, and support to turn insights into results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-luxury transition-all duration-500 hover:shadow-luxury-lg hover:scale-105" asChild>
                  <a href="/accelerators" className="flex items-center gap-4">
                    <span className="relative z-10">Explore Accelerators</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  </a>
                </Button>
                <Button size="lg" variant="ghost" className="group px-12 py-6 text-xl font-medium rounded-full hover:bg-primary/5 transition-all duration-300 border border-primary/20 backdrop-blur-xl" asChild>
                  <a href="/contact" className="flex items-center gap-4">
                    <span>Get Personalized Guidance</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
} 