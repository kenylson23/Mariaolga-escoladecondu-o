# 🚀 Deploy no Netlify - Escola de Condução Maria Olga

## Preparação Completa para Deploy Estático

### ✅ Arquivos Preparados

1. **Pasta de Deploy**: `dist/public/` (contém todos os arquivos estáticos)
2. **Configuração Netlify**: `netlify.toml` (configurações de build e redirects)
3. **Redirects SPA**: `dist/public/_redirects` (para roteamento do React)

### 📁 Estrutura dos Arquivos

```
dist/public/
├── assets/
│   ├── index-[hash].js         # JavaScript bundle
│   ├── index-[hash].css        # CSS styles
│   └── *.png                   # Imagens do site
├── index.html                  # Página principal
└── _redirects                  # Configuração de rotas SPA
```

### 🌐 Como Fazer Deploy no Netlify

#### Opção 1: Deploy via Interface Web
1. Acesse [netlify.com](https://netlify.com)
2. Faça login na sua conta
3. Clique em "Sites" > "Add new site" > "Deploy manually"
4. Arraste a pasta `dist/public` para a área de upload
5. Site estará disponível em poucos minutos

#### Opção 2: Deploy via Git (Recomendado)
1. Suba o código para GitHub/GitLab
2. No Netlify: "Sites" > "Add new site" > "Import from Git"
3. Conecte ao repositório
4. Configurações automáticas:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: 18

### 🔧 Configurações Incluídas

- ✅ Redirects SPA para roteamento client-side
- ✅ Headers de segurança (X-Frame-Options, Content-Type, Referrer-Policy)
- ✅ Cache otimizado para assets estáticos (1 ano)
- ✅ Suporte completo para todas as funcionalidades
- ✅ WhatsApp integrado e funcionando
- ✅ Responsivo para mobile e tablet

### 📱 Funcionalidades Incluídas

- **Site totalmente responsivo** para desktop, tablet e smartphone
- **Integração WhatsApp** com formulário de contato
- **Calculadora de mensalidades** interativa
- **Quiz do código da estrada** angolano
- **Galeria de imagens** da escola
- **Dicas de condução** e preparação para exames
- **Informações completas dos cursos** (Ligeiro, Pesado, etc.)

### 🌟 Pronto para Produção

O site está 100% preparado para deploy estático no Netlify com:
- Todos os assets otimizados
- Configurações de segurança
- Performance otimizada
- SEO configurado

**🎯 Basta fazer upload da pasta `dist/public` no Netlify!**