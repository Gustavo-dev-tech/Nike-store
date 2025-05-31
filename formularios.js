        let titulo = document.getElementById('titulo')
        let label = document.getElementsByClassName('label')
        let input = document.getElementsByClassName('input')
        let nome = document.getElementById('nome')
        let email = document.getElementById('email')
        let senha = document.getElementById('senha')
        let confisenha = document.getElementById('confisenha')
        let enviar = document.getElementById('Enviar')
        let login = document.getElementById('Flogin')
        let cadastro = document.getElementById('Fcadastro')
        let cadastro_login = document.getElementById('cadastro_login')

        function Flogin(){
            titulo.innerHTML = ('Tela de Login')
            login.style.display = ('none')
            cadastro.style.display = ('block')
            //for (let i=0; i <=2; i++){}
            label[0].style.display = ('none')
            label[3].style.display = ('none')   
        }
        function Fcadastro(){
            titulo.innerHTML = ('Tela de Cadastro')
            login.style.display = ('block')
            cadastro.style.display = ('none')
            label[0].style.display = ('block')
            label[3].style.display = ('block') 
        }
        function Enviar() {
            if (senha.value === confisenha.value){
                alert('As senha são iguais')
            }
            else{
                alert('As senhas não são as mesmas')
            }
        }
        function mostrarSenha(){
            if(senha.type === 'password'){
                senha.type = 'text'
            } else{
                senha.type = 'password'
            }
        }
        function nike(){
        cadastro_login.style.background = ('linear-gradient(90deg, rgb(225, 27, 34), rgb(200, 30, 45), rgb(145, 70, 25)')
        for (let i=0; i <=5; i++){
        label[i].style.color = ('white')
        input[i].style.color = ('white')
        }
        }