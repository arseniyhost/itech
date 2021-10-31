<form action="" method="post">
    <input type="textbox" name="first" required>

    <select name="operation" required>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="textbox" name="second" required>
    <input type="submit" name="submit">
</form>
<?php
if ($_POST['submit']) {
    $a = (int)$_POST['first'];
    $b = (int)$_POST['second'];
    $oper = $_POST['operation'];
    $result;

    if ($oper == '+')
        $result = $a + $b;
    else if ($oper == '-')
        $result = $a - $b;
    else if ($oper == '*')
        $result = $a * $b;
    else if ($oper == '/') {
        if ($b == 0)
            echo "Вы не можете делить на ноль!";
        else
            $result = $a / $b;
    } else {
        echo 'Error';
    }
}
if ($result)
    echo $result;
else {
    echo "";
}
?>
