# jslock - JavaScript page locker

## Как установить?

Просто вставьте в любое место вашей страницы этот скрипт

```js
<script src="http://clck.ru/8ijea"></script>
```
или этот

```js
<script src="http://rawgithub.com/imShara/jslock/master/lock.min.js"></script>
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
