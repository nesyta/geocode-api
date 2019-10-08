import { browser } from "protractor";
import { CommonConstants } from '../../../common/common.constants';
import { Interactor } from '../../../common/interactor';
import assert = require('assert');

const { consoleColors: colors, commonAddress, rueJean, louvre, tourEiffel } = CommonConstants;

describe('Health Suite - API', () => {
  var rp = require('request-promise');
  const url = "https://geocode.xyz/"
  const auth = '&auth=YOUR_AUTH_NUMBER';

  afterEach(async () => {
    console.log(colors.yellow, 'Sleep few seconds to avoid Request Throttled');
    await browser.sleep(2000);
  });
  
  it('Should verify the response for reverse geocoding for Rue Jean Macé', async() => {
    let data: any = {};
    const location = '48.853106,2.384202?geoit=json';

    var options = {
      uri: `${url}${location}${auth}`,
      json: true
    };
 
    console.log(colors.cyan,'1.1 Send request');
    await rp(options)
    .then(function (response: any) {
      data = response;
    })
    .catch(function (error: any) {
      console.log(colors.red, error);
      assert.equal(error, null);
    });

    console.log(colors.magenta,'1.2 Verify city');
    await Interactor.verifyStringContains(data.region, commonAddress.city);
    console.log(colors.magenta,'1.3 Verify prov');
    await Interactor.verifyStringEquals(data.prov, commonAddress.prov);
    console.log(colors.magenta,'1.4 Verify country');
    await Interactor.verifyStringEquals(data.country, commonAddress.country);
    console.log(colors.magenta,'1.5 Verify postal');
    await Interactor.verifyStringEquals(data.postal, rueJean.postal);
    console.log(colors.magenta,'1.6 Verify address');
    await Interactor.verifyStringEquals(data.staddress, rueJean.address);
  });

  it('Should verify the response for reverse geocoding for Tour Eiffel', async() => {
    let data: any = {};
    const location = '48.858539,2.294438?geoit=json';

    var options = {
      uri: `${url}${location}${auth}`,
      json: true
    };
 
    console.log(colors.cyan,'1.1 Send request');
    await rp(options)
    .then(function (response: any) {
      data = response;
    })
    .catch(function (error: any) {
      console.log(colors.red, error);
      assert.equal(error, null);
    });

    console.log(colors.magenta,'1.2 Verify city');
    await Interactor.verifyStringContains(data.region, commonAddress.city);
    console.log(colors.magenta,'1.3 Verify prov');
    await Interactor.verifyStringEquals(data.prov, commonAddress.prov);
    console.log(colors.magenta,'1.4 Verify country');
    await Interactor.verifyStringEquals(data.country, commonAddress.country);
    console.log(colors.magenta,'1.5 Verify postal');
    await Interactor.verifyStringEquals(data.postal, tourEiffel.postal);
    console.log(colors.magenta,'1.6 Verify address');
    await Interactor.verifyStringEquals(data.staddress, tourEiffel.address);
  });

  it('Should verify the response for reverse geocoding for Louvre', async() => {
    let data: any = {};
    const location = '48.860754,2.337632?geoit=json';

    var options = {
      uri: `${url}${location}${auth}`,
      json: true
    };
 
    console.log(colors.cyan,'1.1 Send request');
    await rp(options)
    .then(function (response: any) {
      data = response;
    })
    .catch(function (error: any) {
      console.log(colors.red, error);
      assert.equal(error, null);
    });

    console.log(colors.magenta,'1.2 Verify city');
    await Interactor.verifyStringContains(data.region, commonAddress.city);
    console.log(colors.magenta,'1.3 Verify prov');
    await Interactor.verifyStringEquals(data.prov, commonAddress.prov);
    console.log(colors.magenta,'1.4 Verify country');
    await Interactor.verifyStringEquals(data.country, commonAddress.country);
    console.log(colors.magenta,'1.5 Verify postal');
    await Interactor.verifyStringEquals(data.postal, louvre.postal);
    console.log(colors.magenta,'1.6 Verify address');
    await Interactor.verifyStringEquals(data.staddress, louvre.address);
  });
});
