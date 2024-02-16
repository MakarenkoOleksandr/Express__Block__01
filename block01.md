## EXERCISE 1

- Write a multi-language HelloWorld app with Express.
- It will listen for incoming GET requests with the data passed in the params.
- To get this data you will need to use req.params .
- For this exercise and all to come, make your server listen at port 4040. Once you start your server you will be able to use your browser to interact with it by typing http://localhost:4040/

  # Example of usage:

  > URL -------------------- => Response
  > http://localhost:4040/ => {ok:true, data: 'Hello world'}
  > http://localhost:4040/NL => { ok: true, data: 'Hallo Wereld' }
  > http://localhost:4040/IT => { ok: true, data: 'Ciao Mondo' }
  > http://localhost:4040/asdf => { ok: true, data: 'Hello World' }

  # Set Up Steps:

  In the terminal, go to folder 04_express/block01/ex01 and run
  npm init -y
  npm install express

  When your server is ready, you should be able to run `nodemon` to start it.

**_Your solution goes to ex01 folder_**

## EXERCISE 2

    Extend the previous exercise and add the possibility to add a new language.

# Example of usage:

> URL -------------------- => Response
> http://localhost:4040/ => { ok: true, data: 'Hello World' }
> http://localhost:4040/NL => { ok: true, data: 'Hallo Wereld' }
> http://localhost:4040/IT => { ok: true, data: 'Ciao Mondo' }
> http://localhost:4040/CA => { ok: true, data: 'Hello World in CA not found' }
> http://localhost:4040/CA/Hola%20mon => { ok: true, data: 'CA added with message "Hola mon"' }
> http://localhost:4040/CA => { ok: true, data: 'Hola mon' }

# Note:

    Pay attention to the fact that the URL is encoded to ASCII code so it only accepts most common English characters and not spaces. That is why we use %20 instead of a space! For more information about the encoding of URL you can visit the W3Schools source
    https://www.w3schools.com/tags/ref_urlencode.ASP

**_Your solution goes to ex02 folder_**

## EXERCISE 3

    Extend the previous exercise and add the possibility to remove a language. In fact let's make the app start with no language saved in memory

# Example of usage:

> URL -------------------- => Response
> http://localhost:4040/DE => { ok: true, data: 'Hello World in DE not found' }
> http://localhost:4040/DE/Hallo%20Welt => { ok: true, data: 'DE added with message "Hallo 20Welt"' }
> http://localhost:4040/DE => { ok: true, data: 'Hallo Welt' }
> http://localhost:4040/DE/remove => { ok: true, data: 'DE removed' }
> http://localhost:4040/DE => { ok: true, data: 'Hello World in DE not found' }

**_Your solution goes to ex03 folder_**

## EXERCISE 4

    Extend the previous exercise and add the possibility to update a language and if language already exists prevent it from being added again.

# Example of usage:

> URL -------------------- => Response
> http://localhost:4040/DE => { ok: true, data: 'Hello World in DE not found' }
> http://localhost:4040/DE/HalloWelt => { ok: true, data: 'DE added with message "HalloWelt"' }
> http://localhost:4040/DE => { ok: true, data: 'HalloWelt' }
> http://localhost:4040/DE/Hallo%20Welt => { ok: true, data: 'Action forbidden, DE is already present in the system' }
> http://localhost:4040/DE/update/Hallo%20Welt => { ok: true, data: 'DE updated from 'HalloWelt' to 'Hallo Welt'' }
> http://localhost:4040/DE => { ok: true, data: 'Hallo Welt' }

# Note:

By completing this exercise you will have your first CRUD app! Congratulations!

**_Your solution goes to ex04 folder_**

## EXERCISE 5

- Write a bank account app. The server needs to be able to create accounts and for a single account we should be able to:

  - Deposit
  - Withdraw
  - Get the balance
  - Delete the account

- If no account ID is passed, nothing should be created/deposited/withdrawn

> Working app example: https://bank-account-b1e5-express-demo.onrender.com/ 
> Try adding a new account with https://bank-account-b1e5-express-demo.onrender.com/account/new/123/1000 

# API:

```
Request URL (String)        /account/new/:accountID/:amount
Response Return (String)    account num :accountID created with :amount euros
Comments                    GET; it must be unique no matter the number of calls

Request URL (String)        /:accountID/withdraw/:amount
Response Return (String)    :amount euros taken from account num :accountID
Comments                    GET; if :accountID not found return "Account not found"

Request URL (String)        /:accountID/deposit/:amount
Response Return (String)    :amount euros added to account num :accountID
Comments                    GET; if :accountID not found return "Account not found"

Request URL (String)        /:accountID/balance
Response Return (String)    The balance of account num :accountID is ## euros
Comments                    GET; if :accountID not found return "Account not found" |

Request URL (String)        /:accountID/delete
Response Return (String)    Account num :accountID deleted
Comments
Request URL (String)        /*
Response Return (String)    404 resource not found
Comments                    What to do in case we match anything else
```

> URL -------------------- => Response
> http://localhost:4040/account/new/0001/1000 => { ok: true, data: 'account 0001 created with 1000 euros' }
> http://localhost:4040/account/new/0001/1000 => { ok: true, data: 'account 0001 already exists' }
> http://localhost:4040/0001/balance => { ok: true, data: 1000 }
> http://localhost:4040/0002/balance => { ok: true, data: 'Account not found' }
> http://localhost:4040/0001/withdraw/500 => { ok: true, data: '500 euros taken from account num 0001' }
> http://localhost:4040/0002/withdraw/500 => { ok: true, data: 'Account not found' }
> http://localhost:4040/0001/balance => { ok: true, data: 500 }
> http://localhost:4040/0001/deposit/250 => { ok: true, data: '250 euros added to account num 0001' }
> http://localhost:4040/0002/deposit/250 => { ok: true, data: 'Account not found' }
> http://localhost:4040/0001/balance => { ok: true, data: 750 }
> http://localhost:4040/0001/delete => { ok: true, data: 'Account num 0001 deleted' }
> http://localhost:4040/0001/balance => { ok: true, data: 'Account not found' }
> http://localhost:4040/asdf => { ok: true, data: '404 resource not found' }

**_Your solution goes to ex05 folder_**
