# NGL Spammer

**Disclaimer: This tool is for educational purposes only. Use responsibly and ethically.**

NGL Spammer is a Node.js script that allows you to send multiple messages to an NGL (Not Gonna Lie) account. This project is released under the MIT License.

## Prerequisites

Before running this script, make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

```
npm install axios
```

## Usage

To use the NGL Spammer:

1. Open your terminal and navigate to the project directory.
2. Run the script using Node.js:

```
node ngl_spammer.js
```

3. Follow the prompts:
   - Enter the NGL username you want to send messages to.
   - Enter the question or message you want to send.
   - Enter the number of times you want to send the message.

4. The script will start sending messages and display the results in the console.

## Code Explanation

The script does the following:

1. Imports required modules: axios for HTTP requests, crypto for generating UUIDs, and readline for user input.
2. Prompts the user for the NGL username, message, and spam amount.
3. Constructs the necessary headers and form data for the NGL API request.
4. Sends POST requests to the NGL API for the specified number of times.
5. Logs the results of each request to the console.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is intended for educational purposes only. Misuse of this script may violate NGL's terms of service or local laws. The authors and contributors are not responsible for any misuse or damage caused by this script.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## Support

If you have any questions or need help using the script, please open an issue in the GitHub repository.

Remember to use this tool responsibly and respect others' privacy and online spaces.
