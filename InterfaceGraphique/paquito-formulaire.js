listeExemple = [
				{"id":"1", "nom":"Exemple", "version":"1.0", "distribution":"Ubunto"},
				{"id":"2", "nom":"Exemple2", "version":"1.2", "distribution":"window"}
				];

$(document).ready(function(){
	
	$("#formulaire").click(function(){
		$(".inputAjout").attr("disabled",false);
		$(".inputYaml").attr("disabled",true);
	});
	
	$("#yaml").click(function(){
		$(".inputAjout").attr("disabled",true);
		$(".inputYaml").attr("disabled",false);
	});
	
	$(".inputAjout").attr("disabled",false);
	$(".inputYaml").attr("disabled",true);
	
	s='';
	s = '<table class="table table-striped" id="table_telechargement">';
	s = s + '<thead><tr>';
	s = s + '<tr>';
	s = s + '<th> Nom </th>';
	s = s + '<th> Version </th>';
	s = s + '<th> Distribution disponible </th>';
	s = s + '<th> Telechargement </th>';
	s = s + '</tr>';
	s = s + '</thead>';
	
	s = s + '<tbody>';	
	
	
	for(var i=0; i< listeExemple.length;i++){
		s = s + '<tr>';
		s = s + '<td>' + listeExemple[i]["nom"] + '</td>';
		s = s + '<td>' + listeExemple[i]["version"] + '</td>';
		s = s + '<td>' + listeExemple[i]["distribution"] + '</td>';
		s = s + '<td><button class = "telechargement" id="' + listeExemple[i]["id"] + '">Telechargement</button></td>';
		s = s + '</tr>';
	}
	s = s + '</tbody>';
	s = s + '</table>';
	
	$("#divTableTelechargement").append(s);
	
	$(".telechargement").click(function(){
		id= $(this).attr("id");
		//window.open('nom du fichier/dossier zippee en fonction du nom','','')
	});
});