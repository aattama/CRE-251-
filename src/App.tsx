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

type AppState = 'QUIZ' | 'RESULT';

export default function App() {
  const [screen, setScreen] = useState<AppState>('QUIZ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [id: string]: number }>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

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
    if (window.confirm("Are you sure you want to submit your exam now?")) {
      setScreen('RESULT');
    }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Examination Finished</h1>
          <div className="p-8 bg-blue-50 border border-blue-200 mb-8">
            <p className="text-sm uppercase tracking-widest text-blue-600 font-bold mb-2">Final Score</p>
            <p className="text-7xl font-black text-blue-900">{score} / {QUESTIONS.length}</p>
            <p className="text-xl mt-4 font-medium text-blue-800">
              {Math.round((score / QUESTIONS.length) * 100)}% Accuracy
            </p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-black transition-all"
          >
            Restart Exam
          </button>
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
            <h1 className="text-lg font-bold leading-none">Robotics Programming I</h1>
            <p className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-tighter">Official Examination Portal</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-none">Time Remaining</span>
            <div className="flex items-center gap-2 text-2xl font-mono font-medium text-blue-700">
              <Timer size={22} />
              {formatTime(timeLeft)}
            </div>
          </div>
          <button 
            onClick={submitQuiz}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow transition-all uppercase text-sm tracking-widest"
          >
            <Send size={16} />
            Submit
          </button>
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

          <div className="bg-white border-2 border-gray-200 shadow-sm p-8 min-h-[500px] flex flex-col">
            <p className="text-2xl font-medium text-gray-800 leading-relaxed mb-12">
              {currentQuestion.question}
            </p>

            <div className="space-y-4 flex-1">
              {currentQuestion.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: i }))}
                  className={cn(
                    "w-full p-5 text-left transition-all border-2 flex items-center gap-5",
                    userAnswers[currentQuestion.id] === i
                      ? "bg-blue-50 border-blue-600 ring-4 ring-blue-50"
                      : "bg-white border-gray-100 hover:border-blue-400"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 flex items-center justify-center font-bold text-lg rounded-full transition-colors",
                    userAnswers[currentQuestion.id] === i
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  )}>
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className={cn(
                    "text-lg",
                    userAnswers[currentQuestion.id] === i ? "font-bold text-blue-900" : "font-medium text-gray-700"
                  )}>
                    {opt}
                  </span>
                </button>
              ))}
            </div>

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
                <button 
                  onClick={() => {
                    if (currentIndex < QUESTIONS.length - 1) {
                      setCurrentIndex(prev => prev + 1);
                    } else {
                      submitQuiz();
                    }
                  }}
                  className="flex items-center gap-3 px-12 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest hover:bg-black transition-all"
                >
                  {currentIndex === QUESTIONS.length - 1 ? 'Final Submit' : 'Next'}
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
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                {Object.keys(userAnswers).length} / {QUESTIONS.length} Answered
              </span>
            </div>
            
            <div className="grid grid-cols-6 gap-2 overflow-y-auto pr-2 custom-scrollbar">
              {QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  id={`nav-q-${i}`}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "aspect-square flex items-center justify-center font-mono text-[11px] font-bold border transition-all",
                    currentIndex === i 
                      ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600 ring-inset" 
                      : userAnswers[q.id] !== undefined
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-100 text-gray-400 hover:border-gray-400"
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                <div className="w-3 h-3 bg-blue-600" /> Answered
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                <div className="w-3 h-3 bg-white border border-gray-300" /> Unanswered
              </div>
              <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-gray-500">
                <div className="w-3 h-3 bg-blue-50 border border-blue-600" /> Current
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
