# Node.js Demo App with CI/CD using GitHub Actions + Docker

This project is a simple **Node.js Express app** that demonstrates how to use **GitHub Actions** and **Docker** for an automated CI/CD pipeline.

---

## 🚀 Features
- Node.js Express server
- Dockerized app
- GitHub Actions workflow to:
  - Install dependencies
  - Run tests
  - Build and push Docker image to DockerHub

---

## 📂 Project Structure
nodejs-demo-app/
│── index.js # Sample Express app
│── package.json
│── Dockerfile
│── .github/
│ └── workflows/
│ └── main.yml # GitHub Actions workflow

---
Evertime ther is a change or update in the code, need to pull and run the docker to see the changes in the output

Access the output using http://localhost:3000
