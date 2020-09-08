# Re:Coded Mad Libz

## What is Mad Libs? 
See [wikipedia](https://en.wikipedia.org/wiki/Mad_Libs). In normal mad libs, we usually just insert the word, but in this version, it's more like a "fill in the blank" of an existing story.

## Instructions

### Write a story

In `story.txt`, you'll find a story. By the way, for the purposes of [parsing](https://en.wikipedia.org/wiki/Parsing), we're only used periods and commas as grammar.

Confusingly, the "blanks" are be anywhere a grammar part is denoted. The reason for this will be apparent later in some of the extra challenges.

For example:
* `Louis[n]`: normally it says Louis, but the user should replace it with a *noun*
* `went[v]`: normally it says went, but the user should replace it with a *verb*
* `[a]` for adjective...

Note that when we wrote the story, the period and commas goes after the part of speech, e.g., `Louis[n].` (NOT `Louis.[n]`).

### Code

In this project, we used HTML, CSS, and JS in unison in order to create a variant of a Mad Libs game with the story. 

Below, We use the word "input" to refer to the blanks in the Mad Libs story.

Here is a very, very simple visual example of what it might look like.

### Barebones Example
![Example](https://i.imgur.com/ZRNvFC7.png)

#### Functionality 

0. **Parsing the story:** we've written the function that reads in the file `story.txt` into a string. However, we process it into a format that will allow to keep track of "blanks." See `madlibs.js` for further information see [read about regular expressions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/). Also, we used regular expressions.

1. **Showing the story:** It shows **two copies** of the story. In one copy ("edit view"),
all words in the story with blanks (e.g., `Louis[n]`, `went[v]`, ...) are replaced with inputs. This is in `div.madLibsEdit`. In the second copy ("preview"), it shows the same story, but formatted prettily (without the blanks!). Refer to the example picture above.

2. **Hotkeys:** When the user presses `Enter` in an input, it moves the cursor to the next input in the story.

3. **Constraining user inputs:** An input have a maximum of 20 characters.

4. **Live update:** Whenever the user updates a blank in the edit view, it updates the preview any time a new character is typed and the user doesn't have to click a button in order to update the preview.

#### Styling 

0. **Responsiveness**: When the screen is small, the story takes the full width of the screen. When the screen is larger, as on a computer.

1. **Flexbox**: Flexbox is used for all the styles.

2. **Highlighting currently focused input**: There are three possible styles of inputs (style is a vague word here, they are distinguishable to the user):
* currently highlighted input (when the user is typing in one).
* filled out input (the user has already put a word there).
* empty input (the user has not already put a word there).
