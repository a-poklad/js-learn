function getAgeByBirthYear(date) {
    return Math.floor(new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970)
    // return Math.floor(((new Date() - new Date(date)) / 1000 / (60 * 60 * 24)) / 365.25)
}

// console.log(getAgeByBirthYear('1990-11-17'))
