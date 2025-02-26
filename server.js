import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(json());
 
// Validate environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE) {
    console.error("❌ Missing Supabase environment variables.");
    process.exit(1);
}

// Initialize Supabasep
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);

// Google OAuth Sign-In
app.post('/auth/google', async (req, res) => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: 'http://localhost:3000/dashboard.html' } // Ensure this is registered in Supabase
        });

        if (error) throw error;
        res.json({ url: data.url });
    } catch (err) {
        console.error("Auth Error:", err.message);
        res.status(500).json({ error: err.message }); 
    }
});

// Set port dynamically
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
