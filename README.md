# JsCamp4

Дані зберігаються у JSON форматі на репозиторії https://github.com/Yurii-Vipshovsky/JsCamp4DB
Із цього репозиторія сервіс https://jsonplaceholder.typicode.com. створює сервер, до яйого можна доступитись за посиланням https://my-json-server.typicode.com/Yurii-Vipshovsky/JsCamp4DB передавши /services ми отримаємо масив з JSON форматі усіх доступних сервісів.
Кожен сервіс має поле type де зберігається одне із трьох значень "INTERIOR DESIGN" "ARCHITECTURE" "PLANNING"
Коли веб отримує дані(оскільки їх не багато тільки 15 записів, то вони отримуються усі одразу) і фільтрує їх по по полю type та створюється 3 масива які зберігають записи відповідних типів.