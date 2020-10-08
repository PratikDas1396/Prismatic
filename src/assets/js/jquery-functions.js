function SetHorizontalTab(selector) {
    $(selector).jqTabs({
        direction: 'horizontal',
        duration: 200
    });

}

module.exports = {
    SetHorizontalTab
}