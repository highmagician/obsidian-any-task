import fs from 'node:fs/promises';
import path from 'node:path';

async function updateManifest() {
    try {
        const projectRoot = process.cwd();

        // Load current data from dist/manifest.json (copied during build:assets)
        const manifestPath = path.join(projectRoot, 'dist', 'manifest.json');
        const manifestData = await fs.readFile(manifestPath, 'utf8');
        let manifest = JSON.parse(manifestData);

        // Get version from package.json
        const packagePath = path.join(projectRoot, 'package.json');
        const packageData = await fs.readFile(packagePath, 'utf8');
        let packageJson = JSON.parse(packageData);
        
        console.log(`Syncing manifest.json version: ${manifest.version} => ${packageJson.version}`);
        manifest.version = packageJson.version;

        // Write the updated manifest back to dist/manifest.json
        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    } catch (err) {
        console.error('Error updating manifest:', err);
        process.exit(1);
    }
}

updateManifest();
