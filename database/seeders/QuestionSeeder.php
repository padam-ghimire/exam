<?php

namespace Database\Seeders;

use App\Models\Section;
use App\Models\Question;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $titles = ["Physics","Chemistry"];
        foreach($titles as $title)
        {
            $section = Section::whereTitle($title)->first();
            Question::factory(10)->create([
                'section_id' => $section->id
            ]);
        }
    }
}
