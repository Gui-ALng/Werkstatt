# Werkstatt

Portfólio pessoal para apresentar projetos, experiências e formas de contato, construído com Laravel 13, React, Inertia e Tailwind CSS.

Escolhi o nome Werkstatt pois siginifica estação de trabalho em alemão, e todo o intuito deste projeto é ser como uma vitrine de das minhas experiências 

Aplicação Laravel 13 com React, Inertia e Tailwind CSS.

## Arquitetura

- Backend em Laravel 13 com rotas em `routes/web.php`.
- Frontend em React 19 com páginas Inertia em `resources/js/pages`.
- Componentes compartilhados em `resources/js/components`.
- Estilos globais em `resources/css` com Tailwind CSS v4.
- Build e HMR via Vite.
- Wayfinder gera funções tipadas para rotas e ações Laravel.
- Fortify cuida da autenticação.

## Como rodar

### Pré-requisitos

- PHP 8.4+
- Composer 2.8+
- Node.js 18+
- Banco configurado no `.env`

### Instalação

```bash
composer install
npm install
```

### Configuração do ambiente

Crie o arquivo `.env` a partir do exemplo e ajuste as variáveis do projeto, especialmente as de banco de dados e `APP_URL`.

```bash
copy .env.example .env
php artisan key:generate
php artisan package:discover
```

### Execução em desenvolvimento

```bash
composer run dev
```

Isso inicia o servidor Laravel, a fila local e o Vite em conjunto.

### Execução separada

Terminal 1:

```bash
php artisan serve --host=127.0.0.1 --port=8000
```

Terminal 2:

```bash
npm run dev
```

### Acesso

- Aplicação: http://127.0.0.1:8000
- Vite: http://localhost:5173
