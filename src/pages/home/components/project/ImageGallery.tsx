import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setDirection(-1);
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setDirection(1);
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="mb-8">
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-on-primary/10 via-on-primary/5 to-transparent mb-8" />

      <h3 className="text-heading-m font-bold text-on-primary mb-5 tracking-tight">
        Gallery
      </h3>

      {/* Image Container */}
      <div className="relative bg-secondary/5 rounded-lg overflow-hidden border border-secondary/10">
        <div className="relative aspect-video">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentImageIndex}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>
        </div>

        {/* Image Navigation Controls */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevImage}
              disabled={currentImageIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                currentImageIndex === 0
                  ? "bg-on-primary/5 text-on-primary/20 cursor-not-allowed"
                  : "bg-on-primary/20 text-on-primary/80 hover:bg-on-primary/30 hover:text-on-primary"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={handleNextImage}
              disabled={currentImageIndex === images.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                currentImageIndex === images.length - 1
                  ? "bg-on-primary/5 text-on-primary/20 cursor-not-allowed"
                  : "bg-on-primary/20 text-on-primary/80 hover:bg-on-primary/30 hover:text-on-primary"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-on-primary/80 backdrop-blur-sm rounded-full">
              <span className="text-caption text-primary font-mono tracking-wider">
                <span className="font-semibold">
                  {String(currentImageIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 opacity-60">/</span>
                <span className="opacity-80">
                  {String(images.length).padStart(2, "0")}
                </span>
              </span>
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Pagination (if multiple images) */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-secondary/10 [&::-webkit-scrollbar-thumb]:bg-on-primary/20 [&::-webkit-scrollbar-thumb]:rounded-full">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentImageIndex ? 1 : -1);
                setCurrentImageIndex(index);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                currentImageIndex === index
                  ? "border-on-primary shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                  : "border-secondary/20 hover:border-on-primary/40"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
