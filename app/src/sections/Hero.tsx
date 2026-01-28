import { BookOpen, Clock, MapPin, Target, User, ChevronDown, GraduationCap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courseInfo } from '@/data/courseData';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <GraduationCap className="w-4 h-4 text-blue-300" />
          <span className="text-sm text-blue-100 font-medium">Diplomado en Hacienda e Inversión Pública</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Fundamentos de{' '}
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Planificación
          </span>{' '}
          y Gestión de la{' '}
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Inversión Pública
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-blue-100 mb-4 max-w-3xl mx-auto">
          del Estado
        </p>

        {/* Institution */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg text-white/90 font-medium">{courseInfo.institution}</span>
        </div>

        {/* Course Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left hover:bg-white/15 transition-all">
            <User className="w-5 h-5 text-blue-300 mb-2" />
            <p className="text-xs text-blue-200 uppercase tracking-wide">Facilitador</p>
            <p className="text-white font-semibold">{courseInfo.facilitator}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left hover:bg-white/15 transition-all">
            <Clock className="w-5 h-5 text-green-300 mb-2" />
            <p className="text-xs text-blue-200 uppercase tracking-wide">Duración</p>
            <p className="text-white font-semibold">{courseInfo.duration}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left hover:bg-white/15 transition-all">
            <Calendar className="w-5 h-5 text-purple-300 mb-2" />
            <p className="text-xs text-blue-200 uppercase tracking-wide">Horario</p>
            <p className="text-white font-semibold text-sm">{courseInfo.schedule}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-left hover:bg-white/15 transition-all">
            <MapPin className="w-5 h-5 text-pink-300 mb-2" />
            <p className="text-xs text-blue-200 uppercase tracking-wide">Modalidad</p>
            <p className="text-white font-semibold">Presencial</p>
          </div>
        </div>

        {/* Objective */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-10 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Objetivo del Curso</h3>
              <p className="text-blue-100 leading-relaxed">{courseInfo.objective}</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => onNavigate('units')}
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Comenzar a Aprender
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('quiz')}
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
          >
            Jugar Quiz
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </div>
    </section>
  );
}
