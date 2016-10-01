# Angular 2 Shop

This is an example project to show an implementation of a fancy, responsive, cross browser compatible (IE11) shop/ecommerce webapp made on Angular 2.

**Demo:** [carlosroso.com/angular2-shop](http://carlosroso.com/angular2-shop/)

##Features
* Sort products by name, price (asc) and price (desc)
* Instant search by product name
* Filter products by categories, price range, availability, and more custom filters.
* Add products to the shopping cart
* See details and manage the shopping cart
* You can also load your own data through the app. You'll see a red button with a *link* icon, click it and paste the URL. The JSON file must follow a specific format. [see example here](http://carlosroso.com/angular2-shop-json/). **IMPORTANT:** Make sure you set the appropriate `Access-Control-Allow-Methods` header on your JSON HTTP response. 
* **Pretty good looking UI and some fancy animations to improve UX**

##Installation

Clone the project
```bash
git clone https://github.com/caroso1222/angular2-shop
```

Install npm dependencies inside the project folder
```bash
cd angular2-shop
npm install
```

Make sure you have `angular-cli` installed. I'll try to keep this project updated with the latest `angular-cli` version.
```bash
npm install -g angular-cli
```

Start the application
```bash
ng serve
```

Now open a new tab at **localhost:4200**.


##Contributing

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
