<!DOCTYPE html>
<html>
<head>
<meta charset="BIG5">
<title>Insert title here</title>
</head>
<body>
<?php
	function  f($x)
	{
		if($x==1)
			return 0;
		else if ($x%2==0)
			return 1+f($x/2);
		else
			return min(1+f($x+1),1+f($x-1));
	}
	echo "<table border='1' align='center'><tbody><tr><td>"."數字"."</td><td>"."所需步數"."</td></tr>"."<tr><td  align='center' >".$_POST["abcd"]."</td><td  align='center' >".f($_POST["abcd"])."</td></tr></tbody></table>";
?>
</body>
</html>