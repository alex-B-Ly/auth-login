$(document).ready(function() {
  
// LOGIN PAGE

// REGISTER PAGE

  function registerShow(){
    if($('#student-register-select').hasClass('option-selected')){
      $('#student-register').show();
      $('#teacher-register').hide();
    }else{
      $('#teacher-register').show();
      $('#student-register').hide();
    }
  }

  registerShow();

  $('.reg-option').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('option-unselected')){
      $(this).removeClass('option-unselected').addClass('option-selected');
      $(this).siblings('.reg-option').removeClass('option-selected').addClass('option-unselected');
      registerShow();
    }else{
      return;
    }
  });

});