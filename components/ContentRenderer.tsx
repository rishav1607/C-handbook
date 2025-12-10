import React, { useState } from 'react';
import { ContentBlock, QuizBlock, PracticeQuestionBlock } from '../types';
import { Copy, Check, Terminal, HelpCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const syntaxHighlight = (code: string) => {
  // Simple regex-based highlighter for C
  // Escape HTML first
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Colors (Monokai-ish)
  const colors = {
    keyword: '#F92672', // Pink
    type: '#66D9EF',    // Blue
    string: '#E6DB74',  // Yellow
    number: '#AE81FF',  // Purple
    comment: '#75715E', // Grey
    function: '#A6E22E', // Green
    preprocessor: '#F92672' // Pink
  };

  // 1. Comments (Double slash)
  const comments: string[] = [];
  html = html.replace(/(\/\/.*)/g, (match) => {
    comments.push(match);
    return `__COMMENT_${comments.length - 1}__`;
  });

  // 2. Strings (Handle early to protect them and prevent regex collision with HTML attributes)
  const strings: string[] = [];
  html = html.replace(/(".*?")/g, (match) => {
    strings.push(match);
    return `__STRING_${strings.length - 1}__`;
  });

  // 3. Preprocessor
  html = html.replace(/(#\w+)/g, `<span style="color: ${colors.preprocessor}">$1</span>`);

  // 4. Keywords
  const keywords = /\b(auto|break|case|const|continue|default|do|else|enum|extern|for|goto|if|register|return|signed|sizeof|static|struct|switch|typedef|union|unsigned|volatile|while)\b/g;
  html = html.replace(keywords, `<span style="color: ${colors.keyword}">$1</span>`);

  // 5. Types
  const types = /\b(int|float|double|char|void|long|short)\b/g;
  html = html.replace(types, `<span style="color: ${colors.type}">$1</span>`);

  // 6. Numbers
  html = html.replace(/\b(\d+)\b/g, `<span style="color: ${colors.number}">$1</span>`);

  // 7. Functions (word followed by paren)
  html = html.replace(/(\w+)(?=\()/g, `<span style="color: ${colors.function}">$1</span>`);

  // Restore Strings
  html = html.replace(/__STRING_(\d+)__/g, (_, id) => {
    return `<span style="color: ${colors.string}">${strings[parseInt(id)]}</span>`;
  });

  // Restore Comments
  html = html.replace(/__COMMENT_(\d+)__/g, (_, id) => {
    return `<span style="color: ${colors.comment}">${comments[parseInt(id)]}</span>`;
  });

  return html;
};

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = syntaxHighlight(code);

  return (
    <div className="my-6 rounded-lg overflow-hidden shadow-xl border border-gray-800 bg-[#272822]">
      {/* VS Code Header */}
      <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between border-b border-black/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-gray-400 text-xs font-mono">main.c</div>
        <button 
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy Code"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Code Area */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-[#f8f8f2]">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

const QuizComponent = ({ data }: { data: QuizBlock }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-6 border-4 border-black dark:border-white bg-[#4D96FF] p-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#fff]">
      <div className="bg-black text-white p-3 font-bold flex items-center gap-2">
        <HelpCircle size={20} />
        <span>Quick Quiz</span>
      </div>
      <div className="p-6">
        <p className="font-bold text-lg mb-4 text-white">{data.question}</p>
        
        {revealed ? (
          <div className="bg-white dark:bg-[#2a2a2a] dark:text-white border-2 border-black dark:border-white p-4 animate-in fade-in slide-in-from-bottom-2">
             <p className="font-bold">Answer:</p>
             <p>{data.answer}</p>
          </div>
        ) : (
          <button 
            onClick={() => setRevealed(true)}
            className="bg-yellow-300 text-black border-2 border-black px-4 py-2 font-bold hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            Reveal Answer
          </button>
        )}
      </div>
    </div>
  );
};

const PracticeQuestionComponent = ({ data }: { data: PracticeQuestionBlock }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6">
       <div 
         onClick={() => setIsOpen(!isOpen)}
         className={`
           cursor-pointer p-4 border-4 border-black dark:border-white 
           bg-white dark:bg-[#2a2a2a] 
           shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#fff]
           hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_#fff]
           transition-all flex justify-between items-start gap-4
         `}
       >
          <div className="flex gap-3">
             <div className="mt-1 bg-black text-white dark:bg-white dark:text-black p-1 rounded-sm">
               <Terminal size={16} />
             </div>
             <div>
               <h4 className="font-bold text-lg dark:text-white mb-1">Practice Problem</h4>
               <p className="font-medium text-gray-700 dark:text-gray-300">{data.question}</p>
             </div>
          </div>
          <div className="bg-black dark:bg-white text-white dark:text-black p-1 rounded-full shrink-0">
             {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
       </div>

       {isOpen && (
         <div className="mt-4 border-l-4 border-black dark:border-white ml-4 pl-4 animate-in slide-in-from-top-2 fade-in">
            {data.hint && (
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 italic">
                Hint: {data.hint}
              </div>
            )}
            <div className="relative">
              <span className="absolute -top-3 left-4 bg-[#6BCB77] border-2 border-black px-2 py-0.5 text-xs font-bold shadow-sm z-10">
                SOLUTION
              </span>
              <CodeBlock code={data.answer} />
            </div>
         </div>
       )}
    </div>
  );
};

export const ContentRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-4 text-lg leading-relaxed font-medium text-gray-800 dark:text-gray-200">{block.content}</p>;
    
    case 'header':
      return <h2 className="text-3xl font-black mb-6 mt-10 border-b-4 border-black dark:border-white inline-block pr-10 uppercase bg-[#FFD93D] text-black p-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#fff]">{block.content}</h2>;
    
    case 'subheader':
      return <h3 className="text-xl font-bold mb-3 mt-6 text-[#FF6B6B] flex items-center gap-2 before:content-['#'] before:text-black dark:before:text-white">{block.content}</h3>;
    
    case 'code':
      return <CodeBlock code={block.content} />;
    
    case 'list':
      return (
        <ul className="list-none space-y-3 mb-6 ml-2">
          {block.content.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="bg-black dark:bg-white text-white dark:text-black min-w-[24px] h-[24px] flex items-center justify-center font-bold text-sm border-2 border-black dark:border-white mt-1">
                {idx + 1}
              </span>
              <span className="font-medium bg-white dark:bg-[#2a2a2a] dark:text-white border-2 border-black dark:border-white p-2 flex-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#fff]">{item}</span>
            </li>
          ))}
        </ul>
      );
      
    case 'note':
       return (
         <div className="bg-[#FFD93D] text-black border-4 border-black dark:border-white p-4 mb-6 flex gap-4 items-start shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_#fff]">
            <AlertCircle className="shrink-0 mt-1" size={24} />
            <div>
              <span className="font-black block mb-1">NOTE</span>
              <p className="font-medium">{block.content}</p>
            </div>
         </div>
       );

    case 'quiz':
      return <QuizComponent data={block.content} />;

    case 'practice-question':
      return <PracticeQuestionComponent data={block.content} />;

    default:
      return null;
  }
};