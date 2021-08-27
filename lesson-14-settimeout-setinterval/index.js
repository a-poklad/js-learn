let printNumbers = function (from, to) {
    let reSetTimeout = setTimeout(function tick () {
        console.log(from++)
        reSetTimeout = setTimeout(tick, 1000)
        if(from > to) {
            clearTimeout(reSetTimeout)
        }
    }, 1000)

    // let timeInterval = setInterval(function () {
    //     console.log(from++)
    //     if(from === to + 1) {
    //         clearInterval(timeInterval)
    //     }
    // }, 1000)
}

// printNumbers(5, 10)

// Create function constructor Timer which can:
// 1) Get current time
// 2) Start count (console.log time each 1 sec)
// 3) Stop count (stop console.log time each 1 sec)

let Timer = function () {
    let timeInterval

    this.getTime = () => {
        const timeNow = new Date()
        console.log(timeNow)
    }

    this.start = () => {
        timeInterval = setInterval(function () {
            console.log(new Date())
        }, 1000)
    }

    this.stop = () => {
        clearInterval(timeInterval)
    }
}

let time = new Timer()

time.getTime()
time.start()
time.stop()

