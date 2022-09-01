

$(function(){

  function getNumberWithCommas(number) {
    number = number.split('.').join("");
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  $(document).on('keyup','.imoney', function(e){
    //console.log();
    $(this).val(getNumberWithCommas($(this).val()))
  })

    $.datetimepicker.setLocale('tr');
    jQuery('.datepicker').datetimepicker({
      lang:'tr',
      format:'d.m.Y',
      timepicker:false,
      closeOnDateSelect :true,
      yearStart: '1920'
    });



    jQuery.extend(jQuery.validator.messages, {
        required: "Bu alanın doldurulması zorunludur.",
        remote: "Lütfen bu alanı düzeltin.",
        email: "Lütfen geçerli bir e-posta adresi giriniz.",
        url: "Lütfen geçerli bir web adresi (URL) giriniz.",
        date: "Lütfen geçerli bir tarih giriniz.",
        dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
        number: "Lütfen geçerli bir sayı giriniz.",
        digits: "Lütfen sadece sayısal karakterler giriniz.",
        creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
        equalTo: "Lütfen aynı değeri tekrar giriniz.",
        accept: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
        maxlength: jQuery.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
        minlength: jQuery.validator.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
        rangelength: jQuery.validator.format("Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz."),
        range: jQuery.validator.format("Lütfen {0} ile {1} arasında bir değer giriniz."),
        max: jQuery.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
        min: jQuery.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz."),
        valueNotEquals: "Bu alanın doldurulması zorunludur."
    });



    // form validation defaults
    $.validator.setDefaults({
        errorClass: "errormessage",
        ignore: ":not(select:visible, input:visible, textarea:visible), #BirthDate",
        errorPlacement: function(error, element) {
            var children = element.parent('.control').children('div.validation-error');

            if (element.hasClass('errormessage')) {
                if (!children.length) {
                    if (element.hasClass('checkbox') || element.hasClass('radio')) {
                        if (element.hasClass('fluid')) {
                            var messageElement = $('<div class="validation-error-fluid">!</div>');
                            element.parent().append(messageElement);
                        } else {
                        		$('.validation-error-checkbox-new').remove();
                            //var messageElement = $('<div class="validation-error validation-error-checkbox-new">!</div>');
                            var messageElement = $('<div class="validation-error-checkbox-new"><div class="desc">Lütfen Kullanım Koşullarını Kabul Ediniz</div><div class="icon">!</div></div>');
                            element.parent().parent().parent().append(messageElement);
                        }
                    } else {
                        if (element.hasClass('validation-alt')) {
                            var messageElement = $('<div class="validation-error-alt">!</div>');
                        } else {
                            if (element.parent().is('td')) {
                                var messageElement = $('<div class="validation-error-td">!</div>');
                            } else {
                                var messageElement = $('<div class="validation-error">!</div>');
                            }
                        }
                        element.parent('.control').append(messageElement);
                    }
                    messageElement.qtip({
                        content: error,
                        position: {
                            my: 'left center',
                            at: 'right center',
                            target: messageElement
                        },
                        style: {
                            classes: 'qtip-gray',
                        },
                        show: {
                            delay: 100
                        },
                        hide: {
                            fixed: true,
                            event: 'mouseleave',
                            delay: 500
                        }
                    });
                } else if (children.html().indexOf(error) === -1) {
                    children.qtip('option', 'content.text', error.html());
                }
            }
        },

        // remove tooltip and div with '!'
        success: function() {

            // Hide tooltips on valid elements 
            setTimeout(function() {
                $('.valid').qtip('destroy', true);
                $('.valid').parent().children('div.validation-error').remove();
                $('.valid').parent().children('div.validation-error-td').remove();
                $('.valid').parent().children('div.validation-error-alt').remove();
                $('.valid').parent().children('div.validation-error-checkbox').remove();
                $('.valid').parent().parent().parent().children('div.validation-error-checkbox').remove();
                $('.valid').parent().children('div.validation-error-fluid').remove();
            }, 100);
        }
    });


    //$.widget.bridge('uitooltip', $.ui.tooltip);
    /*$('body').uitooltip({
        selector:'.wToolTip',
        tooltipClass:"wToolTipC",
        hide: "false",
        show: "false",
        position: { my: "left+5 center+20", at: "right center" }
    })*/


    $(document).on('click','.tesvikRobotuOnay',function(){
    	$('.tesvik-ust .item-submit .form-cb .note').toggleClass('active');
    	$('.validation-error-checkbox-new').removeClass('passive');
    	if($(this).is(':checked')){
		    $('.validation-error-checkbox-new').addClass('passive');
		  }

    })

    $(document).on('mouseenter', '.wToolTipImage', function(e){
        var title = $(this).attr('data-image');
      
        $('<div class="wToolTipImageC"><img src="'+title+'" /></div>').appendTo('body').fadeIn();
        var mousex = e.pageX + 20; 
            var mousey = e.pageY + 10; 
            $('.wToolTipImageC')
            .css({ top: mousey, left: mousex })
    }).on('mouseleave', '.wToolTipImage', function(){
        $('.wToolTipImageC').remove();
    });




    $('input[type="checkbox"]').on('ifToggled', function(event){
        try {
            $(this).valid();
        } catch (err) {

        }
    });

/*
    $.validator.addMethod("valueNotEquals", function(value, element, arg) {
        return arg != value;
    }, jQuery.validator.messages.valueNotEquals);*/


    $('.mainForm').validate({
        rules: {
            "yatirimin_tanimi": {
                required: true
            },
            "yatirim_yeri": {
                required: true
            },
            "sozlesme": {
                required: true
            }
            /*"yatirima_baslama_tarihi": {
                required: true
            },
            /*"pass": {
                required: true,
                minlength:4,
                maxlength:20
            },
            "pass_confirm": {
                required: true,
                equalTo: "#password",
                minlength:4,
                maxlength:20
            },
            "cinsiyet": {
                required: true
            },
            "telefon": {
                required: true
            },
            "guvenlik_kodu": {
                required: true
            },*/
            
        },
        messages: {
           "sozlesme": {
                required: "Lütfen kullanı koşullarını kabul ediniz."
            } 
        }
    });


    // prevent multiple submission
    $(".mainForm").submit(function () {
      if ($(this).valid()) {
        

        if($('.ilceSelect').hasClass('active') && $('.ilceSelect').val() == '0'){
          alert('İlçe seçiniz');
          return false
        }


        $(this).submit(function () {return false;});

        

        return true;
      }
      else {
        return false;
      }
    });

})

$(function(e){
    //$('.gumruk_vergisi_orani').mask("99%");
    //$('.kdv').mask("99%");
    $(".jmoney").maskMoney({
        prefix:'', // The symbol to be displayed before the value entered by the user
        allowZero:false, // Prevent users from inputing zero
        allowNegative:true, // Prevent users from inputing negative values
        defaultZero:false, // when the user enters the field, it sets a default mask using zero
        thousands: '.', // The thousands separator
        decimal: '.' , // The decimal separator
        precision: 0, // How many decimal places are allowed
        affixesStay : false, // set if the symbol will stay in the field after the user exits the field. 
        symbolPosition : 'left' // use this setting to position the symbol at the left or right side of the value. default 'left'
    }); 

})
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}


