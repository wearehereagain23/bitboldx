const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with the service role key
const supabaseUrl = 'https://qsorvgzthvqqimtamnlg.supabase.co';
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzb3J2Z3p0aHZxcWltdGFtbmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjk4MDgsImV4cCI6MjA2NDY0NTgwOH0.sQiHIV1cqP47IIZyVDLoMIMDG4yVEM1np5i4zw628C4';
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function changeUserEmailWithoutConfirmation(userId, newEmail) {
    const { data, error } = await supabase.auth.admin.updateUserById(userId, {
        email: newEmail
    });

    if (error) {
        console.error('Error changing email:', error.message);
    } else {
        console.log('Email changed successfully:', data);
    }
}

// Example usage: Change email for a specific user
changeUserEmailWithoutConfirmation('503e8489-1046-4f16-868b-059d8f4059fa', 'mqsblogs@gmail.com');
