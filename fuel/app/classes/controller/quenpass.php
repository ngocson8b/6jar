<?php

class Controller_Quenpass extends Controller_Template
{

	public function action_login()
	{
		$data["subnav"] = array('login'=> 'active' );
		$this->template->title = '';
		$this->template->content = View::forge('quenpass/login', $data);
	}

}
