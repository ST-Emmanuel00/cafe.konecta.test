import { Footer, Navbar } from "../components"
import { IChildren } from "../types"

export const CommonLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <>

      {/* acces Layout  */}
      <div className="min-h-screen flex flex-col">
        
        {/* Navbar  */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto mt-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
