import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
export const supabase = createClient('https://iaqvetbhluprpzcvlzhs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcXZldGJobHVwcnB6Y3ZsemhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDc2MTAsImV4cCI6MjA2OTM4MzYxMH0.di6zZs7Aaouo4OlcS1Os4m0I5-gFZ5bgfvzXLV3QZac')