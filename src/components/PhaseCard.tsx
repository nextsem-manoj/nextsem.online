import React from 'react';

interface PhaseCardProps {
  phase: {
    id: string;
    title: string;
    duration: string;
    color: string;
    icon: string;
    topics: string[];
  };
  onClick: () => void;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, onClick }) => {
  return (
    <div 
      className="flex flex-col min-w-[160px] max-w-[180px] w-full border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group bg-white dark:bg-slate-800 h-full relative z-10 backdrop-blur-md bg-opacity-90 dark:bg-opacity-80"
      style={{ boxShadow: `0 4px 6px -1px ${phase.color.replace('bg-[', '').replace(']', '')}20` }}
      onClick={onClick}
    >
      {/* Top Colored Header */}
      <div className={`${phase.color} text-white flex flex-col items-center justify-center p-4 min-h-[140px] relative overflow-hidden`}>
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-[-20deg]"></div>

        <div className="font-black text-xl mb-1 drop-shadow-md z-10">{phase.id}</div>
        <div className="text-center font-bold text-sm tracking-wide leading-tight px-2 z-10 drop-shadow-sm">{phase.title}</div>
        
        {/* Icon placeholder (using text as icon from data) */}
        <div className="mt-4 bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/40 text-2xl font-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-300 z-10">
          {phase.icon}
        </div>
      </div>

      {/* Topics List */}
      <div className="p-3 flex-1 flex flex-col bg-white dark:bg-slate-800">
        <ul className="space-y-2 flex-1">
          {phase.topics.map((topic, idx) => (
            <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 font-medium text-center border-b border-gray-100 pb-1 last:border-0">
              {topic}
            </li>
          ))}
        </ul>

        {/* Duration Pill */}
        <div className="mt-4 pt-3 flex justify-center">
          <div className="bg-[#f0f9ff] text-[#2980b9] text-[10px] font-bold px-3 py-1 rounded-full border border-[#2980b9]/30">
            Duration<br/>
            <span className="text-xs">{phase.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Connection dot (for the timeline below) */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: 'currentColor' }}></div>
    </div>
  );
};

export default PhaseCard;
