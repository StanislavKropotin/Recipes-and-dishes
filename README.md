A full stack application with recipes that will use the Django Rest Framework, OpenAPI+Swagger auto-documentation and react-router.

Frontend:
- webpack package builder
- react installed by the create-react-app tool
- routing library react-router
- interaction with the django backend server using the axios HTTP client
Backend:
- server based on the django framework
- django rest framework library for organizing the api interface
- a tool for generating documentation for swagger endpoints
- SQLite database

- What to do to make it work:

You need to install dependencies (pip install -r requirements.txt)

In the console, use the cd command to go to the recipes_project folder and enter the command to start the server:

python manage.py runserver

The project API will be available at:

List of recipes:

http://127.0.0.1:8000/api/api/recipes/

List of categories:

http://127.0.0.1:8000/api/api/categories/

Swagger UI:

http://127.0.0.1:8000/api/swagger/

ReDoc UI:

http://127.0.0.1:8000/api/redoc/

In the console, create a second terminal (window) and use the cd command to go to the Frontend folder and enter the command to restore the necessary modules:

npm install

Let's start the server:

npm start

