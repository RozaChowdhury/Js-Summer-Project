const Commands = require("../Commands");

class Homepage2 {
    commands = new Commands();

    getTheAppBtn = "#submitBtn"
    phoneNumberBox = "#phoneNumber"
    errMsg = "//div[text()='Please enter a valid phone number.']"

    async scrollToGetTheApp(){
        await this.commands.scrollAndFindWebElement(this.getTheAppBtn);
    }
    async enterPhoneNumber(value){
        await this.commands.typeInWebElement(this.phoneNumberBox, value);
    }
    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppBtn);
    }
    async phoneNumErrMsgIsDisplayed(){
        return await this.commands.isWebElementDisplayed(this.errMsg);
    }


}
module.exports = Homepage2;