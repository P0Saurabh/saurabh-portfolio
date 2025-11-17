import React from 'react';
// Corrected Import: Removed the explicit .tsx extension to allow bundler resolution
import { ExpandableCardDemo } from '../components/ExpandableCardDemo';

// --- 1. Header/Banner Component ---
const PortfolioHeader = () => (
    <div className="text-center p-8 md:p-12 bg-gray-900 shadow-xl rounded-b-xl border-b-4 border-teal-500 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Rohan's DevOps Portfolio
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light">
            Infrastructure as Code | CI/CD | Cloud Automation | Monitoring
        </p>
        <div className="mt-6 space-x-4">
            <a 
                href="https://github.com/rohan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition"
            >
                GitHub Profile
            </a>
            <a 
                href="#projects"
                className="inline-flex items-center px-4 py-2 border border-teal-600 text-sm font-medium rounded-md text-teal-300 bg-gray-800 hover:bg-gray-700 transition"
            >
                Explore Projects
            </a>
        </div>
    </div>
);

// --- 2. Main Content Wrapper (Your original MainPage) ---
export function MainContent() {
    return (
        <div id="projects" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-3">
                    Project Showcase
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                    Click any card below to view detailed toolchains, architecture summaries, and project outcomes.
                </p>
                
                {/* ExpandableCardDemo Component Insertion */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
                    <ExpandableCardDemo />
                </div>
            </div>
        </div>
    );
}

// --- 3. Main App Component ---
// This component should be exported as default for a React application
const App = () => {
    return (
        <div className="min-h-screen font-sans bg-gray-50 dark:bg-gray-900">
            <PortfolioHeader />
            <MainContent />
            
            {/* Simple Footer */}
            <footer className="w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-12">
                &copy; {new Date().getFullYear()} Rohan. Built with React, Tailwind, and Framer Motion.
            </footer>
        </div>
    );
};

export default App;