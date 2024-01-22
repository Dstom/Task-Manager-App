import { Board } from "../components/Board";
import { Sidebar } from "../components/Sidebar";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "@/components/LogoutButton";
import { redirect } from 'next/navigation'

export default async function Page() { 

  const session = await getServerSession(authOptions)  
  console.log({ session });

  if (session) {
    return (
      <div className="root">
        <header className="header flex justify-between">
          <h1 className="text-xl bg-primary-light dark:bg-primary-dark dark:text-white p-2">Thullo</h1>
          <div>
            <span className="mr-2">Welcome: {session.user?.name}</span>
            <LogoutButton />
          </div>
        </header>
        <Sidebar />
        <Board />
      </div>
    )
  }
  redirect('/auth/login')
}