$(document).on('click','.print_result',function(e){
if(navigator.userAgent.indexOf('rv:')!=-1 || navigator.userAgent.indexOf('MSIE')!=-1){
  if(!window.open(base_url+'print_result'))
  alert('Açılır pencere tarayıcınız tarafından engellendi. Lütfen Tarayıcınızı bu siteye özel açılır pencerelere izin ver olarak ayarlayınız.');
}
else{
  $('.print_order_frame iframe').attr('src',base_url+'print_result');
}
});
$(document).on('click','.print_result_calculated',function(e){
if(navigator.userAgent.indexOf('rv:')!=-1 || navigator.userAgent.indexOf('MSIE')!=-1){
  if(!window.open(base_url+'print_result_calculated'))
  alert('Açılır pencere tarayıcınız tarafından engellendi. Lütfen Tarayıcınızı bu siteye özel açılır pencerelere izin ver olarak ayarlayınız.');
}
else{
  $('.print_order_frame iframe').attr('src',base_url+'print_result_calculated');
}
});

$(document).on('click','.yatirimin_tanimi_result ul li a',function(e){
    var id = $(this).data('id');
    var ival = $(this).text();
    $(".yatirimin_tanimi_id").val(id);
    $(".yatirimin_tanimi_result").css('display','none');
    $(" .yatirimin_tanimi_result").html("");

    $(".yatirimin_tanimi").val($.trim(ival));

    $('.item-nace-tablo').html('');
    $.ajax({
      type: 'POST',
      url: base_url + 'Ajax/naceGetir',
      data:{id:id},
      success:function(res){
        var gelen = JSON.parse(res);
        console.log(gelen)
        if(gelen.naceTablo && gelen.tablo_show == 1){
          $('.item-nace-tablo').html(gelen.naceTablo);
        }
      }
    })


});
$(document).on('click','body',function(e){

});

