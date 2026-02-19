import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Calendar, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  type: 'video' | 'image' | 'promotion' | 'event';
  media_url: string;
  thumbnail_url?: string;
  display_order: number;
}

const typeIcons = {
  video: Play,
  image: ImageIcon,
  promotion: Tag,
  event: Calendar,
};

const typeLabels = {
  video: 'Video',
  image: 'Gallery',
  promotion: 'Promotion',
  event: 'Event',
};

// Fallback gallery items when Supabase isn't connected
const fallbackItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Holiday Promotion',
    description: 'Get 40% off all challenges this holiday season with code SNOW40',
    type: 'promotion',
    media_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800',
    thumbnail_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
    display_order: 1,
  },
  {
    id: '2',
    title: 'Trading Webinar',
    description: 'Join our weekly trading education sessions',
    type: 'event',
    media_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    display_order: 2,
  },
  {
    id: '3',
    title: 'Market Analysis',
    description: 'Daily market insights from our expert traders',
    type: 'video',
    media_url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800',
    thumbnail_url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400',
    display_order: 3,
  },
  {
    id: '4',
    title: 'Trader Spotlight',
    description: 'Success stories from our funded traders',
    type: 'image',
    media_url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800',
    thumbnail_url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400',
    display_order: 4,
  },
];

export default function LiveGallery() {
  const [items, setItems] = useState<GalleryItem[]>(fallbackItems);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    loadAllItems();
  }, []);

  const loadAllItems = async () => {
    if (!supabase) {
      return;
    }

    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        setItems(data);
      }
      // If no data, keep using fallback items
    } catch (error) {
      console.error('Error loading gallery items:', error);
      // Keep using fallback items on error
    }
  };

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/98 to-black"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent"
            >
              Live Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Promotions, events, success stories, and more
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -100 * items.length / 3]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: items.length * 8,
                    ease: "linear"
                  }
                }}
                className="flex gap-6"
              >
                {duplicatedItems.map((item, index) => {
                  const Icon = typeIcons[item.type];
                  return (
                    <motion.div
                      key={`${item.id}-${index}`}
                      whileHover={{ y: -8, scale: 1.05 }}
                      onClick={() => setSelectedItem(item)}
                      className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 flex-shrink-0 w-[400px]"
                      style={{ willChange: 'transform' }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                        <img
                          src={item.thumbnail_url || item.media_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-4 left-4 z-10">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                            <Icon className="w-4 h-4 text-gold" />
                            <span className="text-white text-xs font-medium">{typeLabels[item.type]}</span>
                          </div>
                        </div>

                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center"
                            >
                              <Play className="w-8 h-8 text-dark ml-1" fill="currentColor" />
                            </motion.div>
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                          <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-300 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-dark rounded-2xl overflow-hidden border border-gold/30"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
            >
              <span className="text-2xl">×</span>
            </button>

            <div className="absolute top-4 left-4 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                {(() => {
                  const Icon = typeIcons[selectedItem.type];
                  return <Icon className="w-5 h-5 text-gold" />;
                })()}
                <span className="text-white text-sm font-medium">{typeLabels[selectedItem.type]}</span>
              </div>
            </div>

            {selectedItem.type === 'video' ? (
              <video
                src={selectedItem.media_url}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex items-center justify-center p-8">
                <img
                  src={selectedItem.media_url}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
              <h3 className="text-white font-bold text-2xl mb-2">{selectedItem.title}</h3>
              {selectedItem.description && (
                <p className="text-gray-400 text-base">{selectedItem.description}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
