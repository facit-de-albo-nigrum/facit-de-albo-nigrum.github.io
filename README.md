# Presente de aniversário

Esse site é um pequeno presente para uma amiga.
Contém alguns segredos e talvez seja incrementado no futuro, caso ela queira algo.

Sugestões são bem-vindas.
Todas as informações sensíveis estão guardadas em segredos do repositório, então nem adianta caçar nos arquivos: o máximo que você vai conseguir é a data do aniversário.

## Sobre o site

Foi feito usando:

- Svelte
- Vite
- TypeScript
- JSON

O JSON é apenas para algumas informações, nada essencial.

### Build chain

O workflow desse repositório constrói e publica o site no GitHub Pages correspondente.
Possivelmente será isolado num repositório próprio; pretendo reutilizar esse workflow.

Etapas:

- Definição de variáveis de ambiente (armazena as senhas e segredos do site, não essencial)
- Trabalho principal: criação de um ambiente Ubuntu
- Checkout no repositório
- Instalação do node
- Instalação das dependências desse projeto
- Construção do projeto
- Configuração do GitHub Pages
- Upload do artefato do site construído
- Publicação do artefato via GitHub Pages

## Futuro desse projeto

Pode virar um blog, pode sumir. Provavelmente vou manter na minha conta pessoal como prova de conceito.
A princípio, está isolado numa organização, com o único objetivo de usar um link mais agradável, mas será movido para minha conta principal e a organização será deletada.
