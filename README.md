## Setup Guide

git clone https://github.com/oseogbe/road-trip-planner

cd road-trip-planner

composer install
cp .env.example .env
php artisan key:generate
php artisan migrate

npm install

> php artisan serve
> npm run dev
