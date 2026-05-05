# 🚀 Como Ativar GitHub Pages - Passo a Passo

## 1. Configurar GitHub Pages

1. Acesse: https://github.com/joaohugo89/Pokedex/settings/pages
2. Em **Build and deployment**:
   - Branch: `main`
   - Folder: `/ (root)`
3. Clique em **Save**

## 2. Aguardar o Deploy

- O deploy é automático quando você faz push no `main`
- Veja o status em: https://github.com/joaohugo89/Pokedex/actions
- Pode levar 1-2 minutos

## 3. Acessar o Site

Depois que o deploy estiver verde:
```
https://joaohugo89.github.io/Pokedex/
```

## 📝 O que foi configurado

✅ **GitHub Actions** - Deploy automático no push para main
✅ **Node.js 24** - Versão atualizada no workflow
✅ **Base Path** - Configurado como `/Pokedex/`
✅ **Documentação** - Instruções completas

## 🔄 Como atualizar o site

Apenas faça um commit e push:
```bash
git add .
git commit -m "Atualização"
git push
```

## 🐛 Se não funcionar

1. Verifique se as Settings do Pages estão corretas
2. Veja os logs no GitHub Actions
3. Limpe o cache: `npm run build` e tente novamente

---

**Status:** ✅ Configuração pronta
**Próximo passo:** Ativar Pages nas settings do repositório!