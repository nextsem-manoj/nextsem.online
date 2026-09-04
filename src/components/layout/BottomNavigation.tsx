"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";
import { 
  Home, 
  BookOpen, 
  Terminal, 
  Menu, 
  X, 
  User, 
  Languages, 
  LogOut, 
  LogIn, 
  Sun, 
  Moon, 
  Sparkles,
  ChevronRight,
  Code,
  GraduationCap
} from "lucide-react";
import { usePWA } from '@/hooks/usePWA';
import { LANGUAGES, changeLanguage } from '@/components/TranslateWidget';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { Capacitor } from '@capacitor/core';

import LessonBottomNavigation from '@/components/layout/LessonBottomNavigation';

const BottomNavigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { isInstallable, installApp } = usePWA();
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; avatar: string; photo?: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNative, setIsNative] = useState(false);

  const [navVisible] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleFs = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener("fullscreenchange", handleFs);
      return () => document.removeEventListener("fullscreenchange", handleFs);
    }
  }, []);

  useEffect(() => {
    const native = Capacitor.isNativePlatform();
    setMounted(true);
    setIsNative(native);

    const checkAuth = () => {
      const saved = localStorage.getItem('nextsem_user');
      let userObj = null;
      if (saved) {
        try {
          userObj = JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
      setCurrentUser(userObj);
    };
    checkAuth();
    window.addEventListener("nextsem_auth_changed", checkAuth);
    return () => {
      window.removeEventListener("nextsem_auth_changed", checkAuth);
    };
  }, []);

  // Close menu drawer on route navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!mounted || isFullscreen) return null;
  if (pathname === '/simulator') return null;

  const isLessonRoute = Boolean(
    pathname && (
      pathname.startsWith('/html') ||
      pathname.startsWith('/css') ||
      pathname.startsWith('/js') ||
      pathname.startsWith('/javascript') ||
      pathname.startsWith('/react') ||
      pathname.startsWith('/nodejs') ||
      pathname.startsWith('/node') ||
      pathname.startsWith('/git') ||
      pathname.startsWith('/cli') ||
      pathname.startsWith('/cpp') ||
      pathname.startsWith('/c') ||
      pathname.startsWith('/msword') ||
      pathname.includes('/book/') ||
      pathname.startsWith('/bca/notes/') ||
      (pathname.startsWith('/bca/semester-') && (pathname.includes('/unit-') || pathname.includes('/lessons/')))
    )
  );

  if (isLessonRoute) {
    return <LessonBottomNavigation pathname={pathname} />;
  }

  return null;
};

export default BottomNavigation;

