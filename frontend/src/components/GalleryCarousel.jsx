import React, { useState, useEffect } from "react";
import "./GalleryCarousel.css";

// Auto-import all images from a folder
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../assets/images/photo galary", false, /\.(png|jpe?g|svg)$/)
);

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // --- Auto slideshow (advance by image) ---
  useEffect(() => {
    if (!lightboxOpen) {
      const timer = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [lightboxOpen, currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // --- Pagination (jump by page) ---
  const currentPage = Math.floor(currentIndex / imagesPerPage);
  const goToPage = (page) => {
    const clamped = Math.max(0, Math.min(page, totalPages - 1));
    setCurrentIndex(clamped * imagesPerPage);
  };
  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  // Images for current view (4 at a time)
  const currentImages = [];
  for (let i = 0; i < imagesPerPage; i++) {
    currentImages.push(images[(currentIndex + i) % images.length]);
  }

  // Lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <button className="nav-btn left" onClick={prevImage} aria-label="Previous image">
          &#10094;
        </button>

        <div className="gallery-grid">
          {currentImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="gallery-thumb"
                onClick={() => openLightbox((currentIndex + index) % images.length)}
              />
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={nextImage} aria-label="Next image">
          &#10095;
        </button>
      </div>

      {/* Divider line like your screenshot */}
      <div className="pagination-sep" />

      {/* Beautiful numeric pagination */}
      <div className="pagination-bar">
        <button
          className="pager"
          onClick={prevPage}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`page ${i === currentPage ? "active" : ""}`}
            onClick={() => goToPage(i)}
            aria-label={`Go to page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pager"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          aria-label="Next page"
        >
          Next
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <span className="close" onClick={closeLightbox} aria-label="Close">&times;</span>
          <button className="prev" onClick={prevImage} aria-label="Previous">&#10094;</button>
          <img src={images[currentIndex]} alt="Full view" className="lightbox-img" />
          <button className="next" onClick={nextImage} aria-label="Next">&#10095;</button>
        </div>
      )}
    </div>
  );
}
