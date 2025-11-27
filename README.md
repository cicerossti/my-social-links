
Este projeto foi construído utilizando um conjunto moderno de ferramentas voltadas para performance, escalabilidade e eficiência no desenvolvimento de interfaces. A seguir, você encontra as instruções essenciais para editar, executar e publicar sua aplicação.

Tecnologias Utilizadas

A aplicação é baseada em um stack moderno:

- Vite – Bundler rápido para desenvolvimento e build.

- React – Biblioteca para construção de interfaces modernas.

- TypeScript – Tipagem estática para maior segurança e organização do código.

- shadcn-ui – Componentes de interface acessíveis e flexíveis.

- Tailwind CSS – Utilitário de estilização altamente produtivo.

Como editar o projeto

Você pode trabalhar no código utilizando qualquer IDE ou editor de texto de sua preferência (VS Code recomendado).

1. Clonando o repositório
git clone <SEU_GIT_URL>

2. Acessando o diretório
cd <NOME_DO_PROJETO>

3. Instalando dependências

Certifique-se de ter Node.js e npm instalados.

npm i

4. Executando o servidor de desenvolvimento

O projeto utiliza hot reload para facilitar o fluxo de trabalho.

npm run dev


A partir daqui, você já pode modificar os arquivos na pasta src/.
Os diretórios comuns incluem:

src/components – Componentes reutilizáveis.

src/pages ou src/routes – Páginas da aplicação.

src/lib – Utilidades e lógica de apoio.

src/styles – Configurações de estilo quando necessário.

Faça suas alterações e acompanhe o resultado imediatamente no navegador.

Edição direta via GitHub

Para ajustes rápidos:

Abra o repositório no GitHub.

Navegue até o arquivo desejado.

Clique no ícone de edição (lápis).

Realize suas modificações.

Salve com um commit direto no repositório.

Utilizando GitHub Codespaces

Para trabalhar em um ambiente completo na nuvem, sem necessidade de instalar nada localmente:

Acesse o repositório no GitHub.

Clique em Code.

Abra a aba Codespaces.

Selecione New Codespace.

Isso abrirá um ambiente semelhante ao VS Code diretamente no navegador.

Como publicar o projeto

A publicação depende da plataforma de sua preferência. Como se trata de um projeto Vite/React, você pode usar serviços como:

Vercel

Netlify

GitHub Pages

Render

Para publicar, geralmente basta:

npm run build


O resultado será gerado na pasta dist/, que você pode enviar para o serviço de hosting de sua escolha.

Conectar um domínio personalizado

Após subir o build em um serviço de hospedagem, configure seu domínio seguindo os passos oferecidos pela própria plataforma. Geralmente envolve:

Acessar as configurações do domínio.

Criar registros DNS do tipo CNAME ou A.

Aguardar a propagação.
