// public domain
(function (w, d, undefined){

if (w.lk) return;

w.lk = {
  // Время блокировки кнопки "Продолжить работу"
  time: 15,
  // ВНИМАНИЕ! Адрес сервера статистики будет добавлен в скрипт
  //           перед стартом акции, просьба не размещать скрипт
  //           блокировки до начала акции (до полуночи 3 июля)            
  // Адрес сервера статистики. Если не хотите отправлять статистику, оставьте значение пустым
  statserver: '',

  sharing: {
    // Адрес, который публикует пользователь в соцсетях якорь #block заставляет показать страницу блокировки в любом случае                         
    url: 'http://localhost#block',   
    // Заголовок поста, который публикует пользователь в соцсетях
    title: 'Интернет-свобода под угрозой!', 
     // Текст, который публикует пользователь в соцсетях 140 символов
    text: '1 августа вступит в силу закон о борьбе с пиратским видео в интернете, который даёт возможность закрыть любой сайт. Подробнее читайте здесь.',
    // Ссылка на изображение, которое публикует пользователь в соцсетях
    img: ''
  },

  replace: {
    // Название сайта в заголовке
    sitename: 'Хабрахабр',
    // Ссылка на сайт в заголовке
    siteurl:  'http://habrahabr.ru/',
    // Надпись на кнопке голосования
    votename: 'Подписать петицию',                  
    // Адрес петиции
    voteurl:  'http://www.onlinepetition.ru/%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D0%B8%D0%B5-%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0---292521-6-/petition.html',
    // Основной текст страницы
    info: '\
      <p>21 июня Государственная Дума РФ <a target="_blank" href="http://lenta.ru/news/2013/06/21/piracylaw/">почти единогласно</a> и в кратчайшие сроки <a target="_blank" href="http://habrahabr.ru/company/yandex/blog/184182">приняла</a> <a target="_blank" href="http://asozd2.duma.gov.ru/main.nsf/(SpravkaNew)?OpenAgent&RN=292521-6&02">закон</a> о борьбе с пиратским распространением фильмов и сериалов в сети Интернет.</p> \
      <p>В текущей формулировке этот закон даёт возможность в любой момент закрыть сайт по причине размещения сторонним пользователем ссылки на пиратский контент. Таким образом, под угрозой блокировки оказываются блоги, поисковики, принцип работы которых не позволяет устраивать предварительную модерацию выдачи, публичные торрент трекеры, файловые хранилища, видеохостинги, социальные сети. Текст закона противоречит <a target="_blank" href="http://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1_2.0">принципам работы</a> современного свободного интернета.</p> \
      <p>Более того, из-за технических особенностей организации Сети и невозможности провайдеров блокировать исключительно страницы с контентом, на который приведена жалоба правообладателя, ограничение доступа будет распространяться на все ресурсы находящиеся на данном <a target="_blank" href="http://ru.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81">IP-адресе</a> (они могут исчисляться <a target="_blank" href="http://habrastorage.org/storage2/39a/1e1/cc5/39a1e1cc541754eee30f8ca06710a217.png">тысячами</a>)</p> \
      <p>Компаниями <a target="_blank" href="http://clubs.ya.ru/company/replies.xml?item_no=67927">Яндекс</a>, <a target="_blank" href="http://googlerussiablog.blogspot.ru/2013/06/google.html">Google</a>, ассоциацией <a target="_blank" href="http://raec.ru/times/detail/2625/">РАЭК</a> были предложены поправки к закону, исключающие возможность ложной блокировки невинных ресурсов, но их <a target="_blank" href="http://habrahabr.ru/company/yandex/blog/184182/#comment_6402274">не учли</a>.</p> \
      <p>Не стоит надеяться на программистов. В случае, если законы подобного уровня проработки будут приниматься дальше, ничто не помешает запретить анонимные cистемы обмена информацией, такие как <a target="_blank" href="http://ru.wikipedia.org/wiki/I2P">I2P</a> или <a target="_blank" href="http://ru.wikipedia.org/wiki/Tor">TOR</a>, ввести лицензирование <a target="_blank" href="http://ru.wikipedia.org/wiki/VPN">VPN</a> и шифрованных туннелей. Если мы это допустим, то Интернет потеряет независимость.</p> \
      <p>На сайте onlinepetition.ru был организован сбор подписей против этого закона. Если вы согласны с тем, что в таком виде он не должен существовать, поставьте, пожалуйста, свою подпись под петицией или просто продолжите работу по завершении отсчета таймера в случае, если вам <a target="_blank" href="http://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0_%D0%BE%D0%BD%D0%B8_%D0%BF%D1%80%D0%B8%D1%88%D0%BB%D0%B8%E2%80%A6">безразлично</a> будущее Рунета.</p> \
      <p>Так или иначе, закон вступает в силу <b>1 августа</b>. Заседания Думы на тему защиты музыкальных произведений и прочих авторских прав будут проведены этой осенью.</p>'
  },

  html: '\
    <div id="lk-fill"></div> \
    <div id="lk-body"> \
    <div id="lk-msg"> \
      <a href="{SITEURL}" id="lk-name">{SITENAME}</a> \
      <div id="lk-cause">Cайт заблокирован по решению органов государственной власти*</div> \
      <div class="lk-note">*Подобное сообщение вы скоро сможете наблюдать вместо любимых сайтов</div> \
      <div id="lk-info">{INFO}</div> \
      <div class="lk-btnfld"> \
        <a id="lk-pet" target="_blank" href="{VOTEURL}">{VOTENAME}</a> \
        <a id="lk-cont" class="lk-lock" href="javascript:void(0)">Продолжить работу <span id="lk-time"></span></a> \
      </div> \
      <div class="lk-note">Поделитесь этой информацией с друзьями и знакомыми</div> \
      <div id="lk-share"> \
        <a href="javascript:void(0)" id="lk-v"></a> \
        <a href="javascript:void(0)" id="lk-o"></a> \
        <a href="javascript:void(0)" id="lk-f"></a> \
        <a href="javascript:void(0)" id="lk-t"></a> \
        <a href="javascript:void(0)" id="lk-g"></a> \
        <a href="javascript:void(0)" id="lk-m"></a> \
        <a href="javascript:void(0)" id="lk-y"></a> \
        <a href="javascript:void(0)" id="lk-j"></a> \
        <a href="javascript:void(0)" id="lk-l"></a> \
        <a href="javascript:void(0)" id="lk-b"></a> \
      </div> \
      <div class="lk-note">Разместите <a target="_blank" href="https://github.com/imShara/jslock">такую же страничку</a> на своем личном сайте</div> \
      </div> \
    </div> \
    </div>',

  css: '\
    #lk-v { \
      background: #49739f url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAQAAAAqYpy5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO1JREFUGNNjYDBlsEKCFgxGDIoMLAwg8OnBz/cI+O3luyvnF9u6M3AApf7/+48Bfr4rdANK/Xr3Hwt4fhBJ6k/Yf8v//n/PQHi/3iFJ7QeZznDSEsL7/RZJylKaQYBBfGIKVGoXQurf2qaJ+Rtavj4Gcz7918TqjN+fV+YxyGKV+vv74+0j0xkk4FL/tv9f83/d/4swBbtb4FIVguDAYfgzB8L/9hwu9UoVIjVTA+rP73CpBjlguHEyiC3Mh0p9hTt+Yn50eGr02qbvb6DhcRFHGAKBD8O/P1gl6kCRcvf/JyT47v+t/6v/24IcBABTu2IrUISB4QAAAABJRU5ErkJggg==) 10px 7px; \
    } \
    #lk-o { \
      background: #eb722e url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAQAAADYpcc/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUKBVdwT8oRAEAx/FfoogSjjrSlQykbJwyMlgwyKJMYqNMJBY3sbBgObnSIWVS518ysCilGyTJ/zp/Sldy58+98/Xeu5dePh85ClSjRjWqTkVyKRvvv955v32/fziYG1alHHkbk7gczatQlkAbGRuskca02CfLQwR+DFpkoj6dgPiZsiQl7+B1S47HBUh/HRRI+ryHq03lypJ9Mgc/KfIlfW1D6q23Wz5VNrQmn+H7UhaaMRnJ4+DRwscLlh5lEMAtJFuVmuSjk1MM4Jx+eeVXraKrydhxUH5Vy6MSValhazoRu9kVtkTsbD08sTQaDb9dYRMdxPkvxYAkSghwYbxiMuLcMYNPf4qjIUw3EXnl4gmOpBKY0t+RKVXI4Vkew2V/VuWyhMfJaMePbW9GOZLIGJSJLmyPpZJY4YUhOejiiUPyfgE9RBkNZt3lWQAAAABJRU5ErkJggg==) 10px 5px; \
    } \
    #lk-f { \
      background: #3b5998 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANRJREFUOMtjYMAPGIGYmZACeSA24+fnd9bS0vIEsh2AWAZDoaSkpPHJkydnf/ny5eF/JHD37t1GFJXKysqyr169OvMfC3jy5EkbiuJTp07V/ccBfvz4kY+iGGjqLjQ16UBsDMWiKIrfvXt3EKbq9+/fX7D5XhCI9UH45cuXR9EU6yNhAYbTp08HgzwFwr9+/foAU/zv378/MHEQvn//vgfD7du3M/8TAb5+/WrEAKSjiFD7B4g5SfbgqGKs4P379wfgAfvnz2e8ioFqVgDxOyh+gC4PACRMk2cF9T5KAAAAAElFTkSuQmCC) 10px 5px; \
    } \
    #lk-t { \
      background: #00aced url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAQAAAAeG12lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUJJREFUGBmFwU0og3EAB+AfTSPKQVhZLrusloQah61ITg5cVrtQytVOTk4ODiuRdnGcixSpHZaLlHDgZDXfs2gOiDZrZtu79/3/bMa2d1+eBwDqUU4DA4ZgxQB0AJrRjaxeEzqhprEMX2x/vcqJjzuvE+b5mcgisoKbniXoUGSiJ3rPvM8QxbENXQBiV0L2OmFEA35duqny5jtzJucAxP3MCO6NjMOAFmTEH1nqlO0AEuv8kY77txZmNVb0SxGqxE6oRdbGqJCYl46Fr+UkVV5WkeNfu/WwpncHchJH/Ic0iBzaWZMcoQZ/oi4KViW5UBCafDoQghUJiXoUsI8pVqGsQI1jfGAF4pxNKNHYZtxfVlJUEUHqUaQVJpin7DceJU21Q+pQjBZ5VwpQUO2Z06xDKXbQwR0GGKbCMH1000YtynwDIVHGG6aDu9kAAAAASUVORK5CYII=) 6px 6px; \
    } \
    #lk-g { \
      background: #dd4c39 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAQAAADoKdYeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcNJREFUOBGNwU9IUwEAx/Hf7MkyqLGGjE5FmzC8hJW6EuJFQVjtEqGUEHnqUBf/RBBdCvpz6FgRHoQgvJgdtehQF6158JDWKilzXgpdo2zD1/bet7E/NpmTPh8VuRXUXrXJlClTpg5oq6rYfvZUYoA3JCiJ06wSQ6YMFW0e7M/+pluilss4VvJx30SdVkV9EPWp4FZbNp2eVVHmLliJI34VGDKG/DDklyFD0ud7sPhKRdQ7NkydVl74aDjS1QldneFIOCIpMQw/3qlWRel5WDqvPOYpIyl1HZxMd6sK6tLfcAgpDw/eeADiAbx4JdFAFmJPtVuG3L0nsXmgMlEfRH0qoYecmUdtxzs6fk5ynxqVwQN49A/HGGXBTkHihf5PahziL7VTG3KpXiE1TT8kZ3JQIdWoii3bWoavJp9kXjtTOOR8GQs2al3uvjPLn1ikn0a8BLlNFmIj2qRKvYetZPYrO7SKQ/Yve+WmX5Xiz2Dhktb4fgc+tqjSnyUYu6A1oleAkCpl3sPcczXIUIGhXXOj9iwuVaIdC2IjB09on/aouan97QBpTK2PMOPgWCvTyxPWByxmaNVGCHCOa9zgIvtxqYq/fZIS2VfLqOsAAAAASUVORK5CYII=) 6px 6px; \
    } \
    #lk-m { \
      background: #034a88 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAQAAACl4XcVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAApNJREFUOBF1wW9szHcAx/HP3U+GquSyslAnGaJRRERHeIAHE1ZZYlLJNokmiCdCGUljEU+kkeCCYI1H9TciM3ugEdJYNp7M3/pbvbRB9a6J9rTX6/Xu2t/19337tv6e8Hoph19jVKQSzdd8zVGxxmmYPsunCcHFZ3Y21XaH0+3p9q7HLVdr98xbpkny6xNf5c3552B/F5/IpupPFi1Unj4yvGx57B6D2jhMOUtZznpOEMPqban4RaP0ln9daSoKppN1OPIroHEq0DCJ4WwhCW5812o5GjRzSncYTJRiSYXBxUd+u7T3+I7vSjVVjgL/zTVhSEVKp8tybh4D08s0SUV1of44Qzy38cLcRUc2H9hI0IvB/Ro5Wj05mwRvu6TCposMcmkliZVoHkgPpCV+Ajfx8xT9XwkDcUbK+TcEGKoISDj8YJ4zRMLX1wi3dihaC4mz0ppJbgKy+/QeQS+BJavzAEQvqicMbZuk+s1g+gnoI/EQlqzWXyHRoL6X0LBCenEYkg3K0VSGJevhEkhH1dcOt8ukWDV01SvH9VVYsu6uBLdTqSdwc5uU2giZV/paH/hv7MeSdXsrZJ6p5y9o/lM+Cs0AnNqqUXrD+XZ2TwuWrOZzkKxTZgNk2oMTJO8oZDq2lWuGJmvarO8j1xgiX/7Y3lZIV4oCLwVXqjSCPHMLvGzk+oOzzy73x8GksMaXnP8djMtESV4I3MTaFRpBPqcxvNNAiclCxx03Dl61BjHaPIVUZO0qFcpHMZX8QRU/4kjmPEPMQ0brDYpMDLK9daGxCzVV3yiggMZrhkpqx1DNA2oo0AcUE8bKvGr8+8LuQxWHKq6EIte6wzeC+hzyqSJBrixBfQn5lHOSetro4BE1LFCO1x3H/nkqIXzAAAAAAElFTkSuQmCC) 5px 4px; \
    } \
    #lk-y { \
      background: #e22f2c url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAQAAAB+Wt03AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYZJREFUKFNt0M9L03Ecx/GXhxEoG5S7FF4moohRQogEoksPedihi2KYh05Jf0CI7CDDGnbPmweDQgRBkC56Ee3g0PwRTpDMcJm/hUZujn38fp8dvoqfqa/rA968Xm/JToWaFFa1iiTdUr0qbSxLjrou/JoMVkmx+sz2xril8+85z/qIlHoL5q/FJ8sXbI6lzShkflrM5wt2F6RUAfsU6AzkVwDONhMh+RejkN3yqKYhEn/96sVw7/7X/dmJeFdHrHvjC+RTUlHr09/TTt47e3p4esRl+hS8m9kG4B9ZzizaoV9S4g2YA+5zh9LddgDTTIgQxZKknXHYHfL6fX8MEL9tzUlPwdqw/PLJN9MEsFJlsXkH2b1YdzgSjnzsucaUkgNwck7O61/AEnUsWo2ZL2RJWm4waQBc+PbgGg++dB3IjbkGkrVX1Z/+AWbhqAVg9eEV/fAcgMZP5TdxyV4CnGNp7skNPPAMwESlZBvAUq2tvj+zAAQk7+dbjywlCECfJFEDwL1L/Q8hPEaihbz71AAAAABJRU5ErkJggg==) 9px 4px; \
    } \
    #lk-j { \
      background: #223769 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAQAAACsCtdvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgJJREFUOBF9wVtIU2EAB/D/aXNCEeW8rNpDqMMeEqJ6KJG9mGMQQRAZBBEG5suKgnowgi4QRFEkUQ92MxxYD1lBUkaWBEMisl2w6E4qKz3r7GK6y9n5vn8RyTbTfj/8VYY1cKIedszDhNruI4lBMZ2NPbuIUsxBWVs3PiCTEz0Bb/IbpfcwijFbTZXmz4ZON0/cp2CKWT2+xw0FhYYuGdGOVn2UtzO1C5c/b6PUguUOFEqOvb+V+srjsCxZ/+RE+hGTZMALK/KJeEqdetlk2uGOB6dHNDdLjUGKzoOwIEccJT/1OtYl3/FNNrbXDYV2GdGjuxuhYAZNxgBl2Jd+TLMxEPVXVAN00Yj4K6qRw2VCJe94oNAmv7++iaWAOEYOdaIEOXRRaMNVNQCdUu/woIgLZJ8UV/bDghyeIoPdsAJs09XtToBlYiyj7WyAghk0GT7KrkMopiJ7VV/xKhRxg9TVV7ZK5NAuf+jxZhcUWo3Rz3c3bUF96DoZbEc+bqaMBMsdwGRLNsxJqvxi/IwFUYhnyUAXSnyrx29Q4WIg0ZfRYEY+FhkvpLh24PI27Rz+0E6SZ1agEFfKWCY60j+4D2b8NuUi+xsxG7dSkm976tywQ7lqo/B78C/uYog0ok8vWDe2NumJD+2YGxt4jyL9MRsnww8wP1byPGNkwo//4yK28OEvTGoqPIoP/iMAAAAASUVORK5CYII=) 7px 4px; \
    } \
    #lk-l { \
      background: #28819b url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUOMtjYGBgcEDCxAKEnv9IgFjdKHqGpgG4TaOjASM+FmhqgAMOTJwBuMDgNgAAnoWORNAZGQMAAAAASUVORK5CYII=) 8px 8px; \
    } \
    #lk-b { \
      background: #fc9948 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUhJREFUOMtjYEAARiCWAmJDILYBYgc0DBLTBGJuBgKATVhY2HTXrl29b9++vfT79+8v/9EAUOzrgwcP9hQWFsZDLcUKGCMjI13fvXt37T8R4N+/f7+BlvYA9UlimKSpqSlPrEHIAGhgGzRoEODkyZOd/8kAv379+ujr68uFYtj79++v/icTrFu3ThPFsL9///5AV3Tp0iUX9OC4fPmyN7q6TZs2haEowmZjb29vHnrSmDZtWhG6ugsXLiwByplCk5Myw3/KwL9Pnz7dAyani0CXr6DUMBQwkg27evWqE76MDJQ3Ayr7i2EYMK/9RBdsa2vLxFJqwHFpaWkSUN8/tILgPcOPHz8uUcOL379/PwbKAQXUMAxoThoozNiBLqbIdUD954EUCyxLSQPxOTLNOg3EUuh5lA2Ic4H4BBB/JWDAV6i6TJA+mBkAUFmJ9IbiP0AAAAAASUVORK5CYII=) 7px 6px; \
    } \
    #lk-fill { \
      position: fixed; \
      top: 0; \
      left: 0; \
      width: 100%; \
      height: 100%; \
      background: #111111; \
      z-index: 999998; \
    } \
    #lk-body { \
      position: absolute; \
      background: #111111; \
      top: 0; \
      left: 0; \
      width: 100%; \
      color:#c9ccd4; \
      font-size: 14px; \
      font-family: Verdana, sans-serif; \
      z-index: 999999; \
      text-align: left; \
    } \
    #lk-body a { \
      border: none !important; \
    } \
      #lk-msg { \
        margin: 0 auto; \
        padding: 0 20px; \
        max-width: 600px; \
      } \
        #lk-name { \
          margin-top: 60px; \
          color: #e8ebf3; \
          text-align: center; \
          font-size: 42px; \
          font-family: Georgia, serif; \
          text-decoration: none; \
          display: block; \
        } \
        #lk-name:hover { \
          color: #e8ebf3; \
        } \
        #lk-cause { \
          margin-top: 30px; \
          color:#e8ebf3; \
          text-align:center; \
          font-weight: 700; \
          font-size: 16px; \
          font-family: Georgia, serif; \
        } \
        .lk-note { \
          margin: 10px 10px; \
          color: #555; \
          text-align:center; \
          font-size: 11px; \
        } \
        .lk-note a { \
          color: #777 !important; \
        } \
          .lk-note a:hover { \
            color: #71acfb !important; \
          } \
        #lk-info { \
          margin-top: 30px; \
          font-size: 13px; \
        } \
          #lk-info a { \
            color: #f0f3fc; \
            text-decoration: underline !important; \
            font-weight: normal !important; \
          } \
            #lk-info a:hover { \
              color: #71acfb; \
            } \
          #lk-info p { \
            margin-top: 10px; \
          } \
    .lk-btnfld { \
      overflow: hidden; \
      margin: 20px 0; \
    } \
      .lk-btnfld a { \
        display: block; \
        float: left; \
        margin: 20px 5%; \
        width: 40%; \
        height: 48px; \
        border-radius: 5px; \
        background: #202020; \
        color: #c9ccd4; \
        text-align: center; \
        text-decoration: none; \
        line-height: 48px; \
      } \
      @media only screen and (max-width: 580px) { \
        .lk-btnfld a { \
          float: none; \
          width: 90%; \
        } \
      } \
        .lk-btnfld a:hover { \
          color: #111111; \
        } \
        #lk-pet:hover { \
          background: #8ed264; \
        } \
        #lk-cont:hover { \
          background: #4184df; \
        } \
        a.lk-lock { \
          color: #535456 !important; \
        } \
        a.lk-lock:hover { \
          background: #202020 !important; \
          color: #535456 !important; \
        } \
          #lk-time { \
          font-size: 12px; \
          } \
    #lk-share { \
      overflow: hidden; \
      margin: 20px auto; \
      width: 400px; \
    } \
    @media only screen and (max-width: 420px) { \
      #lk-share { \
        width: 200px; \
      } \
    } \
      #lk-share a { \
        display: block; \
        float: left; \
        margin: 4px; \
        width: 32px; \
        height: 32px; \
        border-radius: 3px; \
        background-repeat: no-repeat; \
      } \
        #lk-share a:hover, #lk-share a:focus { \
          margin: 6px 4px 2px 4px; \
          opacity: .6; \
          cursor: pointer; \
        }'
};

// Корявость CSS, обусловлена необходимостью "перебить" стили
// сайтов, на которых скрипт будет размещён

lk.share = function(net) {
  function toURI(str) {return encodeURIComponent(str)};
  var url = '';

  switch (net) {
    case "v": {
      url  = 'http://vkontakte.ru/share.php';
      url += '?title='       + toURI(lk.sharing.title);
      url += '&description=' + toURI(lk.sharing.text);
      url += '&url='         + toURI(lk.sharing.url);
      url += '&image='       + toURI(lk.sharing.img);
      url += '&noparse=true';
      break;
    }
    case "o": {
      url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
      url += '&st.comments=' + toURI(lk.sharing.text);
      url += '&st._surl='    + toURI(lk.sharing.url);
      break;
    }
    case "f": {
      url  = 'http://www.facebook.com/sharer.php?s=100';   
      url += '&p[title]='     + toURI(lk.sharing.title);
      url += '&p[summary]='   + toURI(lk.sharing.text);
      url += '&p[url]='       + toURI(lk.sharing.url);
      url += '&p[images][0]=' + toURI(lk.sharing.img);
      break;
    }
    case "t": {
      url  = 'http://twitter.com/share';
      url += '?text='     + toURI(lk.sharing.text);
      url += '&url='      + toURI(lk.sharing.url);
      url += '&counturl=' + toURI(lk.sharing.url);
      break;
    }
    case "g": {
      url  = 'https://plus.google.com/share';
      url += '?url=' + toURI(lk.sharing.url);
      break;
    }
    case "m": {
      url  = 'http://connect.mail.ru/share';
      url += '?title='       + toURI(lk.sharing.title);
      url += '&description=' + toURI(lk.sharing.text);
      url += '&url='         + toURI(lk.sharing.url);
      url += '&imageurl='    + toURI(lk.sharing.img);
      break;
    }
    case "y": {
      url  = 'http://wow.ya.ru/posts_share_link.xml';
      url += '?title=' + toURI(lk.sharing.title);
      url += '&body='  + toURI(lk.sharing.text);
      url += '&url='   + toURI(lk.sharing.url);
      break;
    }
    case "j": {
      url  = 'http://livejournal.com/update.bml';
      url += '?subject=' + toURI(lk.sharing.title);
      url += '&event='   + toURI(lk.sharing.text+'<br/><a href="'+lk.sharing.url+'">'+lk.sharing.title+'</a>');
      url += '&transform=1';
      break;
    }
    case "l": {
      url  = 'http://www.liveinternet.ru/journal_post.php?action=n_add';
      url += '&cntitle=' + toURI(lk.sharing.title);
      url += '&cnurl='  + toURI(lk.sharing.url);
      break;
    }
    case "b": {
      url  = 'http://blogger.com/blog-this.g?t';
      url += '&n=' + toURI(lk.sharing.title);
      url += '&u=' + toURI(lk.sharing.url);
      break;
    }
  }

  if (url) {
    w.open(url, '', 'toolbar=0,status=0,width=640,height=480');
    req('share.php?n='+net);
    lk.done = true;
  }
}

lk.build = function(html, replace){
  for (var key in replace)
    html = html.replace('{'+key.toUpperCase()+'}', replace[key]);
  return html;
}

lk.timer = function() {
  var timerEl = d.getElementById('lk-time');
  var contBtn = d.getElementById('lk-cont');
  if (lk.time == 0) {
    timerEl.parentNode.removeChild(timerEl);
    contBtn.className='';
  } else {
    timerEl.innerHTML='('+(lk.time--)+')';
    setStorage('timerstatelock', lk.time, 3456000);
    setTimeout(lk.timer, 1000);
  }
}

var documentReady = (function (w, d) {
  var inited = false, loaded = false, queue = [], done, old;

  function go() {
    if (!inited) {
      if (!d.body) return setTimeout(go, 13);
      inited = true;
      if (queue) {
        var j, k = 0;
        while ((j = queue[k++])) j.call(null)
        queue = null;
      }
    }
  }

  function check() {
    if (loaded) return;
    loaded = true;
    if (d.readyState === "complete") return go();
    if (d.addEventListener) {
      d.addEventListener("DOMContentLoaded", done, false);
      w.addEventListener("load", go, false)
    } else {
      if (d.attachEvent) {
        d.attachEvent("onreadystatechange", done);
        w.attachEvent("onload", go);
        var k = false;
        try {
          k = w.frameElement == null
        }
        catch (j) {}
        if (d.body.doScroll && k) ie();
      } else {
       old=w.onload;
       w.onload=function(e) {
         old(e);
         go()
       }
      }
    }
  }

  if (d.addEventListener) {
    done = function () {
      d.removeEventListener("DOMContentLoaded", done, false);
      go()
    }
  } else {
    if (d.attachEvent) {
      done = function () {
        if (d.readyState === "complete") {
          d.detachEvent("onreadystatechange", done);
          go()
        }
      }
    }
  }

  function ie() {
    if (inited) return;
    try {
      d.body.doScroll("left")
    }
    catch (j) {
      setTimeout(ie, 1);
      return
    }
    go()
  }

  return function (callback) {
    check();
    if (inited) {
      callback.call(null)
    } else {
      queue.push(callback)
    }
  }
})(w, d);

var getScroll = (w.pageXOffset != undefined) ?
  function() {
    return pageYOffset;
  } :
  function() {
    var html = d.documentElement;
    var body = d.body;
    var top = html.scrollTop || body && body.scrollTop || 0;
    top -= html.clientTop;
    return top;
  };

function getStorage(name) {
  if (w.sessionStorage && w.sessionStorage[name]) {
    return w.sessionStorage[name];
  }
  var matches = d.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setStorage(name, val, sec) {
  if (w.sessionStorage) {
    w.sessionStorage[name] = val;
  }
  var date = new Date(new Date().getTime() + sec * 1000);
  d.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString();
}

function req(url) {
  if (!lk.statserver) return;
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.charset='UTF-8';
  s.async = true;
  s.src = lk.statserver + url;
  h.appendChild(s);
}

var seen = getStorage('alreadyseenlock');
var isRussian = /^ru/.test(navigator.language);

if (seen && w.location.hash != '#block' && isRussian) return;

var h = d.head || d.getElementsByTagName('head')[0];

var time = getStorage('timerstatelock');

if (time)
  lk.time = parseInt(time);

documentReady(function(){
  var div = d.createElement('div');
  div.id = 'lk-page';
  div.innerHTML = lk.build(lk.html, lk.replace);
  d.body.appendChild(div);

  // Устанавливает позицию блока с обращением
  // на высоту прокрутки. Это нужно, если пользователь пришел
  // по ссылке с якорем. Зафиксировать блок абсолютным позиционированием
  // нельзя, так как он может превышать высоту экрана.
  // Применить overflow нельзя, мобильные не поддерживают
  // overflow у блока :(
  d.getElementById('lk-body').style.marginTop = getScroll()+'px';

  var style = d.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) 
    style.styleSheet.cssText = lk.css;
  else 
    style.appendChild(d.createTextNode(lk.css));
  h.appendChild(style);

  d.getElementById('lk-share').onclick = function(e) {
    if (e.target.tagName == "A")
      lk.share(e.target.id.substr(3, this.length));
  };

  d.getElementById('lk-cont').onclick = function() {
    if (!lk.time) {
      setStorage('alreadyseenlock', '1', 3456000);
      var lkEl = d.getElementById('lk-page');
      lkEl.parentNode.removeChild(lkEl);

      if (!seen && !lk.done)
        req('action.php?a=0');
    }
  };

  d.getElementById('lk-pet').onclick = function() {
    if (!seen)
      req('action.php?a=1');
    lk.done = true;
  };

  lk.timer();
  req('view.php');
});

})(window, document);    