$(document).on('change','.yatirimin_tanimi',function(e){
    $(".yatirimin_tanimi_id").val('');
});
var aramaDurumuTR = 0;
var timer;
var oldStr = '';
$(document).on('keyup','.yatirimin_tanimi',function(e){
  var str = $(this).val();

  if(str != oldStr){
    $('.loading-opener').addClass('selected');
    var that = $(this);
    clearTimeout(timer);
    if($(this).val().length < 3){
        $('.loading-opener').removeClass('selected');
        aramaDurumuTR = 0;
        return false;
    }
    timer = setTimeout(function (event) {

        var sobj = that;
        if(sobj.val()!='' && sobj.val().length>0){
            $.ajax({
              type: "POST",
              url: base_url+"Ajax/searchUs97",
              data: { query : sobj.val() },
              success: function(res){
                if(!res || res==''){
                    $(" .yatirimin_tanimi_result").css('display','none');
                    $(" .yatirimin_tanimi_result").html("");
                    aramaDurumuTR = 0;
                }else{
                    $(" .yatirimin_tanimi_result").css('display','block');
                    $(" .yatirimin_tanimi_result").html(res);
                    var listHeight = $(" .yatirimin_tanimi_result ul > li:lt(10)");
                    //console.log(listHeight);
                    var sum = 0;
                    $(listHeight).each(function() {
                       sum += $(this).height() + 2;
                    });
                    //console.log(sum);
                    $('.yatirimin_tanimi_result').css('max-height',sum);

                    aramaDurumuTR = 1;

                }
                $('.loading-opener').removeClass('selected');
              },
              error: function(res){
                //log(res);
                $('.loading-opener').removeClass('selected');
                aramaDurumuTR = 0;
              }
            });
        }else{
          aramaDurumuTR = 0;
          $(".yatirimin_tanimi_result").css('display','none');
        }

    }, 100);
  }

  if(str != oldStr){
    oldStr = str;
  }

});


function scrollToAnchorTR(aid){
  //console.log(aid.position().top)
  //$('.searchForm.active .arama-auto .aramaCont').animate({scrollTop: aid.position().top},'slow');
  $parentDiv = $('.main-form .jopener .yatirimin_tanimi_result ul');
  //$parentDiv.scrollTop($parentDiv.scrollTop() + aid.position().top);
  $parentDiv.scrollTop($parentDiv.scrollTop() + aid.position().top
  - $parentDiv.height()/2 + aid.height()/2);
} 

