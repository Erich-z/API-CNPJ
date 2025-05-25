import express from "express";

const host = "0.0.0.0";
const port = 3000;

let listarCadastro = [];

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
      <style>
        body {
          background: linear-gradient(135deg, #0049e6, #f5f7fa);
          font-family: 'Poppins', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        .login-container {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        h2 {
          text-align: center;
          color: #0d6efd;
          margin-bottom: 30px;
        }
        .btn-custom {
          background: linear-gradient(135deg, #0d6efd, #6610f2);
          border: none;
          border-radius: 30px;
          color: white;
          width: 100%;
          padding: 12px;
          font-weight: bold;
          transition: 0.4s ease;
        }
        .btn-custom:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #6610f2, #0d6efd);
        }
      </style>
    </head>
    <body>
      <div class="login-container">
        <h2><i class="bi bi-box-arrow-in-right"></i> Login</h2>
        <form method="POST" action="/login">
          <div class="mb-3">
            <label for="usuario" class="form-label">Usuário</label>
            <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Digite seu usuário">
          </div>
          <div class="mb-3">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite sua senha">
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-custom">Entrar</button>
          </div>
        </form>
      </div>
    </body>
    </html>
  `);
});


app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  let conteudo = `
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
      body {
        background: linear-gradient(135deg, #0049e6, #f5f7fa);
        font-family: 'Poppins', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
      }
      .login-container {
        background-color: #ffffff;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
      }
      h2 {
        text-align: center;
        color: #0d6efd;
        margin-bottom: 30px;
      }
      .btn-custom {
        background: linear-gradient(135deg, #0d6efd, #6610f2);
        border: none;
        border-radius: 30px;
        color: white;
        width: 100%;
        padding: 12px;
        font-weight: bold;
        transition: 0.4s ease;
      }
      .btn-custom:hover {
        transform: translateY(-2px);
        background: linear-gradient(135deg, #6610f2, #0d6efd);
      }
      .text-danger {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="login-container">
      <h2><i class="bi bi-box-arrow-in-right"></i> Login</h2>
      <form method="POST" action="/login">
  `;

 
  if (!usuario) {
    conteudo += `
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuário</label>
        <input type="text" class="form-control is-invalid" id="usuario" name="usuario" placeholder="Digite seu usuário">
        <p class="text-danger">Usuário é obrigatório</p>
      </div>
    `;
  } else {
    conteudo += `
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuário</label>
        <input type="text" class="form-control" id="usuario" name="usuario" value="${usuario}">
      </div>
    `;
  }

  
  if (!senha) {
    conteudo += `
      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control is-invalid" id="senha" name="senha" placeholder="Digite sua senha">
        <p class="text-danger">Senha é obrigatória</p>
      </div>
    `;
  } else {
    conteudo += `
      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input type="password" class="form-control" id="senha" name="senha" value="${senha}">
      </div>
    `;
  }

  if (!usuario || !senha) {
    conteudo += `
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-custom">Entrar</button>
        </div>
      </form>
    </div>
  </body>
  </html>
    `;
    return res.send(conteudo);
  }

  
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>Login Sucesso</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script>
        setTimeout(() => {
          window.location.href = "/cadastroCliente";
        }, 1500);
      </script>
    </head>
    <body class="d-flex align-items-center justify-content-center bg-light" style="height: 100vh;">
      <div class="text-center">
        <h2 class="text-success"><i class="bi bi-check-circle"></i> Login efetuado com sucesso!</h2>
        <p class="mt-2">Redirecionando para o cadastro...</p>
      </div>
    </body>
    </html>
  `);
});



app.get("/cadastroCliente", (req, res) =>{
    res.send(`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cadastro de Empresa</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <style>
    body {
      background: linear-gradient(135deg, #e0eaff, #f5f7fa);
      font-family: 'Poppins', sans-serif;
    }

    .navbar {
      background-color: #343a40;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .navbar-brand,
    .nav-link {
      color: #ffffff !important;
    }

    .form-container {
      max-width: 720px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 40px 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .form-container:hover {
      transform: scale(1.01);
      box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
    }

    h2 {
      font-weight: 700;
      color: #0d6efd;
      text-align: center;
      margin-bottom: 30px;
    }

    label {
      font-weight: 500;
    }

    input, select {
      border-radius: 12px !important;
      transition: 0.3s;
    }

    input:focus, select:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }

    .btn-custom {
      background: linear-gradient(135deg, #0d6efd, #6610f2);
      border: none;
      border-radius: 30px;
      color: white;
      padding: 12px 30px;
      font-weight: bold;
      transition: 0.4s ease;
    }

    .btn-custom:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, #6610f2, #0d6efd);
      color: white;
    }

    .form-icon {
      margin-right: 10px;
      color: #0d6efd;
    }
  </style>
</head>
<body>

  <!-- MENU -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/cadastroCliente"><i class="bi bi-building"></i> E&V</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link" href="/cadastroCliente"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="/listarCadastro"><i class="bi bi-person-plus-fill"></i> Ver cadastros</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/logout"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- FORMULÁRIO -->
  <div class="form-container">
    <h2><i class="bi bi-person-vcard"></i> Cadastro de Empresa</h2>
   <form method="POST" action="/cadastroCliente">
      <div class="mb-3">
        <label for="cnpj"><i class="bi bi-file-earmark-text form-icon"></i>CNPJ</label>
        <input type="text" class="form-control" id="cnpj" name="cnpj" oninput="mCnpj(this)" maxlength="18" placeholder="00.000.000/0001-00" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="mb-3">
        <label for="razao"><i class="bi bi-person-lines-fill form-icon"></i>Razão Social / Nome do Fornecedor</label>
        <input type="text" class="form-control" id="razao" name="razao" placeholder="Ex: Moraes & Irmãos Ltda" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="mb-3">
        <label for="fantasia"><i class="bi bi-shop form-icon"></i>Nome Fantasia</label>
        <input type="text" class="form-control" id="fantasia" name="fantasia" placeholder="Ex: Loja do 1,99" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="mb-3">
        <label for="endereco"><i class="bi bi-geo-alt-fill form-icon"></i>Endereço</label>
        <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua Exemplo, 123" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cidade"><i class="bi bi-geo-alt form-icon"></i>Cidade</label>
          <input type="text" class="form-control" id="cidade" name="cidade">
          <p class="text-danger" id="erroLogin"></p>
        </div>
        <div class="col-md-2 mb-3">
          <label for="uf"><i class="bi bi-map form-icon"></i>UF</label>
          <select class="form-select" id="uf" name="uf">
            <option value="">UF</option>
            <option>SP</option>
            <option>RJ</option>
            <option>MG</option>
            <option>RS</option>
          </select>
          <p class="text-danger" id="erroLogin"></p>
        </div>
        <div class="col-md-4 mb-3">
          <label for="cep"><i class="bi bi-mailbox form-icon"></i>CEP</label>
          <input type="text" class="form-control" id="cep" name="cep">
          <p class="text-danger" id="erroLogin"></p>
        </div>
      </div>
      <div class="mb-3">
        <label for="email"><i class="bi bi-envelope-fill form-icon"></i>E-mail</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="email@empresa.com.br" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="mb-3">
        <label for="telefone"><i class="bi bi-telephone-fill form-icon"></i>Telefone</label>
        <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(11) 99999-9999" >
        <p class="text-danger" id="erroLogin"></p>
      </div>
      <div class="text-center mt-4">
        <button type="submit" class="btn btn-custom">Cadastrar Empresa</button>
      </div>
    </form>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

 <script>
 </script>

</body>
</html>
`)
})

app.post("/cadastroCliente", (req, res) => {
    const cnpj = req.body.cnpj;
    const razao = req.body.razao;
    const fantasia = req.body.fantasia;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;

    if (cnpj && razao && fantasia && endereco && cidade && uf && cep && email && telefone) {
        listarCadastro.push({
            cnpj: cnpj,
            razao: razao,
            fantasia: fantasia,
            endereco: endereco,
            cidade: cidade,
            uf: uf,
            cep: cep,
            email: email,
            telefone: telefone
        });
        res.redirect("/listarCadastro");
    } else {
        let conteudo = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cadastro de Empresa</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
  <style>
    body {
      background: linear-gradient(135deg, #e0eaff, #f5f7fa);
      font-family: 'Poppins', sans-serif;
    }

    .navbar {
      background-color: #343a40;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .navbar-brand,
    .nav-link {
      color: #ffffff !important;
    }

    .form-container {
      max-width: 720px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 40px 50px;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }

    .form-container:hover {
      transform: scale(1.01);
      box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
    }

    h2 {
      font-weight: 700;
      color: #0d6efd;
      text-align: center;
      margin-bottom: 30px;
    }

    label {
      font-weight: 500;
    }

    input, select {
      border-radius: 12px !important;
      transition: 0.3s;
    }

    input:focus, select:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
    }

    .btn-custom {
      background: linear-gradient(135deg, #0d6efd, #6610f2);
      border: none;
      border-radius: 30px;
      color: white;
      padding: 12px 30px;
      font-weight: bold;
      transition: 0.4s ease;
    }

    .btn-custom:hover {
      transform: translateY(-2px);
      background: linear-gradient(135deg, #6610f2, #0d6efd);
      color: white;
    }

    .form-icon {
      margin-right: 10px;
      color: #0d6efd;
    }

  </style>
</head>

<body>

<!-- MENU -->
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/cadastroCliente"><i class="bi bi-building"></i> E&V</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link" href="/cadastroCliente"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="/listarCadastro"><i class="bi bi-person-plus-fill"></i> Ver cadastros</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/logout"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>


  <div class="form-container">
    <h2><i class="bi bi-person-vcard"></i> Cadastro de Empresa</h2>
    <form method="POST" action="/cadastroCliente">
`;

        if (!cnpj) {
            conteudo += `
      <div class="mb-3">
        <label for="cnpj">CNPJ</label>
        <input type="text" class="form-control" id="cnpj" name="cnpj" placeholder="00.000.000/0001-00">
        <p class="text-danger">Por favor informe o CNPJ</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="cnpj">CNPJ</label>
        <input type="text" class="form-control" id="cnpj" name="cnpj" value="${cnpj}">
      </div>
            `;
        }

        if (!razao) {
            conteudo += `
      <div class="mb-3">
        <label for="razao">Razão Social</label>
        <input type="text" class="form-control" id="razao" name="razao" placeholder="Ex: Moraes & Irmãos Ltda">
        <p class="text-danger">Por favor informe a Razão Social</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="razao">Razão Social</label>
        <input type="text" class="form-control" id="razao" name="razao" value="${razao}">
      </div>
            `;
        }

        if (!fantasia) {
            conteudo += `
      <div class="mb-3">
        <label for="fantasia">Nome Fantasia</label>
        <input type="text" class="form-control" id="fantasia" name="fantasia" placeholder="Ex: Loja do 1,99">
        <p class="text-danger">Por favor informe o Nome Fantasia</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="fantasia">Nome Fantasia</label>
        <input type="text" class="form-control" id="fantasia" name="fantasia" value="${fantasia}">
      </div>
            `;
        }

        if (!endereco) {
            conteudo += `
      <div class="mb-3">
        <label for="endereco">Endereço</label>
        <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua Exemplo, 123">
        <p class="text-danger">Por favor informe o Endereço</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="endereco">Endereço</label>
        <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}">
      </div>
            `;
        }

        if (!cidade) {
            conteudo += `
      <div class="mb-3">
        <label for="cidade">Cidade</label>
        <input type="text" class="form-control" id="cidade" name="cidade" placeholder="São Paulo">
        <p class="text-danger">Por favor informe a Cidade</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="cidade">Cidade</label>
        <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">
      </div>
            `;
        }

       if (!uf) {
        conteudo += `
        <div class="col-md-2 mb-3">
          <label for="uf">UF</label>
          <select class="form-select" id="uf" name="uf">
            <option value="" selected>UF</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            <option value="RS">RS</option>
          </select>
          <p class="text-danger">Por favor informe a UF</p>
        </div>
        `;
      } else {
        conteudo += `
        <div class="col-md-2 mb-3">
          <label for="uf">UF</label>
          <select class="form-select" id="uf" name="uf">
            <option value="" ${!uf ? 'selected' : ''}>UF</option>
            <option value="SP" ${uf === 'SP' ? 'selected' : ''}>SP</option>
            <option value="RJ" ${uf === 'RJ' ? 'selected' : ''}>RJ</option>
            <option value="MG" ${uf === 'MG' ? 'selected' : ''}>MG</option>
            <option value="RS" ${uf === 'RS' ? 'selected' : ''}>RS</option>
          </select>
          <p class="text-danger"></p>
        </div>
        `;
      }

        if (!cep) {
            conteudo += `
      <div class="mb-3">
        <label for="cep">CEP</label>
        <input type="text" class="form-control" id="cep" name="cep" placeholder="00000-000">
        <p class="text-danger">Por favor informe o CEP</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="cep">CEP</label>
        <input type="text" class="form-control" id="cep" name="cep" value="${cep}">
      </div>
            `;
        }

        if (!email) {
            conteudo += `
      <div class="mb-3">
  <label for="email">E-mail</label>
  <input type="email" class="form-control" id="email" name="email" value="${email || ""}" placeholder="email@empresa.com.br">
  <p class="text-danger" style="min-height: 18px; margin: 4px 0 0;">
    ${!email ? "Email é obrigatório" : ""}
  </p>
</div>

            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" value="${email}">
      </div>
            `;
        }

        if (!telefone) {
            conteudo += `
      <div class="mb-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone" name="telefone" placeholder="(11) 99999-9999">
        <p class="text-danger">Por favor informe o Telefone</p>
      </div>
            `;
        } else {
            conteudo += `
      <div class="mb-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone" name="telefone" value="${telefone}">
      </div>
            `;
        }

        conteudo += `
      <div class="text-center mt-4">
        <button type="submit" class="btn btn-custom">Cadastrar Empresa</button>
      </div>
    </form>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
        `;

        res.send(conteudo);
    }
});



app.get("/listarCadastro", (req, res) => {
  let conteudo = `
  <!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cadastro de Empresa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet" />
    <style>
      body {
        background: linear-gradient(135deg, #e0eaff, #f5f7fa);
        font-family: 'Poppins', sans-serif;
      }

      .navbar {
        background-color: #343a40;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
      }

      .navbar-brand,
      .nav-link {
        color: #ffffff !important;
      }

      .table-container {
        max-width: 1000px;
        margin: 60px auto;
        background-color: #ffffff;
        padding: 20px 30px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      }

      h2 {
        font-weight: 700;
        color: #0d6efd;
        text-align: center;
        margin-bottom: 30px;
      }

      .btn-novo {
        background-color: #0d6efd;
        color: #fff;
        font-weight: bold;
        border-radius: 20px;
        padding: 10px 20px;
        margin-bottom: 20px;
      }

      .btn-vermais {
        background-color: #6610f2;
        color: white;
        font-size: 14px;
        padding: 6px 12px;
        border: none;
        border-radius: 12px;
      }

      .info-extra {
        display: none;
        background-color: #f8f9fa;
      }

      @media (max-width: 576px) {
        .btn-vermais {
          width: 100%;
          margin-top: 5px;
        }
      }
    </style>
  </head>
  <body>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/cadastroCliente"><i class="bi bi-building"></i> E&V</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a class="nav-link" href="/cadastroCliente"><i class="bi bi-house-door-fill"></i> Home</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/logout"><i class="bi bi-box-arrow-right"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="table-container">
    <h2><i class="bi bi-list-ul"></i> Lista de Empresas Cadastradas</h2>
    <a href="/cadastroCliente" class="btn btn-novo"><i class="bi bi-plus-circle"></i> Novo Cadastro</a>

    <div class="table-responsive">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Nome Fantasia</th>
            <th>Cidade</th>
            <th>Email</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>`;

  for (let empresa of listarCadastro) {
    conteudo += `
      <tr>
        <td>${empresa.cnpj}</td>
        <td>${empresa.razao}</td>
        <td>${empresa.fantasia}</td>
        <td>${empresa.cidade}</td>
        <td>${empresa.email}</td>
        <td><button class="btn btn-vermais btn-sm" onclick="toggleInfo(this)">Ver mais</button></td>
      </tr>
      <tr class="info-extra">
        <td colspan="6">
          <strong>Endereço:</strong> ${empresa.endereco}<br>
          <strong>UF:</strong> ${empresa.uf}<br>
          <strong>CEP:</strong> ${empresa.cep}<br>
          <strong>Telefone:</strong> ${empresa.telefone}
        </td>
      </tr>
    `;
  }

  conteudo += `
        </tbody>
      </table>
    </div>
  </div>

  <script>
    function toggleInfo(button) {
      const row = button.closest('tr');
      const nextRow = row.nextElementSibling;
      if (nextRow && nextRow.classList.contains('info-extra')) {
        nextRow.style.display = nextRow.style.display === 'table-row' ? 'none' : 'table-row';
      }
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
  </html>`;

  res.send(conteudo);
});

app.get("/logout", (req, res)=>{
   res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <title>Logout Sucesso</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script>
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      </script>
    </head>
    <body class="d-flex align-items-center justify-content-center bg-light" style="height: 100vh;">
      <div class="text-center">
        <h2 class="text-success"><i class="bi bi-check-circle"></i> Logout efetuado com sucesso!</h2>
        <p class="mt-2">Redirecionando para o inicio...</p>
      </div>
    </body>
    </html>
  `);
})
app.listen(port, host, () => {
    console.log(`Servidor em execução em http://localhost:${port}/`);
});
