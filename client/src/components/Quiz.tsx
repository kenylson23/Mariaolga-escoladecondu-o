import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [explanation, setExplanation] = useState<string>('');
  
  const autoAdvanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Questions about Portuguese traffic code
  const questions: Question[] = [
    {
      id: 1,
      question: "Qual é a velocidade máxima permitida dentro das localidades em Portugal?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      correct: 1,
      explanation: "Dentro das localidades, a velocidade máxima é de 50 km/h, exceto quando sinalizado de forma diferente.",
      category: "Velocidades"
    },
    {
      id: 2,
      question: "Quando deve usar os máximos?",
      options: [
        "Apenas durante a noite",
        "Em estradas mal iluminadas, sem tráfego em sentido contrário",
        "Sempre que chove",
        "Nunca, são perigosos"
      ],
      correct: 1,
      explanation: "Os máximos devem ser usados em estradas escuras quando não há tráfego em sentido contrário, para melhorar a visibilidade.",
      category: "Iluminação"
    },
    {
      id: 3,
      question: "Qual é a distância de segurança recomendada em autoestrada?",
      options: [
        "1 segundo",
        "2 segundos",
        "3 segundos",
        "5 segundos"
      ],
      correct: 2,
      explanation: "A regra dos 3 segundos garante distância de segurança adequada em condições normais de autoestrada.",
      category: "Segurança"
    },
    {
      id: 4,
      question: "É obrigatório o uso de cinto de segurança para passageiros traseiros?",
      options: [
        "Não, apenas para os da frente",
        "Sim, sempre",
        "Apenas em autoestrada",
        "Apenas para menores de idade"
      ],
      correct: 1,
      explanation: "O cinto de segurança é obrigatório para todos os ocupantes do veículo, independentemente da posição.",
      category: "Segurança"
    },
    {
      id: 5,
      question: "Quando pode ultrapassar pela direita?",
      options: [
        "Nunca",
        "Em vias com mais de uma faixa no mesmo sentido",
        "Apenas em autoestrada",
        "Quando o condutor da frente sinaliza"
      ],
      correct: 1,
      explanation: "A ultrapassagem pela direita é permitida em vias com múltiplas faixas no mesmo sentido de circulação.",
      category: "Ultrapassagem"
    }
  ];

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    if (showResult) return;
    
    // Update answer and immediately show result
    setSelectedAnswer(answerIndex);
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answerIndex;
      return newAnswers;
    });
    
    // Update score if correct
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
    
    setShowResult(true);
    setExplanation(questions[currentQuestion].explanation);
  }, [showResult, currentQuestion, questions]);
  
  const handleNextQuestion = useCallback(() => {
    if (selectedAnswer === null) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setExplanation('');
    } else {
      setQuizFinished(true);
    }
  }, [selectedAnswer, currentQuestion, questions.length]);
  
  // Auto-advance effect
  useEffect(() => {
    if (showResult && selectedAnswer !== null) {
      autoAdvanceTimeoutRef.current = setTimeout(() => {
        handleNextQuestion();
      }, 3000);
    }
    
    return () => {
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
        autoAdvanceTimeoutRef.current = null;
      }
    };
  }, [showResult, selectedAnswer, handleNextQuestion]);

  const resetQuiz = useCallback(() => {
    // Clear any pending timeouts
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }
    
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
    setAnswers([]);
    setExplanation('');
  }, []);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current);
      }
    };
  }, []);

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return { text: "Excelente! Está bem preparado!", icon: Trophy, color: "text-green-600" };
    if (percentage >= 60) return { text: "Bom resultado! Continue a estudar.", icon: CheckCircle, color: "text-blue-600" };
    return { text: "Precisa de mais estudo. Não desista!", icon: Brain, color: "text-orange-600" };
  };

  if (quizFinished) {
    const scoreMessage = getScoreMessage();
    return (
      <section id="quiz" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-3xl">
                <scoreMessage.icon className={`w-8 h-8 ${scoreMessage.color}`} />
                Quiz Concluído!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <p className={`text-xl ${scoreMessage.color} font-semibold`}>
                {scoreMessage.text}
              </p>
              <div className="bg-background rounded-lg p-4">
                <h4 className="font-semibold mb-3">Resultado por categoria:</h4>
                <div className="space-y-2 text-sm">
                  {Object.entries(
                    questions.reduce((acc, q, index) => {
                      if (!acc[q.category]) acc[q.category] = { total: 0, correct: 0 };
                      acc[q.category].total++;
                      if (answers[index] === q.correct) acc[q.category].correct++;
                      return acc;
                    }, {} as Record<string, { total: number; correct: number }>)
                  ).map(([category, stats]) => (
                    <div key={category} className="flex justify-between">
                      <span>{category}:</span>
                      <span className="font-medium">
                        {stats.correct}/{stats.total}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} data-testid="button-restart-quiz">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Tentar Novamente
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById('contacto');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid="button-contact-from-quiz"
                >
                  Marcar Aulas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quiz do <span className="text-primary">Código da Estrada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teste os seus conhecimentos sobre o código da estrada português. 
            Responda às perguntas e veja se está preparado para o exame teórico!
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <Badge variant="secondary">
                Pergunta {currentQuestion + 1} de {questions.length}
              </Badge>
              <Badge variant="outline">
                {questions[currentQuestion].category}
              </Badge>
            </div>
            <Progress 
              value={((currentQuestion + 1) / questions.length) * 100} 
              className="mb-4"
            />
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? "default"
                        : index === selectedAnswer
                        ? "destructive"
                        : "outline"
                      : selectedAnswer === index
                      ? "secondary"
                      : "outline"
                  }
                  className={`p-4 h-auto text-left justify-start relative ${
                    showResult && index === questions[currentQuestion].correct
                      ? "bg-green-100 border-green-500 text-green-800 hover:bg-green-100"
                      : showResult && index === selectedAnswer && index !== questions[currentQuestion].correct
                      ? "bg-red-100 border-red-500 text-red-800 hover:bg-red-100"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  data-testid={`answer-option-${index}`}
                >
                  <span className="flex-1">{option}</span>
                  {showResult && index === questions[currentQuestion].correct && (
                    <CheckCircle className="w-5 h-5 ml-2 text-green-600" />
                  )}
                  {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                    <XCircle className="w-5 h-5 ml-2 text-red-600" />
                  )}
                </Button>
              ))}
            </div>

            {showResult && (
              <Card className="bg-primary/5 border-primary/20" role="region" aria-live="polite">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                    {selectedAnswer === questions[currentQuestion].correct ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    Explicação:
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {explanation}
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-between items-center pt-4">
              <div className="text-sm text-muted-foreground">
                Pontuação: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </div>
              {!showResult ? (
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  data-testid="button-next-question"
                >
                  {currentQuestion === questions.length - 1 ? "Finalizar Quiz" : "Próxima Pergunta"}
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground">
                  Próxima pergunta em breve...
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}