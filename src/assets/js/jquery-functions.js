let modalOptions = {
    backdrop: "static",
    keyboard: false
}

function CallModel(selector) {
    $(selector).click()
}

function CloseModel(selector) {
    $(selector).click()
}

function CallToast(selector) {

    $(selector).toast('show')
}


export {
    CallModel,
    CloseModel,
    CallToast
}