import React, { useState } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const MobileCTA = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-1"
          >
            <a 
              href={t.contact.githubUrl}
              target="_blank" 
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-foreground border border-card-border shadow-lg hover:bg-accent hover:text-background hover:border-accent transition-all"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href={t.contact.linkedinUrl}
              target="_blank" 
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-foreground border border-card-border shadow-lg hover:bg-accent hover:text-background hover:border-accent transition-all"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href={`mailto:${t.contact.email}`}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-foreground border border-card-border shadow-lg hover:bg-accent hover:text-background hover:border-accent transition-all"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={toggleMenu}
        className={`flex h-16 w-16 items-center justify-center rounded-full text-background shadow-lg shadow-accent/20 transition-all ${
          isOpen ? 'bg-muted-foreground rotate-90' : 'bg-accent hover:scale-110 active:scale-95 animate-bounce-slow'
        }`}
        aria-label="Toggle contact menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
        </motion.div>
      </button>
    </div>
  );
};

export default MobileCTA;
