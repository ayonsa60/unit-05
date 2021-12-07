var currentDate = moment().format('LLLL');
$('#date').append(currentDate);

$('.saveBtn').on('click', function(){
    var currentTime = $(this).parent().attr('id');
    var userInput = $(this).parent().find('input').val();
    localStorage.setItem(currentTime, userInput);
});

$('#time').each(function(){
    var currentInput = $(this).attr('input');
    var localUserInput = localStorage.getItem(currentInput);
    $(this).find('input').val(localUserInput);
});
