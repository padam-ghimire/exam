<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Section;
use App\Events\ExamCreatedEvent;
use Illuminate\Support\Facades\Event;

class ExamStoreTest extends TestCase
{
    use WithFaker;

    public function testStoreMethod()
    {
        // Mock the event listener
        Event::fake();

        // Create an authenticated user
        $user = User::factory()->create();
        $this->actingAs($user);

        // Create sections in the database
        $sections = Section::factory(3)->create();

        // Simulate request data
        $requestData = [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'expiry_date' => now()->addDays(7),
            'total_time' => 120,
            'sections' => $sections->pluck('id')->toArray(),
        ];

        // Make a POST request to the store method
        $response = $this->post(route('exams.store'), $requestData);

        // Assertions
        $response->assertRedirect();

        // Assert that the event was fired
        Event::assertDispatched(ExamCreatedEvent::class);

       
    }
}
