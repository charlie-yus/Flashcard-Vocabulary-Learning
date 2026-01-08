import React from 'react';

export enum Category {
  CORNERSTONE = '基石篇',
  PROCESS = '流程篇',
  SERVICE = '服务质量篇',
  ADVANCE = '进阶与变革篇',
}

export interface Flashcard {
  id: string;
  category: Category;
  question: string;
  answer: React.ReactNode; 
  memory?: React.ReactNode; // For mnemonics, stories, logic
  supplementary?: React.ReactNode; // For extra details
}