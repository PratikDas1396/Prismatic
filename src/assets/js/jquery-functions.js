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

function registration_init() {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").on('click', function () {
        debugger;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        current_fs.hide(500);
        next_fs.show(500);
       
        setProgressBar(++current);
    });

    $(".previous").on('click', function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        current_fs.hide(500);
        previous_fs.show(500);
        // next_fs.show(500);

       
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").on('click', function () {
        return false;
    })
}


export {
    CallModel,
    CloseModel,
    CallToast,
    registration_init
}

