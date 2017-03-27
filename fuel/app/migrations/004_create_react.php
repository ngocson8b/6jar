<?php

namespace Fuel\Migrations;

class Create_react
{
    public function up()
    {
        \DBUtil::create_table('react', array(
            'id' => array('constraint' => 11, 'type' => 'int', 'auto_increment' => true, 'unsigned' => true),
            'text' => array('constraint' => 255, 'type' => 'varchar'),


        ), array('id'));
    }

    public function down()
    {
        \DBUtil::drop_table('react');
    }
}