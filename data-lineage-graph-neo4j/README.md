# Data Lineage com Graph DB

## 🎯 Objetivo

Criar visualização de linhagem de dados entre tabelas, pipelines e fontes para auditoria e confiabilidade.

## 🛠️ Solução

- Modelagem de grafos no Neo4j
- Pipeline ETL coleta metadados de transformações no Airflow
- Dashboard interativo com queries Cypher

## 🔧 Stack

- Neo4j, Python, NetworkX
- Streamlit (visualização)
- Airflow (mock para simular metadata de pipelines)

## 💡 Papel como PM

- Entendimento das dores do time de dados com rastreabilidade
- Validação da solução com analistas de BI e segurança
- MVP testado com 5 pipelines reais → detectamos 2 riscos de compliance