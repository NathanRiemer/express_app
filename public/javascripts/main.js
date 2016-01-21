$(document).ready(function() {
  $('form').on('submit', function(event) {
    if ($('#rat-name').val() === '') {
      event.preventDefault();
      $('#form_status').text("Name can't be blank!");
    }
  });

})