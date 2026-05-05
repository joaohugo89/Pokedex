# Configuração do GitHub Pages

## 🚀 Como Ativar GitHub Pages

1. **Acesse as Settings do Repositório**
   - Vá em: Settings > Pages

2. **Configure o Source**
   - Em "Build and deployment", clique em "Branch"
   - Selecione: `main` como branch
   - Selecione: `/ (root)` como pasta
   - Clique em "Save"

3. **Aguardar o Deploy**
   - O CI/CD do GitHub Actions vai iniciar automaticamente
   - Você pode ver os logs em: Actions > Deploy to GitHub Pages
   - O build usa Node.js 24

4. **Acesse sua Página**
   - Depois de alguns minutos, sua Pokédex estará disponível em:
   ```
   https://joaohugo89.github.io/Pokedex/
   ```

## 📊 Status do Deploy

- ✅ Workflow configurado
- ✅ Build automatico ativado
- ✅ Deploy para GitHub Pages configurado

## 🔄 Manutenção

O deploy é automático:
- **Push no branch `main`** = Deploy automático
- **Pull Requests** = Build testado (mas não deployado)

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento local
npm run dev

# Build local
npm run build

# Preview do build local
npm run preview

# Deploy para GitHub Pages (manual)
npm run deploy
```

## 🎯 Deploy Automático

O GitHub Actions vai:
1. ✅ Rodar os testes (se houver)
2. ✅ Fazer o build
3. ✅ Fazer upload para GitHub Pages
4. ✅ Atualizar o site em: `https://joaohugo89.github.io/Pokedex/`

## 🐛 Troubleshooting

### Build Falhando
- Verifique se o Node.js está instalado corretamente
- Limpe o cache: `rm -rf node_modules/.vite`
- Instale dependências: `npm install`

### Página Não Aparecendo
- Aguarde 2-3 minutos após o push
- Verifique o status no GitHub Actions
- Verifique as configurações de Pages nas Settings

### 404 ao Carregar Imagens
- Certifique-se de que `vite.config.js` tenha `base: '/Pokedex/'`
- Imagens estão no diretório `public/`