<h1 align="center">
    CRUD SERVERLESS AWS RDS
</h1>

<p align="center"> Crud serverless e RDS MySQL 💻🚀 </p>

<p align="center">
 <a href="#objective">Objetivo</a> •
 <a href="#technologies">Tecnologias</a> • 
 <a href="#install">Instalação</a> • 
 <a href="#usage">Uso</a> • 
 <a href="#author">Autor</a> • 
</p>


<h2 id="objective" > 🎯 Objetivo </h2>

<p>Projeto feito com objetivo de criar um crud usando lambda aws e nodejs</p>

<h2 id="technologies"> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção:

- [Serverless](https://www.serverless.com/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com) or Npm
- [VSCode](https://code.visualstudio.com)
- [Git Bash](https://gitforwindows.org/)

<h2 id="install" > 👷 Instalação </h2>

Obrigatorio! Instalar Git, node e yarn (ou npm).

```bash
# Clone Repositorio
$ git clone https://github.com/thegenes93/Crud_Serverless_Aws_RDS

# Vá para pasta
$ cd  Crud_Serverless_Aws_RDS

# Instale as dependencias
$ yarn ou npm install

# Run Test

```
<h2 id="usage" > 👷 Uso </h2>

Todas as rotas estão disponiveis no seguinte links

```bash
# Metodo GET
https://syk5y0yxi9.execute-api.us-east-1.amazonaws.com/dev/
 - Request: nobody;
    - Response:{
        [
            {
                "id": number,
                "idade": number,
                "nome": string,
                "cargo": string
            }
 
        ]
    }

# Metodo POST
https://syk5y0yxi9.execute-api.us-east-1.amazonaws.com/dev/
- Request:
            {
                "idade": number,
                "nome": string,
                "cargo": string
            }
- Response:{  Status:200   }

# Metodo PUT
https://syk5y0yxi9.execute-api.us-east-1.amazonaws.com/dev/
- Request:
            {
                "idade": number,
                "idade": number,
                "nome": string,
                "cargo": string
            }
- Response:{  Status:200   }

# Metodo DELETE
https://syk5y0yxi9.execute-api.us-east-1.amazonaws.com/dev/?id=number
- Request: nobody;
- Response:{  Status:200   }

```


<h2 id="author"> 💻 Autor </h2>

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/41095513?s=400&u=0c360e7267919801f6d75d08e4f6c594501a7878&v=4" width="100px;" alt=""/>
