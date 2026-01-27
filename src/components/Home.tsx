import Navbar from './Navbar'
import Hero from './Hero'
import TechStack from './TechStack'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
            <Navbar />
            <main>
                <Hero />
                <TechStack />
                
                <div className="container mx-auto px-4 max-w-6xl">
                    <Projects />
                </div>

                <About />

                <div className="container mx-auto px-4 max-w-6xl">
                    <Contact />
                </div>
            </main>
            
            <footer className="py-8 text-center text-slate-600 text-sm">
                <p>© {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind v4.</p>
            </footer>
        </div>
    )
}

export default Home
