$('.openModal').click(function() {
    $('.openModal').addClass('active');
    console.log('clicked');
})

$('.modalDialog').click(function() {
    $('#model').removeClass('active');
})