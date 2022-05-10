var time_route = new Array();
time_route[1] = '3 дня';
time_route[2] = '3 дня';
time_route[3] = '3 дня';
time_route[4] = '3 дня';
time_route[5] = '5 дней';

var price_route = new Array();
price_route[1] = {
  'min': 1200,
  'volume': 4400,
  'weight': 22,
};
price_route[2] = {
  'min': 1200,
  'volume': 2200,
  'weight': 11
};
price_route[3] = {
  'min': 1200,
  'volume': 4400,
  'weight': 22
};
price_route[4] = {
  'min': 1200,
  'volume': 2200,
  'weight': 10
};
price_route[5] = {
  'min': 2100,
  'volume': 8400,
  'weight': 42
};

function priceExpeditionMOW(w, v) {
  if (w >= 10001 || v >= 25.01) return 15000;
  if (w >= 5001 || v >= 15.01) return 10000;
  if (w >= 2501 || v >= 10.01) return 6000;
  if (w >= 1501 || v >= 6.01) return 4000;
  if (w >= 501 || v >= 2.51) return 3000;
  if (w >= 301 || v >= 1.51) return 2500;
  if (w >= 51 || v >= 0.51) return 2000;
  return 1200;
}

function priceExpeditionKOMI(w, v) {
  if (w >= 3000 || v >= 20) return 10000;
  if (w >= 1500 || v >= 10) return 5000;
  if (w >= 500 || v >= 5) return 2500;
  if (w >= 100 || v >= 1) return 1500;
  return 1000;
}

function getFloat(v) {
  if (typeof v === 'string') {
    v = v.replace(',', '.');
  }

  return parseFloat( v );
}

$(function(){

  $('#jCalcClose').click(function(){
    removeOverfix();
  });

  $('#jWeightAdd').click(function(){
    var el = $(this).parent().find('.weight_item').last();
    $(this).before( el.clone() );
  });

  $('#jCalcForm').delegate('.jWeightRemove', 'click', function(){
    $(this).closest('.weight_item').remove();
  });

  $('#jCalc').click(function(){
    var total = 0;
    var el = $(this).closest('.buttons');
    var form = $(this).closest('.form');

    $('.result', form).remove();

    var n = $('select[name=route]').val();

    $('.weight_item', form).each(function(){
      var p = 0;

      var s = 1; /*parseInt($('select', this).val()); // Габариты одного места */
      var q = getFloat( $('.jQty', this).val() );
      var w = getFloat( $('.jWeight', this).val() ) ;
      var v = getFloat( $('.jVolume', this).val() ) ;

      if (isNaN(q)) q = 1;
      if (isNaN(w)) w = 0;
      if (isNaN(v)) v = 0;

      if (s == 1) q = 1;

      // if (v < 0.15) {
        // p = q * price_route[n].min;
      // }
      // else {
        p = q * Math.max(price_route[n].min, w * price_route[n].weight, v * price_route[n].volume);
      // }

      $('.services input[type=checkbox]:checked').each(function(){
        if ($(this).val() == 'temperature') {
          p *= 1.3;
        }
        if ($(this).val() == 'gabarit') {
          p *= 1.3;
        }
        if ($(this).val() == 'glass') {
          p *= 1.3;
        }

        if ($(this).val() == 'from') {
          if (n == 1 || n == 3) {
            p += priceExpeditionMOW(w, v);
          }
          else {
            p += priceExpeditionKOMI(w, v);
          }
        }
        if ($(this).val() == 'to') {
          if (n == 2 || n == 4) {
            p += priceExpeditionMOW(w, v);
          }
          else {
            p += priceExpeditionKOMI(w, v);
          }
        }
      });

      console.log(n, price_route[n], p, q, w, v);

      total += p;

    });

    el.before('<div class="result">Стоимость перевозки <span>' + total + ' руб.</span> срок доставки <i>' + time_route[n] + '</i></div>');
  });
});
