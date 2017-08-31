import Rebase from 're-base';
import Firebase from 'firebase';

const app = Firebase.initializeApp({
	  apiKey: "AIzaSyCGzB-rL6GFnqOwJhBmUDKJcd4CQFpsyQc",
    authDomain: "todo-with-delete.firebaseapp.com",
    databaseURL: "https://todo-with-delete.firebaseio.com",
});

const base = Rebase.createClass(app.database());


export default base;