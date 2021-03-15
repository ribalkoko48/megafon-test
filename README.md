## Настройка окружения:
1. установить пакеты для разработки "yarn install"
2. запустить приложение "yarn run start" (откроется окно в браузере с адресом: localhost:3003)

## Описание проекта
1. используются css-modules ([name].module.scss)
2. файлы typescript (.ts/.tsx)

## Задача
Сделать форму отображения пользовательских данных. Если нажать на кнопку "Показать мои данные", то
в браузере появится выпадающее окно с данными пользователя которые он сам ввел в input-ах.
Отображение данных сделать через вызов alert().

Пример формы для отображения:

```
{
    name: string,
    surname: string,
    patronymic: string,
    date: string,
    gender: string,
}
```

## Условия
1. фамилия, имя и отчество - только буквы для ввода
2. фамилия - максимальное количество символов 40
3. имя - максимальное количество символов 20
4. отчество - максимальное количество символов 20
5. дата - формат ДД.ММ.ГГГГ
6. гендерный признак - 'man' или 'woman'
7. стилизовать форму "чтобы красиво было" :) ( в стиле megafon будет + )
8. вся разработка без использования сторонних библиотек
9. адаптивная верстка с минимальным размером ширины экрана в 480px.
10. отображение элементов на странице в режиме desktop

```
  ___________________________________________________________
 |                                                           |
 |     фамилия              имя                отчество      |
 |              дата                гендерный признак        |
 |                                                           |
 |                          кнопка                           |
 |                                                           |
  ___________________________________________________________
```