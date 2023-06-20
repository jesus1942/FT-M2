const url = 'http://localhost:5000/amigos'
$('img').hide();

//funcion getFriends
const getFriends = () => {
    $('img').show();
    let lista = $('#lista')
    lista.empty();
    $.get(url, (information) => {
        for(const amigo of information) {
            lista.append(`<li>${amigo.name}</li>`);
        }
        $('img').hide();
    });
}

let cleanInputs = () => {
    $('#input').val('');
    $('#inputDelete').val('');
}


$('#boton').click(() => {
    $('img').show();
    let lista = $('#lista');
    lista.empty();
    $.get(url, information => {
        //console.log(information);
        for(const amigo of information) {
            lista.append(`<li>${amigo.name}</li>`);
        }
        $('img').hide();
    });
    
});

// Funcionalidad de buscar amigo

$('#search').click(() => {
    let id = $('#input').val()
    //console.log(id)
    let amigo = $('#amigo')
    if(!id ) return amigo.text('Debe colocar un id correcto');

    $.get(`${url}/${id}`, (data) => {
        
        amigo.text(data.name);
    });
    cleanInputs();
});

// Funcionalidad de eliminar amigo

$('#delete').click(() => {
    let idDelete = $('#inputDelete').val();
    $.ajax({
        url: `${url}/${idDelete}`,
        type:'DELETE' ,
        success: () => {
            $('#success').text(`el amigo ${idDelete} a sido borrado exitosamente`);
            getFriends();
            cleanInputs();
        }
    });
    
    
});