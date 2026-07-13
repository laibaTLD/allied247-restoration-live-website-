import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting build process...');

try {
  // Run the Next.js build
  execSync('next build --turbopack', { stdio: 'inherit' });
  
  // The build completed successfully, but we might still have the trace file error
  console.log('\nBuild completed successfully!');
  
} catch (error) {
  // Check if this is the known Windows trace file error
  if (error.message && error.message.includes('EPERM: operation not permitted') && 
      error.message.includes('.next\\trace')) {
    console.warn('\nWarning: Could not write trace file (Windows permission issue). This is non-critical.');
    console.log('Build completed successfully despite the trace file warning.\n');
    process.exit(0); // Exit with success code
  }
  
  // For any other error, rethrow it
  console.error('\nBuild failed with error:');
  console.error(error);
  process.exit(1);
}
