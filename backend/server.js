require("dotenv").config(); // carrega o .env logo no começo

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Usuários de exemplo (login)
const usuarios = [
  { email: "teste@teste.com", senha: "1234" },
  { email: "arthur@email.com", senha: "senha123" },
];

// ===============================
// API de Login
// ===============================
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ erro: "E-mail inválido." });
  }

  if (!senha || senha.length < 4) {
    return res.status(400).json({ erro: "A senha deve ter pelo menos 4 caracteres." });
  }

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: "E-mail ou senha incorretos." });
  }

  return res.status(200).json({
    sucesso: "Login realizado com sucesso!",
    usuario: { email: usuario.email },
  });
});

// ===============================
// API de Notícias (com NewsAPI)
// ===============================
app.get("/api/noticias", async (req, res) => {
  try {
    const resposta = await fetch(
      `https://newsapi.org/v2/everything?q=futebol%20feminino&language=pt&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await resposta.json();

    if (!data.articles) {
      return res.status(500).json({ erro: "Não foi possível carregar notícias." });
    }

    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ erro: "Erro ao buscar notícias." });
  }
});

// ===============================
// API de Contato (receber mensagem)
// ===============================
app.post("/contato", (req, res) => {
  const { nome, email, mensagem } = req.body;

 if (!email || !email.includes("@")) {
  return res.status(400).json({ erro: "E-mail inválido." });
}
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  // Aqui poderia salvar no banco de dados
  console.log("Mensagem recebida:", { nome, email, mensagem });

  res.status(200).json({ sucesso: "Mensagem enviada com sucesso!" });
});

// ===============================
// Subir servidor
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});