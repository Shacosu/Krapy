import React from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from "next/router";
export default function Home({ user }) {
    const supabaseClient = useSupabaseClient()
    const router = useRouter();
    async function logout() {
      await supabaseClient.auth.signOut();
      // await router.push('/login')
    }
    console.log(user)
  return (
    <div className="">
        <img src={user?.user_metadata.avatar_url} alt={user?.user_metadata.avatar_url} />
        <h1>Usuario authenticado {user?.email} </h1>
        <button className="bg-red-500 p-2" onClick={() =>logout() }>Deslogear</button>
  </div>
  )
}
