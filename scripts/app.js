$(document).ready(function(){
    //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Home.html" ></object>';
    $('#body_content').load(window.document.location.origin + '/pages/Home.html');

    
});


function loadPage(page){
    //$(".bodyContent").load('file://Books.html');
    if(page == 'books'){
        //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Books.html" ></object>';
        $('#body_content').load(window.document.location.origin + '/pages/Books.html');
    }
    else if(page == 'home'){
        //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Home.html" ></object>';
        $('#body_content').load(window.document.location.origin + '/pages/Home.html');
    }
	else if(page == 'gallery'){
		$('#body_content').load(window.document.location.origin + '/pages/Gallery.html');
	}
    
}

