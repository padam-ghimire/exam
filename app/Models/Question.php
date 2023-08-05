<?php

namespace App\Models;

use App\Models\Answer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;



    protected $fillable = [
        "title","description","is_active","user_id","section_id"
    ];

    
    protected $appends = [
        'isMultiple'
    ];


    public function getIsMultipleAttribute() : bool
    {
        return $this->answers()->where("is_checked",1)->count() > 0;
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
