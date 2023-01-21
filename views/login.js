import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Login() {
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const [data, setData] = useState()
    useEffect(() => {
        async function loadData() {
          const { data } = await supabaseClient.from('test').select('*')
          setData(data)
        }
        // Only run query once user is logged in.
        if (user) loadData()
      }, [user])
      if (!user)

      return (
        <Auth
          redirectTo="http://localhost:3000/dashboard"
          appearance={{ theme: ThemeSupa }}
          supabaseClient={supabaseClient}
          providers={['discord']}
          socialLayout="horizontal"
        />
      )

      console.log(user)
  return (
    <div>
        <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
        <p>user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>client-side data fetching with RLS</p>
    </div>
  )
}
