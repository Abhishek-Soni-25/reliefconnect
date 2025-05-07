import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#1A365D] pt-16 pb-8 border-t border-[#1A365D]">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex items-center text-2xl font-bold text-blue-600">
              <i className="fas fa-hands-helping text-3xl"></i>
                <span className="pl-3">ReliefConnect</span>
              </Link>
            </div>
            <p className="text-white">
              Empowering communities through swift and efficient emergency response coordination.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white mb-4 md:mb-0">&copy; 2024 ReliefConnect. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link 
              href="#" 
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </Link>
            <Link 
              href="#" 
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </Link>
            <Link 
              href="#" 
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link 
              href="#" 
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
