/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Send,
  Timer,
  LayoutGrid
} from 'lucide-react';
import { QUESTIONS, Question } from './data/questions';
import { cn } from './lib/utils';

type AppState = 'QUIZ' | 'RESULT' | 'REVIEW';

export default function App() {
  const [screen, setScreen] = useState<AppState>('QUIZ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [id: string]: number }>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  // Timer logic
  useEffect(() => {
    if (screen === 'QUIZ') {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setScreen('RESULT');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [screen]);

  const submitQuiz = () => {
    setScreen('RESULT');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQuestion = QUESTIONS[currentIndex];

  const score = QUESTIONS.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  if (screen === 'RESULT') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white border border-gray-300 shadow-md p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Examination Result</h1>
          <div className="p-8 bg-blue-50 border border-blue-200 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Authenticated Final Score</p>
            <p className="text-7xl font-black text-blue-900 font-mono">{score} / {QUESTIONS.length}</p>
            <div className="w-full h-3 bg-blue-200 mt-6 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600" 
                style={{ width: `${(score / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <p className="text-xl mt-4 font-medium text-blue-800">
              {Math.round((score / QUESTIONS.length) * 100)}% Proficiency Level
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setScreen('REVIEW');
                setCurrentIndex(0);
              }}
              className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              <LayoutGrid size={20} />
              Review Answers
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="flex-1 px-8 py-4 border-2 border-gray-900 font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased font-sans">
      {/* Header Bar */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white p-2 font-bold text-lg">CBT</div>
          <div>
            <h1 className="text-lg font-bold leading-none">Robotics Programming I (Technical)</h1>
            <p className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-tighter">
              {screen === 'REVIEW' ? 'POST-EXAM ANALYSIS MODE' : 'OFFICIAL EXAMINATION PORTAL'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          {screen === 'QUIZ' && (
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">Time Remaining</span>
              <div className="flex items-center gap-2 text-2xl font-mono font-medium text-blue-700">
                <Timer size={22} />
                {formatTime(timeLeft)}
              </div>
            </div>
          )}
          
          <div className="flex gap-3">
            {screen === 'REVIEW' && (
              <button 
                onClick={() => setScreen('RESULT')}
                className="px-6 py-2.5 border-2 border-gray-900 font-bold uppercase text-xs tracking-widest hover:bg-gray-50"
              >
                Back to Result
              </button>
            )}
            {screen === 'QUIZ' && (
              <button 
                onClick={submitQuiz}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow transition-all uppercase text-sm tracking-widest"
              >
                <Send size={16} />
                Submit Exam
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8 p-8">
        {/* Main Content Area */}
        <main className="space-y-6">
          <div className="flex justify-between items-end border-b-2 border-gray-200 pb-2">
            <div>
              <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">Section: {currentQuestion.category}</span>
              <h2 className="text-3xl font-bold flex items-baseline gap-3 mt-1">
                Question {currentIndex + 1}
                <span className="text-lg font-normal text-gray-400 italic">of {QUESTIONS.length}</span>
              </h2>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 shadow-sm p-8 min-h-[450px] flex flex-col relative overflow-hidden">
            {screen === 'REVIEW' && (
              <div className={cn(
                "absolute top-0 right-0 px-6 py-2 font-black uppercase text-xs tracking-[0.2em] text-white",
                userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? "bg-green-600" : "bg-red-600"
              )}>
                {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? "Correct" : "Incorrect"}
              </div>
            )}

            <p className="text-2xl font-medium text-gray-800 leading-relaxed mb-12">
              {currentQuestion.question}
            </p>

            <div className="space-y-4 flex-1">
              {currentQuestion.options.map((opt, i) => {
                const isSelected = userAnswers[currentQuestion.id] === i;
                const isCorrect = currentQuestion.correctAnswer === i;
                const showSuccess = screen === 'REVIEW' && isCorrect;
                const showFailure = screen === 'REVIEW' && isSelected && !isCorrect;

                return (
                  <button
                    key={i}
                    disabled={screen === 'REVIEW'}
                    onClick={() => setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: i }))}
                    className={cn(
                      "w-full p-4 text-left transition-all border-2 flex items-center gap-5",
                      isSelected && screen === 'QUIZ'
                        ? "bg-blue-50 border-blue-600 ring-4 ring-blue-50"
                        : "bg-white border-gray-100 hover:border-blue-400",
                      showSuccess ? "bg-green-50 border-green-600 ring-4 ring-green-100" : "",
                      showFailure ? "bg-red-50 border-red-600 ring-4 ring-red-100" : "",
                      screen === 'REVIEW' && !isCorrect && !isSelected ? "opacity-40" : ""
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 shrink-0 flex items-center justify-center font-bold text-lg rounded-full transition-colors",
                      isSelected && screen === 'QUIZ' ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400",
                      showSuccess ? "bg-green-600 text-white" : "",
                      showFailure ? "bg-red-600 text-white" : ""
                    )}>
                      {showSuccess ? <CheckCircle2 size={24} /> : String.fromCharCode(65 + i)}
                    </div>
                    <span className={cn(
                      "text-lg",
                      isSelected || showSuccess ? "font-bold text-gray-900" : "font-medium text-gray-700"
                    )}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation box during review */}
            {screen === 'REVIEW' && currentQuestion.explanation && (
              <div className="mt-8 p-4 bg-gray-100 border-l-4 border-blue-600">
                <p className="text-xs uppercase font-bold text-blue-800 mb-1 tracking-widest">Expert Insight</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between pt-8 border-t border-gray-100">
              <button 
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => prev - 1)}
                className="flex items-center gap-3 px-8 py-4 border-2 border-gray-900 font-bold uppercase tracking-widest hover:bg-gray-50 disabled:opacity-20 transition-all"
              >
                <ChevronLeft size={20} />
                Back
              </button>
              
              <div className="flex gap-4">
                {screen === 'QUIZ' && (
                  <button 
                    onClick={() => setUserAnswers(prev => {
                      const next = { ...prev };
                      delete next[currentQuestion.id];
                      return next;
                    })}
                    className="px-6 py-4 text-gray-500 font-bold uppercase text-sm hover:text-red-500 transition-colors"
                  >
                    Clear Choice
                  </button>
                )}
                <button 
                  onClick={() => {
                    if (currentIndex < QUESTIONS.length - 1) {
                      setCurrentIndex(prev => prev + 1);
                    } else if (screen === 'QUIZ') {
                      submitQuiz();
                    }
                  }}
                  className="flex items-center gap-3 px-12 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-black transition-all"
                >
                  {currentIndex === QUESTIONS.length - 1 
                    ? (screen === 'REVIEW' ? 'End Review' : 'Final Submit') 
                    : 'Next'}
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar Navigation */}
        <aside className="space-y-6">
          <div className="bg-white border border-gray-200 p-6 shadow-sm overflow-hidden flex flex-col max-h-[calc(100vh-140px)]">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <h3 className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-gray-400">
                <LayoutGrid size={14} /> Navigator
              </h3>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">
                {Object.keys(userAnswers).length} / {QUESTIONS.length} Ready
              </span>
            </div>
            
            <div className="grid grid-cols-6 gap-2 overflow-y-auto pr-2 custom-scrollbar">
              {QUESTIONS.map((q, i) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCorrectReview = screen === 'REVIEW' && userAnswers[q.id] === q.correctAnswer;
                const isWrongReview = screen === 'REVIEW' && isAnswered && userAnswers[q.id] !== q.correctAnswer;

                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "aspect-square flex items-center justify-center font-mono text-[11px] font-bold border transition-all",
                      currentIndex === i 
                        ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600 ring-inset" 
                        : isAnswered && screen === 'QUIZ'
                        ? "bg-blue-600 border-blue-600 text-white"
                        : screen === 'REVIEW' && isCorrectReview
                        ? "bg-green-600 border-green-600 text-white"
                        : screen === 'REVIEW' && isWrongReview
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-gray-100 text-gray-400 hover:border-gray-400"
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                <div className={cn("w-3 h-3", screen === 'REVIEW' ? "bg-green-600" : "bg-blue-600")} /> 
                {screen === 'REVIEW' ? 'Correct' : 'Answered'}
              </div>
              {screen === 'REVIEW' && (
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                  <div className="w-3 h-3 bg-red-600" /> Incorrect
                </div>
              )}
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                <div className="w-3 h-3 bg-white border border-gray-300" /> Unanswered
              </div>
            </div>
          </div>
        </aside>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      `}} />
    </div>
  );
}
