"use client";

import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Fuse from 'fuse.js';
import type { BlogPost } from '@/lib/content';

interface SearchAndFilterProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
  onFilteredPosts: (posts: BlogPost[]) => void;
  className?: string;
}

const searchOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'excerpt', weight: 0.3 },
    { name: 'tags', weight: 0.2 },
    { name: 'content', weight: 0.1 }
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
};

export default function SearchAndFilter({ 
  posts, 
  categories, 
  tags, 
  onFilteredPosts,
  className = "" 
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<BlogPost[]>(posts);

  const fuse = useMemo(() => new Fuse(posts, searchOptions), [posts]);

  // Filter posts based on search and filters
  useEffect(() => {
    let filteredPosts = posts;

    // Apply search if query exists
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery);
      filteredPosts = results.map(result => result.item);
    }

    // Apply category filter
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      filteredPosts = filteredPosts.filter(post =>
        selectedTags.some(tag => 
          post.tags.some(postTag => 
            postTag.toLowerCase() === tag.toLowerCase()
          )
        )
      );
    }

    setSearchResults(filteredPosts);
    onFilteredPosts(filteredPosts);
  }, [searchQuery, selectedCategory, selectedTags, posts, fuse, onFilteredPosts]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTags([]);
    setIsFilterOpen(false);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTags.length > 0;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search Bar */}
      <div className="relative animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="Search articles, guides, and insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12 h-12 bg-white/5 border-white/10 focus:border-primary/50 text-lg"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Filter Toggle & Active Filters */}
      <div className="flex items-center justify-between flex-wrap gap-4 animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="default" className="ml-1 h-5 w-5 p-0 text-xs">
                {(selectedCategory ? 1 : 0) + selectedTags.length}
              </Badge>
            )}
          </Button>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {searchResults.length} {searchResults.length === 1 ? 'article' : 'articles'} found
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
          {selectedCategory && (
            <Badge 
              variant="secondary" 
              className="flex items-center gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
              onClick={() => setSelectedCategory('')}
            >
              Category: {selectedCategory}
              <X className="w-3 h-3" />
            </Badge>
          )}
          {selectedTags.map(tag => (
            <Badge 
              key={tag}
              variant="secondary" 
              className="flex items-center gap-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
              <X className="w-3 h-3" />
            </Badge>
          ))}
        </div>
      )}

      {/* Expanded Filters */}
      {isFilterOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 space-y-6">
              {/* Categories */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedCategory(
                        selectedCategory === category ? '' : category
                      )}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                  {tags.slice(0, 20).map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {tags.length > 20 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Showing 20 of {tags.length} tags
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* No Results State */}
      {searchQuery && searchResults.length === 0 && (
        <div className="text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-md mx-auto">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or removing some filters
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear Filters
            </Button>
          </div>
        </div>
      )}

      {/* Quick Search Suggestions */}
      {!searchQuery && !hasActiveFilters && (
        <div className="flex flex-wrap gap-2 animate-in fade-in duration-500 delay-200">
          <span className="text-sm text-muted-foreground">Popular topics:</span>
          {['MVP', 'Startup', 'Growth', 'Digital Transformation'].map(topic => (
            <Badge
              key={topic}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSearchQuery(topic)}
            >
              {topic}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
} 