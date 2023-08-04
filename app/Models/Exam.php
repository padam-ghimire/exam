<?php

namespace App\Models;

use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        "title","description","expiry_date","total_time","user_id"
    ];

    public function questions()
    {
        return $this->belongsToMany(Question::class,"exam_questions","exam_id","question_id");
    }
}
