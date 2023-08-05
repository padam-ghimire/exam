# Examination Application

Welcome to the Examination Application! This application streamlines the process of conducting physics and chemistry examinations through questionnaires. Administrators can create questionnaires, view active questionnaires, send invitations, and students can submit their responses.

## Getting Started

### Requirements

- Laravel
- Composer
- Database (MySQL, PostgreSQL, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/padam-ghimire/exam.git
   cd examination-app

2. Install dependencies:

   ```bash
    composer install

3. Copy the example environment file and configure your database:

   ```bash
    cp .env.example .env
    # Configure your database settings in .env

4. Generate the application key:
   ```bash
   php artisan key:generate
5. Run migrations and seeders:
   ```bash
   php artisan migrate --seed
6. Start the development server:
   ```bash
   php artisan serve

## Usage
1. Create a new exam by providing a title, time expiry date and description.
2. Physics and chemistry questions will be randomly selected for the exam.
3. View and manage active exams on the dashboard.
4. Send exam invitations to students via email.
5. Students use the unique URL in the email to access and submit their responses.

