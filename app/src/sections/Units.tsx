import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Lightbulb, List, Grid3X3, Clock, Layers, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { units, type Unit, type Section } from '@/data/courseData';

const iconMap: Record<string, React.ElementType> = {
  text: Lightbulb,
  list: List,
  cards: Grid3X3,
  timeline: Clock,
  matrix: Layers,
  tree: MapPin,
};

function SectionContent({ section }: { section: Section }) {
  switch (section.type) {
    case 'text':
      return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed italic">{section.content}</p>
        </div>
      );

    case 'list':
      return (
        <ul className="space-y-3">
          {section.items?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">{idx + 1}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">{item.title}</span>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      );

    case 'cards':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.cards?.map((card, idx) => (
            <Card key={idx} className="border-2 border-transparent hover:border-blue-200 transition-all hover:shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-blue-900">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 whitespace-pre-line">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      );

    case 'timeline':
      return (
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          <div className="space-y-6">
            {section.timelineItems?.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function UnitAccordion({ unit, isOpen, onToggle }: { unit: Unit; isOpen: boolean; onToggle: () => void }) {
  const unitColors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
  ];

  const colorClass = unitColors[(unit.id - 1) % unitColors.length];

  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full"
      >
        <Card className={`overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-blue-200' : 'hover:shadow-lg'}`}>
          <div className={`bg-gradient-to-r ${colorClass} p-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">{unit.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{unit.subtitle}</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                {isOpen ? (
                  <ChevronUp className="w-6 h-6 text-white" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white" />
                )}
              </div>
            </div>
          </div>
          
          {isOpen && (
            <CardContent className="p-6">
              <ScrollArea className="h-auto max-h-[600px]">
                <div className="space-y-8">
                  {unit.content.map((section) => {
                    const SectionIcon = iconMap[section.type] || Lightbulb;
                    return (
                      <div key={section.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                            <SectionIcon className="w-4 h-4 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800">{section.title}</h4>
                        </div>
                        <div className="pl-11">
                          <SectionContent section={section} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          )}
        </Card>
      </button>
    </div>
  );
}

export function Units() {
  const [openUnit, setOpenUnit] = useState<number | null>(1);

  return (
    <section id="units" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Contenido del Curso</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unidades de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aprendizaje
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora las 5 unidades del curso. Haz clic en cada una para desplegar su contenido completo.
          </p>
        </div>

        {/* Units */}
        <div className="space-y-4">
          {units.map((unit) => (
            <UnitAccordion
              key={unit.id}
              unit={unit}
              isOpen={openUnit === unit.id}
              onToggle={() => setOpenUnit(openUnit === unit.id ? null : unit.id)}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Progreso del curso</span>
            <span className="text-sm font-bold text-blue-600">5 Unidades</span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" style={{ width: '100%' }} />
          </div>
          <div className="flex justify-between mt-3">
            {units.map((u) => (
              <button
                key={u.id}
                onClick={() => setOpenUnit(u.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  openUnit === u.id
                    ? 'bg-blue-600 text-white scale-110'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {u.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
