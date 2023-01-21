import React from 'react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const supabaseClient = useSupabaseClient()
    const user = useUser()
    if (!user) return (
      <Auth
        redirectTo="http://localhost:3000/dashboard"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={['discord']}
        socialLayout="horizontal"
      />
    )
  return (
    <div>dashboard</div>
  )
}
