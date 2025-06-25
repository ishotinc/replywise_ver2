#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if .env already exists
const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
    console.log('✅ .env file already exists');
    process.exit(0);
}

// Create .env file from template
const envContent = `# Supabase Configuration
# Copy your Supabase credentials from your project dashboard
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your_anon_key_here
`;

try {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file');
    console.log('📝 Please update .env with your actual Supabase credentials');
    console.log('🔗 Get your credentials from: https://supabase.com/dashboard');
} catch (error) {
    console.error('❌ Failed to create .env file:', error.message);
    process.exit(1);
} 