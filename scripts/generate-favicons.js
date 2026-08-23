const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/images/inanvnpis-logo.png');
  console.log('Loading logo from:', logoPath);

  const { data, info } = await sharp(logoPath).raw().toBuffer({ resolveWithObject: true });

  // Bounding box of left symbol mark in inanvnpis-logo.png
  const minX = 10, minY = 9, maxX = 129, maxY = 127;
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  // Extract raw pixels for crop region
  const croppedData = Buffer.alloc(cropW * cropH * 4);
  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const srcIdx = ((minY + y) * info.width + (minX + x)) * info.channels;
      const dstIdx = (y * cropW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      // Convert white background pixels to transparent with smooth anti-aliased edge blending
      const diffR = 255 - r;
      const diffG = 255 - g;
      const diffB = 255 - b;
      const maxDiff = Math.max(diffR, diffG, diffB);

      let alpha = 255;
      if (maxDiff < 8) {
        alpha = 0;
      } else if (maxDiff < 35) {
        alpha = Math.round((maxDiff / 35) * 255);
      }

      croppedData[dstIdx] = r;
      croppedData[dstIdx + 1] = g;
      croppedData[dstIdx + 2] = b;
      croppedData[dstIdx + 3] = alpha;
    }
  }

  const croppedImage = sharp(croppedData, {
    raw: { width: cropW, height: cropH, channels: 4 }
  });

  // Helper to create square canvas icon with padding
  async function createSquareIcon(size, paddingPercent = 0.1) {
    const iconSize = Math.round(size * (1 - paddingPercent * 2));
    const resizedSymbol = await croppedImage
      .resize(iconSize, iconSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    return await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([{
      input: resizedSymbol,
      top: Math.round((size - iconSize) / 2),
      left: Math.round((size - iconSize) / 2)
    }])
    .png()
    .toBuffer();
  }

  // Generate PNG icons
  const icon512 = await createSquareIcon(512, 0.08);
  const icon180 = await createSquareIcon(180, 0.08);
  const icon48 = await createSquareIcon(48, 0.05);
  const icon32 = await createSquareIcon(32, 0.05);

  // Helper to create ICO file from 32x32 PNG
  function createIco(pngBuffer, size = 32) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // Type 1 = ICO
    header.writeUInt16LE(1, 4); // 1 Image count

    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0); // Width
    entry.writeUInt8(size, 1); // Height
    entry.writeUInt8(0, 2); // Color count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(pngBuffer.length, 8); // Size
    entry.writeUInt32LE(22, 12); // Offset (6 + 16)

    return Buffer.concat([header, entry, pngBuffer]);
  }

  const icoBuffer = createIco(icon32, 32);

  // Save to target locations
  const targets = [
    { path: path.join(__dirname, '../src/app/icon.png'), content: icon512 },
    { path: path.join(__dirname, '../src/app/apple-icon.png'), content: icon180 },
    { path: path.join(__dirname, '../src/app/favicon.ico'), content: icoBuffer },
    { path: path.join(__dirname, '../public/icon.png'), content: icon512 },
    { path: path.join(__dirname, '../public/apple-icon.png'), content: icon180 },
    { path: path.join(__dirname, '../public/favicon.ico'), content: icoBuffer },
    { path: path.join(__dirname, '../public/VNPIS_logo.png'), content: icon512 },
    { path: path.join(__dirname, '../public/images/vnpis-logo.png'), content: icon512 },
  ];

  for (const t of targets) {
    fs.writeFileSync(t.path, t.content);
    console.log(`Updated ${path.relative(path.join(__dirname, '..'), t.path)} (${t.content.length} bytes)`);
  }

  // Clean up temporary test files if any
  ['public/test-icon.png', 'public/test-favicon.ico'].forEach(tmp => {
    const p = path.join(__dirname, '..', tmp);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });

  console.log('Favicon generation completed successfully!');
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
