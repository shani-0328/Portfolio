<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'E-commerce Platform',
                'description' => 'A fully-featured e-commerce platform built with Laravel and Vue.js. Includes product management, cart functionality, user authentication, and payment integration.',
                'image' => 'ecommerce.jpg',
                'technologies' => ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
                'url' => 'https://github.com/madhukumar/ecommerce',
                'live_demo' => 'https://ecommerce-demo.example.com'
            ],
            [
                'title' => 'Task Management App',
                'description' => 'A collaborative task management application that allows teams to organize projects, assign tasks, and track progress. Features real-time updates and notifications.',
                'image' => 'taskmanager.jpg',
                'technologies' => ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
                'url' => 'https://github.com/madhukumar/task-manager',
                'live_demo' => 'https://task-manager-demo.example.com'
            ],
            [
                'title' => 'Weather Dashboard',
                'description' => 'An interactive weather dashboard that shows current weather conditions and forecasts for any location. Uses geolocation and weather APIs.',
                'image' => 'weather.jpg',
                'technologies' => ['React', 'OpenWeather API', 'Mapbox API', 'Tailwind CSS'],
                'url' => 'https://github.com/madhukumar/weather-dashboard',
                'live_demo' => 'https://weather-dash.example.com'
            ],
            [
                'title' => 'Blog Platform',
                'description' => 'A modern blog platform with features like categories, tags, comments, and a rich text editor. Includes admin panel for content management.',
                'image' => 'blog.jpg',
                'technologies' => ['Next.js', 'Laravel', 'MySQL', 'TinyMCE'],
                'url' => 'https://github.com/madhukumar/blog-platform',
                'live_demo' => 'https://blog-demo.example.com'
            ]
        ];
        
        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
