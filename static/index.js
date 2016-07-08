/**
 * Created by jakewilliamson on 7/5/16.
 */
var main;
main = function () {
    $('.btn-canc').hide();
    $('.btn-conf').hide();

    $.ajax({
        method: "GET",
        url: "http://127.0.0.1:5000/list/1",
    })

        .done(function (msg) {
            if(msg.list_items.length > 0)
                var itemsArray =  Array(msg.list_items.length);
                $(msg.list_items).each(function (i) {
                    itemsArray[this.location -1] = this.text;
                });
            for(var i = itemsArray.length - 1; i >= 0; i){
            addToList(itemsArray [i]);
            }
            if(msg.listname.length > 0) {
                $('.titletext').text(msg.listname);
            }

            setEventListeners();

        });

    function addToList(message) {
        //$(".to-do-list").append('<div class = "row rowdiv"> </div>');
        var textDiv = $('<div>')
                        .addClass('col-md-4')
                        .addClass('todo-text')
                        .text(message);
        var checkBoxDiv = $('<div>')
                            .addClass('col-md-1')
                            .addClass('todo-done-checkbox')
                            .html('<input type="checkbox" class="list-checkbox"/>');
        var deleteDiv = $('<div>')
                            .addClass('col-md-1')
                            .addClass('todo-delete')
                            .html('<input type="radio" class="todo-delete-radio" value="1" hidden/>')
        var rowDiv = $('<div>')
                    .addClass('row')
                    .addClass('todo-row');

        rowDiv.append(checkBoxDiv).append(textDiv).append(deleteDiv);

        $('.to-do-list').prepend(rowDiv);
        // $('<input type="checkbox" class="list-checkbox"/>').prependTo($('ol li:first'));.        .text(mes       sage)
        // $('#notes').val("");
        $('.to-do-list').sortable();
        setEventListeners();
    }

    function setEventListeners() {
        $('.list-checkbox').change(function() {
            if($(this).is(':checked'))
                $('.done-list').append($(this).parents('.todo-row'));
            else
                $('.to-do-list').append($(this).parents('.todo-row'));
        });
    }

        $("#add").click(function () {
            var post = $('#notes').val();
            if (post.length > 0) {
                addToList(post);
                $('#notes').val("");

            }


        });

        $('.btn-del').click(function () {
            $('.todo-delete-radio').show();
            $('.btn-canc').show();
            $('.btn-conf').show();



        });

        $('.btn-canc').click(function () {
            $('.btn-canc').hide();
            $('.btn-conf').hide();
            $('.todo-delete-radio').prop('checked', false);
            $('.todo-delete-radio').hide();
        });

        $('.btn-conf').click(function () {
            $("input:radio:checked").each(function() {
               $(this).parents('to-do-row').remove()
            });
            $('.btn-canc').hide();
            $('.btn-conf').hide();
            $(":radio").hide();
            $('.todo-delete-radio').prop('checked', false);
        });


}


    $(document).ready(main);



