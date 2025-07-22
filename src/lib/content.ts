import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { format, parseISO } from 'date-fns';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  image?: string;
  imageAlt?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    improvement: string;
  }>;
  content: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: 'checklist' | 'guide' | 'template' | 'ebook' | 'whitepaper';
  content: string;
  downloadUrl?: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  image?: string;
  imageAlt?: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

function getContentFiles(type: 'blog/posts' | 'case-studies' | 'resources'): string[] {
  const fullPath = path.join(contentDirectory, type);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter(name => name.endsWith('.mdx'));
}

function parseContent<T>(type: 'blog/posts' | 'case-studies' | 'resources', slug: string): T | null {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const readingStats = readingTime(content);

    const baseContent = {
      slug,
      content,
      readingTime: readingStats.text,
      publishDate: data.publishDate ? format(parseISO(data.publishDate), 'MMMM dd, yyyy') : '',
      ...data,
    };

    return baseContent as T;
  } catch (error) {
    console.error(`Error parsing content for ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const files = getContentFiles('blog/posts');
  const posts = files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return parseContent<BlogPost>('blog/posts', slug);
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  return parseContent<BlogPost>('blog/posts', slug);
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter(post => post.featured)
    .slice(0, limit);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = getContentFiles('case-studies');
  const caseStudies = files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return parseContent<CaseStudy>('case-studies', slug);
    })
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | null {
  return parseContent<CaseStudy>('case-studies', slug);
}

export function getFeaturedCaseStudies(limit: number = 3): CaseStudy[] {
  return getAllCaseStudies()
    .filter(study => study.featured)
    .slice(0, limit);
}

export function getAllResources(): Resource[] {
  const files = getContentFiles('resources');
  const resources = files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      return parseContent<Resource>('resources', slug);
    })
    .filter((resource): resource is Resource => resource !== null)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return resources;
}

export function getResource(slug: string): Resource | null {
  return parseContent<Resource>('resources', slug);
}

export function getFeaturedResources(limit: number = 3): Resource[] {
  return getAllResources()
    .filter(resource => resource.featured)
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.sort();
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  return tags.sort();
}

export function searchContent(query: string, type?: 'blog' | 'case-studies' | 'resources'): any[] {
  let allContent: any[] = [];
  
  if (!type || type === 'blog') {
    allContent = [...allContent, ...getAllBlogPosts().map(post => ({ ...post, type: 'blog' }))];
  }
  
  if (!type || type === 'case-studies') {
    allContent = [...allContent, ...getAllCaseStudies().map(study => ({ ...study, type: 'case-study' }))];
  }
  
  if (!type || type === 'resources') {
    allContent = [...allContent, ...getAllResources().map(resource => ({ ...resource, type: 'resource' }))];
  }

  const searchTerm = query.toLowerCase();
  
  return allContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm) ||
    item.excerpt?.toLowerCase().includes(searchTerm) ||
    item.description?.toLowerCase().includes(searchTerm) ||
    item.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm)) ||
    item.content.toLowerCase().includes(searchTerm)
  );
} 