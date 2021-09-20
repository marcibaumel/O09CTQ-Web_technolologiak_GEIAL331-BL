import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "szamologepDo", urlPatterns = "/szamologep.do")
public class Servlet2 extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String aString = req.getParameter("a");
        String bString = req.getParameter("b");
        String opString = req.getParameter("operators");

        Double result = 0.0;

        if("+".equals(opString)){
            result = Double.parseDouble(aString + bString);
        }

        req.setAttribute("result", result);

        RequestDispatcher rd = req.getSession()
                .getServletContext()
                .getRequestDispatcher("/");

        rd.forward(req, resp);


        //resp.getWriter().println("Hi from servlet 2");
    }
}
