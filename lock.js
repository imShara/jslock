// public domain
(function (w, d, undefined){

if (w.lk) return;

var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
var deadline = +new Date("Thu Aug 01 2013 16:00:00 GMT+0400 (MSK)");
var isExpires = +new Date() > deadline;

if (isOperaMini || isExpires) return;

var metrika_counter_id = 21681037,
    counter = {
        params: function (params) {}
    };

(function () {
    var c = "yandex_metrika_callbacks";
    (w[c] = w[c] || []).push(function() {
        try {
            counter = new Ya.Metrika({
                id: metrika_counter_id,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
            counter.params({visit: true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})();

w.lk = {
  // Время блокировки кнопки "Продолжить работу"
  time: 15,
  // Показывать только пользователям с русской локализацией системы/браузера
  onlyRusLang: false,

  sharing: {
    // Адрес, который публикует пользователь в соцсетях якорь #block заставляет показать страницу блокировки в любом случае
    url: 'http://' + location.host + '/#block',
    // Заголовок поста, который публикует пользователь в соцсетях
    title: 'Интернет-свобода под угрозой!',
     // Текст, который публикует пользователь в соцсетях 140 символов
    text: '1 августа вступит в силу закон о борьбе с пиратским видео в интернете, который даёт возможность закрыть любой сайт.',
    // Ссылка на изображение, которое публикует пользователь в соцсетях
    img: 'http://habr.habrastorage.org/post_images/d48/220/5df/d482205df3e93e00a7993e551d6c128b.png'
  },

  replace: {
    // Название сайта в заголовке
    sitename: '' || location.hostname,
    // Ссылка на сайт в заголовке
    siteurl:  'http://' + location.host + '/',
    // Надпись на кнопке голосования
    votename: 'Подписать петицию',
    // Адрес петиции
    voteurl:  'https://www.roi.ru/poll/petition/gosudarstvennoe_upravlenie1/otmenit-zakon-o-proizvolnyh-blokirovkah-internet-resursov-ot-02072013-187-fz-zakon-protiv-interneta/',
    // Основной текст страницы
    info: '\
      <p>21 июня Государственная Дума РФ <a target="_blank" href="http://lenta.ru/news/2013/06/21/piracylaw/">почти единогласно</a> и в кратчайшие сроки <a target="_blank" href="http://habrahabr.ru/company/yandex/blog/184182">приняла</a> <a target="_blank" href="http://asozd2.duma.gov.ru/main.nsf/(SpravkaNew)?OpenAgent&RN=292521-6&02">закон</a> о борьбе с пиратским распространением фильмов и сериалов в сети Интернет.</p> \
      <p>В текущей формулировке этот закон даёт возможность в любой момент закрыть сайт по причине размещения сторонним пользователем ссылки на пиратский контент. Таким образом, под угрозой блокировки оказываются блоги, поисковики, принцип работы которых не позволяет устраивать предварительную модерацию выдачи, публичные торрент трекеры, файловые хранилища, видеохостинги, социальные сети. Текст закона противоречит <a target="_blank" href="http://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1_2.0">принципам работы</a> современного свободного интернета.</p> \
      <p>Более того, из-за технических особенностей организации Сети и невозможности провайдеров блокировать исключительно страницы с контентом, на который приведена жалоба правообладателя, ограничение доступа будет распространяться на все ресурсы находящиеся на данном <a target="_blank" href="http://ru.wikipedia.org/wiki/IP-%D0%B0%D0%B4%D1%80%D0%B5%D1%81">IP-адресе</a> (они могут исчисляться <a target="_blank" href="http://habrastorage.org/storage2/39a/1e1/cc5/39a1e1cc541754eee30f8ca06710a217.png">тысячами</a>)</p> \
      <p>Компаниями <a target="_blank" href="http://clubs.ya.ru/company/replies.xml?item_no=67927">Яндекс</a>, <a target="_blank" href="http://googlerussiablog.blogspot.ru/2013/06/google.html">Google</a>, ассоциацией <a target="_blank" href="http://raec.ru/times/detail/2625/">РАЭК</a> были предложены поправки к закону, исключающие возможность ложной блокировки невинных ресурсов, но их <a target="_blank" href="http://habrahabr.ru/company/yandex/blog/184182/#comment_6402274">не учли</a>.</p> \
      <p>Не стоит надеяться на программистов. В случае, если законы подобного уровня проработки будут приниматься дальше, ничто не помешает запретить анонимные cистемы обмена информацией, такие как <a target="_blank" href="http://ru.wikipedia.org/wiki/I2P">I2P</a> или <a target="_blank" href="http://ru.wikipedia.org/wiki/Tor">TOR</a>, ввести лицензирование <a target="_blank" href="http://ru.wikipedia.org/wiki/VPN">VPN</a> и шифрованных туннелей. Если мы это допустим, то Интернет потеряет независимость.</p> \
      <p>На сайте onlinepetition.ru был организован сбор подписей против этого закона. Если вы согласны с тем, что в таком виде он не должен существовать, поставьте, пожалуйста, свою подпись под петицией или просто продолжите работу по завершении отсчета таймера в случае, если вам <a target="_blank" href="http://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0_%D0%BE%D0%BD%D0%B8_%D0%BF%D1%80%D0%B8%D1%88%D0%BB%D0%B8%E2%80%A6">безразлично</a> будущее Рунета.</p> \
      <p>Закон должен вступить в силу <b>1 августа</b>. Заседания Думы на тему защиты музыкальных произведений и прочих авторских прав будут проведены этой осенью.</p>',
    counter_id: metrika_counter_id
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
      <div class="lk-note">Разместите это обращение на личном сайте, вставив данный скрипт</div> \
      <div class="lk-note"><span class="lk-light">&lt;script src="http://clck.ru/8ijea"&gt;&lt;/script&gt;</span> в любую часть страницы</div> \
      <div class="lk-note">В случае, если вы хотите переделать скрипт, <a target="_blank" href="https://github.com/imShara/jslock">возьмите его на GitHub</a></div> \
      </div> \
    </div> \
    <noscript><div><img src="//mc.yandex.ru/watch/{COUNTER_ID}" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\
    </div>',

  css: '\
    #lk-v { \
      background: #49739f url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAQAAAAqYpy5AAAA7ElEQVR4AWNgMGWwQoIWDEYMigwsDCDw6cHP9wj47eW7K+cX27ozcACl/v/7jwF+vit0A0r9evcfC3h+kIGBiQEK/oYDbQr4dxbCE9ZF0rWfAyR00hLC+/0WSVeVMIMAg/gJbSj3LELqf0n6xPgNuSn1YM5nlnyszvj9eWUegyxWqb+/P94+Mp1BAi71b/v/Nf/X/b8IU7C7BS5VIQix9M8cCP/bc7gLi0Qg9NweCM0mAJea9hMYbpwMYhzuUIF/cMcLBkb7pwatzQmrhcrcgdmFCXwY/v3BKlEHMunu/09I8N3/W/9X/7cFGQkAb0kIEqwXZq4AAAAASUVORK5CYII=) 10px 7px; \
    } \
    #lk-o { \
      background: #eb722e url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAQAAADYpcc/AAABQklEQVQoFV3AQShDAQCH8X+iiBJGobWSipQbU45ULqiWi3ISN8qJxMVOXLiwy0RpSO2kNkgqLkpplSQBalBayQZ78/HeXnr5yVakOjWrWQ0qkUPFxMDV9tvN2939/vyI3LIVhKdwOFxQsUz+DrLCrJMBWOyX6T4C3wZt+kVjJgmJU+VISt3CS1S2hwBkPveLJH3cweWm8mXKPZ6H7zSFkj63IP3a1yOP3E3tqSf4upCJVgAjdRQ8DLw/Y+pVFn6clmWpUYs8dHOCAZwxoEp5Va/YWip+FJRXtXKpTDVqis4k49c7wpKMn26EJpfGYqHXSyyiiwT/pRmURBl+zo0XACPBLbN49Kc0tgxwHVGlHFzB0XQSIPMVmVa1bK6VcRz25lQlU2iCrE68WHZnlSeJrCH9wofloVwSqzwzLBs+Hjmg4Ac9RBkN375cUQAAAABJRU5ErkJggg==) 10px 5px; \
    } \
    #lk-f { \
      background: #3b5998 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAA0ElEQVR4AWMgABiBmJmQAnkgNuPn53fW0tLyBLIdgFgGQ6GkpKTxyZMnZ3/58uXhfyRw9+7dRhSVysrKsq9evTrzHwt48uRJG4riU6dO1f3HAX78+JGPohho6i40NelAbAzFoiiK3717dxCm6vfv31/QPcQExIJArA/CQAUsaPL6SFiA4fTp08EgT4Hwr1+/PsBM/vfv3x+QGAzfv3/fg+H27duZ/4kAX79+NWIA0lFEqP0DxJwkehAPGNmKGRkZ/6Ow8QBQBK0A4ndQ/ABdHgBXHR039iTthgAAAABJRU5ErkJggg==) 10px 5px; \
    } \
    #lk-t { \
      background: #00aced url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAQAAAAeG12lAAABP0lEQVQYGYXATyhDcQAH8C89jSiVsLJcdlktCTWqrUhOKi6rXSjlaicnJ5VqJdIujnORIrVquUgJFSerAWbRVIg2a2bb23u/r81gb/98AKAWpSQYMQAb+qAH0IhO5HSb0Q4tyTp4tvnxrCTfbnwuWGanovPICa17F6BHgbGu2C1/vYcpDu3oABC/EIrPBRPq8O3cQ40X/4krNQMgEWBWaGdoFEY0IStxz2LHbAWQXOWXTCKwMTct2dArR6kRP6IOOWvDQuavTDxyqaSo8bSMvMDKtZdVvTqRlzzgP+R+5NHBqpQoJfyIuSlYkezGn/D4w54QLEvINOAPe5hmBeoStDjCO5YhTtmAIvUtpt1FNU0NEaIBBZphhmXCceVVM9Tapx6FaFW25SAFtR45yRoUYxud3GKQEaqM0E8P7dShxCchUcYb/lD8HQAAAABJRU5ErkJggg==) 6px 6px; \
    } \
    #lk-g { \
      background: #dd4c39 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAQAAADoKdYeAAABwElEQVQ4EY3AT0hTAQDH8d/syTKoMYeMTkWbMLyElboaxIuCsNolQikh8hSQl9QIoktBFdCxIgSEILyYHbUIqIvWBATSWiWlzkuha5Rt+Nre+wb7Y5M56aMit4Lap4hMmTJl6qC2q4r6c6eTA7wlSUmCFpUYMmWoaOtgf+433RK1XMGxUk/6Juq0JuaDmE8FtyO5TGZWRdl7YCWP+lVgyBjyw5BfhgxJX+7D0msV0eDYMHVGeeFj4WhXJ3R1hqPhqKTkMPx4r1oVZRZg+YLyWKCMpPQNcLLdbSqoy3zDIaQ8PHgTAUgE8OKVRCM5iD/THhly957C5qHKxHwQ86mEywAzjyMnOjp+TvKAGpXBA3j0D8cZZdFOQ/Kl/k96HBKvtEubcqlBITVPPwKYHFRINapi247W4Wupp9k3zhQOwNexYJM25O47u/KZJfppwkuQO+QgPqItqtR7xErl5tmpNRy2f9mrt/yqlHgOiz1a5/td+NSqSn+WYeyi1oldBUKqlP0Acy/UKEMFhnbPjdqzuFSJdiyIjxw6qf3aq5bm9ncDZDC1McKMg2OtTq9MWB+xmKFNmyHAea5zk0scwKUq/gJ9khLZHVPjngAAAABJRU5ErkJggg==) 6px 6px; \
    } \
    #lk-m { \
      background: #034a88 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAQAAACl4XcVAAACkUlEQVQ4EXXBYWyMdwDH8d/dI0NVcllZqJMM0SgioiO8wIsJqywxqWSbRBPEG6GMpLGIN9JIcEGwxqsCEZnZC42QxrLxZkCB6qUNqndNtKe9Xq931z7X5//1b4ETPh/l8GuMilSi+ZqvOSrWOA3TZ/k0Ibj4zM6m2u5wuj3d3vW45WrtnnnLNEl+feKrvDn/HOzv4hPZVP3JooXK00eGly2P3QOgjcOUs5TlrOcEMazelopfNEpv+deVpqJgOlmHI78CGqcCDZMYzhaS4MZ3rZajQTOndIfBRCmWVBhcfOS3S3uP7/iuVFPlKPDfXBOGVKR0uizn5jEwvUyTVFQX6o8zxHMbL8xddGTzgY0EvRjcr5Gj1ZOzSfC2SypsugiASytJrETzQHogLfETuImfp+j/ShiIM1LOvyHAUEVAwuEH85whEr6+Rri1Q9FaSJyV1kxyE5Ddp/cIegksWZ0HIHpRPWFo2yTVbwbTT0AfiYewZLX+CokG9b2EhhXSi8OQbFCOpjIsWQ+XQDqqvna4XSbFqqGrXjmur8KSdXcluJ1KPYGb26TURsi80tf6wH9jP5as21sh80w9f0Hzn/JRaAbg1FaN0hvOt7N7WrBkNZ+DZJ0yGyDTHpwgeUch07GtXDM0WdNmfR+5xhD58sf2tkK6UhR4KbhSpRHkmVvgZSPXH5x9drk/DiaFNb7k/O9gXCZK8kLgJtau0AjyOY3hnQZKTBY67rhx8Ko1iNHmKaQia1epUD6KqeQPqvgRRzLnGWIeMlpvUGRikO2tC41dqKn6RgEFNF4zVFI7hmoeUEOBPqCYMFbmVePfF3YfqjhUcSUUudYdvhHU55BPFQlyZQnqS8innJPU00YHj6hhgXK8Bh3H/nl3AW8IAAAAAElFTkSuQmCC) 5px 4px; \
    } \
    #lk-y { \
      background: #e22f2c url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAQAAAB+Wt03AAABcUlEQVR4AW3QwSuDcRzH8c+0pWgLdiHJJBKhpLUSQzXl4kLJyT/htEqLxJ2bSgVWypmLUJmByZTAAIIys1l77Pn4PWP9tiev7/Hdt299kaUK7XCiFgYAubCjOjOWBb2qSl6tWmsAjz16d74CyT/JP6eLwM0YqbxD+jxMZ+UNuHST0QtInE9ndVdsZ2UTLIOWRIDC96XPBvO+yLFrYypVt9p6ykMfC0vdEXBny2v3FFgcgNEAGLpdt+vJBFO+Xr5eKY3AWhK9oybCGL8pPXAUgG+YVJ5ZzyIWP/ZTUDppE5MHzcMK+TiDlCMHhfFCSOE18mQWZphg2minEKiRNSfPD1S4PINOl9MVckCPxYxTSMbFJPTbAlu4zwx+kXUOW5UwNSq51wC96SE1ScaXVYUMNumrOXxGKruvXRSOG3V1aoCatrnK/3L+k49MvgHbHf/kiV4KihsI9lE4yLptut+kxgL8/vy6GRKt1IxAYB01pbL+AIS7N/GLPM0zAAAAAElFTkSuQmCC) 9px 4px; \
    } \
    #lk-j { \
      background: #223769 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAQAAACsCtdvAAAB/ElEQVQ4EX3ADWiMYQAH8P/rvorEbh+Hq7TtmspKqFjrqmbXlZSSKSVNzaqOKKpJQSkRWaIamHY1KkNZTMalrksy9xECZFtju/Pex2z38d77PH8l6+5m88NfFVgDJxphxzwMqO89kgqI6Xzi2UWUYw7K2oZxn0xP9IW86e+U3sOwYLa6GjWYj5xunbhPwQzzWnKPGwpKDV3S413t2ghv5+oXLn/eQamGKx0olR79cCvzjcdhXrL+yYnsI6bJkBdWFBPJTHTqZYthhzsZnh5W3SzXAxTdB2FGgThKfu53rEu/59t8Yq8bCu0ypsV3N0PBDBp0H+WYP/uYRt0XD1bVAnRRjwWralHAZSJK3vFAoU3+eH0TSwFxjBzqRhkK6KJQ39TUAXRKrcsDExfIASmu7IcZBTxFhnthBdihRbc7AVaI0Zy6swkKZtCg+yl7DsFCRfZH/ZZVMHGD1KKvbNUooF3+1JKtLii06iNf7m7agsbIdTLciWLcTBkLVzqAybb8GCcZ5Vf9VyKMUjxLhnpQ5l89foMKFwOpgZwKI4rRpL+Q4tqBy9vUc/hDPUmeWYFSXCkTufjwYGAfjAAw5SIHmzEbt1KS7/oa3LBDuWqjCHrwL+5ihNTjTy9YN7a3aKmPnZgbm3iPIvspnyTHHmB+rOZ5JshUEP/HRWzjw99Maio8U51lNgAAAABJRU5ErkJggg==) 7px 4px; \
    } \
    #lk-l { \
      background: #28819b url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVR4AWMAAgc4Jh4g9PxHAkRqRtEz5AzABHQwgP6xMGqAAzZMwADCYHAbAACehY5EP8t3cgAAAABJRU5ErkJggg==) 8px 8px; \
    } \
    #lk-b { \
      background: #fc9948 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAABQklEQVR4AeXUsUsCYRjH8ccGhxqdsqGh6cYGmxwiagrXwCloCByKDPwXDoJuta2pocnBUZojCeK64xrDf0CPJPHyuPfXb7joeAgRdesD30Ffed5DHpWMHCuybVZmu6oys9gamypfKBRKnU7H6ff7XhzHn1D43qjX6z3U6/Xj9NI/5arV6sFgMHjDDIwxMS+9FpF10SzL2pxlkMaBdvrV/Op2u1eYw2Qy+ahUKquSFYZhgDm1Wi1LspIkiaB4nrcviu/7h1Da7faRZEEjx3HO9Wo0m81LKK7r3vGslK7TlmAxZjgcvnOdXvnk94Il+s/DgiDYkyl4vgMggSLGmC8otm3XsmuhazQaJ4bUH0EoURR5WILxePwo/AVcYAk453SFbgD4sgAALufc/rzYYC+YzzMr6ul5dsae2AjTjdLP1VheUt/I6kl2Tsxu2QAAAABJRU5ErkJggg==) 7px 6px; \
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
          color: #666; \
          text-align:center; \
          font-size: 11px; \
        } \
        .lk-light { \
          color: #999 !important; \
        } \
        .lk-note a { \
          color: #888 !important; \
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

lk.share = function(net) {
  function toURI(str) { return encodeURIComponent(str) }
  var url = '';

  switch (net) {
    case "v":
      url  = 'http://vkontakte.ru/share.php';
      url += '?url='         + toURI(lk.sharing.url);
      url += '&title='       + toURI(lk.sharing.title);
      url += '&description=' + toURI(lk.sharing.text);
      url += '&image='       + toURI(lk.sharing.img);
      url += '&noparse=true';
      break;

    case "o":
      url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
      url += '&st.comments=' + toURI(lk.sharing.text);
      url += '&st._surl='    + toURI(lk.sharing.url);
      break;

    case "f":
      url  = 'http://www.facebook.com/sharer.php?s=100';
      url += '&p[title]='     + toURI(lk.sharing.title);
      url += '&p[summary]='   + toURI(lk.sharing.text);
      url += '&p[url]='       + toURI(lk.sharing.url);
      url += '&p[images][0]=' + toURI(lk.sharing.img);
      break;

    case "t":
      url  = 'http://twitter.com/share';
      url += '?text='     + toURI(lk.sharing.text);
      url += '&url='      + toURI(lk.sharing.url);
      url += '&counturl=' + toURI(lk.sharing.url);
      break;

    case "g":
      url  = 'https://plus.google.com/share';
      url += '?url=' + toURI(lk.sharing.url);
      break;

    case "m":
      url  = 'http://connect.mail.ru/share';
      url += '?url='         + toURI(lk.sharing.url);
      url += '&title='       + toURI(lk.sharing.title);
      url += '&description=' + toURI(lk.sharing.text);
      url += '&imageurl='    + toURI(lk.sharing.img);
      break;

    case "y":
      url  = 'http://wow.ya.ru/posts_share_link.xml';
      url += '?url='   + toURI(lk.sharing.url);
      url += '&title=' + toURI(lk.sharing.title);
      url += '&body='  + toURI(lk.sharing.text);
      break;

    case "j":
      url  = 'http://livejournal.com/update.bml';
      url += '?subject=' + toURI(lk.sharing.title);
      url += '&event='   + toURI(lk.sharing.text+'<br/><a href="'+lk.sharing.url+'">'+lk.sharing.title+'</a>');
      url += '&transform=1';
      break;

    case "l":
      url  = 'http://www.liveinternet.ru/journal_post.php?action=n_add';
      url += '&cnurl='  + toURI(lk.sharing.url);
      url += '&cntitle=' + toURI(lk.sharing.title);
      break;

    case "b":
      url  = 'http://blogger.com/blog-this.g?t';
      url += '&u=' + toURI(lk.sharing.url);
      url += '&n=' + toURI(lk.sharing.title);
      break;

  }

  if (url) {
    w.open(url, '', 'toolbar=0,status=0,width=640,height=480');
    counter.params({share: net});
    lk.done = true;
  }
};

lk.build = function(html, replace){
  for (var key in replace)
    html = html.replace('{'+key.toUpperCase()+'}', replace[key]);
  return html;
};

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
};

for (var i in w.LK_SETTINGS)
  lk[i] = w.LK_SETTINGS[i];

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
    return w.pageYOffset;
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

var seen = getStorage('alreadyseenlock');
var isRussian = /^ru/.test(navigator.language);

if (seen && w.location.hash != '#block') return;
if (lk.onlyRusLang && !isRussian) return;

var h = d.head || d.getElementsByTagName('head')[0];

var time = getStorage('timerstatelock');

if (time)
  lk.time = parseInt(time, 10);

documentReady(function(){
  var div = d.createElement('div');
  div.id = 'lk-page';
  div.innerHTML = lk.build(lk.html, lk.replace);
  d.body.appendChild(div);

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

      if (!seen && !lk.done) {
        counter.params({skip: true});
      }
    }
  };

  d.getElementById('lk-pet').onclick = function() {
    if (!seen) {
      counter.params({sign: true});
    }
    lk.done = true;
  };

  lk.timer();
});

})(window, document);
