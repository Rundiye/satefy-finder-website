# SAFETY FINDER

## Description

Safety Finder is a dinamic website for everyone who is interested in the level of safety of the country they are planning to travel to.
On the website, a list of countries is found, and each of these countries are rated according to their safety level for travelers.
The rate goes from 1 to 5, being 5 the most dangerous.

## MVP (DOM - CANVAS)

The website consists on 2 pages, the landing page and the countries page.



## Backlog

1- Create transition on Rankings

## Data structure:

### Classes 

main, Layout, Router, FlagService, CountryScoreService, Loading, LandingPage, CountriesPage, Footer, Navbar.

### Methods

main: generateLayout(), generateHeader(), generateFooter(), activateRouter().

Layout: this.generate(), this.render(), this.getContainers().

Router: this.buildDOM(), this.generateLandingPage(), this.generateCountriesPage().

FlagService: this.getAllFlags(), this.getOneFlag(). 

CountryScoreService: this.getAllCountries(), this.getOneCountry().

Loading: this.generate(), this.render().

LandingPage: this.generate(), this.render().

CountriesPage: this.generate(), this.render(), this.callCountryScoreService(), this.callFlagService().

Footer: this.generate(), this.render().

Navbar: this.generate(), this.render().


## States y States Transitions 

LandingPage : The landing page contains a navigation bar, main and footer. The main contains all the content, which includes a photo gallery and a ranking with a list of the safetiest countries to visit.

Additionally, it has a button which redirects the user to the country page, page where the user can check the rates of the countries they are interested in.

CountryPage: The country page has a list with all the countries available for search. On this page, a card with the name, safety rate and flag of the country is displayed when chosen by the user.


## Task

 1- Create 3 screens
 2- Transition of screens
 3- Create Game Loop
 4- Create Player
 5- Create Enemies
 6- Create Boxes and Pizzas(extra lives)
 7- Coin counter and lives counter
 8- Apply images and sounds
 9- Set boundaries
 10- Apply styles with css


## Links 

### Git

[Link Repo] https://github.com/Rundiye/Foodie-Yoshi
[Link Deploy] https://rundiye.github.io/Foodie-Yoshi/

### Slides

URls for the project presentation: 