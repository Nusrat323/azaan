export default function Footer() {
    return (
      <footer className="w-full mt-20 bg-gradient-to-r from-indigo-700 to-purple-700 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
  
          
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Azaan
            </h2>
            <p className="text-white text-sm text-center">
              Stay connected with Deen, beautifully.
            </p>
  
           
          </div>
  
          
          <div className="w-full h-px bg-white/20 my-8"></div>
  
          
          <p className="text-sm text-white text-center">
            © {new Date().getFullYear()} Azaan — All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  