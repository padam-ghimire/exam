<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Section;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class SectionCreationTest extends TestCase
{
    use WithFaker; 

    public function testSectionCreation()
    {
        
        $user = User::factory()->create();
        $this->actingAs($user);

        $requestData = [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'is_active' => 1, 
        ];

        $response = $this->post(route('sections.store'), $requestData);

        $response->assertRedirect(route('sections.index'));
        $this->assertDatabaseHas('sections', [
            'title' => $requestData['title'],
            'description' => $requestData['description'],
            'user_id' => $user->id,
            'is_active' => $requestData['is_active'],
        ]);
    }
}
