# SVG-Logo-Maker
## Description

The SVG Logo Maker is a command-line application that generates a simple logo based on user inputs. Users can select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file. This application helps freelance web developers create quick logos without needing to hire a graphic designer.

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

To use the SVG Logo Maker, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory.
   ```bash
   cd svg-logo-maker
   ```
3. Install the necessary dependencies.
   ```bash
   npm install
   ```

## Usage

To generate a logo, run the application and follow the prompts:

1. Start the application.
   ```bash
   node index.js
   ```
2. Enter the required information when prompted:
   - Text for the logo (up to three characters)
   - Text color (color keyword or hexadecimal number)
   - Shape (circle, triangle, or square)
   - Shape color (color keyword or hexadecimal number)

3. After entering all the prompts, an SVG file named `logo.svg` will be created, and the message "Generated logo.svg" will be printed in the command line.

4. Open the `logo.svg` file in a browser to view the generated logo.

[Watch a video demonstration of the application here.](https://youtu.be/CQkf-39S6FU?si=NMcIySNxrx4e_uAM)

## License

This project is licensed under the MIT License.

## Contributing

To contribute to this project, please fork the repository, create a new branch, and submit a pull request. Detailed guidelines are provided in the README file.

## Tests

The application uses Jest for running unit tests. To run the tests, use the following command:
```bash
npm test
```

## Questions

For any questions or feedback, please contact me via:
- GitHub: [Daniel D](https://github.com/lyoko90210)
- Email: [danieldennis801@gmail.com](mailto:danieldennis801@gmail.com)

## Getting Started

This Challenge combines many of the skills covered so far. In addition to the User Story and Acceptance Criteria, here are some guidelines to help you get started:

1. **Create a `.gitignore` file**:
   Ensure that the `node_modules/` directory and `.DS_Store` files are ignored by Git. Add these lines to the `.gitignore` file:
   ```
   node_modules/
   .DS_Store
   ```

2. **Setup `package.json`**:
   Run `npm init` to create a `package.json` file before installing any dependencies. This file should list all required dependencies for the project.

3. **Directory Structure**:
   Start with a directory structure that looks like the following example:
   ```
   .
   ├── examples/           // Example svg file(s) created with the app
   ├── lib/                // Folder for classes or functions
       ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
       ├── shapes.test.js  // Jest tests for shapes
       └── more...         // Additional files and tests
   ├── .gitignore          // Indicates which folders and files Git should ignore
   ├── index.js            // Runs the application using imports from lib/
   ├── package.json
   └── README.md           // App description, link to video, setup and usage instructions
   ```

4. **Video Demonstration**:
   Include a video showing the typical user flow through your application. This should cover:
   - Views of the prompts.
   - Responses after each selection.

5. **Screenshots**:
   Add screenshots to the README file to help users understand the purpose and function of the application. This visual aid is essential for communicating the capabilities of your project to potential employers or other developers.

For further guidance on creating a video, refer to the [Video Submission Guide](https://fullstackopen.com/en/).

### Example Command-Line Prompts

Here's an example of what the command-line prompts might look like when using the SVG Logo Maker:
```
Enter text for the logo (up to three characters): SVG
Enter the text color (color keyword or hexadecimal number): white
Choose a shape (circle, triangle, square): circle
Enter the shape's color (color keyword or hexadecimal number): green
```

The application will then generate a `logo.svg` file with the provided information, formatted professionally and ready to use.

---

By following these guidelines and