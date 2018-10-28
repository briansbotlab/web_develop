<html>
<head>
<title>test</title>
</head>
<body>
<?php
$bool = false;
$num = 3 + 4;
$str = "A string here";

print $bool.$num.$str."<br/>";

?>
<script type="text/javascript">
// boolean outputs "" if false, "1" if true
var bool = "<?php echo $bool ?>"; 

// numeric value, both with and without quotes
var num = <?php echo $num ?>; // 7
var str_num = "<?php echo $num ?>"; // "7" (a string)

var str = "<?php echo $str ?>"; // "A string here"

console.log(bool);
document.write(bool);

console.log(num);
document.write(num);

console.log(str_num);
document.write(str_num);

console.log(str);
document.write(str);
</script>


</body>
</html>