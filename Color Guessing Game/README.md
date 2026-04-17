# 🎨 Color Guessing Game

An interactive browser-based **Color Guessing Game** built with **HTML**, **CSS**, and **JavaScript**. A random RGB color value is shown — your job is to pick the correct matching color from the options. Test your eye for color and train your RGB intuition!

---

## 🎮 Live Demo

> Open `index.html` directly in your browser — no setup required!

---

## 🕹️ How to Play

1. An **RGB color code** (e.g., `rgb(123, 45, 200)`) is displayed at the top.
2. You are shown **multiple colored boxes** as answer choices.
3. **Click the box** that you think matches the displayed RGB value.
4. The game tells you if you were **right or wrong** with instant feedback.
5. Your **score** updates after every round.
6. Click **New Game** or **Play Again** to reset and try again!

---

## ✨ Features

- 🎲 Randomly generated RGB color values every round
- 🟦 Multiple color option boxes to choose from
- ✅ Instant right/wrong feedback after each guess
- 🏆 Score tracking throughout the session
- 🔄 New Game / Reset button to restart anytime
- 📱 Responsive design — works on desktop, tablet & mobile
- 🎨 Clean, colorful, and minimal UI

---

## 📁 Project Structure

```
Color Guessing Game/
├── index.html       # Game layout and structure
├── style.css        # Styling, colors, and responsiveness
└── script.js        # Game logic — color generation, scoring, feedback
```

---

## 🚀 Getting Started

### Prerequisites

No installations required — just a modern web browser (Chrome, Firefox, Edge, Safari).

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantxy/game-sub.git
   ```

2. **Navigate to the game folder**
   ```bash
   cd "game-sub/Color Guessing Game"
   ```

3. **Open in your browser**
   ```bash
   open index.html
   # or just double-click index.html in your file explorer
   ```

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and game layout |
| CSS3 | Styling, color boxes, animations |
| JavaScript (Vanilla) | RGB generation, game logic, score tracking |

---

## 🧠 Game Logic Overview

```
1. Generate a random RGB value  →  rgb(r, g, b)
2. Use it as the correct answer
3. Generate N-1 other random RGB values as decoys
4. Shuffle all options and display as colored boxes
5. On click → compare selection to correct answer
6. Show feedback → update score → generate new round
```

---

## 📸 Screenshots

> *(Add your screenshots here)*
>
> ```
> ![Gameplay Screenshot](screenshots/gameplay.png)
> ```

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the project
2. Create your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to the branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](../../LICENSE).

---

## 👤 Author

**Vedant**
- GitHub: [@vedantxy](https://github.com/vedantxy)

---

> Part of the [game-sub](https://github.com/vedantxy/game-sub) collection — a set of fun mini browser games. 🎲
