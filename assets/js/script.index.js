console.log("tá funcionando!");

function checkInputs(){
    let nome= document.getElementById("name_input").value;
    let fix= document.getElementById("fix_input").value;
    let cell= document.getElementById("cell_input").value;
    let foto= document.getElementById("foto_input").value;
    let data= document.getElementById("date_input").value;
    let email= document.getElementById("email_input").value;
    let cep= document.getElementById("cep_input").value;
    let city= document.getElementById("city_input").value;
    let insta= document.getElementById("insta_input").value;
    let git= document.getElementById("git_input").value;

    console.log(nome);
    console.log(fix);
    console.log(cell);
    console.log(foto);
    console.log(data);
    console.log(email);
    console.log(cep);
    console.log(city);
    console.log(insta);
    console.log(git);

    if(nome == "" || fix == "" || cell == "" || foto == "" || data == "" || email == "" || cep == "" || city == "" || insta == "" || git == ""){
        console.log("tá vazio")
        return true;
    }else{
        console.log("Estão preenchidos")
        return false;
    }
}

function sendMsg(msg, type){
    let mensa= document.getElementById("msg");
    mensa.innerHtml="";

    let showMsg= `
        <p class='${type}'>${msg}</p>
    `
    mensa.innerHtml += showMsg;

    setTimeout(function () {
        mensa.innerHTML = "";
    }, 3000);
}
class Contato{
    constructor(nome, fix, cell, foto, data, email, cep, city, insta, git){
        this.nome= nome;
        this.fix= fix;
        this.cell= cell;
        this.foto= foto;
        this.data= data;
        this.email= email;
        this.cep= cep;
        this.city=city;
        this.insta= insta;
        this.git= git;
    }
}
