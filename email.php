<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   <link rel="stylesheet" href="css/master1.css">
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <title>ТРАНСКАРГО-А</title>
</head>

<body>
<div class="header">
    <div class="pos1">
      <a href="index.html">
        <img src="img/logo.svg" alt="Лого">
      </a>
    </div>
    <div class="pos2">
      ОБЩЕСТВО С ОГРАНИЧЕННОЙ<br>ОТВЕСТВЕННОСТЬЮ<br>
      <a>ТРАНСКАРГО-А</a>
    </div>
    <div class="pos3">
      +7 (926) 916-60-57<br>
      +7 (968) 026-11-99<br>
      +7 (968) 464-21-29<br>
      trcargo-a@mail.ru<br>
    </div>
  </div>
  <nav>
    <!--Меню-->
    <ul>
      <li><a href="index">Цены</a></li>
      <li><a href="calc">Калькулятор</a></li>
      <li><a href="#">Документы</a>
        <ul>
          <li><a href="img/docs/EGRUL.png" target="_blank">ЕГРЮЛ</a></li>
          <li><a href="img/docs/rekveziti.png" target="_blank">Реквизиты</a></li>
          <li><a href="img/docs/svidetelstvo.png" target="_blank">Свидетельство</a></li>
          <li><a href="img/docs/DOGOVOR.docx" target="_blank">Договор</a></li>
          <li><a href="img/docs/USTAV.pdf" target="_blank">Устав</a></li>
        </ul>
      </li>
      <li><a href="map">Схема проезда</a></li>
      <li class=red><a href="https://trcargo-a.ru/sings">Опасный груз</a></li>
      <li><a href="zayvka">Онлайн заявка</a></li>
    </ul>
  </nav>
<?php
   $back = "<p><a href=\"javascript: history.back()\">Заполните все поля!<br>Вернуться назад</a></p>";

   if(!empty($_POST['user1'])
   and !empty($_POST['phone1'])
   and !empty($_POST['select1'])
   and !empty($_POST['user2'])
   and !empty($_POST['phone2'])
   and !empty($_POST['mest'])
   and !empty($_POST['obem'])
   and !empty($_POST['ves'])
   and !empty($_POST['comment'])){
      $user1 = trim(strip_tags($_POST['user1']));
      $phone1 = trim(strip_tags($_POST['phone1']));
      $user2 = trim(strip_tags($_POST['user2']));
      $phone2 = trim(strip_tags($_POST['phone2']));
      $mest = trim(strip_tags($_POST['mest']));
      $obem = trim(strip_tags($_POST['obem']));
      $ves = trim(strip_tags($_POST['ves']));
      $select1 = trim(strip_tags($_POST['select1']));
      $comment = trim(strip_tags($_POST['comment']));

      mail('zayavka@trcargo-a.ru', 'Заявка с сайта',
      'Направление: '.$select1.'<br />
      Отправитель: '.$user1.'<br />
      Телефон: '.$phone1.'<br />
      Получатель: '.$user2.'<br />
      Телефон: '.$phone2.'<br />
      Кол-во мест: '.$mest.'<br />
      Объем: '.$obem.'<br />
      Вес: '.$ves.'<br />
      Комментрии: '.$comment,"Content-type:text/html;charset=utf-8");

      echo "<script>document.location.href='//trcargo-a.ru/index.html';</script>";

      exit;
   }
   else {
      echo " $back";
      exit;
   }
?>
</body>
</html>
