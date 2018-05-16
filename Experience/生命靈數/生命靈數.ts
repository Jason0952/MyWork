interface INumerologyCalculator {
    getLifeNumerology(): number;
    getAstrologyConstellationName(): string;
}

class NumerologyCalculator implements INumerologyCalculator {
    private _birthYear: number;
    private _birthMonth: number;
    private _birthDay: number;

    constructor(year: number, month: number, day: number) {
        this._birthYear = year;
        this._birthMonth = month;
        this._birthDay = day;
    }

    getLifeNumerology(): number {
        let str = this._birthYear.toString() + this._birthMonth.toString() + this._birthDay.toString();
        return this.getLifeNumerologyInternal(str);
    }

    private getLifeNumerologyInternal(str: string): number {
        let result = 0;
        while (result === 0 || result >= 10) {
            for (var num of str) {
                var currentnum = parseInt(num);
                result += currentnum;
            }
        }
        return result;
    }

    getAstrologyConstellationName(): string {
        const m = this._birthMonth;
        const d = this._birthDay;

        if ((m === 1 && d >= 21) || (m === 2 && d <= 19)) {
            return "aquarius"; //水瓶
        } else if ((m === 2 && d >= 20) || (m === 3 && d <= 20)) {
            return "pisces";  //雙魚
        } else if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) {
            return "aries";
        } else if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) {
            return "taurus";
        } else if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) {
            return "gemini";
        } else if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) {
            return "cancer";
        } else if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) {
            return "leo";
        } else if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) {
            return "virgo";
        } else if ((m === 9 && d >= 23) || (m === 10 && d <= 23)) {
            return "libra";
        } else if ((m === 10 && d >= 24) || (m === 11 && d <= 21)) {
            return "scorpio";
        } else if ((m === 11 && d >= 22) || (m === 12 && d <= 20)) {
            return "sagittarius";
        } else if ((m === 12 && d >= 21) || (m === 1 && d <= 20)) {
            return "capricorn";
        }
    }
}