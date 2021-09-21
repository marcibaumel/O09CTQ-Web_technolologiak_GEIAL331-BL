import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/szamologep.do")
public class Servlet2 extends HttpServlet{

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ResultDto resultDto = new ResultDto();
        List<String> errors = new ArrayList<String>();
        String aString = req.getParameter("a");
        Double a = null;
        if(aString == null){
            errors.add("Az a A parameter nem lehet null");
        }else{
            try {
                a = Double.parseDouble(aString);
            }catch (NumberFormatException ex){
                errors.add("Nem szám az A");
            }
        }
        resultDto.setA(aString);

        Double b = null;
        String bString = req.getParameter("b");
        if(bString == null){
            errors.add("Az a B parameter nem lehet null");
        }else{
            try {
                b = Double.parseDouble(bString);
            }catch (NumberFormatException ex){
                errors.add("Nem szám az B");
            }
        }
        resultDto.setB(bString);
        String operator = req.getParameter("operator");
        resultDto.setOperator(operator);

        Double result = 0.0;

        //Working plus operator
        if ("+".equals(operator)) {
            result = Double.parseDouble(aString) + Double.parseDouble(bString);

        }
        resultDto.setErrorList(errors);
        //Working multiply operator
        if ("*".equals(operator)) {
            result = Double.parseDouble(aString) * Double.parseDouble(bString);
        }

        //Working divine operator
        if ("/".equals(operator)) {
            result = Double.parseDouble(aString) / Double.parseDouble(bString);
        }

        //Working minus operator
        if ("-".equals(operator)) {
            result = Double.parseDouble(aString) - Double.parseDouble(bString);
        }

        // eltarolja a keresbe, hogy a jsp is elerje
        req.setAttribute("result", result);

        // forward
        RequestDispatcher rd = req.getSession()
                .getServletContext( )
                .getRequestDispatcher("/");

        rd.forward(req, resp);
    }
}