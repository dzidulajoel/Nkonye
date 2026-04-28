// generate-icons.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [192, 512];
const inputIcon = 'source-icon.png'; // Ton icône source (minimum 512x512)
const outputDir = 'public/icons';

// Créer le dossier si nécessaire
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach((size) => {
  sharp(inputIcon)
    .resize(size, size)
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`))
    .then(() => console.log(`✓ Generated ${size}x${size}`))
    .catch((err) => console.error(`✗ Error generating ${size}x${size}:`, err));
});

// Apple Touch Icon (180x180)
sharp(inputIcon)
  .resize(180, 180)
  .toFile(path.join(outputDir, 'apple-touch-icon.png'))
  .then(() => console.log('✓ Generated Apple Touch Icon'))
  .catch((err) => console.error('✗ Error generating Apple icon:', err));