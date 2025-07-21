# 🎨 Biblioteca de Componentes Shadcn UI

Uma biblioteca moderna e elegante de componentes React construída com **Next.js 15**, **Tailwind CSS**, **TypeScript** e **Shadcn/UI**. Perfeita para criar interfaces de usuário incríveis e acessíveis.

## ✨ Características

- 🚀 **Performance otimizada** com Next.js 15 e React 19
- 🎨 **Totalmente customizável** com Tailwind CSS
- 📱 **Design responsivo** para todos os dispositivos
- 🔧 **TypeScript nativo** para melhor experiência de desenvolvimento
- ♿ **Acessível por padrão** com Radix UI
- 🌙 **Suporte a dark mode**
- 📦 **Componentes reutilizáveis** e bem documentados

## 🛠️ Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React
- [React 19](https://react.dev/) - Biblioteca de interface
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Shadcn/UI](https://ui.shadcn.com/) - Biblioteca de componentes
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Lucide React](https://lucide.dev/) - Ícones

## 📦 Componentes Disponíveis

### Componentes Base (Shadcn/UI)
- ✅ **Button** - Botões com múltiplas variantes
- ✅ **Card** - Cartões e containers
- ✅ **Input** - Campos de entrada
- ✅ **Label** - Rótulos para formulários
- ✅ **Badge** - Emblemas e etiquetas
- ✅ **Avatar** - Imagens de perfil
- ✅ **Dialog** - Modais e diálogos
- ✅ **DropdownMenu** - Menus suspensos
- ✅ **Separator** - Separadores visuais
- ✅ **Switch** - Interruptores toggle
- ✅ **Textarea** - Áreas de texto
- ✅ **Tabs** - Navegação por abas
- ✅ **Accordion** - Conteúdo colapsável
- ✅ **AlertDialog** - Diálogos de confirmação
- ✅ **Progress** - Barras de progresso
- ✅ **Select** - Seletores dropdown
- ✅ **Checkbox** - Caixas de seleção

### Componentes Customizados
- ✅ **StatsCard** - Cartões de estatísticas
- ✅ **LoadingSpinner** - Indicadores de carregamento
- ✅ **FeatureCard** - Cartões de recursos

## 🚀 Instalação e Uso

### 1. Clone o repositório
\`\`\`bash
git clone <repository-url>
cd shadcn-ui-library
\`\`\`

### 2. Instale as dependências
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

### 3. Execute o projeto
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

### 4. Acesse no navegador
Abra [http://localhost:3000](http://localhost:3000) para ver a biblioteca em ação.

## 📚 Como Usar os Componentes

### Importação Básica
\`\`\`tsx
import { Button, Card, Input, Label } from "@/components/ui";
import { StatsCard, LoadingSpinner } from "@/components/custom";
\`\`\`

### Exemplo de Uso
\`\`\`tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exemplo</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Clique aqui</Button>
      </CardContent>
    </Card>
  );
}
\`\`\`

### Componentes Customizados
\`\`\`tsx
import { StatsCard, FeatureCard } from "@/components/custom";

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        title="Total de Usuários"
        value="1,234"
        description="Crescimento de 12% este mês"
        trend={{ value: 12, label: "vs mês anterior", isPositive: true }}
      />
      
      <FeatureCard
        title="Performance"
        description="Componentes otimizados para máxima velocidade"
        icon={<span>⚡</span>}
        badges={["React 19", "Next.js 15"]}
      />
    </div>
  );
}
\`\`\`

## 🎨 Customização

### Tailwind CSS
Todos os componentes utilizam classes do Tailwind CSS e podem ser facilmente customizados:

\`\`\`tsx
<Button className="bg-purple-600 hover:bg-purple-700">
  Botão Customizado
</Button>
\`\`\`

### Variantes de Componentes
A maioria dos componentes oferece variantes pré-definidas:

\`\`\`tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
\`\`\`

### Dark Mode
O suporte a dark mode está habilitado por padrão:

\`\`\`tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Conteúdo que se adapta ao tema
</div>
\`\`\`

## 📖 Estrutura do Projeto

\`\`\`
shadcn-ui-library/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página de demonstração
│   ├── components/
│   │   ├── ui/              # Componentes Shadcn/UI
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   └── custom/          # Componentes customizados
│   │       ├── stats-card.tsx
│   │       ├── loading-spinner.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts         # Utilitários
├── components.json          # Configuração Shadcn/UI
├── tailwind.config.ts       # Configuração Tailwind
├── next.config.ts           # Configuração Next.js
└── package.json
\`\`\`

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

- \`npm run dev\` - Inicia o servidor de desenvolvimento
- \`npm run build\` - Constrói a aplicação para produção
- \`npm run start\` - Inicia a aplicação em produção
- \`npm run lint\` - Executa o linter

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Shadcn](https://ui.shadcn.com/) pela incrível biblioteca de componentes
- [Radix UI](https://www.radix-ui.com/) pelos primitivos acessíveis
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Next.js](https://nextjs.org/) pelo framework React

---

Construído com ❤️ usando Next.js, Tailwind CSS e Shadcn/UI
