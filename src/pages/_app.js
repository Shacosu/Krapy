import '@/styles/globals.css'
import { useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useState } from 'react'

import Home from '../../views/home'

export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const user = useUser();
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
        };
        use();
      }, []);


     
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      { !user ? (
        <Home user={user}/>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionContextProvider>
  )
}
