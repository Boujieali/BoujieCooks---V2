# BoujieCooks

## Introduction

BoujieCooks is a vibrant, Ghanaian-themed restaurant website that showcases the rich culinary heritage of Ghana. The website offers an engaging user experience with a visually appealing design and features a menu with dishes like Jollof Rice, Fufu, and Banku. Visitors can explore the menu, learn about the restaurant, make reservations, and read customer reviews.

- **Deployed Site:** [BoujieCooks](https://boujieali.github.io/BoujieCooks_V1/)
- **Final Project Blog Article:** [Final Project Blog](https://www.linkedin.com/pulse/project-introduction-boujiecooks-alice-adu-gyamfi-th12f/?trackingId=GDIcD8nTSxqObNMDkCBvJQ%3D%3D)
- **Author(s) LinkedIn:** [Alice Mensah Adu-Gyamfi](https://www.linkedin.com/in/alice-adu-gyamfi-353000213/)

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB (Atlas or local installation)
- Git

### Step-by-Step Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/boujiecooks_V1.git
   cd boujiecooks_V1
   ```

2. **Set up the backend:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

3. **Set up MongoDB:**
   - If using MongoDB Atlas, create a cluster and obtain the connection string.
   - If using a local MongoDB instance, ensure it's running and update the connection string accordingly.

4. **Run the backend server:**
   ```bash
   npm start
   ```

5. **Set up the frontend:**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Initialize a Git repository:
     ```bash
     git init
     ```
   - Add all files and commit:
     ```bash
     git add .
     git commit -m "Initial commit"
     ```
   - Push to GitHub:
     ```bash
     git remote add origin https://github.com/Boujieali/Boujiecooks_V1.git
     git push -u origin main
     ```

6. **Deploy frontend on GitHub Pages:**
   - Go to your GitHub repository settings.
   - Under the "Pages" section, set the source to the `main` branch.

## Usage

### Interacting with the Website

1. **Homepage:**
   - Visit the homepage to see the welcome message and an animated GIF or video.
   
2. **Menu:**
   - Explore the menu section to see images, descriptions, and prices of Ghanaian dishes.
   
3. **About Us:**
   - Learn about the restaurant and the owner, Alice Mensah Adu-Gyamfi.
   
4. **Contact Us:**
   - Use the form to make reservations or send inquiries.
   - Contact details and social media links are provided.

5. **Customer Feedback:**
   - Read customer reviews and feedback.
   
6. **Photo Gallery:**
   - Browse images of dishes and the restaurant ambiance.
   
7. **Pricing:**
   - Check out pricing plans and special offers.

### Important Commands

- **Start the backend server:**
  ```bash
  cd backend
  npm start
  ```

- **Deploy frontend:**
  - Ensure changes are committed and pushed to the `main` branch on GitHub.
  - GitHub Pages will automatically deploy the latest changes.

## Contributing

We welcome contributions to BoujieCooks! Please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a pull request**.

For major changes, please open an issue first to discuss what you would like to change.


## Licensing

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
