<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'name',
        'title',
        'bio',
        'email',
        'phone',
        'address',
        'photo',
        'resume',
        'social_media',
    ];
    
    protected $casts = [
        'social_media' => 'array',
    ];
}
