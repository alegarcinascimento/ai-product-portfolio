# Biblioteca de Componentes Shadcn UI

Uma biblioteca moderna de componentes React construída com Next.js, Tailwind CSS e Shadcn UI para criar interfaces elegantes e funcionais.

## 🚀 Tecnologias

- **Next.js 15.4.2** - Framework React para produção
- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS v4** - Framework CSS utilitário
- **Shadcn UI** - Biblioteca de componentes reutilizáveis
- **Lucide React** - Ícones SVG modernos

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm, yarn ou pnpm

### Configuração do Projeto

```bash
# Clone o repositório
git clone <repository-url>
cd shadcn-ui-library

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 🎨 Componentes Disponíveis

### Button (Botão)
Componente de botão com múltiplas variantes e tamanhos.

```tsx
import { Button } from "@/components/ui/button";

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
```

### Card (Cartão)
Componente de cartão flexível para organizar conteúdo.

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do conteúdo</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card...</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

### Input (Campo de Entrada)
Componente de input estilizado e acessível.

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Digite algo..." />
<Input type="email" placeholder="email@exemplo.com" />
<Input type="password" placeholder="Senha" />
```

### Label (Rótulo)
Componente de label para formulários.

```tsx
import { Label } from "@/components/ui/label";

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

## 🎯 Estrutura do Projeto

```
shadcn-ui-library/
├── src/
│   ├── app/                 # App Router do Next.js
│   │   ├── globals.css      # Estilos globais e variáveis CSS
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página inicial com demos
│   ├── components/
│   │   └── ui/              # Componentes Shadcn UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── index.ts     # Exportações centralizadas
│   └── lib/
│       └── utils.ts         # Utilitários (função cn)
├── components.json          # Configuração Shadcn UI
├── tailwind.config.ts       # Configuração Tailwind CSS
└── tsconfig.json           # Configuração TypeScript
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint

# Adicionar novos componentes Shadcn UI
npx shadcn@latest add [component-name]
```

## 📚 Adicionando Novos Componentes

Para adicionar novos componentes Shadcn UI:

```bash
# Exemplos de componentes disponíveis
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
npx shadcn@latest add tabs
npx shadcn@latest add form
```

Após adicionar um componente, não esqueça de:
1. Exportá-lo no arquivo `src/components/ui/index.ts`
2. Adicionar exemplos na página principal se necessário
3. Documentar seu uso no README

## 🎨 Personalização

### Temas e Cores
As cores são definidas através de variáveis CSS no arquivo `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... outras variáveis */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... variáveis para tema escuro */
}
```

### Configuração Tailwind
O arquivo `tailwind.config.ts` contém todas as configurações personalizadas:
- Cores do sistema de design
- Animações customizadas
- Breakpoints responsivos
- Plugins adicionais

## 🌟 Recursos

- ✅ **TypeScript**: Totalmente tipado para melhor DX
- ✅ **Responsivo**: Design adaptativo para todos os dispositivos
- ✅ **Dark Mode**: Suporte completo a tema escuro
- ✅ **Acessibilidade**: Componentes acessíveis por padrão
- ✅ **Performance**: Otimizado para velocidade
- ✅ **Customizável**: Facilmente personalizável via Tailwind

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
