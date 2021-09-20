<html>
<head><title>Calculator</title></head>
<body>
    <form method="post" action="/szamologep.do">
        <input type="text" name="a"><br>
        <input type="text" name="b"><br>

        <select name="operators">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>

        <input type="submit" value="Submit">

    </form>
<%
Double result = (Double) request.getAttribute("result");
if(result != null){
    system.out.println("Result: "+result);
}
%>
</body>
</html>
