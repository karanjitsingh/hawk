scramble = function (obj, scrambletext) {
    this.scrambles = "@#$%&()" + scrambletext;
    //this.text = scrambles;
    this.i = 0;

    this.shuffle = function (text) {
        return text.split('').sort(function () { return 0.5 - Math.random(); }).join('');
    };

    this.scrambleloop = function () {
        var i = parseInt(this.i/3);
        text = scrambletext.substr(0, i) + this.shuffle(this.scrambles).substr(i, (scrambletext.length-i)==0?0:2);
        //text=scrambletext.substr(0,i) + this.generateScramble(scrambletext.length-i);

        this.i++;
        i++;
        if (i <= scrambletext.length) {
            obj.innerHTML = text;
            setTimeout(this.scrambleloop.bind(this), 40);
        }
        else {
            obj.innerHTML = text.substr(0, text.length);
        }
        obj.className = "bright";
        delete this;
    };

    this.scrambleloop();


};

