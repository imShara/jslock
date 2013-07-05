# jslock - JavaScript page locker

## Как установить?

Просто вставьте в любое место вашей страницы этот скрипт
Для обычных http сайтов:
```js
<script src="http://lockjs.googlecode.com/git/lock.min.js"></script>
```
или для сайтов с https

```js
<script src="https://lockjs.googlecode.com/git/lock.min.js"></script>
```

Так же вы можете разместить баннер в шапке сайта как на habrahabr.ru
Выглядит так:
![http://habrahabr.ru/post/185554/](http://habrahabr.ru/images/banners/begeek_2.gif "100.000 подписей собрано, что дальше? Российская Общественная Инициатива!")

Код (сразу после тега ```<body>```):
```html
<a style="background: #ffff18 url(http://habrahabr.ru/images/banners/begeek_2.gif) no-repeat center center;display:block;height:90px;box-shadow:0 1px 2px #ccc;" href="http://ad.adriver.ru/cgi-bin/click.cgi?sid=1&amp;ad=410696&amp;bt=21&amp;bid=2696012&amp;bn=2696012&amp;rnd=1251482300"></a>
```

В случае, если вы хотите внести изменения в текст обращения, изменить время блокировки, 
адрес сайта, или сделать любое другое изменение в скрипте, используйте глобальный объект LK_SETTINGS:

```js
<script type="text/javascript">
  window.LK_SETTINGS = {
    time: 5 // Время блокировки кнопки "Продолжить работу"
  };
</script>
```

или возьмите [этот скрипт](http://rawgithub.com/imShara/jslock/master/lock.js), внесите изменения и загрузите на свой сайт.



[Живой пример](http://imShara.github.com/jslock)

[Подробнее о проекте](http://habrahabr.ru/post/185174/)

## Разработка

```bash
$ git clone git@github.com:imShara/jslock.git
$ cd jslock
$ npm i
```
Для пересборки файла ```lock.min.js``` нужен [grunt](http://gruntjs.com). Если он еще не установлен, то устанавливаем:
```bash
npm install -g grunt-cli
```
Далее командой ```grunt``` файл ```lock.min.js``` будет пересобран
