# Detector de Phishing com LLM

## 🤖 Problema

E-mails maliciosos estão cada vez mais difíceis de detectar. Como o GPT pode ajudar?

## 💡 Solução

Usamos um modelo GPT com prompt engineering para analisar:
- Linguagem suspeita
- Intenção de roubo de credenciais
- Urgência falsa

## 📦 Stack

- OpenAI GPT-4 (API)
- Classificação semântica via embeddings + regras heurísticas
- LangChain (para orquestração de prompts)

## 📊 Resultados

- Detecção de 92% de e-mails simulados
- Avaliação com equipe de Red Team: 100 e-mails testados

## 🧠 Papel como PM

- Definição do prompt e teste A/B com diferentes abordagens
- Avaliação com analistas humanos para calibrar o modelo
- Validação legal e ética (LGPD + explicabilidade)