<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Student;
use App\Models\Exam;

class ExamSubmissionTest extends TestCase
{

    public function testExamSubmission()
    {
        // Create a new student instance and save it to the database
        $student = Student::factory()->create();

        // Create a new exam instance and save it to the database
        $exam = Exam::factory()->create();

        // Simulate student's answers
        $studentAnswers = [
            // Simulate answers
        ];

        // Simulate request data
        $requestData = [
            'results' => $studentAnswers,
        ];

        // Make a POST request to the __invoke method
        $response = $this->post(route('student.exam.submit', [
            'student' => $student->id,
            'exam' => $exam->id,
        ]), $requestData);

        // Assertions
        $response->assertRedirect(route('home'));

        // Add more assertions if needed
    }
}
