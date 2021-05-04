let homepage = require('../Pages/HomePage')

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.getbrowser('http://juliemr.github.io/protractor-demo/');

        homepage.enterfirstnumber('21');

        homepage.entersecondnumber('21');

        homepage.gobutton();

        homepage.verifyresult('42');

        browser.sleep(7000);

    });

    it('Subtraction test', function () {

        homepage.getbrowser('http://juliemr.github.io/protractor-demo/');

        homepage.enterfirstnumber('21');

        homepage.entersecondnumber('21');

        homepage.gobutton1();

        homepage.verifyresult('42');

        browser.sleep(7000);

    });

});