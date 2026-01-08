import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, RotateCw, Lightbulb, List, FileText } from 'lucide-react';
import { flashcardsData } from './data';
import { Category } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Flattening data logic remains simple
  const filteredCards = useMemo(() => {
    return activeCategory === 'All' 
      ? flashcardsData 
      : flashcardsData.filter(c => c.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }, 150);
  }, [filteredCards.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); 
        handleFlip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleFlip]);

  const currentCard = filteredCards[currentIndex];
  const progress = filteredCards.length > 0 ? ((currentIndex + 1) / filteredCards.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-gray-900 font-sans flex flex-col">
      {/* Notion-style minimal header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white p-1 rounded-md">
              <BookOpen className="w-4 h-4" />
            </div>
            <h1 className="text-sm font-semibold tracking-wide">QM FLASHCARDS</h1>
          </div>
          <div className="text-xs font-mono text-gray-400">
            {filteredCards.length > 0 ? `${currentIndex + 1} / ${filteredCards.length}` : '0 / 0'}
          </div>
        </div>
        <div className="h-0.5 w-full bg-gray-100">
          <div 
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto p-4 flex flex-col items-center">
        
        {/* Category Tabs - Notion style pills */}
        <div className="w-full mb-6 overflow-x-auto pb-2 custom-scrollbar">
          <div className="flex space-x-2 sm:justify-center px-1">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeCategory === 'All' 
                  ? 'bg-black text-white shadow-sm' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              全部
            </button>
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-sm' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Card Area */}
        <div className="w-full flex-1 flex flex-col justify-start min-h-[500px] mb-24 relative perspective-1000">
          
          {filteredCards.length > 0 ? (
            <div 
              className={`relative w-full h-[60vh] min-h-[480px] cursor-pointer transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={handleFlip}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 flex flex-col backface-hidden p-6 md:p-10 items-center justify-center text-center">
                <span className="mb-6 inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-gray-100 text-gray-500 tracking-wider uppercase border border-gray-200">
                  {currentCard.category}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug tracking-tight">
                  {currentCard.question}
                </h2>
                
                <div className="mt-8 text-xs text-gray-400 font-mono flex items-center gap-1 opacity-60">
                  <RotateCw className="w-3 h-3" /> 点击翻转查看答案
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 flex flex-col backface-hidden rotate-y-180 text-left overflow-hidden">
                <div className="w-full h-full overflow-y-auto custom-scrollbar p-6 md:p-8">
                  
                  {/* Answer Section */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">答案 Answer</h3>
                    <div className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
                      {currentCard.answer}
                    </div>
                  </div>

                  <hr className="border-gray-100 my-4" />

                  {/* Memory Tip Section */}
                  {currentCard.memory && (
                    <div className="mb-6">
                      <div className="bg-gray-50 border-l-4 border-black p-4 rounded-r-sm">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                          <Lightbulb className="w-4 h-4" /> 技巧与记忆
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed">
                          {currentCard.memory}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Supplementary Section */}
                  {currentCard.supplementary && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                         <FileText className="w-3 h-3" /> 补充内容
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed bg-white">
                        {currentCard.supplementary}
                      </div>
                    </div>
                  )}
                  
                  {/* Bottom Spacer */}
                  <div className="h-8"></div>
                </div>
              </div>
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <List className="w-12 h-12 mb-2 opacity-20" />
                <p>该分类下暂无卡片</p>
             </div>
          )}

        </div>

        {/* Fixed Bottom Controls */}
        <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-6 px-4 z-30">
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 active:scale-95 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="w-14 h-14 rounded-full bg-black text-white shadow-lg flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </main>
    </div>
  );
}

export default App;