import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Biblioteca de Componentes Shadcn UI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Uma coleção moderna e elegante de componentes React construídos com Next.js, 
            Tailwind CSS e Shadcn UI para criar interfaces incríveis.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Button Examples */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Botões</CardTitle>
              <CardDescription>
                Diversos estilos e variantes de botões
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Example */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Formulário</CardTitle>
              <CardDescription>
                Componentes de entrada e formulários
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Digite seu email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Input id="message" placeholder="Digite sua mensagem" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enviar</Button>
            </CardFooter>
          </Card>

          {/* Card Examples */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Cards</CardTitle>
              <CardDescription>
                Exemplos de cartões e containers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Card Aninhado</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Este é um exemplo de card dentro de outro card.
                  </p>
                </Card>
                <div className="grid grid-cols-2 gap-2">
                  <Card className="p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">24</div>
                    <div className="text-xs text-gray-500">Projetos</div>
                  </Card>
                  <Card className="p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-500">Sucesso</div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Recursos da Biblioteca</CardTitle>
            <CardDescription>
              Tudo que você precisa para criar interfaces modernas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Componentes otimizados para máxima performance
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">Customizável</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Facilmente personalizável com Tailwind CSS
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-semibold">Responsivo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Design responsivo para todos os dispositivos
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold">TypeScript</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Totalmente tipado com TypeScript
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Construído com ❤️ usando Next.js, Tailwind CSS e Shadcn UI</p>
        </div>
      </div>
    </div>
  );
}
