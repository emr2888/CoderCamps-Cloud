//GET function
function fbGet(thingToCall) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://cccontact.firebaseio.com/.json', true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //Do Something On Success
            console.log("Do Something On Success");
            thingToCall();
        }
        else {
            //Do Something On Error
        }
    };
    request.send();
}
fbGet(peanutButter); // call that function fbGet

function peanutButter() {
    console.log("jelly time");
};