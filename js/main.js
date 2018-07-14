$(document).ready(function () {

    var nob = 0;
    var first = null;
    var winner=null;

    var o = '<i class="fa fa-circle-o" aria-hidden="true" data-target="i"></i>';
    var x = '<i class="fa fa-times" aria-hidden="true" data-target="i"></i>';


    // who will play first

    $('#start_first').on('click', function (e) {




        if ($(e.target).attr('class') == 'user') {

            first = 0;

            setTimeout(function () {

                $('#start_first').remove();

                $('#game').addClass('block');


            },800);
        } else if ($(e.target).attr('class') == 'computer') {

            first = 1;

            setTimeout(function () {

                $('#start_first').remove();

                $('#game').addClass('block');


            },800);

        }



        if (first == 1) {
            computer();
            nob=1;
            first++;
        }


    });
    // who will play first


    // computer steps logic

    function computer() {
        var arr = [];
        var comp = document.getElementsByClassName('box');

        for (var i = 0; i < comp.length; i++) {


            if (comp[i].innerHTML == '') {

                arr[i] = i;
            } else {
                arr[i] = 'x'
            }


        }

        var ind = [];
        arr.forEach(function (j, k) {

            if (j != 'x') {

                ind.push(k);

            }

        });



        var rand = Math.floor(Math.random() * ind.length);

        if (ind.length != 0) {

            comp[ind[rand]].innerHTML = '<i class="fa fa-circle-o" aria-hidden="true" data-target="i"></i>';


        }


    }
    // computer steps logic


    $('#game').on('click', function (e) {


var targ=$(e.target).attr('data-target');

// steps

        if ( targ == 'div') {

            if (first % 2 == 0) {
                first++;
                e.target.innerHTML = x;
            }

        } else if ( targ == 'i') {
            return false;
        }

        if (first % 2 != 0) {
            first++;
            computer();
        }

// steps





        nob++;

// payman

        var all = document.getElementsByClassName('box');

        if (all[0].innerHTML == x && all[1].innerHTML == x && all[2].innerHTML == x) {

            winner = "You";
        } else if (all[3].innerHTML == x && all[4].innerHTML == x && all[5].innerHTML == x) {

            winner = "You";


        } else if (all[6].innerHTML == x && all[7].innerHTML == x && all[8].innerHTML == x) {

            winner = "You";


        } else if (all[0].innerHTML == x && all[3].innerHTML == x && all[6].innerHTML == x) {

            winner = "You";


        } else if (all[1].innerHTML == x && all[4].innerHTML == x && all[7].innerHTML == x) {

            winner = "You";


        } else if (all[2].innerHTML == x && all[5].innerHTML == x && all[8].innerHTML == x) {

            winner = "You";


        } else if (all[0].innerHTML == x && all[4].innerHTML == x && all[8].innerHTML == x) {


            winner = "You";

        } else if (all[4].innerHTML == x && all[6].innerHTML == x && all[2].innerHTML == x) {


            winner = "You";

        } else if (all[0].innerHTML == o && all[1].innerHTML == o && all[2].innerHTML == o) {

            winner = "Computer";

        } else if (all[3].innerHTML == o && all[4].innerHTML == o && all[5].innerHTML == o) {

            winner = "Computer";


        } else if (all[6].innerHTML == o && all[7].innerHTML == o && all[8].innerHTML == o) {

            winner = "Computer";


        } else if (all[0].innerHTML == o && all[3].innerHTML == o && all[6].innerHTML == o) {

            winner = "Computer";


        } else if (all[1].innerHTML == o && all[4].innerHTML == o && all[7].innerHTML == o) {

            winner = "Computer";


        } else if (all[2].innerHTML == o && all[5].innerHTML == o && all[8].innerHTML == o) {

            winner = "Computer";


        } else if (all[0].innerHTML == o && all[4].innerHTML == o && all[8].innerHTML == o) {


            winner = "Computer";

        } else if (all[4].innerHTML == o && all[6].innerHTML == o && all[2].innerHTML == o) {


            winner = "Computer";

        }

// payman



// Winner

        if (winner == 'You') {
            var span = '<span style="color: coral;font-size: 20px">  ' + winner + ' Win</span>';
            $('#winner').prepend(span);

            setTimeout(function () {
                $('#game').removeClass('block');
                $('#winner').addClass('show');
                $('.modal').addClass('show');

            }, 800);
            return false;





        } else if (winner == "Computer") {

            var span = ' <span style="color: coral;font-size: 20px">  ' + winner + ' Win</span>';

            $('#winner').prepend(span);

            setTimeout(function () {
                $('#game').removeClass('block');
                $('#winner').addClass('show');
                $('.modal').addClass('show');

            }, 800);



        } else if (nob == 5 && winner == null) {
            var nobody = "Draw in the game";
            var span = '<span style="color: coral;font-size: 20px"> ' + nobody + '</span>';
            $('#winner').prepend(span);


            setTimeout(function () {
                $('#game').removeClass('block');
                $('#winner').addClass('show');
                $('.modal').addClass('show');
            }, 800);





        }
// Winner

// restart
        $('#restart').on('click', function () {

            window.location.reload();
        })
// restart


    });


});


