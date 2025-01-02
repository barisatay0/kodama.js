<p>
  <img src="config/kodama.webp" alt="Kodama Logo">
</p>

# Kodama.js

**Kodama.js** is a powerful **Command-Line Interface (CLI) Tool** that simplifies the development of Node.js, Express.js, and Sequelize-based projects. With Kodama.js, you can quickly generate essential components like services, controllers, routes, and models, streamlining your workflow and reducing repetitive tasks.


## 📖 Table of Contents

- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Commands](#create-commands)
- [How to Use](#-how-to-use)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Getting Started

To get started with **Kodama.js**, ensure that Node.js is installed on your system. Follow these steps to set up the tool:

1. **Install Kodama.js globally via npm** (Recommended):
   ```bash
   npm i -g kodama.js
   ```
   Alternatively, you can install it locally in your project:
   ```bash
   npm i kodama.js
   ```

   Or clone the repository:
   ```bash
   git clone https://github.com/barisatay0/kodama.js.git
   ```

2. Navigate to the project directory and install the dependencies:
   ```bash
   cd kodama.js
   npm install
   ```

3. If you didn't install the CLI globally, use the `npm link` command:
   ```bash
   npm link
   ```
   After running `npm link`, the `koda` command becomes globally available on your system, enabling you to generate API components anywhere.

---

## 🗂️ Project Structure

Here’s the structure of a typical **Kodama.js** project:

```
app.js            # Application entry file
config            # Configuration files
console           # Console commands
package.json      # Dependencies and project info
package-lock.json # Dependency lock file
src               # Core application code
sync.js           # Database synchronization
```

---

## 🌟 Key Features

**Kodama.js** is designed to accelerate development by automating repetitive tasks. Here are some of its key features:

- **CLI Tool**: Quickly generate components using simple terminal commands.
- **Code Generator**: Automatically create controllers, services, models, and APIs.
- **Node.js & Express.js Integration**: Works seamlessly with Express.js and Sequelize for backend development.

### Why Use Kodama.js?
- **Saves Time**: Reduces boilerplate code and repetitive tasks.
- **Consistent Structure**: Ensures a uniform project structure across your applications.
- **Streamlines API Development**: Simplifies the creation of APIs with intuitive commands.

---

## ⚡ Available Commands

**Kodama.js** offers a variety of commands to help you build your API faster and more efficiently:

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

- **API**: Generate a controller, service, and model file at once:
  ```bash
  koda create api <api_name>
  ```

### Example Usage

1. To create a controller called `UserController`:
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

1. **Setup**: Follow the steps in the [Getting Started](#-getting-started) section to install Kodama.js.
2. **Generate Components**: Use the `koda create` commands to generate the components you need (controller, service, model, or API).
3. **Develop Faster**: Leverage the generated boilerplate code to focus on building the core logic of your application.

---

## 🤝 Contributing

We welcome contributions to **Kodama.js**! If you have ideas for new features or fixes, here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a detailed description of your updates.

Your contributions help make **Kodama.js** better for everyone!

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/license/MIT). Feel free to use, modify, and distribute it according to the terms of the license.

---