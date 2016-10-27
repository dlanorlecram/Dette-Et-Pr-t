$( document ).ready(function(){
    console.log( "ready!" );
    $('.toggle_menu').click(function(){
      var n = $('.menu_hide').css('visibility');
        console.log(n);
        if(n== "hidden"){
          $('.menu_hide').css({'visibility':'visible'});
        }
        else{
          $('.menu_hide').css({'visibility':'hidden'});
        }
    });

//modal

  //Close
  $('.fa-user-plus').click(function(){
    $('#modal_user').css('display','table');
  });
  $('.fa-users').click(function(){
    $('#modal_group').css('display','table');
  });
  $('.fa-eur').click(function(){
    $('#modal_spend').css('display','table');
  });
  $('.fa-times').click(function(){
      $('.section').css('display', 'none');
  });
});
