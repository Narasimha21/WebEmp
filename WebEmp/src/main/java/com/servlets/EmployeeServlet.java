package com.servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.imcs.project.entities.Employee;
import com.imcs.project.service.Service;

/**
 * Servlet implementation class EmployeeServlet
 */
public class EmployeeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public EmployeeServlet() {
		super();
		Service es = new Service();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// Inpuut

		Integer empId = Integer.parseInt(request.getParameter("employeeId"));
		Integer deptNo = Integer.parseInt(request.getParameter("departmentId"));

		Service es = new Service();

		Employee employee = es.getEmployee(empId, deptNo);
		// process

		request.setAttribute("employee", employee);
		RequestDispatcher rd = request.getRequestDispatcher("/pages/employee.jsp");
		rd.forward(request, response);

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}
}
