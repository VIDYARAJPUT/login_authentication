function login()       
             {
                 var uname = document.getElementById('username').value;
                 var pass = document.getElementById('password').value;
                     if( uname == "newton" && pass == "123")
                 {
                   alert("login successful!");
                 }
                 else
                 {
                     alert("login failed!");
                 }
             }
