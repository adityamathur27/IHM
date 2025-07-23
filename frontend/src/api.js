// API utility for gallery endpoints
export async function getGallery() {
  const res = await fetch('/api/gallery');
  if (!res.ok) throw new Error('Failed to fetch gallery');
  return res.json();
}

export async function addGalleryImage(image) {
  const res = await fetch('/api/gallery', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(image)
  });
  if (!res.ok) throw new Error('Failed to add image');
  return res.json();
}
