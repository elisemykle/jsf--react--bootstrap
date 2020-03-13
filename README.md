# Task

Create a responsive navigation using Bootstrap components.  In the example notice that when you resize your browser down to mobile widths, the navigation changes to a burger menu.

## Example

[The example is here](https://jsf-react-bootstrap.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.

## Task Steps

### Setup
1. Install React Bootstrap using NPM.  To do this, in the same directory that you ran `npm start` and `npm install`, run `npm install react-bootstrap`.
2. Add the bootstrap stylesheet.  To do this, open public/index.html and paste into the head: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />`
3. Look into the App component and you will see the starting point of the navigation.  You will be converting this to use Bootstrap navigation components.

### Convert HTML to Nav component.
1. Import the Nav from "react-bootstrap/Nav" i.e: `import Nav from "react-bootstrap/Nav";`.  
2. Next change the `nav` HTML element to be the `Nav` component, by simply changing the tag from `<nav>` to `<Nav>`(don't forget to change the closing tag aswell).  
3. Then change the `<a>`to usng `<Nav.Link>` component.  The href attribute will remain the same.

### Add NavBar
1. Import the `NavBar` component from "react-bootstrap/NavBar"
2. Wrap the Nav component in a NavBar component
3. Add some colour to the NavBar by adding two attribute.  First set the backgrond colour by setting the `bg` attribute to `primary` (i.e. `<NavBar bg="primary">`), then set the foreground colour by setting the `variant` attribute to `dark`.
4. Make the bar responsive by adding the the `expand` attribute and setting it to `lg`.
5. **Note** that the bar can be customised by using different value for the attributes.  Look up on the Bootstrap documentation for valid values.
6. Add the company name by adding the `Navbar.Brand` component to the start of the NavBar.  Add an `href` attribute with the value of `/` to make the name link to the homepage.  Inside the component add the word `Website Name`.  This text will be replaced with the name of the webiste when creating a real site.

### Advanced - burger menu

If you struggle with this section then move onto the next task.

1. Surround the `Nav` component with the `Navbar.Collapse` component.
2. Add an `id` (of your choosing) to the collapse component.
3. Before the collapse component add a `Navbar.Toggle` component.  Give the component the attribute of `aria-controls` and set the value to the `id` of the collapse component.

You should now have a working navigation with burger menu.



