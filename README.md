# Setup Guide

Follow these steps to set up the Laravel project with Vue and Inertia.js.

## Prerequisites

Make sure you have the following installed on your machine:

- PHP >= 8.0
- Composer
- Node.js >= 16.x
- NPM (Node Package Manager)

## Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/oseogbe/road-trip-planner

2. Navigate into the project directory:
   ```bash
   cd road-trip-planner

3. Install PHP dependencies:
   ```bash
   composer install

4. Set up the environment file:
   ```bash
   cp .env.example .env

5. Generate the application key:
   ```bash
   php artisan key:generate

6. Add Google Maps API key to environment file (Make sure the variable name is set to VITE_APP_GOOGLE_API_KEY)

7. Run database migrations (Make sure your database is set up in the .env file before running migrations):
   ```bash
   php artisan migrate

8. Install JavaScript dependencies:
   ```bash
   npm install

9. Start the Node development server and compile assets:
   ```bash
   npm run dev

10. Start the Laravel development server:
    ```bash
    php artisan serve

11. Access the application: Open your browser and visit http://localhost:8000.

   
