# Detecção de Ameaças com NLP

## 💡 Problema

Equipes de segurança enfrentam sobrecarga com logs e alertas irrelevantes. A ideia é usar NLP para classificar mensagens e destacar as realmente críticas.

## 🛠️ Solução

Modelo BERT fine-tuned classifica frases em logs como:
- "benigno"
- "suspicious"
- "malicious"

## 📊 Stack

- Python, HuggingFace Transformers
- Pandas, Scikit-learn
- Dataset gerado a partir de alertas do Snort + frases sintéticas

## 👩‍💻 Como executar

```bash
pip install -r requirements.txt
python classify_alerts.py
```

## 📈 Resultados

- Acurácia: 91%
- Tempo médio de inferência por alerta: 120ms
- Pode ser embutido em sistemas de SIEM ou alertas por e-mail

## 🧠 Papel do PM

- Definição do escopo: reduzir ruído de alertas em +70%
- Trabalho com equipe de dados para criação do dataset
- MVP testado com equipe de SOC para feedback