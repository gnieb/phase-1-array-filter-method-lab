
function findMatching(array, driverName) {
    const found = array.filter(function (name) {
        return name.toLowerCase() === driverName.toLowerCase()
    })
    return found
}

function fuzzyMatch (array, driverName) {
const found = array.filter(function (name) {
    return name[0]+name[1]+name[2]=== driverName[0]+name[1]+name[2]
})
    return found
}

function matchName (array, string) {
    const found = array.filter(function (driver) {
        return driver.name === string
    })
    return found
}
