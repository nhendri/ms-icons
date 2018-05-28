#### Notes and ish
| Page Zone                  | Content        | How Built?               | How Styled?                 |
| -------------------------- | -------------- | ------------------------ | --------------------------- |
| Top                        | Announcement   | List View                | Page CSS                    |
| Middle Left                | Search Refiner | Search Refiner Web Part  | Page CSS                    |
| Middle Right, Top Left     | Search Bar     | Search Web Part          | Page CSS                    |
| Middle Right, Top Right    | Quick Links    | Not Sure                 | Not Sure                    |
| Middle Right, Bottom Left  | Search Results | Search Results Web Part  | Page CSS, Results Templates |
| Middle Right, Bottom Right | Promoted Links | A Search Driven Web Part | Page CSS                    |

#### Reasons to do Quick Links as different things
| Method          | Description                                                                                      | Pros                                                                                          | Cons                             |
| --------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------- |
| Page Properties | Use the page properties to place links and their supporting graphics; use Page CSS to style them | Simple to manage, simple to maintain                                                          | Not as much ability to customize |
| List With Link  | Use a list with the links and possibly supporting graphics; place on page with JS Injection      | Put management of this content into relatively easily managed list; lot more freedom to style | Requires more JS on page         |