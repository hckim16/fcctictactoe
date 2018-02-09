$(document).ready(function(){

    $('#xo').hide();
    $('#gmbd').hide();
    $('#replay').hide();
    $('#msg').hide();

    var player = 1;
    var random = Math.floor(Math.random() * 9) + 1;
    var rand = Math.floor(Math.random() * 9) + 1;
    var tag = ".sq" + rand.toString();

    $('#twoplayer').click(function(){

        $('#mode').hide();
        $('#msg').hide();
        $('#xo').show();

        $('#ex').click(function(){

            $('#mode').hide();
            $('#xo').hide();
            $('#msg').hide();
            $('#gmbd').show();
            $('#replay').show();

            $('.square').on('click', function(event){

                var squareSelected = $(this);
        
                if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')){
                    alert('This square has already been selected. Please select another');
                }
                else{
                    if(player === 1){
                        squareSelected.addClass('fa fa-times');
                        if(checkIfPlayerWon('fa fa-times')){
                            alert('Congratulations! Player ' + player + ' has won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                            
                        }
                        else{
                            player = 2;
                        }
                    }
                    else{
                        squareSelected.addClass('fa fa-circle-o');
                        if(checkIfPlayerWon('fa fa-circle-o')){
                            alert('Congratulations! Player ' + player + ' has won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                        }
                        else{
                            player = 1;
                        }
                    }
                }
        
            });
            
        });

        $('#oh').click(function(){

            $('#mode').hide();
            $('#xo').hide();
            $('#msg').hide();
            $('#gmbd').show();
            $('#replay').show();

            $('.square').on('click', function(event){

                var squareSelected = $(this);
        
                if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')){
                    alert('This square has already been selected. Please select another');
                }
                else{
                    if(player === 1){
                        squareSelected.addClass('fa fa-circle-o');
                        if(checkIfPlayerWon('fa fa-circle-o')){
                            alert('Congratulations! Player ' + player + ' has won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                            
                        }
                        else{
                            player = 2;
                        }
                    }
                    else{
                        squareSelected.addClass('fa fa-times');
                        if(checkIfPlayerWon('fa fa-times')){
                            alert('Congratulations! Player ' + player + ' has won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                        }
                        else{
                            player = 1;
                        }
                    }
                }
        
            });
            
        });

    });

    $('#computerplay').click(function(){

        $('#mode').hide();
        $('#xo').hide();
        $('#gmbd').hide();
        $('#replay').hide();
        $('#msg').show();

        $('#msgbtn').click(function(){

            $('#mode').hide();
            $('#xo').hide();
            $('#msg').hide();
            $('#gmbd').show();
            $('#replay').show();

            $('.square').on('click', function(event){

                var squareSelected = $(this);
        
                if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')){
                    alert('This square has already been selected. Please select another');
                }
                else{
                    if(player === 1){
                        squareSelected.addClass('fa fa-times');
                        if(checkIfPlayerWon('fa fa-times')){
                            alert('Congratulations! Player ' + player + ' has won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                            
                        }
                        else{
                            player = 2;
                        }
                    }
                    else{
                        $(randomSquare(random)).addClass('fa fa-circle-o');
                        if(checkIfPlayerWon('fa fa-circle-o')){
                            alert('Oh no! The Computer won!');
                            $('#replay').click(function(){
                                location.reload();
                            });
                        }
                        else{
                            player = 1;
                        }
                    }
                }
        
            });
        
        });

    });

    $('#replay').click(function(){
        location.reload();
    });

    function randomSquare(rand){
        while($(tag).hasClass('fa fa-times') || $(tag).hasClass('fa fa-circle-o')){
            rand = Math.floor(Math.random() * 9) + 1;
            tag = ".sq" + rand.toString();
        }
        return tag;
    }

    function checkIfPlayerWon(symbol){

        if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){
            return true;
        }
        else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
            return true;
        }
        else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        }
        else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){
            return true;
        }
        else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
            return true;
        }
        else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        }
        else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
            return true;
        }
        else if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
            return true;
        }
        else{
            return false;
        }

    }

});