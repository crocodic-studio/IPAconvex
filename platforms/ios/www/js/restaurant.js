var serviceURL = "http://ipaconvex.com/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'get_restoran.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li>' +
					'<h4>' + employee.nama + '</h4>' +
					'<p>' + employee.alamat + '</p>'+
					'<p>' + employee.telp + '</p></li>');
		});
		$('#employeeList').listview('refresh');
	});
}