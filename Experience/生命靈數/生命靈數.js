var NumerologyCalculator = /** @class */ (function () {
    function NumerologyCalculator(year, month, day) {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }
    NumerologyCalculator.prototype.getLifeNumerology = function () {
        var str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    };
    NumerologyCalculator.prototype.getLifeNumerologyInternal = function (str) {
        var result = 0;
        for(var i = 0;i<str.length - 1;i ++){
            result += parseInt(str[i]);
        }
        if(result > 9){
            result = this.getLifeNumerologyInternal(result.toString());  
        }
        return result;
    };
    NumerologyCalculator.prototype.getAstrologyConstellationName = function () {
        var m = this._birthMonth;
        var d = this._birthDay;
        if ((m === 1 && d >= 21) || (m === 2 && d <= 19)) {
            return "aquarius"; //水瓶
        }
        else if ((m === 2 && d >= 20) || (m === 3 && d <= 20)) {
            return "pisces"; //雙魚
        }
        else if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) {
            return "aries";
        }
        else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) {
            return "taurus";
        }
        else if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) {
            return "gemini";
        }
        else if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) {
            return "cancer";
        }
        else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) {
            return "leo";
        }
        else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) {
            return "virgo";
        }
        else if ((m === 9 && d >= 23) || (m === 10 && d <= 23)) {
            return "libra";
        }
        else if ((m === 10 && d >= 24) || (m === 11 && d <= 21)) {
            return "scorpio";
        }
        else if ((m === 11 && d >= 22) || (m === 12 && d <= 20)) {
            return "sagittarius";
        }
        else if ((m === 12 && d >= 21) || (m === 1 && d <= 20)) {
            return "capricorn";
        }
    };
    return NumerologyCalculator;
}());
