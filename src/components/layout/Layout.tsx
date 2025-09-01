// src/components/layout/Layout.tsx
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16 md:pt-20 lg:pt-24">
        {children}
      </main>
    </div>
  )
}

export default Layout
