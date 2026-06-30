"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProgressContextType {
  completedChapters: Record<string, boolean>;
  markCompleted: (chapterId: string) => void;
  markIncomplete: (chapterId: string) => void;
  totalCompleted: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedChapters, setCompletedChapters] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const savedProgress = localStorage.getItem('nextsem-progress');
    if (savedProgress) {
      try {
        setCompletedChapters(JSON.parse(savedProgress));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Save to localStorage when state changes
    if (isLoaded) {
      localStorage.setItem('nextsem-progress', JSON.stringify(completedChapters));
    }
  }, [completedChapters, isLoaded]);

  const markCompleted = (chapterId: string) => {
    setCompletedChapters((prev) => ({ ...prev, [chapterId]: true }));
  };

  const markIncomplete = (chapterId: string) => {
    setCompletedChapters((prev) => {
      const newState = { ...prev };
      delete newState[chapterId];
      return newState;
    });
  };

  const totalCompleted = Object.values(completedChapters).filter(Boolean).length;

  return (
    <ProgressContext.Provider value={{ completedChapters, markCompleted, markIncomplete, totalCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