var secilenAutoCompleteKey = 0;
$(document).on('keyup', 'body', function(e){

  if(aramaDurumuTR == 1){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if(keyCode == 38){  // yukarı
      //console.log("yukarı")
      if(secilenAutoCompleteKey > 0){
        secilenAutoCompleteKey -=1;
        scrollToAnchorTR($('.main-form .jopener .yatirimin_tanimi_result ul li a').eq(secilenAutoCompleteKey));
        $('.main-form .jopener .yatirimin_tanimi_result ul li a').eq(secilenAutoCompleteKey).focus();
      }
    }
    if(keyCode == 40){  // asagi
      //console.log("asagi")
      secilenAutoCompleteKey +=1;
      scrollToAnchorTR($('.main-form .jopener .yatirimin_tanimi_result ul li a').eq(secilenAutoCompleteKey));
      $('.main-form .jopener .yatirimin_tanimi_result ul li a').eq(secilenAutoCompleteKey).focus();
    }
  }
  
});




String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

function reformatText(input) {        
    /*var x = input.value;
    x = x.replace(/,/g, ""); // Strip out all commas
    x = x.reverse();
    x = x.replace(/.../g, function (e) {
        return e + ",";
    }); // Insert new commas
    x = x.reverse();
    x = x.replace(/^,/, ""); // Remove leading comma
    input.value = x;*/
}



