/**
 * Created by kolya on 14.07.14.
 */

$(document).ready(function() {

    var snake = {
        col:"5",
        row:"5",
        width: 5,
        coords: [],
        dir: 'left',
        eat: [1,1],
        eatRender: function(){

            for (var i in this.coords){
                if (this.coords[i][0] == this.eat[0] && this.coords[i][1] == this.eat[1]) {
                    var row = this.eat.pop();
                    var col = this.eat.pop();

                    var div = '.row'+row + ' ' + '.col'+col;
                    $(div).removeClass('eat');

                    var row = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                    this.eat.push(row);
                    var col = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                    this.eat.push(col);
                }
            }

            var row = this.eat[0];
            var col = this.eat[1];
            var div = '.row'+row + ' ' + '.col'+col;
            $(div).addClass('eat');

//            if (this.eat.length === 0) {
//                var row = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//                var col = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//                this.eat.push([row, col]);
//            }

//            console.log(row);
        },
        move: function() {
            switch (this.dir) {
                case 'left': {
                    this.col--;
                    break;
                }
                case 'up': {
                    this.row--;
                    break;
                }
                case 'right': {
                    this.col++;
                    break;
                }
                case 'down': {
                    this.row++;
                    break;
                }
            }
        },
        render: function () {
            var elem = this.coords[this.coords.length-1];
            var row = elem[0];
            var col = elem[1];
            var div = '.row'+row + ' ' + '.col'+col;
            $(div).addClass('snake');
            if (this.coords.length > this.width) {
//            console.log(this.coords);
                var elem = this.coords.shift();
                var row = elem[0];
                var col = elem[1];
                $('.row'+row+' .col'+col).removeClass('snake');
            }
        },
        func: function() {
            this.move();
            this.coords.push([this.row, this.col]);
            this.render();

            this.eatRender();
//            $row = Math.floor(Math.random() * (10 - 0 + 1)) + 0;


            if (this.row == 0 || this.col ==0 || this.col > 10 || this.row > 10){
                $('body').append('GAME OVER');
            }
        }
    }
    setInterval( function() { snake.func.call(snake) } , 400);

    $(window).keydown(function(event){
//        console.log(event.keyCode);
        switch (event.keyCode) {
            case 37: {
                snake.dir = 'left';
                break;
            }
            case 38: {
                snake.dir = 'up';
                break;
            }
            case 39: {
                snake.dir = 'right';
                break;
            }
            case 40: {
                snake.dir = 'down';
                break;
            }

        }
    });

});