


    const nome = localStorage.getItem("nomeJogador");
    document.getElementById("teste").innerText = "Olá, " + nome;



function parte(){

    var html = "";
     html += "<img src='p.png'></img>";
     html += `<p>Bora dar um megulho na agua ${nome}? </p>`;
     html += '<div class="linha">'
     html += '<button onclick="parte2()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}

function parte2(){

    var html = "";
     html += "<img src='mar.png'></img>";
     html += "<p>Vamos jogar vidiogame !</p>";
     html += '<div class="linha">'
     html += '<button onclick="parte 6()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}


function parte3(){

    var html = "";
     html += "<img src='cinema.png'></img>";
     html += "<p>Vamos assitir ou filme do capitao Americar!</p>";
     html += '<div class="linha">'
     html += '<button onclick="parte4()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte3()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}

function parte4(){

    var html = "";
     html += "<img src='hq.jpg'></img>";
     html += "<p>vamos andar de bicicleta na rua </p>";
     html += '<div class="linha">'
     html += '<button onclick="parte5()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}
function parte5(){

    var html = "";
     html += "<img src='bike.jpg'></img>";
     html += "<p> indo para escola</p>";
     html += '<div class="linha">'
     html += '<button onclick="parte7()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}

function parte6(){

    var html = "";
     html += "<img src='d.jpg'></img>";
     html += "<p> </p>";
     html += '<div class="linha">'
     html += '<button onclick="parte4()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}
function parte7(){

    var html = "";
     html += "<img src='f.jpg'></img>";
     html += "<p> </p>";
     html += '<div class="linha">'
     html += '<button onclick="parte4()" style="width: 50%;">Sim!</button>';
     html += '<button onclick="parte()" style="width: 50%;">Nao!</button>';
     html += '</div>'

    $( "body" ).append( html );

}

