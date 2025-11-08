// app.js — налаштування Express та реєстрація маршрутів
const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');


const app = express();


// Вбудована middleware для парсингу JSON і urlencoded — не обов'язково
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Роутери
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);


// 404
app.use((req, res) => {
res.status(404).send('Not Found');
});


module.exports = app;