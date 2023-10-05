# ReactNativeExercises

Welcome to the React Native Exercises App project! This is a mobile application that provides a set of exercises to help you improve your react native skills.

## System Requirements

Before you get started, make sure you have the following software installed:

- Node.js
- npm
- Xcode (macOS only) or Android Studio
- A physical device or emulator for testing the app

## Installation

Follow these steps to install and run the app:

1. Clone the repository locally:

   ```
   git clone https://github.com/ismaeleBo/ReactNativeExercises
   cd exercises-app
   ```

2. Install project dependencies:

   ```
   npm install
   cd ios
   pod install
   ```

3. Start the app on your device or emulator:

   - For iOS:

     ```
     npm run ios
     ```

   - For Android:

     ```
     npm run android
     ```

4. The app should now be running on your device or emulator.

## Exercises

### Exercise 1: Blood Type API

- Call the API that provides anonymous blood type information for users: [Blood Type API](https://random-data-api.com/api/v2/blood_types?size=50)
- Display a summary showing the total number of items divided by type and rh_factor.
- Show a sorted list, ordered by id, of the different objects returned by the service.
- Each list item should display id and blood type.
- Implement radio buttons for filtering the list by type and rh_factor.

### Exercise 2: Stripe API

- Call the API: [Stripe API](https://random-data-api.com/api/stripe/random_stripe?size=50)
- Display a list of cards that will expire in the next 18 months.
- Each list item should display a valid card number and expiration date.
- Sort the items by expiration date, starting with the ones expiring soonest.

### Exercise 3: Xmas Tree Page

Create a page structured as follows:

- Text input that accepts an integer (as seen in the example image, it's 18).
- A button that, when tapped, creates the rotated (90°) Xmas tree figure. The integer indicates the height of the triangle.
- The base of the tree should be one-sixth of the triangle's height.

## Contributions

We welcome contributions! If you'd like to contribute to this project, follow these steps:

1. Fork the repository on GitHub.
2. Create a branch for your work:

   ```
   git checkout -b feature/new-feature
   ```

3. Work on your code and commit your changes:

   ```
   git commit -m "Added new feature"
   ```

4. Push your changes to your fork:

   ```
   git push origin feature/new-feature
   ```

5. Open a pull request on the main repository.

## Bug Reporting

If you find any bugs or have suggestions for improving the app, please open a new issue on GitHub with all the necessary details.

## License

This project is distributed under the MIT License. Read the [LICENSE] file for more information.

Thank you for using the React Native Exercises App! Happy exercising!
