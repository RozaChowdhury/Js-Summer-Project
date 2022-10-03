const moment = require("moment");

class Moments{

    static getCurrentDate(){
        return moment().format('D');
    }
    static getCurrentMonth(){
        return moment().format('MMMM');
    }
    static getCurrentYear(){
        return moment().format('YYYY');
    }
    async getCurrentMomentInFormat(format){
        return moment().format(format);
    }
}
module.exports = Moments;