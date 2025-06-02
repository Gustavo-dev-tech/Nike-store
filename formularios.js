        let titulo = document.getElementById('titulo')
        let label = document.getElementsByClassName('label') //get nas classes Label
        
        //Cadastro
        let nome = document.getElementById('nome')
        let email = document.getElementById('email')
        let senha = document.getElementById('senha')
        let confisenha = document.getElementById('confisenha')
        let cadastro = document.getElementById('Fcadastro') //Fazer cadastro
        
        //Login
        let login = document.getElementById('Flogin') // mensagem 'Ja tem cadastro'
        let labelL = document.getElementsByClassName('labelLog') //classes do LOGIN
        let Lemail = document.getElementById('emailLogin') // email
        let Lsenha = document.getElementById('senhaLogin') 
        let btnMostrar = document.getElementById('btnMostrar') //mostrar senha
        let btnMostrartxt = document.getElementById('btnMostrartxt') //mostrar senha
        
        //FORMULARIOS
        let formCad = document.getElementById('formCad')

        //Enviar
        let enviar = document.getElementById('enviar')
        
        
        
        

        //Fazendo Login
        function Flogin(){
            titulo.innerHTML = ('Tela de Login') // Titulo
            login.style.display = ('none') //Flogin 'ja tem cadastro?'
            cadastro.style.display = ('block') //Fcadastro 'faça cadastro aq'
            //for (let i=0; i <=2; i++){}
            // formCad.style.display = ('none')
            enviar.value = 'Logue aqui' // Mudando o texto do botao enviar
            
            label[0].style.display = ('none') //nome
            label[1].style.display = ('none') // email
            label[2].style.display = ('none') // senha
            label[3].style.display = ('none') // mostrar senha
            

            btnMostrar.style.display = ('none')
            btnMostrartxt.style.display = ('none')

            labelL[0].style.display =('block')
            labelL[1].style.display =('block')
            Lemail.style.display = ('block')
            Lsenha.style.display = ('block')

            

        }
        //Fazendo Cadastro
        function Fcadastro(){
            titulo.innerHTML = ('Tela de Cadastro')
            login.style.display = ('block')
            cadastro.style.display = ('none') //Fcadastro 'faça cadastro aq'

            enviar.value = 'Cadastre-se'// Mudando o texto do botao enviar

            label[0].style.display = ('block') //nome
            label[1].style.display = ('block') // email
            label[2].style.display = ('block') // senha
            confisenha.style.display = ('block') // confirmar senha

            btnMostrar.style.display = ('block')
            btnMostrartxt.style.display = ('block')

            labelL[0].style.display =('none')
            labelL[1].style.display =('none')
            Lemail.style.display = ('none')
            Lsenha.style.display = ('none')
        }

        //enviando dados
        function Enviar() {
            if (senha.value === confisenha.value){
                alert('As senha são iguais')
            }
            else{
                alert('As senhas não são as mesmas')
            }
        }

        // Mostrando a senha
        function mostrarSenha(){
            if(senha.type === 'password'){
                senha.type = 'text'
            } else{
                senha.type = 'password'
            }
        }

        // Simbolo nike
        //deixar o background na cor do simbolo com um click
        function nike(){
        cadastro_login.style.background = ('linear-gradient(90deg, rgb(225, 27, 34), rgb(200, 30, 45), rgb(145, 70, 25)')
        }
        //Deixar o background na cor cinza um pouco mais acisentado
        function nike2(){
            cadastro_login.style.background = ('rgba(30, 30, 30, 0.5)')
        }