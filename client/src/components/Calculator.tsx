import { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Calculator as CalcIcon, CreditCard, Banknote } from 'lucide-react';

interface CoursePrice {
  id: string;
  name: string;
  price: number;
  minInstallments: number;
  maxInstallments: number;
}

export default function Calculator() {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [downPayment, setDownPayment] = useState<number>(0);
  const [installments, setInstallments] = useState<number>(1);
  const [paymentMethod, setPaymentMethod] = useState<string>('cash');

  const courses: CoursePrice[] = [
    {
      id: 'categoria-b',
      name: 'Categoria B - Automóveis Ligeiros',
      price: 85000,
      minInstallments: 1,
      maxInstallments: 6
    },
    {
      id: 'categoria-a',
      name: 'Categoria A - Motociclos e Ciclomotores',
      price: 65000,
      minInstallments: 1,
      maxInstallments: 4
    },
    {
      id: 'categoria-c',
      name: 'Categoria C - Veículos Pesados',
      price: 120000,
      minInstallments: 1,
      maxInstallments: 8
    }
  ];

  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  // Clamp values to valid ranges
  const clampedDownPayment = Math.max(0, Math.min(50, downPayment));
  const clampedInstallments = selectedCourseData 
    ? Math.max(selectedCourseData.minInstallments, Math.min(selectedCourseData.maxInstallments, installments))
    : installments;

  // Calculate payment details using useMemo for better performance
  const calculationResult = useMemo(() => {
    if (!selectedCourseData) return null;

    const basePrice = selectedCourseData.price;
    const downPaymentAmount = (basePrice * clampedDownPayment) / 100;
    const financedAmount = basePrice - downPaymentAmount;

    // Interest rates based on payment method and number of installments
    let interestRate = 0;
    if (paymentMethod === 'installments' && clampedInstallments > 1) {
      if (clampedInstallments <= 2) interestRate = 0; // Sem juros até 2x
      else if (clampedInstallments <= 4) interestRate = 3; // 3% total
      else if (clampedInstallments <= 6) interestRate = 7; // 7% total
      else interestRate = 12; // 12% total
    }

    const totalWithInterest = financedAmount * (1 + interestRate / 100);
    const monthlyPayment = clampedInstallments > 1 ? totalWithInterest / clampedInstallments : totalWithInterest;
    const totalAmount = downPaymentAmount + totalWithInterest;

    return {
      totalAmount,
      monthlyPayment,
      downPaymentAmount,
      financedAmount,
      totalWithInterest,
      interestRate
    };
  }, [selectedCourseData, clampedDownPayment, clampedInstallments, paymentMethod]);

  const handleCourseChange = useCallback((courseId: string) => {
    setSelectedCourse(courseId);
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setInstallments(Math.min(installments, course.maxInstallments));
    }
  }, [installments]);

  const handlePaymentMethodChange = useCallback((method: string) => {
    setPaymentMethod(method);
    // When switching to installments, ensure minimum 2 installments
    if (method === 'installments' && installments < 2) {
      const course = courses.find(c => c.id === selectedCourse);
      if (course) {
        setInstallments(Math.max(2, course.minInstallments));
      } else {
        setInstallments(2);
      }
    }
  }, [installments, selectedCourse]);

  const handleDownPaymentChange = useCallback((value: number[]) => {
    const newValue = Math.max(0, Math.min(50, value[0]));
    setDownPayment(newValue);
  }, []);

  const handleInstallmentsChange = useCallback((value: number[]) => {
    if (selectedCourseData) {
      const newValue = Math.max(
        selectedCourseData.minInstallments, 
        Math.min(selectedCourseData.maxInstallments, value[0])
      );
      setInstallments(newValue);
    }
  }, [selectedCourseData]);

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    }).format(amount);
  }, []);

  return (
    <section id="calculadora" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Calculadora de <span className="text-primary">Mensalidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calcule o valor das mensalidades do seu curso de condução e escolha 
            a forma de pagamento mais adequada ao seu orçamento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator inputs */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CalcIcon className="w-6 h-6 text-primary" />
                Configurar Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Course selection */}
              <div>
                <Label htmlFor="course">Selecione o Curso</Label>
                <Select onValueChange={handleCourseChange} data-testid="select-course-calculator">
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha o curso de interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name} - {formatCurrency(course.price)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCourseData && (
                <>
                  {/* Payment method */}
                  <div>
                    <Label htmlFor="payment-method">Forma de Pagamento</Label>
                    <Select onValueChange={handlePaymentMethodChange} value={paymentMethod}>
                      <SelectTrigger data-testid="select-payment-method" aria-label="Selecionar forma de pagamento">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Pagamento à Vista</SelectItem>
                        <SelectItem value="installments">Pagamento Faseado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Down payment */}
                  <div>
                    <Label htmlFor="down-payment">Entrada (%)</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        id="down-payment"
                        min={0}
                        max={50}
                        step={1}
                        value={[clampedDownPayment]}
                        onValueChange={handleDownPaymentChange}
                        className="flex-1"
                        data-testid="slider-down-payment"
                        aria-label={`Entrada de ${clampedDownPayment}%`}
                      />
                      <span className="text-sm font-medium w-12 text-right">{clampedDownPayment}%</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Valor da entrada: {calculationResult && formatCurrency(calculationResult.downPaymentAmount)}
                    </div>
                  </div>

                  {/* Number of installments */}
                  {paymentMethod === 'installments' && (
                    <div>
                      <Label htmlFor="installments">Número de Parcelas</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          id="installments"
                          min={Math.max(2, selectedCourseData.minInstallments)}
                          max={selectedCourseData.maxInstallments}
                          step={1}
                          value={[clampedInstallments]}
                          onValueChange={handleInstallmentsChange}
                          className="flex-1"
                          data-testid="slider-installments"
                          aria-label={`${clampedInstallments} parcelas`}
                        />
                        <span className="text-sm font-medium w-10 text-right">{clampedInstallments}x</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Mínimo: {Math.max(2, selectedCourseData.minInstallments)}x • Máximo: {selectedCourseData.maxInstallments}x
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="hover-elevate">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Banknote className="w-6 h-6 text-primary" />
                Resultado do Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedCourseData ? (
                <div className="text-center py-12 text-muted-foreground">
                  <CreditCard className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Selecione um curso para ver o cálculo</p>
                </div>
              ) : calculationResult ? (
                <div className="space-y-6">
                  {/* Main result */}
                  <div className="text-center bg-primary/5 rounded-lg p-6">
                    <div className="text-sm text-muted-foreground mb-1">
                      {paymentMethod === 'cash' || clampedInstallments === 1 
                        ? 'Valor Total' 
                        : 'Mensalidade'
                      }
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2" data-testid="result-main-value">
                      {paymentMethod === 'cash' || clampedInstallments === 1
                        ? formatCurrency(calculationResult.totalAmount)
                        : formatCurrency(calculationResult.monthlyPayment)
                      }
                    </div>
                    {paymentMethod === 'installments' && clampedInstallments > 1 && (
                      <div className="text-sm text-muted-foreground">
                        em {clampedInstallments}x parcelas mensais
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-card-foreground">Detalhamento</h4>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Preço do curso:</span>
                        <span className="font-medium">{formatCurrency(selectedCourseData.price)}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entrada ({clampedDownPayment}%):</span>
                        <span className="font-medium">
                          {clampedDownPayment > 0 
                            ? formatCurrency(calculationResult.downPaymentAmount)
                            : 'Sem entrada'
                          }
                        </span>
                      </div>
                      
                      {paymentMethod === 'installments' && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Forma de pagamento:</span>
                          <span className="font-medium">
                            {clampedInstallments > 1 
                              ? `${clampedInstallments}x parcelas`
                              : 'Pagamento único'
                            }
                          </span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Valor financiado:</span>
                        <span className="font-medium">{formatCurrency(calculationResult.financedAmount)}</span>
                      </div>
                      
                      {calculationResult.interestRate > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Taxa de juros:</span>
                          <span className="font-medium text-amber-600">{calculationResult.interestRate}%</span>
                        </div>
                      )}
                      
                      <Separator />
                      
                      <div className="flex justify-between font-semibold">
                        <span>Total a pagar:</span>
                        <span className="text-primary">{formatCurrency(calculationResult.totalAmount)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="pt-4">
                    <Button 
                      className="w-full" 
                      size="lg"
                      data-testid="button-request-info"
                      onClick={() => {
                        const element = document.getElementById('contacto');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Solicitar Informações
                    </Button>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <Card className="bg-muted border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Informações Importantes
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Formas de Pagamento</h4>
                  <ul className="space-y-1">
                    <li>• Dinheiro, Multicaixa Express</li>
                    <li>• Transferência bancária</li>
                    <li>• Sem juros até 2 parcelas</li>
                    <li>• Desconto para pagamento à vista</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">O que está incluído</h4>
                  <ul className="space-y-1">
                    <li>• Aulas teóricas e práticas</li>
                    <li>• Material didático do IMT</li>
                    <li>• Preparação para exame</li>
                    <li>• Seguro durante a formação</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}