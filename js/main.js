document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) =>{
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})


$('#submit').click(function (){
    $('.error-input').hide ();
    let name = $('#name');
    let address = $('#address');
    let phone  = $('#phone');
    let hasError = false;
    let loader = $('#loader')
    if (!name.val()) {

        name.siblings('.error-input').show();
        name.css('border-color', 'red')
        hasError = true;
    }else {

        name.css('border-color', 'rgb(185, 145, 80)')

    }

    if (!address.val()) {
        address.siblings('.error-input').show();
        address.css('border-color', 'red')
        hasError = true;
    }else {
        address.css('border-color', 'rgb(185, 145, 80)')

    }
    if (!phone.val()) {
        phone.siblings('.error-input').show();
        phone.css('border-color', 'red')
        hasError = true;
    }else{
        phone.css('border-color', 'rgb(185, 145, 80)')

    }
    if (!hasError){
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: 'https://testologia.site/checkout',
            data: {name: name.val(), address: address.val(), phone: phone.val() }
        })
            .done(function (message) {
                loader.hide();
                console.log(message);
                if (message.success){
$('#order-form').hide()
                    $('#order-form-second').show()
                }else {
                   alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                }

            })
    }
    })

