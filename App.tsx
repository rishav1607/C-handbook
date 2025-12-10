import React, { useState, useEffect } from 'react';
import { HANDBOOK_CONTENT } from './constants';
import { Section } from './types';
import { NeoCard } from './components/NeoCard';
import { NeoButton } from './components/NeoButton';
import { ContentRenderer } from './components/ContentRenderer';
import { Menu, X, ChevronRight, BookOpen, CheckSquare, Sun, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(HANDBOOK_CONTENT[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Safe storage initialization for Completed Sections
  const [completedSections, setCompletedSections] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('c_handbook_progress');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn('Storage access failed:', error);
      return [];
    }
  });

  // Safe storage initialization for Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('c_handbook_theme');
      return saved === 'dark';
    } catch (error) {
      return false;
    }
  });

  const activeChapter = HANDBOOK_CONTENT.find(c => c.id === activeChapterId) || HANDBOOK_CONTENT[0];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Try to save theme preference
    try {
      localStorage.setItem('c_handbook_theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      // Ignore storage errors
    }
  }, [darkMode]);

  // Persist progress
  useEffect(() => {
    try {
      localStorage.setItem('c_handbook_progress', JSON.stringify(completedSections));
    } catch (error) {
      // Ignore storage errors
    }
  }, [completedSections]);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSidebarOpen(false);
  }, [activeChapterId]);

  const toggleComplete = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const progress = Math.round((completedSections.length / HANDBOOK_CONTENT.reduce((acc, ch) => acc + ch.sections.length, 0)) * 100);

  return (
    <div className="min-h-screen bg-[#F0F0F0] dark:bg-[#121212] flex flex-col relative overflow-x-hidden">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white dark:bg-[#1e1e1e] border-b-4 border-black dark:border-white p-4 flex justify-between items-center sticky top-0 z-50 text-black dark:text-white">
        <h1 className="font-bold text-xl flex items-center gap-2">
          <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1">C</span> Handbook
        </h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-2 border-black dark:border-white">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation - Fixed on Desktop */}
      <aside className={`
        fixed top-0 left-0 h-screen w-[85%] md:w-80 bg-[#FFF4E0] dark:bg-[#1a1a1a] border-r-4 border-black dark:border-white z-40
        transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b-4 border-black dark:border-white bg-[#FF6B6B]">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-black text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase leading-none">
              Ultimate C<br/>Handbook
            </h1>
            <button onClick={() => setDarkMode(!darkMode)} className="hidden md:block p-1 bg-black text-white border-2 border-white hover:bg-gray-800">
               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <div className="mt-4 bg-black p-3 border-2 border-white">
            <div className="flex justify-between text-white text-xs font-mono mb-1">
              <span>PROGRESS</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2">
              <div 
                className="bg-[#6BCB77] h-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {HANDBOOK_CONTENT.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => setActiveChapterId(chapter.id)}
              className={`
                w-full text-left p-3 border-2 border-black dark:border-white font-bold transition-all text-sm relative group
                ${activeChapterId === chapter.id 
                  ? 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#fff] translate-x-[-2px] translate-y-[-2px] z-10' 
                  : 'bg-[#C4DBF6] hover:bg-white hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_#fff]'}
              `}
              style={{ backgroundColor: activeChapterId === chapter.id ? (darkMode ? '#1e1e1e' : 'white') : chapter.color, color: activeChapterId === chapter.id && darkMode ? 'white' : 'black' }}
            >
              <div className="flex justify-between items-center relative z-10">
                <span className="truncate pr-2">{chapter.title}</span>
                {activeChapterId === chapter.id && <ChevronRight size={18} className="shrink-0" />}
              </div>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t-4 border-black dark:border-white text-xs font-mono text-center bg-white dark:bg-[#1a1a1a] dark:text-white">
          By Rishav Verma<br/>Study Page
        </div>
      </aside>

      {/* Main Content Area - Added margin-left for desktop to accommodate fixed sidebar */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full md:ml-80">
        <NeoCard className="mb-8" bgColor="bg-white">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-black dark:border-white pb-6 mb-6">
              <div>
                <span className="font-mono text-sm font-bold bg-black text-white px-2 py-1 mb-2 inline-block">
                  CURRENT CHAPTER
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase text-black dark:text-white">
                  {activeChapter.title}
                </h2>
              </div>
              <div className="hidden md:block dark:text-white">
                 <BookOpen size={48} strokeWidth={1.5} />
              </div>
           </div>

           <div className="space-y-12">
             {activeChapter.sections.map((section: Section) => (
               <div key={section.id} id={section.id} className="scroll-mt-24">
                 <div className={`
                    border-4 border-black dark:border-white p-6 md:p-8 relative
                    ${section.isPracticeSet ? 'bg-[#ff9f1c]/20 dark:bg-[#ff9f1c]/10' : 'bg-transparent'}
                 `}>
                   {/* Section Title Decoration */}
                   <div className="absolute -top-5 left-4 md:left-8 bg-black text-white px-4 py-2 font-mono font-bold border-2 border-[#FFD93D] shadow-[4px_4px_0px_0px_#FFD93D]">
                     {section.title}
                   </div>
                   
                   <div className="mt-4">
                     {section.content.map((block, idx) => (
                       <ContentRenderer key={idx} block={block} />
                     ))}
                   </div>

                   {/* Completion Toggle */}
                   <div className="mt-8 flex justify-end">
                      <button 
                        onClick={() => toggleComplete(section.id)}
                        className={`
                          flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white font-bold text-sm transition-all
                          ${completedSections.includes(section.id) 
                            ? 'bg-[#6BCB77] text-black shadow-none translate-y-1' 
                            : 'bg-gray-100 dark:bg-[#2a2a2a] dark:text-white hover:bg-white dark:hover:bg-[#333] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_#fff]'}
                        `}
                      >
                        {completedSections.includes(section.id) ? (
                          <>
                            <CheckSquare size={18} />
                            COMPLETED
                          </>
                        ) : (
                          <>
                            <div className="w-4 h-4 border-2 border-black dark:border-white"></div>
                            MARK AS DONE
                          </>
                        )}
                      </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </NeoCard>

        {/* Footer Navigation */}
        <div className="flex justify-between mt-8 pb-12">
           <NeoButton 
             variant="secondary"
             onClick={() => {
                const idx = HANDBOOK_CONTENT.findIndex(c => c.id === activeChapterId);
                if (idx > 0) setActiveChapterId(HANDBOOK_CONTENT[idx - 1].id);
             }}
             disabled={HANDBOOK_CONTENT.findIndex(c => c.id === activeChapterId) === 0}
             className="disabled:opacity-50 disabled:cursor-not-allowed"
           >
             Previous
           </NeoButton>
           
           <NeoButton 
             onClick={() => {
                const idx = HANDBOOK_CONTENT.findIndex(c => c.id === activeChapterId);
                if (idx < HANDBOOK_CONTENT.length - 1) setActiveChapterId(HANDBOOK_CONTENT[idx + 1].id);
             }}
             disabled={HANDBOOK_CONTENT.findIndex(c => c.id === activeChapterId) === HANDBOOK_CONTENT.length - 1}
             className="disabled:opacity-50 disabled:cursor-not-allowed"
           >
             Next Chapter
           </NeoButton>
        </div>
      </main>

    </div>
  );
};

export default App;