class Remote {
    constructor(Tivi) {
        this.code = Tivi.code;
        this.previousChannel = Tivi.currentChannel;
        this.status = false;
    };

    switchChannelUp(Tivi) {
        if (Tivi.currentChannel >= 9) {
            Tivi.currentChannel = 0
        } else {
            Tivi.currentChannel++;
        }
    }
    switchChannelDown(Tivi) {
        if (Tivi.currentChannel <= 0) {
            Tivi.currentChannel = 9;
        } else {
            Tivi.currentChannel--;
        }
    }

    controlVolumeUp(Tivi) {
        if (Tivi.currentVolume >= 100) {
            Tivi.currentVolume = 100;
        } else {
            Tivi.currentVolume++;
        }
    }
    controlVolumeDown(Tivi) {
        if (Tivi.currentVolume <= 0) {
            Tivi.currentVolume = 0;
        } else {
            Tivi.currentVolume--;
        }
    }
    switchChannelByNum(Tivi, number) {
        Tivi.currentChannel = parseFloat(number);
    }

    switchOnOff(Tivi) {
        if (Tivi.status === true) {
            Tivi.tvOn()
        } else {
            Tivi.tvOff();
        }
    }
    connectToTv(Tivi) {
        if (this.code === Tivi.code) {
            alert('Sucessfully connected to TV!');
            return this.status = true;
        } else {
            alert('Connect again');
            return this.status = false;
        }
    }
}

class Tivi {
    constructor(code) {
        this.currentChannel = 0;
        this.currentVolume = 0;
        this.status = false;
        this.code = code
    };
    tvOn() {
        this.status = true;
    }
    tvOff() {
        this.status = false;
    }

    changeChannelUp() {
        if (this.currentChannel >= 9) {
            this.currentChannel = 0;
        } else {
            this.currentChannel++;
        }

    }
    changeChannelDown() {
        if (this.currentChannel <= 0) {
            this.currentChannel = 9;
        } else {
            this.currentChannel--;
        }
    }

    changeVolumeUp() {
        if (this.currentVolume >= 100) {
            this.currentVolume = 100;
        } else {
            this.currentVolume++;
        }
    }
    changeVolumeDown() {
        if (this.currentVolume <= 0) {
            this.currentVolume = 0;
        } else {
            this.currentVolume--;
        }
    }
}

let samSungTv = new Tivi('ss01');

let remoteSamsung = new Remote(samSungTv);

function changeTivi(button) {
    if (button === 'up') {
        if (samSungTv.status === true) {
            flag = samSungTv.currentChannel;
            samSungTv.changeChannelUp();
            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }
    if (button === 'down') {
        if (samSungTv.status === true) {
            flag = samSungTv.currentChannel;
            samSungTv.changeChannelDown();
            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }

    if (button === '+') {
        if (samSungTv.status === true) {
            samSungTv.changeVolumeUp();
            console.log(samSungTv.currentVolume);
        }
    }
    if (button === '-') {
        if (samSungTv.status === true) {
            samSungTv.changeVolumeDown();
            console.log(samSungTv.currentVolume);
        }
    }
    if (button === 'onoff') {
        if (samSungTv.status === true) {
            samSungTv.tvOff();
            document.getElementById('tvstatus').src = "image/television-screen-off.png"
            flag = samSungTv.currentChannel
        } else {
            samSungTv.tvOn();
            samSungTv.currentChannel = flag
            switch (samSungTv.currentChannel) {
                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }
}
let prevch = samSungTv.currentChannel
var flag = samSungTv.currentChannel;

function changeByRemote(button) {
    // console.log(button)
    if (!isNaN(button)) {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            flag = samSungTv.currentChannel;
            console.log(samSungTv.currentChannel)

            remoteSamsung.switchChannelByNum(samSungTv, button);
            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }

        }
    }
    prevch = flag
    if (button === 'up') {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            flag = samSungTv.currentChannel
            remoteSamsung.switchChannelUp(samSungTv);
            console.log(samSungTv.currentChannel)

            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }
    if (button === 'down') {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            flag = samSungTv.currentChannel
            remoteSamsung.switchChannelDown(samSungTv);
            console.log(samSungTv.currentChannel)
            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }

    if (button === 'prev') {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            console.log(prevch, flag)
            flag = samSungTv.currentChannel
            console.log(prevch, flag)
            remoteSamsung.switchChannelByNum(samSungTv, prevch)

            switch (samSungTv.currentChannel) {

                case 0:
                    document.getElementById('tvstatus').src = "image/nosignal.png"
                    break;
                case 1:
                    document.getElementById('tvstatus').src = "image/vtv1.png"
                    break;
                case 2:
                    document.getElementById('tvstatus').src = "image/vtv2.png"
                    break;
                case 3:
                    document.getElementById('tvstatus').src = "image/vtv3.png"
                    break;
                case 4:
                    document.getElementById('tvstatus').src = "image/vtv4.png"
                    break;
                case 5:
                    document.getElementById('tvstatus').src = "image/vtv5.png"
                    break;
                case 6:
                    document.getElementById('tvstatus').src = "image/vtv6.png"
                    break;
                case 7:
                    document.getElementById('tvstatus').src = "image/vtv7.png"
                    break;
                case 8:
                    document.getElementById('tvstatus').src = "image/vtv8.png"
                    break;
                case 9:
                    document.getElementById('tvstatus').src = "image/vtv9.png"
                    break;
            }
        }
    }

    if (button === '+') {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            remoteSamsung.controlVolumeUp(samSungTv);
            console.log(samSungTv.currentVolume);
        }
    }
    if (button === '-') {
        if (samSungTv.status === true && remoteSamsung.status === true) {
            remoteSamsung.controlVolumeDown(samSungTv);
            console.log(samSungTv.currentVolume);
        }

    }

    if (button === 'ir') {
        if (samSungTv.status === true) {
            remoteSamsung.connectToTv(samSungTv);
        }

    }
    if (button === 'onoff') {
        if (samSungTv.status === true) {
            if (remoteSamsung.status === true) {
                remoteSamsung.switchOnOff(samSungTv)
                changeTivi('onoff')
            }
        } else {
            if (remoteSamsung.status === true) {
                remoteSamsung.switchOnOff(samSungTv)
                changeTivi('onoff')
            }
        }
    }
}
const keys = document.querySelector('.remote-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    changeByRemote(target.value)
});

const button = document.querySelector('.tv');
button.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    changeTivi(target.value)
});

