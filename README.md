# Portfolio VSCode Theme - Mellow Up

Portfolio pessoal inspirado no Visual Studio Code com o tema "Shades of Purple (Super Dark)".

🌐 **Acesse o site:** [mellow-up.github.io/portfolio-vscode-theme](https://mellow-up.github.io/portfolio-vscode-theme/)

## 🚀 Publicação no GitHub Pages

Para publicar este portfólio no GitHub Pages, consulte o arquivo [DEPLOY.md](DEPLOY.md) com instruções detalhadas.

## 🚀 Como usar o Scraper do LinkedIn

### Opção 1: Usando Node.js (JavaScript)

#### Passo 1: Instalar dependências

```bash
npm install
```

#### Passo 2: Executar o scraper

```bash
npm run scrape
```

O script irá:
- Abrir um navegador automaticamente (Chrome)
- Você precisa fazer login no LinkedIn (caso não esteja logado)
- Navegar para seu perfil: `https://www.linkedin.com/in/mellow-up/`
- Extrair as informações e salvar em `linkedin-data.json`

#### Passo 3: Atualizar o portfolio

```bash
npm run update-portfolio
```

Este comando irá:
- Ler os dados do `linkedin-data.json`
- Atualizar automaticamente o `index.html` com suas informações reais

### Opção 2: Usando Python

#### Passo 1: Instalar dependências

```bash
pip install -r requirements.txt
```

#### Passo 2: Executar o scraper

```bash
python scraper.py
```

**Nota:** Você precisará do ChromeDriver instalado. Baixe em: https://chromedriver.chromium.org/

#### Passo 3: Atualizar o portfolio

```bash
node update-portfolio.js
```

## 📋 Informações coletadas

O scraper extrai:
- ✅ Nome completo
- ✅ Título profissional
- ✅ Localização
- ✅ Resumo/Sobre
- ✅ Experiências profissionais
- ✅ Educação
- ✅ Habilidades
- ✅ Projetos

## 🎨 Estrutura do Projeto

```
portfolio-vscode-theme/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos do tema
├── js/
│   └── script.js      # Funcionalidades interativas
├── scraper.js         # Script de scraping do LinkedIn
├── update-portfolio.js # Script para atualizar HTML
├── package.json       # Dependências Node.js
└── README.md          # Este arquivo
```

## ⚠️ Notas importantes

- O LinkedIn pode bloquear scraping automatizado
- Certifique-se de estar logado no LinkedIn antes de executar o scraper
- O scraper funciona melhor com perfis públicos ou acessíveis
- Sempre revise os dados extraídos antes de publicar

## 🔧 Personalização Manual

Se o scraper não funcionar, você pode editar manualmente o arquivo `index.html` nas seguintes seções:

1. **Sobre Mim** (linha ~117): Adicione seu resumo profissional
2. **Projetos** (linha ~133): Liste seus principais projetos
3. **Experiência** (linha ~170): Adicione suas experiências profissionais
4. **Contato** (linha ~186): Atualize seus links de contato

## 📝 Licença

MIT License - Sinta-se livre para usar e modificar!

