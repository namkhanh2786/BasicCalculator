$(document).ready(function() //wait for documents like css, html to fully load
{
    $('#C').click(function(){
        document.getElementById('display').value = ""
    })
    $('#percent').click(function(){
        document.getElementById('display').value += "%"
    })
    $('#backspace').click(function() {
        let stringQuery = document.getElementById('display').value.toString();
        document.getElementById('display').value = stringQuery.substr(0, stringQuery.length - 1) //get string from 0 to value before the delete one
    })
    $('#divide').click(function(){
        document.getElementById('display').value += '/'
    })
    $('#7').click(function(){
        document.getElementById('display').value += 7
    })
    $('#8').click(function(){
        document.getElementById('display').value += 8
    })
    $('#9').click(function(){
        document.getElementById('display').value += 9
    })
    $('#multiply').click(function(){
        document.getElementById('display').value += '*'
    })
    $('#4').click(function(){
        document.getElementById('display').value += 4
    })
    $('#5').click(function(){
        document.getElementById('display').value += 5
    })
    $('#6').click(function(){
        document.getElementById('display').value += 6
    })
    $('#substract').click(function(){
        document.getElementById('display').value += '-'
    })
    $('#3').click(function(){
        document.getElementById('display').value += 3
    })
    $('#2').click(function(){
        document.getElementById('display').value += 2
    })
    $('#1').click(function(){
        document.getElementById('display').value += 1
    })
    $('#add').click(function(){
        document.getElementById('display').value += '+'
    })
    $('#0').click(function(){
        document.getElementById('display').value += 0
    })
    $('#00').click(function(){
        document.getElementById('display').value += 0
        document.getElementById('display').value += 0
    })
    $('#decimal-dot').click(function(){
        document.getElementById('display').value += '.'
    })
    $('#equal').click(function(){
        if (document.getElementById('display').value == "") { }
        else if ((document.getElementById('display').value.indexOf("/") == 0 || document.getElementById('display').value.indexOf("*") == 0 || document.getElementById('display').value.indexOf("%") == 0) && (document.getElementById('display').value.indexOf("-") == 0 || document.getElementById('display').value.indexOf("+") == 0 || document.getElementById('display').value.indexOf(".") == 0))
        { 
            
            setTimeout(() => { 
                document.getElementById('display').value = "Invalid syntax";
            }, 3000) //pause for 3 seconds before assign another value to 'display' value

            document.getElementById('display').value = ""
        }
        else 
        {
            document.getElementById('display').value = eval(document.getElementById('display').value)
        }
    })
})