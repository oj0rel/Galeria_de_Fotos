# 📸 Galeria de Fotos - Mobile App

Bem-vindo ao repositório do projeto **Galeria de Fotos**. Este é um aplicativo móvel desenvolvido para simular uma galeria interativa, consumindo dados reais de uma API pública.

## 🎯 O que o projeto resolve?

Este aplicativo soluciona o desafio de **visualização e organização de dados externos** em interfaces móveis.
O objetivo principal foi criar uma interface amigável onde o usuário pode navegar entre **Usuários**, seus respectivos **Álbuns** e visualizar as **Fotos** contidas neles.

Ele transforma dados brutos (JSON) da API *JSONPlaceholder* em uma experiência visual fluida, permitindo:
- Listagem de usuários.
- Barra de pesquisa de nomes de usuários.
- Navegação hierárquica (Usuário -> Álbuns -> Fotos).
- Visualização detalhada das imagens.
- Tratamento de dados assíncronos.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando um ecossistema moderno e tipado para garantir escalabilidade e manutenção:

- **React Native:** Framework principal para desenvolvimento mobile híbrido.
- **TypeScript:** Utilizado para garantir a segurança de tipos (interfaces para `User`, `Album`, `Photo`), evitando erros em tempo de execução e melhorando o intellisense.
- **API Integration (Fetch/Axios):** Implementação de uma camada de serviço dedicada (`src/api`) para comunicação com o *JSONPlaceholder*.
- **Expo Router:** Para o gerenciamento de rotas e navegação entre telas.
- **Componentização:** Estrutura modular de componentes reutilizáveis.

## 🚀 Aprendizados e Destaques

O desenvolvimento deste projeto proporcionou o aprofundamento em conceitos chave de desenvolvimento mobile e arquitetura de software:

1.  **Arquitetura Limpa e Organizada:**
    - Separação clara de responsabilidades. O projeto foi dividido em camadas:
        - `src/api`: Lógica de requisição de dados.
        - `src/types`: Definições de tipagem (TypeScript) para garantir a integridade dos dados.
        - `src/screens`: Interface do usuário.

2.  **Consumo de API REST:**
    - Prática de métodos HTTP (GET) e tratamento de respostas assíncronas.
    - Mapeamento de dados JSON para objetos TypeScript.

3.  **Performance e UX:**
    - Renderização eficiente de listas (FlatList).
    - Feedback visual durante o carregamento de dados.

---

### 🔧 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/oj0rel/Galeria_de_Fotos.git](https://github.com/oj0rel/Galeria_de_Fotos.git)

2. Instale as dependências

   ```bash
   npm install
   ```

3. Inicie o app

   ```bash
   npx expo start
   ```
