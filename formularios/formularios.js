//variaveis

        
        let Animacao = document.getElementById('Animacao') //Animacao de animação
        let titulo = document.getElementById('titulo')
        let label = document.getElementsByClassName('label') //get nas classes Label
        let enviarC = document.getElementById('enviarC') //Enviar Cadastro
        let enviarL = document.getElementById('enviarL') //Enviar Login
        //Cadastro
        let cadastro = document.getElementById('Fcadastro') //Fazer cadastro
        //coletando informações pelo id
        let inputnome = document.getElementById('nome') 
        let inputemail = document.getElementById('email')
        let inputsenha = document.getElementById('senha')
        let inputconfisenha = document.getElementById('confisenha')
        
        
        
        //Login
        let login = document.getElementById('Flogin') // mensagem 'Ja tem cadastro'
        let labelL = document.getElementsByClassName('labelLog') //classes do LOGIN
        let btnMostrar = document.getElementById('btnMostrar') //mostrar senha
        let btnMostrartxt = document.getElementById('btnMostrartxt') //mostrar senha
        //coletando informações pelo id
        let inputLemail = document.getElementById('emailLogin') // inputemail
        let inputLsenha = document.getElementById('senhaLogin') // inputsenha
        //convertendo para apenas o valor dos campos (Tratamento de dados)
        



//CADASTRO
        

        //Quando o formulário de cadastro for enviado, execute essa função
        document.getElementById("formCad").addEventListener("submit", function(e) {
            e.preventDefault() //Impede o recarregamento da página

        //Pegando o valor dos campos (Tratamento de dados)
            //Variveis para Cadastro
            let nome = inputnome.value
            let email = inputemail.value
            let senha = inputsenha.value
            let confisenha = inputconfisenha.value
            


             if (!email.includes("@") || !email.includes(".")) { // Se não tiver "@" OU não tiver "."
                alert(`Email inválido.  Certifique-se de que contém '@' e '.' em ${email}`);
                return;
            }
            if (senha != confisenha){
                alert(`Sua senhas não são as mesmas confirme...`)
            }
            else{ 
            // Criando objeto com email e senha
            const usuario = {
                nome: nome,
                email: email,
                senha: senha
            }
           
              // Salvando no localStorage
            localStorage.setItem("usuario", JSON.stringify(usuario))
            alert(`Parabens ${nome}, seu cadastro foi realizado com sucesso!`)
        }})

        //LOGIN

        document.getElementById("formLog").addEventListener("submit", function(e) {
        e.preventDefault()

        // Variaveis para validar Login
            let Lemail = inputLemail.value 
            let Lsenha = inputLsenha.value
              const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

            if (!usuarioSalvo) {
                alert("Nenhum usuário cadastrado ainda.");
                return;
            }

            if (Lemail === usuarioSalvo.email && Lsenha === usuarioSalvo.senha) {
                alert("Login realizado com sucesso! \n encaminhando para a loja")
                window.location.href = "../pagina_principal/index.html";
            } else {
                alert("Email ou senha incorretos!");
            }
        });


        
        
   
        //Fazendo Login
        function Flogin(){
            //Animacao
            Animacao.style.top = '80%'//Altura que ficara apenas com os elementos de LOGIN

            titulo.innerHTML = ('Tela de Login') // Titulo
            login.style.display = ('none') //Flogin 'ja tem cadastro?'
            cadastro.style.display = ('block') //Fcadastro 'faça cadastro aq'

            enviarL.value = 'Logue-se' // Mudando o texto do botao enviar
            enviarC.style.display = ('none')
            enviarL.style.display = ('block')

            label[0].style.display = ('none') //nome
            label[1].style.display = ('none') // email
            label[2].style.display = ('none') // senha
            label[3].style.display = ('none') // mostrar senha

            btnMostrar.style.display = ('none')
            btnMostrartxt.style.display = ('none')

            labelL[0].style.display =('block') //email Login
            labelL[1].style.display =('block')  //senha Login
            inputLemail.style.display = ('block')
            inputLsenha.style.display = ('block')

            

        }
        //Fazendo Cadastro
        
        function Fcadastro(){
            Animacao.style.top =  '90%' //Altura que ficara apenas com os elementos de CADASTRO

            titulo.innerHTML = ('Tela de Cadastro')
            login.style.display = ('block')
            cadastro.style.display = ('none') //Fcadastro 'faça cadastro aq'

            enviarC.value = 'Cadastre-se'// Mudando o texto do botao enviar
            enviarC.style.display = ('block')
            enviarL.style.display = ('none')

            label[0].style.display = ('block') //nome
            label[1].style.display = ('block') // email
            label[2].style.display = ('block') // senha
            label[3].style.display = ('block') // confirmar senha

            btnMostrar.style.display = ('block') // botao mostrar senha
            btnMostrartxt.style.display = ('block') //texto mostrar senha

            labelL[0].style.display =('none')
            labelL[1].style.display =('none')
            inputLemail.style.display = ('none')
            inputLsenha.style.display = ('none')
        }

        //enviando dados
        //function Enviar() {
        //    if (senha.value === confisenha.value){
        //        alert('As senha são iguais')
        //    }
        //    else{
        //        alert('As senhas não são as mesmas')
        //    }
        //}

        // Mostrando a senha
        function mostrarSenha(){
            if(inputsenha.type === 'password'){
                inputsenha.type = 'text'
            } else{
                inputsenha.type = 'password'
            }
        }

        // Simbolo nike
        //deixar o background na cor do simbolo com um click
        function nike(){
        cadastro_login.style.background = ('linear-gradient(90deg, rgb(25, 27, 34), rgb(200, 30, 45), rgb(75, 40, 205)')
        }
        //Deixar o background na cor cinza um pouco mais acisentado
        function nike2(){
            cadastro_login.style.background = ('rgba(30, 30, 30, 0.2)')
        }