"use client";

import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/content';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}

export default function PostCard({ post, featured = false, index = 0 }: PostCardProps) {
  const cardClasses = featured 
    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 border-2" 
    : "bg-white/5 border-white/10";

  return (
    <div 
      className="h-full animate-in fade-in slide-in-from-bottom-4 duration-500 hover:-translate-y-2 hover:scale-105 transition-all"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link href={`/insights/${post.slug}`} className="block h-full">
        <Card className={`${cardClasses} h-full overflow-hidden transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-primary/10`}>
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}

          {/* Image Placeholder - Modern gradient */}
          <div className={featured ? 'h-56 relative overflow-hidden' : 'h-48 relative overflow-hidden'}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                {post.category}
              </Badge>
            </div>

            {/* Reading Time Indicator */}
            <div className="absolute bottom-4 right-4">
              <div className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
          </div>

          <CardContent className="p-6 flex flex-col h-full">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.publishDate}
              </div>
              <div className="flex items-center gap-1">
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={featured ? 'text-xl font-bold font-headline mb-3 leading-tight group-hover:text-primary transition-colors duration-300' : 'text-lg font-bold font-headline mb-3 leading-tight group-hover:text-primary transition-colors duration-300'}>
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className={featured ? 'text-base text-muted-foreground leading-relaxed mb-4 flex-grow' : 'text-sm text-muted-foreground leading-relaxed mb-4 flex-grow'}>
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <Tag className="w-3 h-3 text-muted-foreground" />
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Read More CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                Read Full Article
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
} 