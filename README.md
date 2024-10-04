**Цель**:

Создать RESTful API с авторизацией для доски.

**Сущности:**

- пользователь;  
- колонка;  
- карточка;  
- комментарий.

Один пользователь может иметь несколько колонок. Одна колонка может иметь несколько карточек. Одна карточка может иметь несколько комментариев.

**Задачи:**
 
1. Создать авторизацию пользователя через емейл \+ пароль (предварительно создаем модель пользователя). В ответ пользователь должен получать JWT токен, который мы будем прикреплять в Authorization headers и, таким образом, будем идентифицировать пользователей на Backend;
2. ~~Подключить базу данных PostgreSQL;~~ 
3. Создать модели и реляционные связи между ними (пользователь, колонка, карточка, комментарий);  
4. Создать CRUD эндпоинты по REST-у. Например, юзера мы создаем через POST /users, конкретного юзера получаем через GET /users/{id}, колонки юзера получаем через GET /users/{id}/columns, удаляем через DELETE /users/{userId}/columns/{id};  
5. Должны валидировать все данные которые отправляет нам пользователь. Используем Validation pipe для этого. Валидация на емейл, строку, число, количество символов и т.д;  
6. Должны проверять через Guards имеет ли право пользователь менять/удалять колонку/карточку/коммент (является ли владельцем этой сущности);  
7. Используем для документации Swagger. Должны прописывать в swagger все эндпоинты и модели (ApiProperty, ApiTags, ApiOperation и т.п.);
8. ~~Все должно запускаться из под docker compose up.~~

- [x] test complite
- [ ] test uncomplite
- [?] ask