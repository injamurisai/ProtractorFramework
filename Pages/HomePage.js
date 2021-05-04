let homepage = function () {
    let firstnumber_input = element(by.model('first'));
    let secondnumber_input = element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));

    this.getbrowser = function (url) {
        browser.get(url);
    }

    this.enterfirstnumber = function (firstno) {
        firstnumber_input.sendKeys(firstno);
    }

    this.entersecondnumber = function (secondno) {
        secondnumber_input.sendKeys(secondno);
    }

    this.gobutton = function () {
        gobutton.click();
    }

    this.verifyresult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
}

module.exports = new homepage();