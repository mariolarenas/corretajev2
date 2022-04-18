$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://apis.digital.gob.cl/fl/feriados/2022/?callback/",
    success: function (response) {
      let feriados = response;
      feriados.forEach((item) => {

        if(item.irrenunciable == 1)
        item.irrenunciable= "Si"
        if(item.irrenunciable == 0)
        item.irrenunciable="No"


        $(".table tbody").append(`<tr>
                <td>${item.fecha}</td>
                <td>${item.nombre}</td>
                <td>${item.irrenunciable}</td>
                <td>${item.tipo}</td>  
                </tr>`);
      });
    },
  });
});


