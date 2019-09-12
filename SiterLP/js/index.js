$(document).ready(function(){
    $(".select__active").click(function(e){
        $active = this; // select
        $select = $(this)
        $select.toggleClass('cross'); // change icon
        $('.select__active').not($select).removeClass('cross');
        $element = $(this).parent().find(".select__list"); // optgroup
        $('.select__list').not($element).removeClass('d-block'); // hidden opened optgroup
        $element.toggleClass("d-block"); // show optgroup

        $element.find('.select__tariff').click(function(e) {
            $text = this.textContent; // option textContent
            $active.textContent = $text; // select text === option text
            $select.removeClass('cross'); // change icon
            $element.removeClass('d-block'); // hidden optgroup
            
        })
    });
});