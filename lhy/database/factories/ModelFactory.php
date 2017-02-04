<?php

/*$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];*/
$factory->define(App\Users::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'email' => $faker->unique()->email,
        'pwd' => $faker->numberBetween(6,12)
    ];
});
