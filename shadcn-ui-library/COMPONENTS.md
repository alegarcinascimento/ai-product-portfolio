# 📚 Guia de Componentes

Este documento fornece exemplos detalhados de como usar cada componente da biblioteca.

## 🎯 Componentes Base

### Button
Botões com múltiplas variantes e tamanhos.

```tsx
import { Button } from "@/components/ui";

// Variantes
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// Com eventos
<Button onClick={() => console.log('Clicado!')}>
  Clique aqui
</Button>
```

### Card
Container flexível para organizar conteúdo.

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo principal do card...</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Input & Label
Campos de entrada com rótulos.

```tsx
import { Input, Label } from "@/components/ui";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="seu@email.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
```

### Badge
Emblemas e etiquetas coloridas.

```tsx
import { Badge } from "@/components/ui";

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

### Avatar
Componente de avatar com fallback.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>

// Tamanhos diferentes
<Avatar className="h-8 w-8">
  <AvatarFallback>S</AvatarFallback>
</Avatar>
<Avatar className="h-16 w-16">
  <AvatarFallback>L</AvatarFallback>
</Avatar>
```

### Dialog
Modais e diálogos.

```tsx
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
      <DialogDescription>
        Descrição do conteúdo do modal.
      </DialogDescription>
    </DialogHeader>
    <div>
      {/* Conteúdo do modal */}
    </div>
  </DialogContent>
</Dialog>
```

### DropdownMenu
Menus suspensos contextuais.

```tsx
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuItem>Configurações</DropdownMenuItem>
    <DropdownMenuItem>Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Switch
Interruptores toggle.

```tsx
import { Switch, Label } from "@/components/ui";

const [enabled, setEnabled] = useState(false);

<div className="flex items-center space-x-2">
  <Switch 
    id="notifications" 
    checked={enabled}
    onCheckedChange={setEnabled}
  />
  <Label htmlFor="notifications">Notificações</Label>
</div>
```

### Textarea
Área de texto expandida.

```tsx
import { Textarea, Label } from "@/components/ui";

<div className="space-y-2">
  <Label htmlFor="message">Mensagem</Label>
  <Textarea 
    id="message"
    placeholder="Digite sua mensagem aqui..."
    rows={4}
  />
</div>
```

### Tabs
Navegação por abas.

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
    <TabsTrigger value="tab3">Aba 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Conteúdo da aba 1
  </TabsContent>
  <TabsContent value="tab2">
    Conteúdo da aba 2
  </TabsContent>
  <TabsContent value="tab3">
    Conteúdo da aba 3
  </TabsContent>
</Tabs>
```

### Accordion
Conteúdo colapsável.

```tsx
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Pergunta 1</AccordionTrigger>
    <AccordionContent>
      Resposta para a primeira pergunta.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Pergunta 2</AccordionTrigger>
    <AccordionContent>
      Resposta para a segunda pergunta.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Progress
Barras de progresso.

```tsx
import { Progress } from "@/components/ui";

const [progress, setProgress] = useState(0);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progresso</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>
```

### Select
Seletores dropdown.

```tsx
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui";

<Select onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opção 1</SelectItem>
    <SelectItem value="option2">Opção 2</SelectItem>
    <SelectItem value="option3">Opção 3</SelectItem>
  </SelectContent>
</Select>
```

### Checkbox
Caixas de seleção.

```tsx
import { Checkbox, Label } from "@/components/ui";

const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2">
  <Checkbox 
    id="terms" 
    checked={checked}
    onCheckedChange={(checked) => setChecked(checked === true)}
  />
  <Label htmlFor="terms">Aceito os termos</Label>
</div>
```

## 🎨 Componentes Customizados

### StatsCard
Cartão para exibir estatísticas.

```tsx
import { StatsCard } from "@/components/custom";

<StatsCard
  title="Total de Vendas"
  value="R$ 12.345"
  description="Vendas do último mês"
  trend={{
    value: 12,
    label: "vs mês anterior",
    isPositive: true
  }}
  icon={<TrendingUpIcon />}
/>
```

### LoadingSpinner
Indicador de carregamento.

```tsx
import { LoadingSpinner } from "@/components/custom";

// Tamanhos
<LoadingSpinner size="sm" />
<LoadingSpinner size="md" />
<LoadingSpinner size="lg" />

// Com classes customizadas
<LoadingSpinner className="text-blue-500" />
```

### FeatureCard
Cartão para destacar recursos.

```tsx
import { FeatureCard } from "@/components/custom";

<FeatureCard
  title="Performance"
  description="Componentes otimizados para velocidade"
  icon={<ZapIcon />}
  badges={["React", "TypeScript"]}
  onClick={() => console.log('Feature clicada')}
/>
```

## 🎯 Padrões de Uso

### Formulário Completo
```tsx
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  Input,
  Label,
  Button,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui";

function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entre em Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" placeholder="Seu nome" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" placeholder="Seu sobrenome" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="support">Suporte</SelectItem>
              <SelectItem value="sales">Vendas</SelectItem>
              <SelectItem value="general">Geral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea 
            id="message" 
            placeholder="Sua mensagem aqui..."
            rows={4}
          />
        </div>
        
        <Button className="w-full">Enviar Mensagem</Button>
      </CardContent>
    </Card>
  );
}
```

### Dashboard com Estatísticas
```tsx
import { StatsCard, FeatureCard } from "@/components/custom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Usuários Ativos"
          value="1,234"
          trend={{ value: 12, label: "vs mês anterior", isPositive: true }}
        />
        <StatsCard
          title="Receita"
          value="R$ 45.678"
          trend={{ value: -5, label: "vs mês anterior", isPositive: false }}
        />
        <StatsCard
          title="Pedidos"
          value="567"
          trend={{ value: 8, label: "vs mês anterior", isPositive: true }}
        />
        <StatsCard
          title="Taxa de Conversão"
          value="3.2%"
          trend={{ value: 2, label: "vs mês anterior", isPositive: true }}
        />
      </div>
      
      {/* Recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Analytics"
          description="Acompanhe métricas importantes"
          icon={<BarChartIcon />}
          badges={["Tempo Real", "Relatórios"]}
        />
        <FeatureCard
          title="Segurança"
          description="Proteção avançada de dados"
          icon={<ShieldIcon />}
          badges={["SSL", "2FA"]}
        />
        <FeatureCard
          title="API"
          description="Integração fácil e rápida"
          icon={<CodeIcon />}
          badges={["REST", "GraphQL"]}
        />
      </div>
    </div>
  );
}
```

## 🎨 Dicas de Estilo

### Classes Úteis
```tsx
// Espaçamento
className="space-y-4"      // Espaço vertical entre elementos
className="space-x-2"      // Espaço horizontal entre elementos
className="gap-4"          // Gap em grids/flex

// Layout
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="flex items-center justify-between"
className="w-full max-w-md mx-auto"

// Responsividade
className="hidden md:block"     // Oculto em mobile
className="md:hidden"          // Visível apenas em mobile
className="text-sm md:text-base" // Texto responsivo
```

### Combinações Comuns
```tsx
// Card com hover
<Card className="transition-all duration-200 hover:shadow-lg cursor-pointer">

// Button loading
<Button disabled={loading}>
  {loading && <LoadingSpinner size="sm" className="mr-2" />}
  {loading ? 'Carregando...' : 'Enviar'}
</Button>

// Input com erro
<Input 
  className={`${error ? 'border-red-500' : ''}`}
  placeholder="Digite aqui..."
/>
{error && <p className="text-sm text-red-500 mt-1">{error}</p>}
```