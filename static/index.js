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
                $(msg.list_items).each(function (i) {
                    addToList(this.text);
                })

            if(msg.listname.length > 0) {
                $('.titletext').text(msg.listname);
            }

            setEventListeners();

        });

    function addToList(message) {
        $('<li>').text(message).prependTo('.list');
        $('<input type="checkbox" class="list-checkbox"/>').prependTo($('ol li:first'));
        $('#notes').val("");
        $('ol').sortable();
        setEventListeners();
    }

    function setEventListeners() {
        $('.list-checkbox').change(function() {
            $('.done-list').append($(this).parent())
            $
        });
    }

        $("#add").click(function () {
            var post = $('#notes').val();
            if (post.length > 0) {
                addToList( <div class="row"> post</div>);
            }


        });

        $('.btn-del').click(function () {

            $('ol li').each(function(index){
               if($(this).find('input:radio').length == 0) {
                   $('<input type="radio" id = rad value="1"/> ').appendTo($(this));
               }
            });
           // if(' ol li').contains('radio')(function() {
           //      $('<input type="radio" id = rad value="1"/> ').appendTo($('ol li'));
           //  });
            $('.btn-canc').show();
            $('.btn-conf').show();



        })

        $('.btn-canc').click(function () {
            $('.btn-canc').hide();
            $('.btn-conf').hide();
            $(":radio").remove();
        });

        $('.btn-conf').click(function () {
            $("input:radio:checked").each(function() {
               $(this).parent().remove();
            })
            $('.btn-canc').hide();
            $('.btn-conf').hide();
            $(":radio").remove();
        });


}


    $(document).ready(main);



