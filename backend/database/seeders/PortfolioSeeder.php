<?php

namespace Database\Seeders;

use App\Models\Portfolio;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Portfolio::create([
            'name' => 'Shanika Wijenayake',
            'title' => 'Software Developer',
            'bio' => 'I am a passionate web developer with expertise in Laravel, Next.js, and modern web technologies. I love building robust web applications that deliver exceptional user experiences.',
            'email' => 'madhu.0502@example.com',
            'phone' => '+94 071 012 9795',
            'address' => 'Kandy, Sri Lanka',
            'photo' => 'profile.jpg',
            'resume' => 'resume.pdf',
            'social_media' => json_encode([
                'github' => 'https://github.com/shani-0328',
                'linkedin' => 'https://www.linkedin.com/in/shanika-wijenayake-999331213',
                'twitter' => 'https://twitter.com/madhukumar'
            ])
        ]);
    }
}
