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


    <br class="form-signin ">
        <h2 class="form-signin-heading">Đổi mật khẩu</h2>
        <label for="inputEmail" class="sr-only">Nhap mat khau cu</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Nhap mat khau cu" required autofocus>
    <div> </br> </div>
        <label for="inputPassword" class="sr-only">Nhap mat khau moi</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Nhap mat khau moi" required >
    <div> </br> </div>
        <label for="inputPasswordConfirm" class="sr-only">Nhap lai mat khau moi</label>
        <input type="passwordconfirm" id="inputPasswordConfirm" class="form-control" placeholder="Nhap lai mat khau moi" required>
    <div> </br> </div>
        <div class="actions">
            <?php echo Form::submit(array('value=>Xac nhan','name'=>'submit','class'=>'btn btn-lg btn-primary btn-block')); ?>
        </div>
    </form>
</div>
</div> <!-- /container -->


<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!--<script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>-->
</body>