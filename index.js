const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true,
  });
});

app.get('/add', (req, res) => {
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true,
  });
});

app.get('/courses', (req, res) => {
  res.render('courses', {
    title: 'Список курсов',
    isCourses: true,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
