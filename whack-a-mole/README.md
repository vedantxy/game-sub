# 🎯 Whack-A-Mole Game

> A fun and interactive browser-based game where players test their reflexes by clicking (whacking) moles as they appear randomly.

---

## 🚀 Live Demo
🔗 Add your deployed link here (Vercel / Netlify / GitHub Pages)

---

## 📌 Overview

**Whack-A-Mole** is a classic arcade-style game where moles pop up randomly, and the player must click them quickly to score points.

This project demonstrates:
- ⚡ Real-time DOM updates  
- 🎯 Event handling  
- 🎮 Game logic implementation  
- ⏱️ Timer-based gameplay  

The game challenges the user’s **speed and accuracy**, making it both fun and engaging.

---

## 🎮 How to Play

- 🟢 Click **Start Game**  
- 🐹 Moles will appear randomly  
- 🖱️ Click on the mole to score points  
- ⏱️ Game runs for a limited time  
- 🏁 Final score is displayed at the end  

---

## ✨ Features

- 🎯 Random mole generation  
- ⏱️ Countdown timer  
- 🏆 Score tracking system  
- ⚡ Fast and responsive gameplay  
- 🎮 Arcade-style experience  
- 📱 Responsive design  

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript  
- **Logic:** DOM manipulation & event listeners  
- **Styling:** CSS / Tailwind (if used)  

---

## 📂 Project Structure
whack-a-mole/
├── assets/
│ ├── images/
│ └── sounds/
├── index.html
├── style.css
├── script.js
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/vedantxy/game-sub.git
2️⃣ Navigate to Project
cd game-sub/whack-a-mole
3️⃣ Run the Project

Open index.html in your browser
OR use Live Server

🧠 Core Game Logic
Moles appear at random positions
Timer controls game duration (e.g., 30 seconds)
Each successful click:
✅ Increases score
❌ Missed clicks don’t count
Game ends when timer reaches zero
💻 Example Logic Snippet
let score = 0;

function whack() {
  score++;
  scoreDisplay.textContent = score;
}

mole.addEventListener("click", whack);
📸 Preview
<img src="./assets/preview.png" alt="Whack-a-Mole Preview" width="600"/>
🚀 Future Enhancements
🔊 Sound effects on hit/miss
🏆 High score leaderboard
🎚️ Difficulty levels (Easy / Medium / Hard)
🎨 Animations (Framer Motion / CSS transitions)
🌙 Dark mode
📊 Score analytics
🤝 Contributing

Contributions are welcome!

# Fork the repo
# Create new branch
git checkout -b feature-name

# Commit changes
git commit -m "Added new feature"

# Push
git push origin feature-name

Then open a Pull Request 🚀

📧 Contact

Vedant Patel

GitHub: https://github.com/vedantxy
Portfolio: Add your portfolio link
📜 License

This project is licensed under the MIT License.
