# Watch Display Slider

A responsive web application using HTML, CSS, and JavaScript. The application changes the background color and updates watch details based on the current slide.

## Features

- Background color changes based on the current slide.
- Watch details update based on the current slide.
- Fully responsive design for optimal viewing on various devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/watch-display-slider.git
    ```
2. Navigate to the project directory:
    ```sh
    cd watch-display-slider
    ```
3. Open the `index.html` file in your web browser.

## Usage

1. Open the application in your web browser.
2. Use the slider to navigate through different watch models.
3. Observe the background color change and the updated watch details.

## Responsive Design

The project is designed to be fully responsive, ensuring an optimal user experience on both desktop and mobile devices.

## Pseudo-code

1. Define HTML Document Structure
   a. Set DOCTYPE and HTML language
      <!DOCTYPE html>
      <html lang="en">
   b. Define head section
      <head>
         i. Set meta charset
            
         ii. Set viewport meta tag for responsiveness
          
         iii. Set document title
          
         iv. Link to external CSS file
            
         v. Link to external JavaScript library for Splide slider
            
         vi. Link to external CSS for Splide slider
          
      </head>
   c. Define body section
      
         i. Create header section with an ID for dynamic content
           
         ii. Create main content section
           
               1. Left side container with an ID for dynamic content
                  
               2. Right side container for the Splide slider
                 
                        
         - Link to external JavaScript file for custom functionality
            >
    
2. JavaScript Functionality
   a. Initialize Dynamic Data
      i. Define an array for header content


   b. Get References to DOM Elements
      i. Get reference to the body element
        
      ii. Get reference to the left side container
         
      iii. Get reference to the header
         

   c. Load Initial Content on Page Load
      i. Add event listener for 'DOMContentLoaded'
        

   d. Define Function to Update Content Based on Slide
    
      ii. Function to update left side content and background gradient for 'blacksilver' slide
        
      iii. Function to update left side content and background gradient for 'greensilver' slide
         
            - Update leftside content
            - Update body background gradient
         
      iv. Function to update left side content and background gradient for 'redsilver' slide
        

   e. Initialize Image Slider
      i. Create and mount a new instance of Splide slider
         new Splide('.splide').mount();

   f. Define Intersection Observers for Each Slide
      i. Create an intersection observer for 'watchpink' slide
        
      ii. Create an intersection observer for 'blacksilver' slide
        
      iii. Create an intersection observer for 'greensilver' slide
        
      iv. Create an intersection observer for 'redsilver' slide
         




