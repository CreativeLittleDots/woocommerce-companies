jQuery(document).ready(function($) {
    $('#_billing_address_id').change(function(){
        $.ajax({
            type: 'POST',
            url: ajax_object.ajax_url,
            dataType: 'json',
            data: {
                action: 'get_address',
                address_id: $(this).val(),
                details: 'billing',
            },
            success: function(json){
                $.each(json.data,function(key,value){
                    $('[name="'+key+'"]').val(value)
                })
            }
        })
    })
    $('#_shipping_address_id').change(function(){
        $.ajax({
            type: 'POST',
            url: ajax_object.ajax_url,
            dataType: 'json',
            data: {
                action: 'get_address',
                address_id: $(this).val(),
                details: 'shipping',
            },
            success: function(json){
                $.each(json.data,function(key,value){
                    $('[name="'+key+'"]').val(value)
                })
            }
        })
    })
})