"use client";

import { useState, useCallback } from "react";
import { Heart, Play, Loader2, Tv2 } from "lucide-react";
import { Capacitor } from "@capacitor/core";
import { useGamification } from "@/context/GamificationContext";
import { showRewardedAd } from "@/lib/admobHelper";

interface RewardedHeartButtonProps {
  /** Number of hearts to restore when reward is earned (default: 1) */
  heartsToRestore?: number;
  /** Show compact icon-only version */
  compact?: boolean;
  className?: string;
}

/**
 * RewardedHeartButton
 *
 * On native mobile: Shows an AdMob Rewarded Video ad and awards hearts on completion.
 * On web: Simulates the ad (shows a countdown) and awards hearts for free (dev/demo).
 */
export default function RewardedHeartButton({
  heartsToRestore = 1,
  compact = false,
  className = "",
}: RewardedHeartButtonProps) {
  const { hearts, maxHearts, gainHeart } = useGamification();
  const [loading, setLoading] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const isNative = Capacitor.isNativePlatform();
  const isFull = hearts >= maxHearts;

  // ── Web simulation: 5s countdown then reward ──────────────────────────────
  const simulateWebAd = useCallback(() => {
    setSimulating(true);
    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setSimulating(false);
          gainHeart(heartsToRestore);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [gainHeart, heartsToRestore]);

  // ── Native: show actual AdMob rewarded video ───────────────────────────────
  const showNativeAd = useCallback(async () => {
    setLoading(true);
    try {
      await showRewardedAd(
        () => gainHeart(heartsToRestore),
        () => setLoading(false)
      );
    } catch {
      setLoading(false);
    }
  }, [gainHeart, heartsToRestore]);

  const handleClick = useCallback(() => {
    if (isFull || loading || simulating) return;
    if (isNative) {
      showNativeAd();
    } else {
      simulateWebAd();
    }
  }, [isFull, loading, simulating, isNative, showNativeAd, simulateWebAd]);

  // ── Simulating state (web countdown) ──────────────────────────────────────
  if (simulating) {
    return (
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-slate-300 ${className}`}>
        <Tv2 size={16} className="text-violet-400 animate-pulse" />
        <span className="text-xs font-black">Ad ends in {countdown}s…</span>
        <div className="w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500 rounded-full transition-all duration-1000"
            style={{ width: `${((5 - countdown) / 5) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  // ── Hearts full ─────────────────────────────────────────────────────────
  if (isFull) {
    return (
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 cursor-default select-none ${className}`}>
        <Heart size={15} className="fill-emerald-400" />
        <span className="text-xs font-black">Hearts Full!</span>
      </div>
    );
  }

  // ── Default button ───────────────────────────────────────────────────────
  return (
    <button
      onClick={handleClick}
      disabled={loading}
      title={`Watch a short ad to restore ${heartsToRestore} heart${heartsToRestore > 1 ? "s" : ""}`}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-2xl border font-bold text-xs transition-all duration-200
        bg-rose-950/50 border-rose-500/30 text-rose-300
        hover:bg-rose-900/60 hover:border-rose-500/60 hover:text-rose-200
        active:scale-95 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${compact ? "px-2.5 py-2" : ""}
        ${className}`}
    >
      {loading ? (
        <>
          <Loader2 size={15} className="animate-spin" />
          {!compact && <span>Loading Ad…</span>}
        </>
      ) : (
        <>
          <Play size={13} className="fill-current" />
          {!compact && (
            <span>
              Watch Ad → +{heartsToRestore} <Heart size={12} className="inline fill-current -mt-0.5" />
            </span>
          )}
          {compact && <Heart size={13} className="fill-current" />}
        </>
      )}
    </button>
  );
}
