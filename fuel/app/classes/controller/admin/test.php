<?php
/**
 * Created by PhpStorm.
 * User: ngocsontran
 * Date: 3/20/17
 * Time: 17:12
 */
class Controller_Admin_Test extends Controller_Admin
{
    public function action_index()
    {
        $data['test'] = Model_React::find('all');
        $this->template->title = "Test React";
        $this->template->content = View::forge('admin/test',$data);
    }
}