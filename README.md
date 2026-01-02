# Art Portfolio Website

A minimal, calm, gallery-like portfolio website for showcasing still images and short films. Built with plain HTML, CSS, and JavaScript. Mobile-first design optimized for viewing on phones.

## Features

- **Minimal Design**: Clean, gallery-like aesthetic that reduces user anxiety
- **Mobile-First**: Optimized for viewing on mobile devices
- **Image Gallery**: Lightbox view for browsing artwork
- **Video Embeds**: Short films embedded from external hosting (YouTube/Vimeo)
- **No Backend Required**: Static site deployable on GitHub Pages
- **Lazy Loading**: Images and videos load efficiently to save bandwidth

## Video Architecture

This portfolio uses **external video hosting** (YouTube or Vimeo) with embedded iframes. This approach:

- ✅ Avoids storing large video files in the GitHub repository
- ✅ Leverages CDN delivery for fast loading
- ✅ Reduces bandwidth usage on your repository
- ✅ Provides professional video player features
- ✅ Works seamlessly on mobile devices

Videos are lazy-loaded (only load when scrolled into view) to optimize mobile performance.

## Setup Instructions

### 1. Add Your Images

1. Create an `images/` folder in the project root
2. Add your artwork images to this folder
3. Update the image paths in `index.html` (look for the `<!-- REPLACE THESE PLACEHOLDER IMAGES -->` comment)

### 2. Add Your Videos

1. Upload your short films to YouTube or Vimeo
2. Get the embed URL from the video platform:
   - **YouTube**: Right-click video → Copy embed code → Extract the `src` URL
   - **Vimeo**: Click Share → Embed → Copy the `src` URL
3. Replace the placeholder iframe `src` attributes in `index.html` (look for the `<!-- REPLACE THESE PLACEHOLDER EMBEDS -->` comment)
4. Update the film titles and descriptions

### 3. Customize Content

- Update the artist name in the hero section
- Replace the placeholder artist statement in the About section
- Update the footer copyright text

### 4. Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select the folder (usually `/root`)
5. Your site will be live at `https://yourusername.github.io/repository-name/`

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
├── images/         # Your artwork images (create this folder)
└── README.md       # This file
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Notes

- All placeholder content is clearly marked in comments
- The design is intentionally minimal to reduce visual clutter
- Touch gestures are supported for mobile navigation
- Videos use lazy loading to optimize mobile performance

