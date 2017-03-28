<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <?php echo Asset::css('bootstrap.css'); ?>
    <?php echo Asset::css('login.css'); ?>

    <!-- Bootstrap core CSS -->
</head>

<body>

<div class="container">
<div class="col-md-3 col-md-offset-4" >

    <form class="form-signin">

        <h2 class="form-signin-heading" >Đổi mật khẩu</h2>
        <label for="inputEmail" class="sr-only">Nhap email</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Nhap email" required autofocus>

        <label for="inputPassword" class="sr-only">Nhap mat khau cu</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Nhap mat khau" required >
<!--    // nếu type = password thì sẽ tự động đổi thành dấu *-->
    <label for="inputPasswordConfirm1" class="sr-only">Nhap mat khau moi</label>
    <input type="password" id="inputPasswordConfirm1" class="form-control" placeholder="Nhap mat khau moi" required >

        <label for="inputPasswordConfirm2" class="sr-only">Nhap lai mat khau moi</label>
        <input type="password" id="inputPasswordConfirm2" class="form-control" placeholder="Nhap lai mat khau moi" required>

    </form>
    <div class="actionss">
        <?php echo Form::submit(array('value'=>'Xac nhan','name'=>'submit','class'=>'btn btn-lg btn-primary btn-block')); ?>
    </div>
</div>
</div>
</body>
