<?php

namespace App;

use App\event;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass eeeeassignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role','birthday','tel'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }
    public function eventabonne()
    {

        return $this->belongsToMany(
            event::class,
            'abonners',
            'users_id',
            'events_id'
        )->withPivot('rang','affecter');
    }
    public function suggestion()
    {
        return $this->hasMany(suggestion::class);
    }
    public function sondage()
    {
        return $this->hasMany(sondage::class);
    }
    public function reponce()
    {
        return $this->hasMany(reponce::class);
    }
}
