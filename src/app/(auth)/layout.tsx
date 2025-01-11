import Image from 'next/image'
import React from 'react'
interface AuthLayoutProps {
    children: React.ReactNode
}
const AuthLayout = ( { children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto mx-w-screen-2xl p-4">
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                    
                </div>
            </nav>
        {children}
        </div>
     
    </main>
  )
}

export default AuthLayout