let kist = [
    {
        name: 'kist1',
        html: `
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
            <div class="c5"></div>
        `
    },
    {
        name: 'kist2',
        html: `
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
        `
    },
    {
        name: 'kist3',
        html: `
            <div class="d1"></div>
            <div class="d2"></div>
            <div class="d3"></div>
        `
    },
    {
        name: 'kist4',
        html: `
            <div class="e1"></div>
            <div class="e2"></div>
        `
    },
    {
        name: 'kist5',
        html: `
            <div class="f1"></div>
        `
    },
    {
        name: 'kist6',
        html: `
            <div class="a1"></div>
            <div class="a2"></div>
            <div class="a3"></div>
            <div class="a4"></div>
            <div class="a5"></div>
            <div class="a6"></div>
        `
    }
];

$('.btn1').click(function() {

    let randomKist1 = Math.floor(Math.random() * kist.length);
    let randomKist2 = Math.floor(Math.random() * kist.length);

    let kist1 = kist[randomKist1].html;
    let kist2 = kist[randomKist2].html;


    $('.div3').html('');
    $('.div5').html('');

    $('.div3').html(kist1);
    $('.div5').html(kist2);

    let countDiv3 = $('.div3 div').length;
    let countDiv5 = $('.div5 div').length;
    let winner;

    if(countDiv3 > countDiv5){
        winner = player1;
    }else if(countDiv5 > countDiv3){
        winner = player2
    }else{
        winner = 'GAME DRAW!';
    }

    if(winner === 'GAME DRAW!'){
        $('.h1').html("GAME DRAW!");
    }else{
        $('.h1').html(`${winner} WINS!`);
    }
});

let player1 = "Player 1";
let player2 = "Player 2";

$('.btnOk').click(function(){
    let in1 = $('.in1').val();
    let in2 = $('.in2').val();

    if (in1) player1 = in1;
    if (in2) player2 = in2;

    $('.h2').text(player1);
    $('.h3').text([player2]);

    $('#exampleModal').modal('hide');
})