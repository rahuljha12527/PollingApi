
<h3>Polling Api</h3>

<h4>Features</h4>
-Create a question.(you can add as many question as want) <br>
-Add Option to a question<br>
-Add Option to a vote of question<br>

-Delete a question (optional: A question cant be deleted if one of the question has vote)
-Delete an option(optional:An option cant be deleted if it have have one option to a question)
-View  a question with it's options and all the vote given it

<h4>Routes</h4>

-/questions/create (To create a question)
-/questions/:id/options/create (To add option to a specific question)
-/questions/:id/delete (To delete a question)
-/options/:id/add_vote(To increment the count of votes)
-/questions/:id(To view a question and its option)





