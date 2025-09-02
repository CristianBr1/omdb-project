# 🎬 omdb-project

Um aplicativo em **React + Vite** para explorar filmes populares, buscar por título e salvar favoritos.  
Os dados são consumidos da API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

---

## 📌 Funcionalidades

- ✅ Listar **filmes populares** com paginação  
- 🔍 **Buscar filmes** por título  
- ⭐ Adicionar e remover filmes dos **favoritos** (salvos no localStorage)  
- 📖 Visualizar **detalhes** de cada filme  
- 📱 Interface **responsiva** feita com **TailwindCSS**  

---

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [React Router DOM](https://reactrouter.com/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started)  

---

## ⚙️ Instalação e uso

### 1. Clone o repositório
```bash
git clone https://github.com/CristianBr1/omdb-project.git
cd omdb-project
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure sua chave da API do TMDb
Crie um arquivo **`.env`** na raiz do projeto e adicione:

```env
VITE_API_KEY=sua_chave_tmdb
```

> 🔑 A chave pode ser criada em [TMDb – API Keys](https://www.themoviedb.org/settings/api).

### 4. Rode o projeto
```bash
npm run dev
```

O app estará rodando em:  
👉 `http://localhost:5173/`

---

## 📂 Estrutura de pastas

```
movie-explorer/
│── public/
│── src/
│   ├── components/   # Componentes reutilizáveis (Header, SearchBar, etc.)
│   ├── hooks/        # Hooks personalizados (ex: useLocalStorage)
│   ├── pages/        # Páginas (Home, MovieDetails, FavoritesPage)
│   ├── App.jsx
│   ├── main.jsx
│── .env.example      # Exemplo de variáveis de ambiente
│── package.json
│── README.md
```
