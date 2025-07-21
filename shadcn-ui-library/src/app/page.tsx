"use client";

import { useState } from "react";
import { 
  Button, 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  Input,
  Label,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
  Switch,
  Textarea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox
} from "@/components/ui";

export default function Home() {
  const [progress, setProgress] = useState(75);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);

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
          <div className="flex justify-center gap-2 mt-6">
            <Badge variant="default">React 19</Badge>
            <Badge variant="secondary">Next.js 15</Badge>
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="destructive">Shadcn/UI</Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="components">Componentes</TabsTrigger>
            <TabsTrigger value="forms">Formulários</TabsTrigger>
            <TabsTrigger value="navigation">Navegação</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Button Examples */}
              <Card>
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

              {/* Avatar Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Avatares</CardTitle>
                  <CardDescription>
                    Componentes de avatar com fallback
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Progresso</CardTitle>
                  <CardDescription>
                    Barras de progresso animadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      -10%
                    </Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      +10%
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Components */}
              <Card>
                <CardHeader>
                  <CardTitle>Componentes de Formulário</CardTitle>
                  <CardDescription>
                    Inputs, selects e controles
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
                    <Label htmlFor="country">País</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um país" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="br">Brasil</SelectItem>
                        <SelectItem value="us">Estados Unidos</SelectItem>
                        <SelectItem value="ca">Canadá</SelectItem>
                        <SelectItem value="uk">Reino Unido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui..." />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={checkboxValue}
                      onCheckedChange={(checked) => setCheckboxValue(checked === true)}
                    />
                    <Label htmlFor="terms">Aceito os termos e condições</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="notifications" 
                      checked={switchValue}
                      onCheckedChange={setSwitchValue}
                    />
                    <Label htmlFor="notifications">Receber notificações</Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar Formulário</Button>
                </CardFooter>
              </Card>

              {/* Accordion Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>
                    Conteúdo expansível e colapsável
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como usar os componentes?</AccordionTrigger>
                      <AccordionContent>
                        Todos os componentes são construídos com Radix UI e estilizados com Tailwind CSS.
                        Você pode importá-los diretamente e usar em seus projetos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>É acessível?</AccordionTrigger>
                      <AccordionContent>
                        Sim! Os componentes seguem as diretrizes WAI-ARIA e são totalmente acessíveis
                        por padrão, graças ao Radix UI.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Posso customizar?</AccordionTrigger>
                      <AccordionContent>
                        Absolutamente! Todos os componentes são construídos com Tailwind CSS e
                        podem ser facilmente customizados através de classes CSS.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Navigation Tab */}
          <TabsContent value="navigation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dropdown Menu */}
              <Card>
                <CardHeader>
                  <CardTitle>Menu Dropdown</CardTitle>
                  <CardDescription>
                    Menus contextuais e dropdowns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Abrir Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Perfil</DropdownMenuItem>
                      <DropdownMenuItem>Configurações</DropdownMenuItem>
                      <DropdownMenuItem>Faturamento</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Sair</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              {/* Separator Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Separadores</CardTitle>
                  <CardDescription>
                    Linhas de separação para organizar conteúdo
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>Seção 1</div>
                  <Separator />
                  <div>Seção 2</div>
                  <Separator />
                  <div>Seção 3</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dialog Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Diálogos</CardTitle>
                  <CardDescription>
                    Modais e diálogos interativos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Abrir Diálogo</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Editar Perfil</DialogTitle>
                        <DialogDescription>
                          Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Nome
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                            Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              {/* Alert Dialog */}
              <Card>
                <CardHeader>
                  <CardTitle>Diálogo de Alerta</CardTitle>
                  <CardDescription>
                    Confirmações e alertas importantes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Deletar Conta</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Isso irá deletar permanentemente sua
                          conta e remover seus dados de nossos servidores.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Continuar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <Card className="mt-12">
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
        <div className="text-center text-gray-600 dark:text-gray-400 mt-12">
          <Separator className="mb-6" />
          <p>Construído com ❤️ usando Next.js, Tailwind CSS e Shadcn UI</p>
        </div>
      </div>
    </div>
  );
}
