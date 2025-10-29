import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from 'next-auth/providers/apple'
import EmailProvider from 'next-auth/providers/email'
// import { SupabaseAdapter } from '@auth/supabase-adapter'
// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )

const handler = NextAuth({
  // adapter: SupabaseAdapter({
  //   url: process.env.SUPABASE_URL!,
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  // }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'demo',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo',
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || 'demo',
      clientSecret: process.env.APPLE_SECRET || 'demo',
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST!,
    //     port: Number(process.env.EMAIL_SERVER_PORT),
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER!,
    //       pass: process.env.EMAIL_SERVER_PASSWORD!,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM!,
    // }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret',
})

export { handler as GET, handler as POST }