//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here
console.clear();
const favRecipe = {
  title: "Flax Wrap",
  serves: 2,
  ingredients: ["flax meal", "water", "salt"],
};
function printDetails(recipe) {
  return `- ${favRecipe.title}\n- Serves: ${favRecipe.serves}\n- Ingredients: \n- ${favRecipe.ingredients[0]}\n- ${favRecipe.ingredients[1]}\n- ${favRecipe.ingredients[2]}`;
}
console.log(printDetails());

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.

//write your code here
const books = [
  { title: "The Power of Now", author: "Eckhart Tolle", alreadyRead: true },
  { title: "Atomic Habits", author: "James Clear", alreadyRead: true },
  {
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    alreadyRead: false,
  },
];
for (book of books) {
  console.log(`${book.title} by ${book.author}`);
  if (book.alreadyRead === true) {
    console.log(`You already read "${book.title}" by ${book.author}`);
  } else {
    console.log(`You still need to read "${book.title}" by ${book.author}`);
  }
}
