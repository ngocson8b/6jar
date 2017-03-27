<?php
/**
 * Created by PhpStorm.
 * User: ngocsontran
 * Date: 3/20/17
 * Time: 17:12
 */
class Controller_Admin_React extends Controller_Admin
{
    public function action_index()
    {
        $data['react'] = Model_React::find('all');
        $this->template->title = "React";
        $this->template->content = View::forge('admin/react',$data);
    }
}