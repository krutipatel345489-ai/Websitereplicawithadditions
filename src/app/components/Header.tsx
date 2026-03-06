import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top utility navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-blue-700">UIC.edu</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Campus Map</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Chicago</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Peoria</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Rockford</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">MD Admissions</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Accessibility</a>
            <a href="#" className="text-gray-700 hover:text-blue-700">Patient Care</a>
            <button className="text-gray-700 hover:text-blue-700">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">UIC</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">UNIVERSITY OF ILLINOIS</div>
              <div className="text-xs text-gray-600">COLLEGE OF MEDICINE</div>
            </div>
          </div>

          {/* Main navigation */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">EDUCATION</a>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">RESEARCH</a>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">PEOPLE</a>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">ABOUT US</a>
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">CONTACT US</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
