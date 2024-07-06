import axios from 'axios';
import { Selector } from 'testcafe';

fixture('Devices Verification')
    .page('http://localhost:3001/');

const uiDeviceName = Selector("div[class='list-devices'] div[class='device-info']>span[class='device-name']");
const uiDeviceType = Selector("div[class='list-devices'] div[class='device-info']>span[class='device-type']");
const uiDeviceCapacity = Selector("div[class='list-devices'] div[class='device-info']>span[class='device-capacity']");

const deviceMainBox = Selector("div[class='list-devices']>div[class='device-main-box']");
const deviceEditButton = Selector("div[class='list-devices'] div[class='device-options']>a[class='device-edit']");
const deviceRemoveButton = Selector("div[class='list-devices'] div[class='device-options']>button[class='device-remove']")


test('Test 1 - Should ensure that all devices on the API list are properly visible when verified on the UI', async t => {

    const listOfDevices = await axios.get('http://localhost:3000/devices', {});
    let sizeOfList = Object.keys(listOfDevices.data).length

    console.log(sizeOfList)
    for (let i = 0; i < sizeOfList; i++) {
        let deviceCapacityFullName = listOfDevices.data[i].hdd_capacity + " GB"
        await t.expect(uiDeviceName.withText(listOfDevices.data[i].system_name).visible).ok()
        await t.expect(uiDeviceType.withText(listOfDevices.data[i].type).visible).ok()
        await t.expect(uiDeviceCapacity.withText(deviceCapacityFullName).visible).ok()

        //Checking that the buttons are visible for each item
        await t.expect(deviceMainBox.nth(i).visible).ok()
        await t.expect(deviceEditButton.nth(i).visible).ok()
        await t.expect(deviceRemoveButton.nth(i).visible).ok()
    }
});    