$('#btn').click(function(){
    let html = $('#htmlarea').val();
    let css = $('#cssarea').val();

    $('#result').html(html);
    $('style').remove();

    let style = $('<style></style>').text(css);
    $('head').append(style);
    
});
