<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Question;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Exam extends Model
{
    use HasFactory;

    protected $casts = [
        'expiry_date' => 'date'
    ];

    protected $appends = [
        'expires_on'
    ];

    protected $fillable = [
        "title","description","expiry_date","total_time","user_id"
    ];

    public function getExpiresOnAttribute()
    {
        return $this->expiry_date->diffForHumans();
    }

    public function questions()
    {
        return $this->belongsToMany(Question::class,"exam_questions","exam_id","question_id");
    }

    public function scopeActive(Builder $query):void
    {
        $query->whereDate("expiry_date",'>',Carbon::now());
    }
}
