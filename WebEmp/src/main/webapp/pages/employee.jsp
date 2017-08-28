<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<body>
	<table>
		<tr>
			<td>Employee Id:</td>
			<td>${requestScope.employee.empNo}</td>
		</tr>
		<tr>
			<td>Department No:</td>
			<td>${requestScope.employee.deptNo}</td>
		</tr>
		<tr>
			<td>Salary:</td>
			<td>${requestScope.employee.salary}</td>
		</tr>
	</table>
	
	
</body>
</html>