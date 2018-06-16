$(function() {
// mi recupero lista utenti
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json'
        
        
    })
     .then(function(data){
        let utenti = data.results;
        let listautenti = $('#listautenti');
        utenti.forEach(utente => {
           let contenitore = $('<div</div>').addClass('col-md-6 mt-3');
           let row1 = $('<div</div>').addClass('row');
           let row2 = $('<div</div>').addClass('row');
           let row3 = $('<div</div>').addClass('row');
           let divimmagine = $('<div</div>').addClass('col-md-12 text-center');
           let immagine = $('<img></img>').addClass('img-fluid rounded-circle').attr('src', utente.picture.medium);
            let divnome = $('<div</div>').addClass('col-md-12 text-center');
            let nome = $('<h4></h4>').html(`${utente.name.title.charAt(0).toUpperCase()}${utente.name.title.slice(1)} 
            ${utente.name.first.charAt(0).toUpperCase()}${utente.name.first.slice(1)}
            ${utente.name.last.charAt(0).toUpperCase()}${utente.name.last.slice(1)}`);
           
           immagine.appendTo(divimmagine);
           divimmagine.appendTo(row1);

           nome.appendTo(divnome);
           divnome.appendTo(row2);

           row1.appendTo(contenitore);
           row2.appendTo(contenitore);

           contenitore.appendTo(listautenti);

        });

    })
});
