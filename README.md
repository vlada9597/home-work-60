# home-work-60 — Розробка RESTful API з використанням Express

## 📘 Опис проєкту

Цей проєкт реалізує **RESTful API сервер** із використанням **Node.js** та **Express.js**. Його мета — продемонструвати базову архітектуру веб-додатку з модульною структурою та застосуванням патерну **MVC (Model–View–Controller)**.

Всі відповіді сервера — **текстові**, як вимагає технічне завдання. Сервер працює на **порту 3000**.

---

## 🧱 Технології

* **Node.js** — середовище виконання JavaScript
* **Express.js** — фреймворк для створення веб-серверів
* **npm / Yarn** — менеджер пакетів для встановлення залежностей

---

## 📂 Структура проєкту

------------
home-work-60-express-api/
├─ app.js                 # Налаштування Express та підключення маршрутів
├─ server.js              # Запуск сервера (порт 3000)
├─ routes/                # Файли маршрутів
│  ├─ index.js            # Головний маршрут
│  ├─ users.js            # Маршрути для користувачів
│  └─ articles.js         # Маршрути для статей
├─ controllers/           # Контролери логіки
│  ├─ rootController.js   # Головний контролер
│  ├─ usersController.js  # Контролер для користувачів
│  └─ articlesController.js # Контролер для статей
├─ package.json           # Конфігурація залежностей
└─ README.md              # Документація проєкту
-------------------

## ⚙️ Встановлення та запуск

1. **Склонуйте** або створіть папку для проєкту:

   git clone <your-repo-url>
   cd home-work-60-express-api

-----------------

2. **Встановіть залежності:**

  
   npm install


   або, якщо використовуєте Yarn:
   
   yarn
   

4. **Запустіть сервер:**

 
   npm start
   ```

5. **Перевірте роботу:**
   Відкрийте у браузері або через Postman адресу:

   ```
   http://localhost:3000
   ```

   У консолі зʼявиться повідомлення:

   ```
   Server is running on http://localhost:3000
   ```

---

## 🌐 Маршрути сервера

### `/` — головний маршрут

* **GET /** → `Get root route`

---

### `/users` — маршрути для користувачів

| Метод  | Маршрут          | Відповідь сервера                   |
| :----- | :--------------- | :---------------------------------- |
| GET    | `/users`         | `Get users route`                   |
| POST   | `/users`         | `Post users route`                  |
| GET    | `/users/:userId` | `Get user by Id route: {userId}`    |
| PUT    | `/users/:userId` | `Put user by Id route: {userId}`    |
| DELETE | `/users/:userId` | `Delete user by Id route: {userId}` |

---

### `/articles` — маршрути для статей

| Метод  | Маршрут                | Відповідь сервера                         |
| :----- | :--------------------- | :---------------------------------------- |
| GET    | `/articles`            | `Get articles route`                      |
| POST   | `/articles`            | `Post articles route`                     |
| GET    | `/articles/:articleId` | `Get article by Id route: {articleId}`    |
| PUT    | `/articles/:articleId` | `Put article by Id route: {articleId}`    |
| DELETE | `/articles/:articleId` | `Delete article by Id route: {articleId}` |

---

## 🧠 Логіка роботи сервера

1. Клієнт надсилає HTTP-запит до певного маршруту (наприклад `/users/10`).
2. **Express Router** визначає, який контролер викликати.
3. **Контролер** виконує логіку обробки запиту та повертає текстову відповідь.
4. Сервер надсилає цю відповідь клієнту.

---

## 🧩 Приклади перевірки

### Через браузер (GET-запити)

* [http://localhost:3000/](http://localhost:3000/) → `Get root route`
* [http://localhost:3000/users](http://localhost:3000/users) → `Get users route`
* [http://localhost:3000/articles](http://localhost:3000/articles) → `Get articles route`

### Через термінал (використовуючи curl)

curl http://localhost:3000/users
curl -X POST http://localhost:3000/users
curl http://localhost:3000/users/123
curl -X PUT http://localhost:3000/articles/45
curl -X DELETE http://localhost:3000/articles/45


----------------

## 🧾 Вимоги завдання

✅ Використано **Node.js** і **Express.js**.
✅ Сервер слухає **порт 3000**.
✅ Відповіді — **текстові**, як зазначено у ТЗ.
✅ Реалізовано маршрути `/`, `/users`, `/users/:userId`, `/articles`, `/articles/:articleId`.
✅ Архітектура — **MVC (Model–View–Controller)**.
✅ Структура — модульна (окремі маршрути та контролери).
✅ Є повний README із описом і інструкціями.

----------------

## 🧮 Перевірка роботи

Після запуску:

* Відкрий у браузері [http://localhost:3000](http://localhost:3000) — має бути текст `Get root route`.
* Перевір маршрути `/users`, `/users/1`, `/articles`, `/articles/2` — усі повертають відповідні повідомлення.

------------

## 🧭 Розширення проєкту

У майбутньому можна:

* Додати **моделі (models)** для роботи з базами даних (MongoDB, PostgreSQL тощо);
* Реалізувати збереження користувачів і статей;
* Підключити middleware для валідації або авторизації.

---

## 🪄 Публікація у GitHub

git init
git add .
git commit -m "Initial commit: home-work-60 Express REST API"
git branch -M main
git remote add origin https://github.com/vlada9597/home-work-60.git
git push -u origin main


---

## 📌 Висновок

Розроблений сервер відповідає всім вимогам технічного завдання.
Він демонструє базові принципи побудови RESTful API з використанням Express.js, а також дотримується архітектурного підходу MVC.
Проєкт готовий до розширення й інтеграції з базою даних.
