# 🚀 Guia de Publicação no GitHub Pages

Este guia vai te ajudar a publicar seu portfólio no GitHub Pages e garantir que seja indexado corretamente.

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Repositório criado no GitHub

## 🔧 Passo a Passo

### 1. Criar o Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em **New repository**
3. Nome do repositório: `portfolio-vscode-theme` (ou o nome que preferir)
4. Marque como **Public** (importante para GitHub Pages gratuito)
5. **NÃO** marque "Initialize with README"
6. Clique em **Create repository**

### 2. Configurar o Git Localmente

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Portfolio VSCode Theme"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/portfolio-vscode-theme.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### 3. Atualizar URLs no Código (IMPORTANTE!)

Antes de publicar, você precisa atualizar as URLs no código para o domínio do GitHub Pages:

1. **No arquivo `sitemap.xml`**: Atualize `mellow-up` para seu usuário do GitHub
2. **No arquivo `index.html`** (meta tags): Atualize a URL do `canonical` e `og:url`
3. **No arquivo `robots.txt`**: Atualize a URL do sitemap

Exemplo de URLs a atualizar:
- `https://mellow-up.github.io/portfolio-vscode-theme/` 
- Substitua por: `https://SEU_USUARIO.github.io/portfolio-vscode-theme/`

### 4. Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
5. Clique em **Save**

### 5. Acessar seu Site

Após alguns minutos, seu site estará disponível em:
```
https://SEU_USUARIO.github.io/portfolio-vscode-theme/
```

## 🔍 Indexação e SEO

### Arquivos Criados para Melhor Indexação:

1. **robots.txt** - Permite que bots (incluindo OpenAI GPTBot) indexem o site
2. **sitemap.xml** - Mapa do site para facilitar a indexação
3. **Meta tags SEO** - Adicionadas no `<head>` do index.html
4. **Structured Data (JSON-LD)** - Dados estruturados para melhor compreensão pelos buscadores

### Verificar Indexação:

1. **Google Search Console**: 
   - Acesse https://search.google.com/search-console
   - Adicione sua propriedade (URL do GitHub Pages)
   - Envie o sitemap

2. **Testar Meta Tags**:
   - Use: https://www.opengraph.xyz/
   - Cole a URL do seu site para ver como aparece em redes sociais

3. **Verificar robots.txt**:
   - Acesse: `https://SEU_USUARIO.github.io/portfolio-vscode-theme/robots.txt`

## 📝 Manutenção

### Para fazer atualizações:

```bash
# Fazer alterações nos arquivos
# Depois:

git add .
git commit -m "Descrição das alterações"
git push origin main
```

As alterações estarão disponíveis em alguns minutos.

## ⚠️ Notas Importantes

1. **URLs**: Certifique-se de atualizar TODAS as URLs nos arquivos para seu usuário GitHub
2. **HTTPS**: GitHub Pages já vem com HTTPS automático
3. **Domínio Customizado**: Você pode configurar um domínio próprio nas configurações do Pages
4. **Atualizar Sitemap**: Lembre-se de atualizar o `sitemap.xml` quando fizer mudanças significativas

## 🐛 Problemas Comuns

### Site não aparece
- Aguarde alguns minutos (pode levar até 10 minutos)
- Verifique se a branch está correta (main ou master)
- Verifique se o repositório é público

### CSS não carrega
- Verifique os caminhos dos arquivos CSS (devem ser relativos)
- Limpe o cache do navegador (Ctrl+F5)

### Links não funcionam
- Verifique se todos os caminhos estão corretos
- Use caminhos relativos para arquivos locais

## 📚 Recursos Úteis

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Search Console](https://search.google.com/search-console)
- [Open Graph Protocol](https://ogp.me/)

---

**Boa sorte com seu portfólio! 🚀**

