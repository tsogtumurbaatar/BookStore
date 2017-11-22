<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ReactJS-Redux BookStore</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <link rel="shortcut icon" href="images/favicon.ico">
    <!-- Styles -->
    <style type="text/css">
       a:hover {
          cursor:pointer;
      }

      #imgloading
      {
        position:absolute;
        width:256px; /*image width */
        height:256px; /*image height */
        left:50%; 
        top:50%;
        margin-left:-128px; /*image width/2 */
        margin-top:-128px; /*image height/2 */
    } 
 
.dropbtn {
    background-color: #2E86C1;
    color: white;
    padding: 15px 15px 15px 15px;
    font-size: 14px;
    border: none;
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 400px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 8px 28px 8px 8px;
    text-decoration: none;

}
.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}

.dropdown-content1 {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 8px 28px 8px 8px;
    text-decoration: none;

}
.dropdown-content1 a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content1 {
    display: block;
}


hr{
        border-top: 1px solid #8ea4b7;
}
.navbar-inverse {

}
</style>
</head>

<body>

    <div class="container">
       <div class="row">
       <div class="col-md-1"></div>
       <div class="col-md-10">
            <div id="app"></div>
        </div>
        <div class="col-md-1"></div?>
    </div>    


</div>
<script src="{{asset('js/index.js')}}"></script>
</body>
</html>
