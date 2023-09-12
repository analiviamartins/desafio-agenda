console.log("tá funcionando!");

function checkInputs() {
    let nome = document.getElementById("name_input").value;
    let fix = document.getElementById("fix_input").value;
    let cell = document.getElementById("cell_input").value;
    let foto = document.getElementById("foto_input").value;
    let data = document.getElementById("date_input").value;
    let email = document.getElementById("email_input").value;
    let cep = document.getElementById("cep_input").value;
    let city = document.getElementById("city_input").value;
    let insta = document.getElementById("insta_input").value;
    let git = document.getElementById("git_input").value;

    // console.log({nome});
    // console.log({fix});
    // console.log({cell});
    // console.log({foto});
    // console.log({data});
    // console.log({email});
    // console.log({cep});
    // console.log({city});
    // console.log({insta});
    // console.log({git});

    if (nome == "" || fix == "" || cell == "" || foto == "" || data == "" || email == "" || cep == "" || city == "" || insta == "" || git == "") {
        console.log("tá vazio")
        return true;
    } else {
        console.log("Estão preenchidos")
        return false;
    }
}

function sendMsg(msg, type) {
    let mensa = document.getElementById("msg");
    mensa.innerHtml = "";

    let showMsg = `
        <p class='${type}'>${msg}</p>
    `
    mensa.innerHtml += showMsg;

    setTimeout(function () {
        mensa.innerHTML = "";
    }, 3000);
}

class Contato {
    constructor(nome, fix, cell, foto, data, email, cep, city, insta, git) {
        this.nome = nome;
        this.fix = fix;
        this.cell = cell;
        this.foto = foto;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.insta = insta;
        this.git = git;
        this.id = this.randomId();
        this.age = this.calculateAge();
        this.ZodiacSign = this.getZodiacSign();
    }
    randomId() {
        return Math.floor(Math.random() * 9998 + 1);
    }
    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class contato");
        return age;
    }
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class contato");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}


function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function createContato() {
    let nome = document.getElementById("name_input").value;
    let fix = document.getElementById("fix_input").value;
    let cell = document.getElementById("cell_input").value;
    let foto = document.getElementById("foto_input").value;
    let data = document.getElementById("date_input").value;
    let email = document.getElementById("email_input").value;
    let cep = document.getElementById("cep_input").value;
    let city = document.getElementById("city_input").value;
    let insta = document.getElementById("insta_input").value;
    let git = document.getElementById("git_input").value;

    const contatos = new Contato(nome, fix, cell, foto, data, email, cep, city, insta, git);
    bibliotecaContatos.add(contatos);
    exibirContato();
}

class Listcontatos {
    constructor() {
        this.contatos = [];
        console.log("tá indo até a Listcontatos");
    }
    add(contato) {
        if (checkInputs()) {
            return sendMsg("Preencha os campos", "error");
        } else if (!isURLValida(contato.foto)) {
            sendMsg("Imagem inválida", "error")
        } else {
            this.contatos.push(contato);
            sendMsg("contato adicionado com sucesso!", "success");
            limparInputs();
        }
    }
    buscarId(id){
        return this.contatos.find(contato => contato.id === id)
    }
}

const bibliotecaContatos = new Listcontatos();
console.log(bibliotecaContatos);

function formatedCellphone(cellphone) {

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function limparInputs() {
    console.log("to limpando os inputs");
    document.getElementById("name_input").value = "";
    document.getElementById("fix_input").value = "";
    document.getElementById("cell_input").value = "";
    document.getElementById("foto_input").value = "";
    document.getElementById("date_input").value = "";
    document.getElementById("email_input").value = "";
    document.getElementById("cep_input").value = "";
    document.getElementById("city_input").value = "";
    document.getElementById("insta_input").value = "";
    document.getElementById("git_input").value = "";
}

function exibirContato() {
    document.getElementById("container_contatos").classList.remove("hidden");
    let contatoList = document.getElementById("container_contatos");
    contatoList.innerHTML = "";


    let array = bibliotecaContatos.contatos;
    console.log(array);

    array.forEach(contato => {
        const cardDiv = `
        <div class="carde" onclick="exibirContatos()">
            <img src="${contato.foto}" alt="${contato.nome}">
            <h2>${contato.nome}</h2>
            <p>Celular:${formatedCellphone(contato.cell)}</p>
            <p>Telefone: R$${formatedCellphone(contato.fix)}</p>
        </div>
    `;

        contatoList.innerHTML += cardDiv;
    });
}

function exibirContatos() {
    const exibir = bibliotecaContatos.buscarId;
    document.getElementById("container_dados").classList.remove("hidden");
    document.getElementById("container_dados").innerHTML = "";

        let cardDiv = `
            <div class="card">
                <p>Detalhe</p>
                <img src="${exibir.foto}" alt="${exibir.nome}">
                <h2>${exibir.nome}</h2>
                <p>${exibir.id}</p>
                <p>Celular:${formatedCellphone(exibir.cell)}</p>
                <p>Telefone: ${formatedCellphone(exibir.fix)}</p>
                <p>Data de nascimento: ${exibir.date}</p>
                <p>Idade: ${exibir.age}</p>
                <p>Signo: ${exibir.ZodiacSign}</p>
                <p>Email: ${exibir.email}</p>
                <p>CEP: ${exibir.cep}</p>
                <p>Cidade: ${exibir.city}</p>
                <p>Instagram: ${exibir.insta}</p>
                <p>Github: ${exibir.git}</p>
            </div>
        `;
        document.getElementById("container_dados").innerHTML= cardDiv;
};