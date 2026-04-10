import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const servicesDirectory = path.join(process.cwd(), 'content', 'services');

export interface ServiceMetadata {
  id: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  order: number;
}

export interface Service extends ServiceMetadata {
  content: string;
  contentHtml: string;
}

export function getAllServices(): ServiceMetadata[] {
  try {
    if (!fs.existsSync(servicesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(servicesDirectory);
    const services = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(servicesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          id,
          ...(data as Omit<ServiceMetadata, 'id'>),
        };
      })
      .sort((a, b) => a.order - b.order);

    return services;
  } catch (error) {
    console.error('Error reading services:', error);
    return [];
  }
}

export async function getService(id: string): Promise<Service | null> {
  try {
    const fullPath = path.join(servicesDirectory, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const contentHtml = await marked(content);

    return {
      id,
      ...(data as Omit<ServiceMetadata, 'id'>),
      content,
      contentHtml,
    };
  } catch (error) {
    console.error('Error reading service:', error);
    return null;
  }
}
