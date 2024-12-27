# Kodama.js

<p align="center"><img src="config/kodama.webp" width="400" alt="Kodama Logo"></p>

**Kodama.js** is a **CLI (Command-Line Interface) Tool** designed to help you quickly create API elements such as services, controllers, routes, and models in a Node.js, Express.js, and Sequelize-based project. With Kodama, you can easily generate these components via simple commands, speeding up your development workflow.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, make sure you have Node.js installed on your machine. After cloning the repository, you can install the necessary dependencies by running the following commands:

```bash
git clone https://github.com/barisatay0/kodama.js.git
cd kodama.js
npm install
npm link
```

The `npm link` command will make the `koda` command available globally on your system. After this, you can run commands like `koda create controller <name>` from anywhere on your machine.

## Project Structure

Here is an overview of the project's main directory structure:

```
app.js            # Application entry file
config            # Configuration files
console           # Console commands
package.json      # Dependencies and project info
package-lock.json # Dependency lock file
src               # Application's core code
sync.js           # Database synchronization

```

## Project Type

**Kodama.js** is a **CLI (Command-Line Interface) Tool** that automates the creation of core components in a Node.js project. It is designed to speed up the development process by allowing developers to generate boilerplate code (such as controllers, services, models, and APIs) directly from the terminal.

### Key Features:
- **CLI Tool**: Use simple commands like `koda create controller <name>` to generate code components.
- **Code Generator**: Automatically generates files for controllers, services, models, and APIs.
- **Node.js & Express.js**: Built for Node.js and works seamlessly with Express.js and Sequelize to generate backend structures.
  
## Commands

Kodama provides the following commands:

- `create`: Create a new API element.
    - `create controller <controller_name>`: Creates a new controller file.
    - `create service <service_name>`: Creates a new service file.
    - `create model <model_name>`: Creates a new model file.
    - `create api <api_name>`: Creates a controller, service, and model file all at once.

### Example Usage:

Once the project is set up and `npm link` has been run, you can use the `koda` command directly from the terminal. For example, to create a new controller:

```bash
koda create controller UserController
```

If you want to create a complete API (controller, service, and model) at once:

```bash
koda create api User
```

This will create `UserController.js`, `UserService.js`, and `UserModel.js` in the appropriate directories.

## How to Use

1. **Setup**: After cloning the project and installing the dependencies, run `npm link` to make the `koda` command globally available.
2. **Commands**: Use `koda create` to generate new controller, service, model, or API files. For instance, `koda create controller <controller_name>` creates a new controller file with the specified name.
3. **API Creation**: Use `koda create api <api_name>` to create a full API, including the controller, service, and model.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
