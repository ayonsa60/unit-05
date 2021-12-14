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


$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));