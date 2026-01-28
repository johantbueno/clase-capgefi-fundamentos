import { useState, useEffect } from 'react';
import { Trophy, Timer, CheckCircle, XCircle, ArrowRight, RotateCcw, Sparkles, Brain, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { quizQuestions } from '@/data/courseData';

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  timeLeft: number;
  gameState: 'menu' | 'playing' | 'answered' | 'finished';
  selectedAnswer: number | null;
  streak: number;
}

const QUESTION_TIME = 30; // seconds per question

export function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    timeLeft: QUESTION_TIME,
    gameState: 'menu',
    selectedAnswer: null,
    streak: 0,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (state.gameState === 'playing' && state.timeLeft > 0) {
      timer = setInterval(() => {
        setState((prev) => ({
          ...prev,
          timeLeft: prev.timeLeft - 1,
        }));
      }, 1000);
    } else if (state.timeLeft === 0 && state.gameState === 'playing') {
      handleAnswer(-1); // Time's up
    }
    return () => clearInterval(timer);
  }, [state.gameState, state.timeLeft]);

  const startGame = () => {
    setState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      timeLeft: QUESTION_TIME,
      gameState: 'playing',
      selectedAnswer: null,
      streak: 0,
    });
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQ = quizQuestions[state.currentQuestion];
    const isCorrect = answerIndex === currentQ.correct;
    
    const timeBonus = Math.floor(state.timeLeft / 5);
    const streakBonus = state.streak * 10;
    const points = isCorrect ? 100 + timeBonus + streakBonus : 0;

    setState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      score: prev.score + points,
      answers: [...prev.answers, answerIndex],
      streak: isCorrect ? prev.streak + 1 : 0,
      gameState: 'answered',
    }));
  };

  const nextQuestion = () => {
    if (state.currentQuestion < quizQuestions.length - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        timeLeft: QUESTION_TIME,
        gameState: 'playing',
        selectedAnswer: null,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        gameState: 'finished',
      }));
    }
  };

  const getGrade = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return { grade: 'Sobresaliente', color: 'text-green-600', emoji: '🏆' };
    if (percentage >= 80) return { grade: 'Excelente', color: 'text-blue-600', emoji: '⭐' };
    if (percentage >= 70) return { grade: 'Bueno', color: 'text-yellow-600', emoji: '👍' };
    if (percentage >= 60) return { grade: 'Aprobado', color: 'text-orange-600', emoji: '📚' };
    return { grade: 'Necesita Repasar', color: 'text-red-600', emoji: '📖' };
  };

  // Menu Screen
  if (state.gameState === 'menu') {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-indigo-100 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                ¡Pon a Prueba tus Conocimientos!
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Responde {quizQuestions.length} preguntas sobre el SNPIP y demuestra lo que has aprendido
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-blue-900">{quizQuestions.length}</p>
                  <p className="text-xs text-blue-600">Preguntas</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <Timer className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-900">{QUESTION_TIME}s</p>
                  <p className="text-xs text-purple-600">Por pregunta</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-green-900">100+</p>
                  <p className="text-xs text-green-600">Puntos max</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-800">¡Bonificaciones!</p>
                    <p className="text-sm text-yellow-700">
                      Gana puntos extra por responder rápido y mantener rachas correctas
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={startGame}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Comenzar Juego
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Finished Screen
  if (state.gameState === 'finished') {
    const maxScore = quizQuestions.length * 100 + (quizQuestions.length * 6); // Approx max with bonuses
    const result = getGrade(state.score, maxScore);
    const correctAnswers = state.answers.filter((a, i) => a === quizQuestions[i].correct).length;

    return (
      <section id="quiz" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-indigo-100 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                ¡Juego Completado!
              </CardTitle>
              <p className={`text-2xl font-bold mt-2 ${result.color}`}>
                {result.grade}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-center">
                <p className="text-indigo-100 text-sm mb-1">Puntuación Final</p>
                <p className="text-5xl font-bold text-white">{state.score}</p>
                <p className="text-indigo-200 text-sm mt-2">
                  {correctAnswers} de {quizQuestions.length} correctas
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Resumen de respuestas:</h3>
                {quizQuestions.map((q, i) => {
                  const isCorrect = state.answers[i] === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        isCorrect ? 'bg-green-50' : 'bg-red-50'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="text-sm text-gray-700 flex-1">{q.question}</span>
                      <Badge variant={isCorrect ? 'default' : 'destructive'}>
                        {isCorrect ? '+100' : '0'}
                      </Badge>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                onClick={startGame}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Jugar de Nuevo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Playing Screen
  const currentQ = quizQuestions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-xl px-4 py-2 shadow-md">
              <span className="text-sm text-gray-500">Pregunta</span>
              <span className="ml-2 font-bold text-gray-900">
                {state.currentQuestion + 1}/{quizQuestions.length}
              </span>
            </div>
            <div className="bg-white rounded-xl px-4 py-2 shadow-md">
              <span className="text-sm text-gray-500">Puntos</span>
              <span className="ml-2 font-bold text-indigo-600">{state.score}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {state.streak > 0 && (
              <Badge className="bg-orange-500 text-white">
                <Sparkles className="w-3 h-3 mr-1" />
                Racha: {state.streak}
              </Badge>
            )}
            <div className={`flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-md ${
              state.timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-gray-700'
            }`}>
              <Timer className="w-5 h-5" />
              <span className="font-bold">{state.timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="mb-8 h-2" />

        {/* Question Card */}
        <Card className="border-2 border-indigo-100 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl font-semibold text-gray-900 leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = state.selectedAnswer === idx;
              const isCorrect = idx === currentQ.correct;
              const showCorrect = state.gameState === 'answered' && isCorrect;
              const showWrong = state.gameState === 'answered' && isSelected && !isCorrect;

              return (
                <button
                  key={idx}
                  onClick={() => state.gameState === 'playing' && handleAnswer(idx)}
                  disabled={state.gameState === 'answered'}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
                    showCorrect
                      ? 'bg-green-100 border-green-500'
                      : showWrong
                      ? 'bg-red-100 border-red-500'
                      : isSelected
                      ? 'bg-indigo-100 border-indigo-500'
                      : 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Explanation & Next Button */}
        {state.gameState === 'answered' && (
          <div className="mt-6 space-y-4">
            <div className={`p-4 rounded-xl ${
              state.selectedAnswer === currentQ.correct
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-start gap-3">
                {state.selectedAnswer === currentQ.correct ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                )}
                <div>
                  <p className={`font-semibold ${
                    state.selectedAnswer === currentQ.correct ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {state.selectedAnswer === currentQ.correct ? '¡Correcto!' : 'Incorrecto'}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{currentQ.explanation}</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg font-semibold rounded-xl"
            >
              {state.currentQuestion < quizQuestions.length - 1 ? (
                <>
                  Siguiente Pregunta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>Ver Resultados</>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
