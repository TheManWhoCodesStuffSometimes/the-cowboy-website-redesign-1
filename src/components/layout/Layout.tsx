// src/components/layout/Layout.tsx
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default Layout
