# NGL Spammer

**Disclaimer: This tool is for educational purposes only. Use responsibly and ethically.**

NGL Spammer is a Node.js script that allows you to send multiple messages to an NGL (Not Gonna Lie) user's profile. This project is intended for educational purposes to demonstrate how automated messaging systems can work.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js (version 12.0 or later)
* You have a basic understanding of JavaScript and Node.js

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

```
npm install axios
```

## Usage

To use NGL Spammer, follow these steps:

1. Open your terminal and navigate to the project directory.
2. Run the script using Node.js:

```
node ngl_spammer.js
```

3. The script will prompt you for the following information:
   - NGL Username: Enter the username of the NGL profile you want to send messages to.
   - Question/Message: Enter the message you want to send repeatedly.
   - Spam Amount: Enter the number of times you want to send the message.

4. The script will start sending messages and display the results in the console.

## How it works

1. The script uses the `axios` library to send POST requests to the NGL API.
2. It generates a random UUID for each request to simulate different devices.
3. If the script encounters a rate limit (429 status code), it will wait for a second before retrying.
4. The script continues until it has sent the specified number of messages or encounters an unrecoverable error.

## Ethical Considerations

This tool is designed for educational purposes to demonstrate how automated systems can interact with web APIs. It should not be used to harass, spam, or cause harm to others. Always respect the terms of service of the platforms you interact with and consider the impact of your actions on others.

## Troubleshooting

If you encounter any issues:

1. Make sure you have the latest version of Node.js installed.
2. Check that you've installed the required `axios` package.
3. Verify that you have a stable internet connection.
4. If you're getting rate-limited frequently, try reducing the spam amount or introducing longer delays between requests.

## Contributing

Contributions to this project are welcome. Please ensure that your code adheres to the project's coding standards and include appropriate tests for new features.

## Contact

If you have any questions or concerns about this project, please open an issue in the GitHub repository.

Remember to use this tool responsibly and ethically.
