# Examination Application

Welcome to the Examination Application! This application streamlines the process of conducting physics and chemistry examinations through questionnaires. Administrators can create questionnaires, view active questionnaires, send invitations, and students can submit their responses.

## Technologies
- Laravel (10.10) 
- React (18.0.28)
- Inetria (1.0.0)
- Tailwindcss (3.3.3)

### Requirements

- Composer (2.5.1)
- PHP (^8.1)
- Npm (9.5.1)
- Node (18.16.0)
- Database (MySQL)

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

5. Generate the application key:
   ```bash
   php artisan key:generate
6. Run migrations and seeders:
   ```bash
   php artisan migrate --seed
7. Start the development server:
   ```bash
   php artisan serve
8. For Development compile:
    ```bash
   npm run dev
8. For Production compile:
    ```bash
   npm run build

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




