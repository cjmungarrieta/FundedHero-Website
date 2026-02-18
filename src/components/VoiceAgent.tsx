import { motion } from 'framer-motion';
import { Mic, Sparkles } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

// ElevenLabs Agent ID
const ELEVENLABS_AGENT_ID = 'agent_8901k9fvz0g0fy68sgbavzhbsa0w';

export default function VoiceAgent() {
  const [pulseActive, setPulseActive] = useState(false);
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Start pulse animation on mount for visual appeal
    setPulseActive(true);
    
    // Load ElevenLabs widget script on mount
    if (!document.querySelector('script[src*="elevenlabs.io/convai-widget"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.onload = () => {
        // Wait a bit for the widget to initialize
        setTimeout(() => setIsWidgetReady(true), 1000);
      };
      document.body.appendChild(script);
    } else {
      setIsWidgetReady(true);
    }
  }, []);

  // Create widget element when mic is clicked
  const handleMicClick = useCallback(() => {
    if (isActive) return; // Already active
    
    setIsActive(true);
    
    // Check if widget already exists
    let widget = document.querySelector('elevenlabs-convai');
    
    if (!widget) {
      // Create the widget element
      widget = document.createElement('elevenlabs-convai');
      widget.setAttribute('agent-id', ELEVENLABS_AGENT_ID);
      document.body.appendChild(widget);
    }
    
    // Try to trigger the widget to open/start conversation
    // The widget should auto-start when added to DOM
    setTimeout(() => {
      // Try to click the widget button if it exists
      const widgetRoot = document.querySelector('elevenlabs-convai');
      if (widgetRoot?.shadowRoot) {
        const button = widgetRoot.shadowRoot.querySelector('button');
        if (button) {
          button.click();
        }
      }
    }, 500);
  }, [isActive]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Dark gradient background matching site theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card to-dark"></div>
      
      {/* Gold aurora/glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 200, 0, 0.15) 0%, rgba(255, 200, 0, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 right-0 h-[300px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 200, 0, 0.08), rgba(255, 215, 0, 0.05), rgba(255, 200, 0, 0.08), transparent)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">AI Voice Assistant</span>
          </motion.div>

          {/* Microphone button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-8"
          >
            {/* Outer rings with gold theme */}
            <motion.div
              animate={pulseActive ? {
                scale: [1, 1.6, 1],
                opacity: [0.4, 0, 0.4],
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-gold/40"
              style={{ margin: '-25px' }}
            />
            <motion.div
              animate={pulseActive ? {
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
              className="absolute inset-0 rounded-full border border-gold/25"
              style={{ margin: '-50px' }}
            />

            {/* Main button */}
            <motion.button
              onClick={handleMicClick}
              whileHover={{ scale: 1.08, boxShadow: '0 0 80px rgba(255, 200, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                isActive 
                  ? 'bg-gradient-to-br from-gold to-gold-light shadow-[0_0_60px_rgba(255,200,0,0.5)]' 
                  : 'bg-gradient-to-br from-gold/20 to-gold-light/10 border-2 border-gold/50 hover:border-gold/80 shadow-[0_0_40px_rgba(255,200,0,0.15)]'
              }`}
            >
              {/* Inner glow ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/20 via-transparent to-gold/10"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <Mic className={`w-10 h-10 md:w-14 md:h-14 ${isActive ? 'text-black' : 'text-gold'} relative z-10 drop-shadow-lg`} />

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gold/30"
                />
              )}
            </motion.button>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Still have questions? </span>
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">Ask Propi!</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg flex items-center justify-center gap-2 flex-wrap">
              Tap the <span className="inline-flex items-center gap-1 text-gold"><Mic className="w-4 h-4" /> mic</span> for instant answers in <span className="text-white font-medium">32 languages</span>
            </p>
            {isActive && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold mt-4 text-sm"
              >
                ✨ Voice assistant is active! Speak your question now.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
