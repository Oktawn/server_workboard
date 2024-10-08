**Цель**:

Создать RESTful API с авторизацией для доски на подобии yougile.

**Объекты:**

- пользователь;  
- колонка;  
- карточка;  
- комментарий.

Один пользователь может иметь несколько колонок. Одна колонка может иметь несколько карточек. Одна карточка может иметь несколько комментариев.

**Задачи:**
- [x] Подключить базу данных PostgreSQL; 
- [x] Создать авторизацию пользователя через емейл + пароль (предварительно создаем модель пользователя). В ответ пользователь должен получать JWT токен, который будем прикреплять в Authorization headers и, таким образом, будем идентифицировать пользователей;
- [x] Создать модели и реляционные связи между ними сущностями с помощью typeorm;  
- [ ] Создать CRUD эндпоинты по REST-у. Например, для создания пользоваля POST user/signup;
- [x] Должны валидировать все данные которые отправляет нам пользователь. Используем Validation pipe для этого. Валидация на емейл, строку, число, количество символов и т.д;  
- [x] Должны проверять через Guards имеет ли право пользователь менять/удалять колонку/карточку/коммент (является ли владельцем этой сущности);
- [ ] При документировании проекта использовать Swagger;
- [x] проект должен запускаться локально командой  `docker compose up`.
