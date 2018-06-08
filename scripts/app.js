$(document).ready(function(){
    //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Home.html" ></object>';
    $('#body_content').load(window.document.location.origin + '/pages/Home.html');
});


function loadPage(page){
    //$(".bodyContent").load('file://Books.html');
    if(page == 'books'){
        //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Books.html" ></object>';
        $('#body_content').load(window.document.location.origin + '/pages/Books.html', function(){
            loadTiles();
        });
    }
    else if(page == 'home'){
        //document.getElementById("body_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="./pages/Home.html" ></object>';
        $('#body_content').load(window.document.location.origin + '/pages/Home.html', function(){
            
        });
    }
	else if(page == 'gallery'){
		$('#body_content').load(window.document.location.origin + '/pages/Gallery.html', function(){
            
        });
	}
    
}

function loadBook(){
    //document.getElementById("book_content").innerHTML='<object class="pageContainer" type="text/html" height="100%" width="100%" data="/Pages/LoadBook.html" ></object>';
}

function loadQuote(obj){
    var myBookId = $(obj).data('bookid');
    readData(myBookId);
  
}

function loadDataInModal(result){
    $("#myModalForText").modal("show");
    
    $("#text_content").html(result);
    
}

function readData(index){
    var result = {};
    $.getJSON('/data/quotes.json', function(data) {
        for(var i=0; i< data.length; i++){
            if(index == data[i].Id){
                result = data[i];
                var content = '<h1> ' + result.Title + " </h1> <br />";
                content = content + "<div> " + result.Content + "</div>";
                loadDataInModal(content);
            }
        }
    });
}

function loadTiles() {
    var currentPage = $("#hdfCurrentPage").val();

    $.getJSON('/data/quotes.json', function (data) {
        if (data.length < 15) {
            for (var i = 1; i <= 15; i++) {
                // render tiles
                var result = data[(i * currentPage) - 1];
                $("#tileTitle" + i)[0].innerText = result.Title;
                $("#tileContent" + i)[0].innerText = result.Description;
                $("#tileContent" + i).attr('data-bookid', result.Id);
            }

            for (var i = (data.length + 1); i <= 15; i++) {
                $(".box" + i).hide();
            }

            $("#btnPrevious").attr("disabled", "disabled");
            $("#btnNext").attr("disabled", "disabled");
        }
        else {

        }
        
    });

    
}



