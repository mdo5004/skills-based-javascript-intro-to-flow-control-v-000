function basicTeenager(age) {
    if (age >= 13  && age <= 19) {
        return "You are a teenager!"
    }
}

function teenager(age) {
    if (age >= 13  && age <= 19) {
        return "You are a teenager!"
    } else {
        return "You are not a teenager"
    }
}

function ageChecker(age) {
    if (age >= 13  && age <= 19) {
        return "You are a teenager!"
    } else if (age < 13) {
        return "You are a kid"
    } else if (age > 19) {
        return "You are a grownup"
    } else {
        return null
    }
}

function ternaryTeenager(age) {
    (age >= 13  && age <= 19) ? return "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
    switch (age) {
        case (age >= 13  && age <= 19):
            return "You are a teenager"

        case (age < 13  || age > 19):
            return "You have an age"

        default:
            return "You have no age"

               }
}
