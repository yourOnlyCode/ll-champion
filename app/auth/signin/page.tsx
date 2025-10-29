'use client';

import { signIn, getProviders } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-900 dark:via-orange-900 dark:to-red-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-amber-900 rounded-2xl shadow-2xl border border-amber-200 dark:border-amber-700 p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h1 className="text-2xl font-serif font-bold text-amber-800 dark:text-amber-200">
              Champion
            </h1>
          </div>
          <p className="text-amber-700 dark:text-amber-300 font-light">
            Sign in to start your writing journey
          </p>
        </div>



        {/* Sign In Options */}
        <div className="space-y-3">
          {providers?.google && (
            <button
              onClick={() => signIn('google', { callbackUrl: '/editor' })}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          )}


        </div>

        <p className="text-center text-xs text-amber-600 dark:text-amber-400 mt-6">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}