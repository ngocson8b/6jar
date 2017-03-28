<?php
/**
 * Created by PhpStorm.
 * User: ngocsontran
 * Date: 3/20/17
 * Time: 17:12
 */
class Controller_Admin_Redux extends Controller_Admin
{
    public function action_index()
    {
        $data['redux'] = Model_React::find('all');
        $this->template->title = "Redux";
        $this->template->content = View::forge('admin/redux',$data);
    }
}