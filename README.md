# Kodama.js

<p align="center">
  <img src="config/kodama.webp" width="400" alt="Kodama Logo">
</p>

**Kodama.js** is a powerful **Command-Line Interface (CLI) Tool** designed to simplify the development of Node.js, Express.js, and Sequelize-based projects. With Kodama.js, you can quickly generate essential components like services, controllers, routes, and models, streamlining your workflow and reducing repetitive tasks.

---

## 📖 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Commands](#commands)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Getting Started

To get started with Kodama.js, ensure you have Node.js installed on your system. Then, follow these steps to set up the tool:

1. Install Kodama.js directly from npm:
   ```bash
   npm i kodama.js
   ```
   
   Or clone the repository:
   ```bash
   git clone https://github.com/barisatay0/kodama.js.git
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   cd kodama.js
   npm install
   ```

3. Link the CLI globally using the `npm link` command:
   ```bash
   npm link
   ```

After running `npm link`, the `koda` command becomes globally available on your system, allowing you to generate API components anywhere.

---

## 🗂️ Project Structure

Below is the structure of a typical Kodama.js project:

```
app.js            # Application entry file
config            # Configuration files
console           # Console commands
package.json      # Dependencies and project info
package-lock.json # Dependency lock file
src               # Application's core code
sync.js           # Database synchronization
```

---

## 🌟 Key Features

Kodama.js is designed to boost productivity by automating repetitive tasks. Here are its main features:

- **CLI Tool**: Generate components quickly using simple terminal commands.
- **Code Generator**: Automatically creates controllers, services, models, and APIs.
- **Node.js & Express.js Integration**: Built to work seamlessly with Express.js and Sequelize for backend development.

### Why Use Kodama.js?
- Saves time by reducing boilerplate code.
- Ensures consistent project structure.
- Simplifies API development with intuitive commands.

---

## ⚡ Commands

Kodama.js provides a variety of commands to make API development faster and easier:

### Create Commands

- **Controller**: Generate a new controller file:
  ```bash
  koda create controller <controller_name>
  ```

- **Service**: Generate a new service file:
  ```bash
  koda create service <service_name>
  ```

- **Model**: Generate a new model file:
  ```bash
  koda create model <model_name>
  ```

- **API**: Generate a controller, service, and model file all at once:
  ```bash
  koda create api <api_name>
  ```

### Example Usage

1. To create a controller named `UserController`:
   ```bash
   koda create controller User
   ```

2. To create an entire API for `User`:
   ```bash
   koda create api User
   ```
   This will generate the following files:
   - `UserController.js`
   - `UserService.js`
   - `UserModel.js`

---

## 🎯 How to Use

1. **Setup**: Complete the setup process by following the [Getting Started](#getting-started) section.
2. **Generate Components**: Use `koda create` commands to generate the desired components (controller, service, model, or API).
3. **Develop Faster**: Use the generated boilerplate code as a foundation and focus on the core logic of your application.

---

## 🤝 Contributing

We welcome contributions to Kodama.js! If you have ideas for improvements or want to fix bugs, feel free to:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a detailed explanation of your updates.

Your contributions will help make Kodama.js even better for everyone!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

---

