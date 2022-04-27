## Exercise:

Create a calculator with whatever technology stack you prefer. Below you will find a basic design guide and functionality guide for how the calculator will behave. As a reminder, this exercise is to test coding abilities and so the expected functionality and design will not describe a realistic calculator. Feel free to design the calculator however you want beyond the description below.

### Design:

The calculator should be centered on the screen (both horizontally and vertically). As the screen size changes, the calculator will remain centered. Once the screen reaches a certain width it will display the “mobile version”. The below image is roughly what the calculator should be modeled off of. Button ordering should be the same and the color scheme should be as close as possible (don’t go crazy finding the exact colors). However button sizes will change depending on screen size. Button sizing information is below.

#### Desktop size (>=600 px)

 | Calculator Output Typography Scale |
-------------------------------

 | __Font size__ | __# Characters__ | __Edge cases__
 | ------------- |-------------| ----- |
 | 20px | < 20 | > 20 chars should be expressed in scientific notation once equation is solved (=)
 | 18px | 20 - 21 |
 | 16px | 22 - 23 |
 | 14px | 24 - 25 |
 | 12px | 26 - 27 |
 | 10px | 28 - 29 |
 | 8px (min) | 30 <= x <= 40 (max) |  > 40 chars, overflow text w/ elipsis (. . .)






| Calculator Keys Display & Typography |
----------------------------------------------------------------

| Property | Value
| --------| --------| --------| --------
| max-width | 150px |
| max-height | 60px |
| text-size | 16px
| text-align | center |


#### Mobile size (<600 px)

 | Calculator Output Typography Scale |
-------------------------------

 | __Font size__ | __# Characters__ | __Edge cases__
 | ------------- |-------------| ----- |
 | 16px | < 10 |  > 10 chars should be expressed in scientific notation once equation is solved (=)
 | 15px | 10 - 11 |
 | 14px | 12 - 13 |
 | 13px | 14 - 15 |
 | 12px | 16 - 17 |
 | 11px | 18 - 19 |
 | 10px | 20 - 21 |
 | 9px | 22 - 23 |
 | 8px | 24 - 25 (max) |  > 25 chars, overflow text w/ elipsis (. . .) |
 | 7px (min) |






| Calculator Keys Display & Typography |
----------------------------------------------------------------

| Property | Value |
| --------| --------| --------| --------
| max-width | 50px |
| max-height | 45px |
| text-size | 16px
| text-align | center |


### Functionality:

#### Part 1:
The calculator must be able to support the following features:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Clear
6. Complete equation
7. Decimal points

_Note_: there are several buttons in the design that will have no functionality. They should still appear but clicking them will do nothing. Additionally, the red, yellow, and green dots in the screenshot do not need to be built.

When doing equations after pressing one of the above buttons, the calculator must show a new total (similar to how it works on the mac calculator). Below are examples of what a user would press and what they would see at each step:

Example 1:
1. Press 9, see 9
2. Press 9, see 99
3. Press “+”, see 99
4. Press 1, see 1
5. Press 1, see 11
6. Press “=”, see 110

Example 2:
1. Press 9, see 9
2. Press 9, see 99
3. Press “+”, see 99
4. Press 1, see 1
5. Press 1, see 11
6. Press “-”, see 110
7. Press 1, see 1
8. Press 0, see 10
9. Press “=”, see 100


#### Part 2:
The calculator must support different text formatting (see above for design rules)
