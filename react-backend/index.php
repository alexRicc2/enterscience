<?php

//versao localhost

$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "react_php";
$conn = mysqli_connect($serverName, $username, $password, $databaseName);

//VERSAO HEROKU

//mysql://b5fa1cb2c7bc32:8b8ff20b@us-cdbr-east-04.cleardb.com/heroku_09e2b3a2469c79d?reconnect=true
//Get Heroku ClearDB connection information
//$cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
//$cleardb_server = $cleardb_url["host"];
//$cleardb_username = $cleardb_url["user"];
//$cleardb_password = $cleardb_url["pass"];
//$cleardb_db = substr($cleardb_url["path"],1);
//$active_group = 'default';
//$query_builder = TRUE;
//$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);

$recNome = $_POST['nome'];
$recCpf = $_POST['cpf'];
$recNascimento = $_POST['nascimento'];
$recEmail = $_POST['email'];
$recTelefone = $_POST['telefone'];
$recSexo = $_POST['sexo'];
$recCep = $_POST['Cep'];
$recRua = $_POST['rua'];
$recNumero = $_POST['numero'];
$recComplemento = $_POST['complemento'];
$recCidade = $_POST['cidade'];
$recEstado = $_POST['estado'];


$query = "INSERT INTO react_php5 (nome, cpf, dataNascimento, email, telefone, cep, rua, numero, complemento, estado, sexo) VALUES('$recNome', '$recCpf', '$recNascimento','$recEmail','$recTelefone','$recCep','$recRua','$recNumero','$recComplemento','$recEstado','$recSexo')";

if(mysqli_query($conn, $query)){
  echo "inseriu";
}
else{
  echo "deu ruim";
}