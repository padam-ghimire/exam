<?php

namespace App\Listeners;

use App\Models\Student;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Notifications\ExamCreatedNotification;

class ExamCreatedListerner implements ShouldQueue
{
    private Student $student;

    /**
     * Create the event listener.
     */
    public function __construct(Student $student)
    {
        $this->student = $student;
        
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        $students = $this->student->active()->get();
        foreach($students as $student)
        {
            try{
                $student->notify(new ExamCreatedNotification($event->exam));
            }catch (\Exception $e){
                Log::error($e->getMessage());
            }
        }
    }
}
