@component('mail::message')
# Change password Request

The body of your message.

@component('mail::button', ['url' => 'http://localhost:4200/password-responsr-reset?token='.$token])
Reinitialiser mot de passe
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
