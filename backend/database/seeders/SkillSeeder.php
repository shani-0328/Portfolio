<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $skills = [
            // Programming Languages
            [
                'name' => 'PHP',
                'category' => 'Language',
                'proficiency' => 90,
                'icon' => 'php.svg',
            ],
            [
                'name' => 'JavaScript',
                'category' => 'Language',
                'proficiency' => 95,
                'icon' => 'javascript.svg',
            ],
            [
                'name' => 'TypeScript',
                'category' => 'Language',
                'proficiency' => 85,
                'icon' => 'typescript.svg',
            ],
            [
                'name' => 'HTML5',
                'category' => 'Frontend',
                'proficiency' => 100,
                'icon' => 'html5.svg',
            ],
            [
                'name' => 'CSS3',
                'category' => 'Frontend',
                'proficiency' => 95,
                'icon' => 'css3.svg',
            ],
            
            // Frameworks
            [
                'name' => 'Laravel',
                'category' => 'Backend',
                'proficiency' => 90,
                'icon' => 'laravel.svg',
            ],
            [
                'name' => 'React',
                'category' => 'Frontend',
                'proficiency' => 95,
                'icon' => 'react.svg',
            ],
            [
                'name' => 'Next.js',
                'category' => 'Frontend',
                'proficiency' => 90,
                'icon' => 'nextjs.svg',
            ],
            [
                'name' => 'Vue.js',
                'category' => 'Frontend',
                'proficiency' => 80,
                'icon' => 'vuejs.svg',
            ],
            [
                'name' => 'Node.js',
                'category' => 'Backend',
                'proficiency' => 85,
                'icon' => 'nodejs.svg',
            ],
            
            // Other Technologies
            [
                'name' => 'MySQL',
                'category' => 'Database',
                'proficiency' => 85,
                'icon' => 'mysql.svg',
            ],
            [
                'name' => 'MongoDB',
                'category' => 'Database',
                'proficiency' => 80,
                'icon' => 'mongodb.svg',
            ],
            [
                'name' => 'Docker',
                'category' => 'DevOps',
                'proficiency' => 75,
                'icon' => 'docker.svg',
            ],
            [
                'name' => 'Git',
                'category' => 'Tool',
                'proficiency' => 90,
                'icon' => 'git.svg',
            ],
            [
                'name' => 'Tailwind CSS',
                'category' => 'Frontend',
                'proficiency' => 95,
                'icon' => 'tailwindcss.svg',
            ],
        ];
        
        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