Number.prototype.formatMoney = function(c, d, t){
var n = this, 
c = isNaN(c = Math.abs(c)) ? 2 : c, 
d = d == undefined ? "." : d, 
t = t == undefined ? "," : t, 
s = n < 0 ? "-" : "", 
i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
j = (j = i.length) > 3 ? j % 3 : 0;
 return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

//////////////////
$(document).on('keydown','.makine_ekipman_tutari',function(e){

var ct = setTimeout(function(){
  
  var no21 = parseInt($('.no21').val().split('.').join(""));
  var no22 = parseInt($('.no22').val().split('.').join(""));
  var no23 = parseInt($('.no23').val().split('.').join(""));
  var no24 = parseInt($('.no24').val().split('.').join(""));
  var no25 = parseInt($('.no25').val().split('.').join(""));
  var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

  if(isInt(no21)) s21 = no21;
  if(isInt(no22)) s22 = no22;
  if(isInt(no23)) s23 = no23;
  if(isInt(no24)) s24 = no24;
  if(isInt(no25)) s25 = no25;
  var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
  
  $(".sabit_yatirim_toplami").css('display','block');
  $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");
},100);

});
$(document).on('keydown','.makine_ekipman_tutari_yabanci',function(e){
var ct = setTimeout(function(){
  var no21 = parseInt($('.no21').val().split('.').join(""));
  var no22 = parseInt($('.no22').val().split('.').join(""));
  var no23 = parseInt($('.no23').val().split('.').join(""));
  var no24 = parseInt($('.no24').val().split('.').join(""));
  var no25 = parseInt($('.no25').val().split('.').join(""));
  var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

  if(isInt(no21)) s21 = no21;
  if(isInt(no22)) s22 = no22;
  if(isInt(no23)) s23 = no23;
  if(isInt(no24)) s24 = no24;
  if(isInt(no25)) s25 = no25;
  var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
  $(".sabit_yatirim_toplami").css('display','block');
  $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");
},100);
});
$(document).on('keydown','.arsa_arazi_tutari',function(e){
var ct = setTimeout(function(){
  var no21 = parseInt($('.no21').val().split('.').join(""));
  var no22 = parseInt($('.no22').val().split('.').join(""));
  var no23 = parseInt($('.no23').val().split('.').join(""));
  var no24 = parseInt($('.no24').val().split('.').join(""));
  var no25 = parseInt($('.no25').val().split('.').join(""));
  var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

  if(isInt(no21)) s21 = no21;
  if(isInt(no22)) s22 = no22;
  if(isInt(no23)) s23 = no23;
  if(isInt(no24)) s24 = no24;
  if(isInt(no25)) s25 = no25;
  var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
  $(".sabit_yatirim_toplami").css('display','block');
  $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");
},100);
});
$(document).on('keydown','.insaat',function(e){
var ct = setTimeout(function(){
  var no21 = parseInt($('.no21').val().split('.').join(""));
  var no22 = parseInt($('.no22').val().split('.').join(""));
  var no23 = parseInt($('.no23').val().split('.').join(""));
  var no24 = parseInt($('.no24').val().split('.').join(""));
  var no25 = parseInt($('.no25').val().split('.').join(""));
  var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

  if(isInt(no21)) s21 = no21;
  if(isInt(no22)) s22 = no22;
  if(isInt(no23)) s23 = no23;
  if(isInt(no24)) s24 = no24;
  if(isInt(no25)) s25 = no25;
  var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
  $(".sabit_yatirim_toplami").css('display','block');
  $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");
},100);
});
$(document).on('keydown','.diger_giderler',function(e){
var ct = setTimeout(function(){
  var no21 = parseInt($('.no21').val().split('.').join(""));
  var no22 = parseInt($('.no22').val().split('.').join(""));
  var no23 = parseInt($('.no23').val().split('.').join(""));
  var no24 = parseInt($('.no24').val().split('.').join(""));
  var no25 = parseInt($('.no25').val().split('.').join(""));
  var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

  if(isInt(no21)) s21 = no21;
  if(isInt(no22)) s22 = no22;
  if(isInt(no23)) s23 = no23;
  if(isInt(no24)) s24 = no24;
  if(isInt(no25)) s25 = no25;
  var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
  $(".sabit_yatirim_toplami").css('display','block');
  $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");
},100);
});

/*makine_ekipman_tutari
makine_ekipman_tutari_yabanci
arsa_arazi_tutari
insaat
diger_giderler*/
//////////////////
$(document).on('click','.tesvik-hesapla',function(e){

    

    //sabit-uyari
    var minimum_yatirim = 0;
    //if(bolge == '3. Bölge' || bolge == '4. Bölge' || bolge == '5. Bölge' || bolge == '6. Bölge'){ minimum_yatirim = 500000;}
    //if(bolge == '1. Bölge' || bolge == '2. Bölge'){minimum_yatirim = 1000000;}


    if(bolge == '3. Bölge' || bolge == '4. Bölge' || bolge == '5. Bölge' || bolge == '6. Bölge'){ minimum_yatirim = tr_min_yt_tutari_3456;}
    if(bolge == '1. Bölge' || bolge == '2. Bölge'){minimum_yatirim = tr_min_yt_tutari_12;}


    var form = $(this).closest('form').serialize();
    var faiz_destegine_esas_tutar = $('.faiz_destegine_esas_tutar').val();
    var vade = $('.vade').val();

    /*if(!faiz_destegine_esas_tutar){
        alert('Faiz desteğine esas tutar, sabit yatırım tutarı toplamının en fazla %70’i olabilir.');
        return false;
    }*/
    //alert(faiz_destegine_esas_tutar);

    /*var no21 = parseInt($('.no21').val().replace(/,/g, ''));
    var no22 = parseInt($('.no22').val().replace(/,/g, ''));
    var no23 = parseInt($('.no23').val().replace(/,/g, ''));
    var no24 = parseInt($('.no24').val().replace(/,/g, ''));
    var no25 = parseInt($('.no25').val().replace(/,/g, ''));*/
    var no21 = parseInt($('.no21').val().split('.').join(""));
    var no22 = parseInt($('.no22').val().split('.').join(""));
    var no23 = parseInt($('.no23').val().split('.').join(""));
    var no24 = parseInt($('.no24').val().split('.').join(""));
    var no25 = parseInt($('.no25').val().split('.').join(""));
    var s21=0;var s22=0;var s23=0;var s24=0;var s25=0;

    if(isInt(no21)) s21 = no21;
    if(isInt(no22)) s22 = no22;
    if(isInt(no23)) s23 = no23;
    if(isInt(no24)) s24 = no24;
    if(isInt(no25)) s25 = no25;
    

    //alert(s21);

    var toplam = (70/100 * (s21 + s22 + s23 + s24 + s25));
    

    //alert(toplam);
    

    var no_vade = parseInt(vade);

    //var no_faiz_destegine_esas_tutar = parseInt(faiz_destegine_esas_tutar.replace(/,/g, ''));
    var no_faiz_destegine_esas_tutar = parseInt(faiz_destegine_esas_tutar.split('.').join(""));

    //log(no_faiz_destegine_esas_tutar);
    //log(toplam);
var no_sabit_yatirim_toplami = (s21 + s22 + s23 + s24 + s25);
    $(".sabit_yatirim_toplami").css('display','block');
    $(".sabit_yatirim_toplami .control").html(no_sabit_yatirim_toplami.formatMoney(0, ',', '.') + " TL");

    if((s21 + s22 + s23 + s24 + s25) < minimum_yatirim){
        //if(minimum_yatirim == 500000){$('.sabit-uyari').html('500 Bin TL altındaki yatırımlar desteklerden yararlanamamaktadır');}
        //if(minimum_yatirim == 1000000){$('.sabit-uyari').html('1 Milyon TL altındaki yatırımlar desteklerden yararlanamamaktadır');}
        //$('.sabit-uyari').html('500 Bin TL altındaki yatırımlar desteklerden yararlanamamaktadır');
        $('.sabit-uyari').html(minimum_yatirim.formatMoney(0, ',', '.') + ' TL altındaki yatırımlar desteklerden yararlanamamaktadır');
        $('.tesvik-sonuc').html('');
        return false;
    }else{
        $('.sabit-uyari').html('');
    }
    
    var hata = 0;

    
if(faiz_destegine_esas_tutar){
  if(no_faiz_destegine_esas_tutar > toplam){
    alert('Faiz desteğine esas tutar, sabit yatırım tutarı toplamının en fazla %70’i olabilir.');
    $(".faiz_destegine_esas_tutar ").css('border','1px solid red');
    $(".faiz_destegine_esas_tutar ").val('');
    $('.tesvik-sonuc').html('');
    hata = 1;
  }

  if(no_vade > 60){
    alert('Vade süresi en fazla 60 ay olmalıdır');
    hata = 1;
  }
  if(vade == ''){
    alert('Lütfen vade sayısını giriniz.');
    hata = 1;
  }
}

    if(hata == 0){



        $.ajax({
          type: "POST",
          url: base_url+"Ajax/tesvik_hesapla",
          data: { form : form },
          success: function(res){
            console.log(res);
            if(res){
              var gelen = JSON.parse(res);
              $('.tesvik-sonuc').css('display','block');
              $('.tesvik-sonuc').html('');
              $('.tesvik-sonuc').html(gelen.str);
              $(".faiz_destegine_esas_tutar ").css('border','1px solid #b9b9b9');

              $("html, body").animate({
                  scrollTop: $('.tesvik-sonuc').offset().top -100
              }, 2000);
              //$('.tesvik-unsur-aciklama').css('display','block');
              //$('.tesvik-unsur-aciklama').html('');
              //$('.tesvik-unsur-aciklama').html(gelen.tesvikUnsurYazi);



            }
            
            
          },
          error: function(res){
            //log(res);
          }
        });

    }
    

    
    //alert(form);
    




  




});
















$(function(){
  $(document).on('click','.tesvik-hesapla-head-btn', function(e){
    $("html, body").animate({
        scrollTop: $('.block-tesvik').offset().top -350
    }, 2000);
  })
  if(scrollYap == 1){
    $("html, body").animate({
        scrollTop: $('.form-results').offset().top -350
    }, 2000);
  }




  $(document).on('change','.ilSelect',function(){
    var il_id = $(this).val();
    //console.log(il_id)
    $('.ilceSelect').removeClass('active');
    $('.ilceSelect').html('');
    $.ajax({
      type:'POST',
      url:base_url+'Ajax/tesvikIlceGetir',
      data:{il_id:il_id},
      success: function(res){
        //console.log(res);
        var gelen = JSON.parse(res);
        //console.log(gelen);

        if(gelen.ilcelerOptions){
          $('.ilceSelect').addClass('active');
          $('.ilceSelect').html(gelen.ilcelerOptions);
        }
      }
    })
  });

})