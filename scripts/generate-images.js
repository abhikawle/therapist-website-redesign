const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  {
    name: 'hero.jpg',
    dir: 'public/images',
    width: 1200,
    height: 900,
    color: '#e6f7ff',
    text: 'Hero Image',
  },
  {
    name: 'office1.jpg',
    dir: 'public/images',
    width: 800,
    height: 800,
    color: '#fff7ed',
    text: 'Office Photo',
  },
  {
    name: 'service1.jpg',
    dir: 'public/images',
    width: 600,
    height: 400,
    color: '#ecfdf5',
    text: 'Service Image',
  },
];

async function generateImages() {
  for (const img of images) {
    const dir = path.join(__dirname, `../${img.dir}`);
    const filePath = path.join(dir, img.name);

    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create SVG placeholder
    const svg = `
      <svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${img.color}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
              font-family="Inter, sans-serif" font-size="48" fill="#0369a1" font-weight="600">
          ${img.text}
        </text>
      </svg>
    `;

    // Convert SVG to JPG
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 80 })
      .toFile(filePath);

    console.log(`✓ Created ${filePath}`);
  }
}

generateImages()
  .then(() => console.log('\n✓ All images generated successfully!'))
  .catch((err) => console.error('Error generating images:', err));
