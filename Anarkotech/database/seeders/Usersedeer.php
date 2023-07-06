<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Usersedeer extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::create([
            'name' => "Juan david hernandez",
            'email' => "admin@admin.com",
            'password' => bcrypt('12345678')
        ]);
        User::factory(99)->create();
        //
    }
}
