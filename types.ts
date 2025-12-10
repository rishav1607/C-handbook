export type BlockType = 'paragraph' | 'header' | 'subheader' | 'code' | 'list' | 'quiz' | 'note' | 'image-placeholder' | 'practice-question';

export interface QuizBlock {
  question: string;
  answer: string;
}

export interface PracticeQuestionBlock {
  question: string;
  answer: string;
  hint?: string;
}

export interface ContentBlock {
  type: BlockType;
  content: string | string[] | QuizBlock | PracticeQuestionBlock;
  language?: string; // For code blocks
}

export interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
  isPracticeSet?: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
  color: string; // Neobrutal accent color for this chapter
}