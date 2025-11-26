import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SectorItem {
  title: string;
  description: string;
  imageUrl: string;
  stats: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  details: string[];
}

export interface StatItem {
  value: string;
  label: string;
}