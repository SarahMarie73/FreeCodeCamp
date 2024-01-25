### Calorie Counter

# 01-19-2024

- Finished the Role Playing Game exercise on FreeCodeCamp. Was pretty easy, starting on the calorie counter now. Most of this is just review stuff, not very challenging.

### Today's Takeaways

- Regex gets put between two `/`
- Use `\\` before characters that have a special meaning to 'escape' them.
- In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern. Shorthand character classes are preceded with a backslash (`\\`). The character class `\\s` will match any whitespace character.
- To match characters individually, turn them into a character class by wrapping in `[]`.
- add flags after the closing `/`. The `g`stands for 'global' and will test for all possible matches in a string.
- `i` flag will ignore case
- The `+` modifier in a regex allows you to match a pattern that occurs one or more times.
- There is a shorthand character class to match any digit: `\\d`.
- Strings have a `.match()` method, which takes a regex argument. `.match()` will return an array of match results – containing either the first match, or all matches if the global flag is used.

# 01-20-2024

### Today's Takeaways

- Javascript used template literals which function similar to f-strings in Python where you can insert a variable within a string. Denoted by `${insert-variable}` with backticks instead of quotation marks.

# 01-22-2024

### Today’s Takeaways

- insertAdjacentHTML(*position, html*) - takes two arguments
- NodeList - an array-like that a query selector returns containing elements that match the query selector.

# 01-23-2024

### Today’s Takeaways

- `e` is a common name for the parameter of a browser event in an event listener function.

# 01-25-2024

### Today’s Takeaways

- Here’s a big one. I finally figured out how to link a folder/file that has spaces in the name in markdown by replacing the space with the following:
`&#32;`