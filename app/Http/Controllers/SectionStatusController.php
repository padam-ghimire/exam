<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SectionStatusController extends Controller
{
    public function __invoke(Section $section) : RedirectResponse
    {
        $section->update([
            'is_active' =>  !$section->is_active
        ]);
        return Redirect::route('sections.index')->with('success', 'Section updated.');
    }

    
}
