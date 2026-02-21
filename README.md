# Fluxograma Interativo – Farmácia UFRJ (Currículo 2026.1)

Fluxograma interativo desenvolvido para auxiliar estudantes de Farmácia da Universidade Federal do Rio de Janeiro no acompanhamento da progressão curricular com base no **Currículo 2026.1**.

🔗 **Acesse online:**  
https://jboonfim.github.io/fluxograma-farmacia-2026/

---

## Sobre o Projeto

Este projeto é uma adaptação do modelo original desenvolvido por **Bruno Dantas**, baseado no Currículo 2011.2, posteriormente revisado e atualizado para o Currículo 2026.1 por **Jakson Bonfim**.

O sistema permite:

- Visualização das disciplinas organizadas por período  
- Consulta de créditos  
- Identificação de pré-requisitos  
- Acompanhamento do progresso acadêmico  
- Interface compatível com dispositivos móveis  

---

## Executar Localmente

Clone o repositório:

```bash
git clone https://github.com/jboonfim/fluxograma-farmacia-2026.git
cd fluxograma-farmacia-2026
python -m http.server 8000
```

Acesse no navegador:

```
http://localhost:8000/index.html
```

---

## Customização

Todas as disciplinas, períodos, créditos e pré-requisitos estão definidos no arquivo:

```
js/database.js
```

Basta editar esse arquivo para adaptar o fluxograma a outro currículo.

---

## Créditos

Projeto original (Currículo 2011.2): Bruno Dantas  
Atualização e adequação ao Currículo 2026.1: Jakson Bonfim  

GitHub:  
https://github.com/DantasB  
https://github.com/jboonfim  

---

## Licença

Projeto de uso acadêmico e educacional.