var visible = false;
var important = false;
var UI ={}; //INICIALIZADOR DEL OBJETO

function showDetails(){
    //console.log("btn clicked!!!");

    if(!visible){
        visible=true;
        UI.btnShow.text("Hide details");
        UI.secForm.removeClass("invisible");
    }
    else{
        visible=false;
        UI.btnShow.text("Show details");
        UI.secForm.addClass("invisible");
    }

}


function toogleImportant(){


    if(!important){

        UI.btnImportant.removeClass("btn-light");
        UI.btnImportant.addClass("btn-danger");
        
        important=true;
    }else{
        UI.btnImportant.removeClass("btn-danger");
        UI.btnImportant.addClass("btn-light");
        important=false;
    }

}

function init(){
    var Title = "this is a main page!!";
    console.log(Title);
    
    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#section-Form")
    }
    
    //get data from servers

    // hook events
    //$("#btnShow").click( showDetails );
    //$("#btnExclam").click(toogleImportant);

    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toogleImportant);

    //set the text of an input field
    $("#txtTitle").val("Jesus Camarena");
}


window.onload = init;
