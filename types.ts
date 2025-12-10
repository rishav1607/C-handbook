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

// Discriminated Union for stricter type safety
export type ContentBlock = 
  | { type: 'paragraph' | 'header' | 'subheader' | 'code' | 'note' | 'image-placeholder'; content: string; language?: string }
  | { type: 'list'; content: string[]; language?: string }
  | { type: 'quiz'; content: QuizBlock; language?: string }
  | { type: 'practice-question'; content: PracticeQuestionBlock; language?: string };

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