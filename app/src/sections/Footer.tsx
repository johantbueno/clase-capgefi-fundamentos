import { BookOpen, Mail, MapPin, Linkedin, ExternalLink, GraduationCap } from 'lucide-react';
import { courseInfo, resources } from '@/data/courseData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Course Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SNPIP</h3>
                <p className="text-sm text-gray-400">Sistema Nacional de Planificación</p>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-4">{courseInfo.title}</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {courseInfo.subtitle} - {courseInfo.institution}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={courseInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn del Facilitador</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Recursos Legales
            </h4>
            <ul className="space-y-3">
              {resources.legal.map((item, idx) => (
                <li key={idx}>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <ExternalLink className="w-3 h-3" />
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-green-400" />
              Recursos en Línea
            </h4>
            <ul className="space-y-3">
              {resources.online.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`https://${item.description}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="font-medium mb-3 text-gray-300">Contacto</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  j.tapia@capgefi.edu.do
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  CAPGEFI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear}</span>
              <span className="hidden sm:inline">•</span>
              <span>{courseInfo.institution}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Facilitador:</span>
              <span className="text-white font-medium">{courseInfo.facilitator}</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={courseInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-lg italic text-gray-300">
            "La planificación no nos resuelve el futuro, solo nos ayuda a reducir la incertidumbre sobre él"
          </blockquote>
          <cite className="text-sm text-gray-400 mt-2 block">— Miriam Soriano</cite>
        </div>
      </div>
    </footer>
  );
}
