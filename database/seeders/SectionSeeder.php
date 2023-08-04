<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Section;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $titles = ["Physics","Chemistry"];
        $user_id = User::first()->id;
        foreach($titles as $title){
            Section::firstOrCreate([
                'title' => $title,
                'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! ",
                'user_id' => $user_id
            ]);
        }
    }
}
