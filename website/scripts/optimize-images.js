import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');

const images = [
  { name: 'precisionmowing.jpg', width: 1200, height: 800 },
  { name: 'landscaping.jpg', width: 800, height: 1000 },
  { name: 'mulching.jpg', width: 800, height: 600 },
  { name: 'snowremoval.jpg', width: 1000, height: 600 }
];

async function optimizeImages() {
  console.log('🖼️  Optimizing gallery images...\n');

  const fs = await import('fs');

  for (const img of images) {
    const inputPath = join(publicDir, img.name);
    const tempPath = join(publicDir, 'temp-' + img.name);
    const outputPath = join(publicDir, img.name);

    try {
      // Optimize and save to temp file
      const info = await sharp(inputPath)
        .resize(img.width, img.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(tempPath);

      // Replace original with optimized
      fs.unlinkSync(outputPath);
      fs.renameSync(tempPath, outputPath);

      console.log(`✅ ${img.name}`);
      console.log(`   Size: ${(info.size / 1024).toFixed(2)} KB`);
      console.log(`   Dimensions: ${info.width}x${info.height}\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${img.name}:`, error.message);
      // Clean up temp file if it exists
      try {
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      } catch {}
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
