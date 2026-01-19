const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'frontend', 'src', 'assets', 'images');

const images = [
    {
        url: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=1200',
        name: 'latest-sourcing.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1596468138838-7066d552e694?auto=format&fit=crop&q=80&w=1200',
        name: 'latest-quality.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1616401776146-2d334e320d75?auto=format&fit=crop&q=80&w=1200',
        name: 'latest-sustainability.jpg'
    }
];

if (!fs.existsSync(targetDir)) {
    console.error(`Directory does not exist: ${targetDir}`);
    process.exit(1);
}

images.forEach((img) => {
    const filePath = path.join(targetDir, img.name);
    const file = fs.createWriteStream(filePath);

    https.get(img.url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to download ${img.name}: Status Code ${response.statusCode}`);
            return;
        }

        response.pipe(file);

        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${img.name}`);
        });
    }).on('error', (err) => {
        fs.unlink(filePath, () => { }); // Delete the file async. (But we don't check result)
        console.error(`Error downloading ${img.name}: ${err.message}`);
    });
});
