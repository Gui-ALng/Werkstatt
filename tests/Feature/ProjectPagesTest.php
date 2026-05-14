<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProjectPagesTest extends TestCase
{
    public function test_example(): void
    {
        $this->get(route('projects.alpha'))->assertOk();
        $this->get(route('projects.beta'))->assertOk();
        $this->get(route('projects.gamma'))->assertOk();
    }
}
