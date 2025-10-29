import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'demo',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo',
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET || 'fallback-secret',
})

export { handler as GET, handler as POST }