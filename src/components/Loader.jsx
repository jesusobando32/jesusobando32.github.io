import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-card-border opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent animate-spin"></div>
        </div>
        <p className="font-mono text-sm text-accent tracking-widest animate-pulse">
          INITIALIZING_SYSTEM...
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;
