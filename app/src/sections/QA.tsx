import { useState } from 'react';
import { HelpCircle, MessageCircle, Send, ThumbsUp, User, Search, Filter, Plus, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Question {
  id: number;
  author: string;
  question: string;
  category: string;
  answers: Answer[];
  likes: number;
  timestamp: string;
  isLiked?: boolean;
}

interface Answer {
  id: number;
  author: string;
  answer: string;
  isOfficial: boolean;
  timestamp: string;
}

const categories = [
  { id: 'all', label: 'Todas' },
  { id: 'snipp', label: 'SNPIP' },
  { id: 'end', label: 'END 2030' },
  { id: 'snip', label: 'SNIP' },
  { id: 'mml', label: 'Marco Lógico' },
  { id: 'general', label: 'General' },
];

const initialQuestions: Question[] = [
  {
    id: 1,
    author: "María G.",
    question: "¿Cuál es la diferencia principal entre el SNPIP y el SNIP?",
    category: "snipp",
    likes: 12,
    timestamp: "2024-01-15",
    answers: [
      {
        id: 1,
        author: "Prof. Johan Tapia",
        answer: "El SNPIP (Sistema Nacional de Planificación e Inversión Pública) es el sistema completo que incluye principios, normas, órganos, procesos e instrumentos de planificación. El SNIP (Sistema Nacional de Inversión Pública) es un subsistema del SNPIP que se enfoca específicamente en la formulación, evaluación, priorización y seguimiento de proyectos de inversión pública.",
        isOfficial: true,
        timestamp: "2024-01-15"
      },
      {
        id: 2,
        author: "Carlos R.",
        answer: "Para entenderlo mejor: SNPIP = Planificación macro del Estado; SNIP = Gestión específica de proyectos.",
        isOfficial: false,
        timestamp: "2024-01-16"
      }
    ]
  },
  {
    id: 2,
    author: "Pedro M.",
    question: "¿Cuántas Regiones Únicas de Planificación (RUP) existen en República Dominicana?",
    category: "snipp",
    likes: 8,
    timestamp: "2024-01-14",
    answers: [
      {
        id: 1,
        author: "Prof. Johan Tapia",
        answer: "República Dominicana tiene 10 Regiones Únicas de Planificación (RUP). Estas regiones agrupan varias provincias con características similares para coordinar políticas de desarrollo regional.",
        isOfficial: true,
        timestamp: "2024-01-14"
      }
    ]
  },
  {
    id: 3,
    author: "Ana L.",
    question: "¿Qué es la Matriz de Marco Lógico y para qué se utiliza?",
    category: "mml",
    likes: 15,
    timestamp: "2024-01-13",
    answers: [
      {
        id: 1,
        author: "Prof. Johan Tapia",
        answer: "La Matriz de Marco Lógico (MML) es una herramienta de planificación, seguimiento y evaluación de proyectos. Es una matriz de 4x4 que presenta: Resumen Narrativo (Fin, Propósito, Componentes, Actividades), Indicadores, Medios de Verificación y Supuestos. Permite estructurar la lógica del proyecto de manera sistemática.",
        isOfficial: true,
        timestamp: "2024-01-13"
      }
    ]
  },
  {
    id: 4,
    author: "Luis H.",
    question: "¿Cuáles son los 4 ejes estratégicos de la END 2030?",
    category: "end",
    likes: 20,
    timestamp: "2024-01-12",
    answers: [
      {
        id: 1,
        author: "Prof. Johan Tapia",
        answer: "Los 4 ejes estratégicos de la END 2030 son:\n\n1. Estado Social y Democrático de Derecho\n2. Igualdad de Derechos y Oportunidades\n3. Economía Sostenible, Integradora y Competitiva\n4. Sociedad Ambientalmente Sostenible",
        isOfficial: true,
        timestamp: "2024-01-12"
      }
    ]
  },
  {
    id: 5,
    author: "Carmen D.",
    question: "¿Qué significa GpRD y cuál es su importancia?",
    category: "general",
    likes: 6,
    timestamp: "2024-01-11",
    answers: [
      {
        id: 1,
        author: "Prof. Johan Tapia",
        answer: "GpRD significa Gestión para Resultados en el Desarrollo. Es el enfoque que orienta la inversión pública hacia la mejora de las condiciones de vida de la población y el logro de objetivos medibles. Su importancia radica en que asegura que los recursos públicos se destinen a prioridades estratégicas con impacto medible.",
        isOfficial: true,
        timestamp: "2024-01-11"
      }
    ]
  }
];

export function QA() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newQuestion, setNewQuestion] = useState({ question: '', category: 'general', author: '' });
  const [newAnswer, setNewAnswer] = useState<Record<number, string>>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.answers.some(a => a.answer.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (questionId: number) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return {
          ...q,
          likes: q.isLiked ? q.likes - 1 : q.likes + 1,
          isLiked: !q.isLiked
        };
      }
      return q;
    }));
  };

  const handleSubmitQuestion = () => {
    if (newQuestion.question.trim() && newQuestion.author.trim()) {
      const question: Question = {
        id: Date.now(),
        author: newQuestion.author,
        question: newQuestion.question,
        category: newQuestion.category,
        likes: 0,
        timestamp: new Date().toISOString().split('T')[0],
        answers: []
      };
      setQuestions([question, ...questions]);
      setNewQuestion({ question: '', category: 'general', author: '' });
      setIsDialogOpen(false);
    }
  };

  const handleSubmitAnswer = (questionId: number) => {
    const answerText = newAnswer[questionId];
    if (answerText?.trim()) {
      setQuestions(questions.map(q => {
        if (q.id === questionId) {
          return {
            ...q,
            answers: [...q.answers, {
              id: Date.now(),
              author: "Estudiante",
              answer: answerText,
              isOfficial: false,
              timestamp: new Date().toISOString().split('T')[0]
            }]
          };
        }
        return q;
      }));
      setNewAnswer({ ...newAnswer, [questionId]: '' });
    }
  };

  return (
    <section id="qa" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Foro de Discusión</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas y{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Respuestas
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Espacio para resolver dudas y compartir conocimientos sobre el curso
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar preguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Pregunta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Hacer una Pregunta</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Tu nombre</label>
                  <Input
                    placeholder="Ej: Juan Pérez"
                    value={newQuestion.author}
                    onChange={(e) => setNewQuestion({ ...newQuestion, author: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Categoría</label>
                  <Select 
                    value={newQuestion.category} 
                    onValueChange={(val) => setNewQuestion({ ...newQuestion, category: val })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(c => c.id !== 'all').map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Tu pregunta</label>
                  <Textarea
                    placeholder="Escribe tu pregunta aquí..."
                    value={newQuestion.question}
                    onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button 
                  onClick={handleSubmitQuestion}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Publicar Pregunta
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Questions Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            {filteredQuestions.length} {filteredQuestions.length === 1 ? 'pregunta' : 'preguntas'}
          </p>
        </div>

        {/* Questions List */}
        <ScrollArea className="h-[600px]">
          <div className="space-y-4 pr-4">
            {filteredQuestions.map((q) => (
              <Card key={q.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{q.author}</p>
                        <p className="text-xs text-gray-500">{q.timestamp}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {categories.find(c => c.id === q.category)?.label || q.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 mb-4">{q.question}</p>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => handleLike(q.id)}
                      className={`flex items-center gap-1 text-sm ${
                        q.isLiked ? 'text-pink-600' : 'text-gray-500 hover:text-pink-600'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${q.isLiked ? 'fill-current' : ''}`} />
                      <span>{q.likes}</span>
                    </button>
                    <span className="text-sm text-gray-500">
                      {q.answers.length} {q.answers.length === 1 ? 'respuesta' : 'respuestas'}
                    </span>
                  </div>

                  {/* Answers */}
                  {q.answers.length > 0 && (
                    <div className="space-y-3 mb-4">
                      {q.answers.map((a) => (
                        <div
                          key={a.id}
                          className={`p-4 rounded-lg ${
                            a.isOfficial
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200'
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-3 h-3 text-gray-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-800">{a.author}</span>
                            {a.isOfficial && (
                              <Badge className="bg-blue-600 text-white text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Oficial
                              </Badge>
                            )}
                            <span className="text-xs text-gray-500">{a.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700 whitespace-pre-line">{a.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Answer Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Escribe tu respuesta..."
                      value={newAnswer[q.id] || ''}
                      onChange={(e) => setNewAnswer({ ...newAnswer, [q.id]: e.target.value })}
                      onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer(q.id)}
                    />
                    <Button
                      size="icon"
                      onClick={() => handleSubmitAnswer(q.id)}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No se encontraron preguntas</p>
            <p className="text-gray-400 text-sm">Sé el primero en hacer una pregunta</p>
          </div>
        )}
      </div>
    </section>
  );
}
