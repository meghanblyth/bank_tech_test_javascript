# bank_tech_test

The bank tech test script simulates a bank.  It allows you to deposit, withdraw and check your account statement for credit, debit, balance and date information. 

# requirements 

* You should be able to interact with your code via node (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

# acceptance criteria 

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

# user stories 

As a customer, 
So that I can add money to my bank account,
I'd like to make a deposit

As a customer, 
So that I can take money out of my bank account,
I'd like to make a withdrawal

As a customer, 
So that I can check my account balance,
I'd like to print a bank statement which shows the date, amount, balance

# how to set up the bank tech test 

* Create a new directory 

* Clone this repository to the directory 

* ```cd``` into the repository folder

# before using the bank tech test 

* in terminal run : ```npm install```

*To run the program type ```npm start```

*To run the test suites type ```jest``` in the terminal


