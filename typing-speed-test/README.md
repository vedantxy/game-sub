# ⌨️ Typing Speed Test

A fast, interactive **Typing Speed Test** game built with **HTML**, **CSS**, and **JavaScript**. Type the given paragraph as quickly and accurately as possible — your **WPM**, **CPM**, **accuracy**, and **mistakes** are all tracked in real time!

---

## 🌐 Live Demo

> Open `index.html` directly in your browser — zero setup needed!

---

## 🕹️ How to Play

1. A random **paragraph** is displayed on screen.
2. Click the input box and **start typing**.
3. The **60-second countdown** begins on your first keystroke.
4. Type as **fast and accurately** as you can.
5. Your **WPM**, **CPM**, and **mistakes** update live as you type.
6. When time runs out, your **final results** are shown.
7. Click **Try Again** to reload a new paragraph and restart!

---

## ✨ Features

- ⏱️ **60-Second Timer** — Countdown starts automatically when you begin typing
- 📝 **Random Paragraphs** — A new passage is loaded every round for variety
- 📊 **Live Stats Tracking**
  - 🔤 **WPM** — Words Per Minute
  - 🔡 **CPM** — Characters Per Minute
  - ❌ **Mistakes** — Incorrect keystrokes counted in real time
- 🎨 **Character Highlighting** — Correct letters turn green, wrong ones turn red
- 🔁 **Try Again Button** — Instantly restart without reloading the page
- 📱 **Fully Responsive** — Works smoothly on desktop, tablet, and mobile

---

## 📁 Project Structure

```
typing-speed-test/
├── index.html       # Game layout — text display, input, stats panel
├── style.css        # Styling, color highlights, timer, responsive layout
└── script.js        # Core logic — WPM/CPM calc, timer, paragraph loader
```

---

## 🚀 Getting Started

### Prerequisites

No installations needed — just a modern web browser (Chrome, Firefox, Edge, Safari).

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantxy/game-sub.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd game-sub/typing-speed-test
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
| HTML5 | Page layout, input field, stats display |
| CSS3 | Styling, character color highlights, responsive design |
| JavaScript (Vanilla) | Timer, WPM/CPM logic, paragraph generation, error tracking |

---

## 🧠 How It Works

```
Page loads → Random paragraph displayed
      ↓
User starts typing → Timer begins (60s countdown)
      ↓
Each keystroke → Compare input vs paragraph character
      ↓
  ✅ Correct → Character highlighted green
  ❌ Wrong   → Character highlighted red, mistake count +1
      ↓
WPM = (Correct Words Typed / Time Elapsed) × 60
CPM = (Correct Characters Typed / Time Elapsed) × 60
      ↓
Timer hits 0 → Results displayed → Try Again to reset
```

---

## 📊 Metrics Explained

| Metric | Description |
|--------|-------------|
| **WPM** | Words Per Minute — standard measure of typing speed |
| **CPM** | Characters Per Minute — raw character throughput |
| **Mistakes** | Total number of incorrect characters typed |
| **Accuracy** | Percentage of correctly typed characters |

---

## 📸 Screenshots

> *(Add your screenshots here)*
>
> ```
> ![Typing Test Screenshot](screenshots/typing-test.png)
> ```

---

## 🔮 Future Improvements

- [ ] Difficulty modes (Easy / Medium / Hard paragraphs)
- [ ] Custom time limits (30s / 60s / 120s)
- [ ] High score leaderboard using `localStorage`
- [ ] Sound effects for correct / incorrect keystrokes
- [ ] Dark mode toggle
- [ ] Cursor caret animation

---

## 🤝 Contributing

Contributions and improvements are always welcome!

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

> Part of the [game-sub](https://github.com/vedantxy/game-sub) collection — a set of fun mini browser games & projects. 🎲
