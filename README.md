# Examination Application

Welcome to the Examination Application! This application streamlines the process of conducting physics and chemistry examinations through questionnaires. Administrators can create questionnaires, view active questionnaires, send invitations, and students can submit their responses.

## Technologies
- [Laravel (10.10)](https://laravel.com/docs/10.x)
- [React (18.0.28)](https://react.dev/)
- [Inetriajs (1.0.0)](https://inertiajs.com/)
- [Tailwindcss (3.3.3)](https://tailwindcss.com/)
- [Typescript] (5.0.2)(https://www.typescriptlang.org/)

### Requirements

- [Composer (2.5.1)](https://getcomposer.org/)
- [PHP (^8.1)](https://www.php.net/downloads) 
- [NPM (9.5.1)](https://www.npmjs.com/)
- [Node (18.16.0)](https://nodejs.org/en)
- [Database (MySQL)](https://www.mysql.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/padam-ghimire/exam.git
   cd examination-app

2. Install PHP dependencies:

   ```bash
    composer install

3. Install NPM dependencies:

   ```bash
    npm install

4. Copy the example environment file and configure your database:

   ```bash
    cp .env.example .env
    # Configure your database settings in .env
5. Add mail configuration in .env (for development,you can use) :
- [MailTrap](https://mailtrap.io/)

6. Generate the application key:
   ```bash
   php artisan key:generate
7. Run migrations and seeders:
   ```bash
   php artisan migrate --seed
8. Start the development server:
   ```bash
   php artisan serve

9. For Development compile:
    ```bash
    npm run dev
10. For Production compile:
    ```bash
     npm run build
11. Open any browser and hit:
    - [https://localhost:8000/login](https://localhost:8000/login)
   # default username : admin@admin.com
   # default password : password


## Usage
1. Create a new exam by providing a title, time expiry date and description.
2. Physics and chemistry questions will be randomly selected for the exam.
3. View and manage active exams on the exams section.
4. Exam invitations will be sent automatically  to students while creating exam via email.
5. Students use the unique URL in the email to access and submit their responses.

## Screenshots
1. Sections

![App Screenshot](https://i.imgur.com/pmUgsQx.png)

2. Questions

![App Screenshot](https://i.imgur.com/sfZf5T6.png)

3. Students

![App Screenshot](https://i.imgur.com/TRDIs44.png)

4. Exam

![App Screenshot](https://i.imgur.com/tj1gSh2.png)

5. Student exam interface
![App Screenshot](https://i.imgur.com/fsi8Oa3.png)




