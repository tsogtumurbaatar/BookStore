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
</style>
</head>

<body>

    <div class="container">
       <div class="row">
       <div class="col-md-2"></div>
       <div class="col-md-8">
            <div id="app"></div>
        </div>
        <div class="col-md-2"></div?>
    </div>    


</div>
<script src="{{asset('js/index.js')}}"></script>
</body>
</html>
