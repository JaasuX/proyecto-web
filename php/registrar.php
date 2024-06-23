<?php
if(!empty($_POST["registro"])){
    if (empty($_POST["nombre"]) or empty($_POST["apellido"]) or empty($_POST["email"]) or empty($_POST["password"]) or empty($_POST["usuario"]) ){
        echo 'Uno de los campos esta vacio';
    } else{
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido']; 
        $email = $_POST['email']; 
        $password = $_POST['password']; 
        $usuario = $_POST['usuario']; 
        $sql=$conex ->query("insert into usuario( nombre, apellido, correo, contarsena, idusuario) values('$nombre', '$apellido', '$email', '$password', '$usuario' )");
        
        if($sql==1){
            echo 'Usuario registrado correctamente';
        }else{
            echo 'Error al registrar';
        }
        
    }
}
?>