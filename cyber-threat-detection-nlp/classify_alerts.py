import pandas as pd
from transformers import pipeline

# Exemplo de dataset sintético
data = [
    "User login successful from IP 192.168.1.1",
    "SQL injection attempt detected on /login.php",
    "System update completed without issues",
    "Multiple failed login attempts detected",
    "Trojan communication with C2 server blocked"
]

# Pipeline de classificação com modelo BERT (placeholder)
classifier = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

print("Classificando alertas:")
for alert in data:
    result = classifier(alert)[0]
    print(f"Alerta: {alert} Classificação: {result['label']} (confiança: {result['score']:.2f})")