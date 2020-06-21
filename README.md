Single Page Application для просмотра погоды в городах.

- На главной странице пользователь может ввести название интересeющего города, получить краткую информацию о погоде и добавить город в список избранного, а также перейти в данный список;
- На странице списка избранных городов пользователь может просмотреть краткую инфомацию о погоде в каждом городе списка, а также удалить любой город из списка по клику на соответвующую иконку. По клику на строке города откроется  страница с детальным прочасовым прогнозом погоды в выбранном городе на ближайшие 5 дней.

Используемые технологии:

React
MobX
UI-framework - Material UI
GraphQL клиент - Apollo

Приложение ожидает полученние данных, прослушивая порт 4000, необходимо клонировать репозиторий, установить зависимости и запустить:

GraphQL прокси
https://github.com/MiroYar/my-apollo-openweathermap-server

http://127.0.0.1:4000 - точка подключения после запуска сервера
