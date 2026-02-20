import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const certificates = [
  `${base}certificates_fundedhero5.png`,
  `${base}certificates_fundedhero6 copy copy copy.png`,
  `${base}certificates_fundedhero7 copy.png`,
  `${base}certificates_fundedhero8 copy copy copy.png`,
  `${base}certificates_fundedhero9.png`,
  `${base}certificates_fundedhero10.png`,
  `${base}certificates_fundedhero7 copy copy.png`,
  `${base}certificates_fundedhero9 copy.png`,
  `${base}certificates_fundedhero10 copy.png`,
  `${base}certificates_fundedhero6 copy.png`,
];

export default function CertificateCarousel() {
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-dark to-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trader Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real payouts from real traders
          </p>
        </motion.div>
      </div>

      <div className="relative w-full group/carousel">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            className="flex gap-6 animate-scroll group-hover/carousel:[animation-play-state:paused]"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedCertificates.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={src}
                    alt={`Trader payout certificate ${(idx % certificates.length) + 1}`}
                    className="w-full h-auto rounded-xl border border-white/10 group-hover:border-gold/50 transition-all duration-300 shadow-lg group-hover:shadow-gold/20 hover-scale-subtle"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
