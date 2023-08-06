<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class SubscriptionController extends Controller
{
    public function __invoke(Student $student) : RedirectResponse
    {
        $student->update([
            'subscribed' =>  !$student->subscribed
        ]);
        return Redirect::route('students.index')->with('success', 'Student subscription updated ');
    }
}
