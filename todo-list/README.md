# 📝 Todo List App

A clean and responsive **Todo List** web application built with **HTML**, **CSS**, and **JavaScript**. Add, complete, and delete your daily tasks — with data saved right in your browser so nothing gets lost on refresh!

---

## 🌐 Live Demo

> Open `index.html` directly in your browser — no installs, no setup!

---

## ✨ Features

- ➕ **Add Tasks** — Type a task and press Enter or click the Add button
- ✅ **Mark Complete** — Click a task to toggle it as done/undone
- 🗑️ **Delete Tasks** — Remove individual tasks instantly
- 💾 **LocalStorage** — Tasks persist across page refreshes
- 🧹 **Clear All** — Wipe the entire list with one click
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile
- 🎨 **Minimal & Clean UI** — Distraction-free task management

---

## 🕹️ How to Use

1. **Type** your task in the input field.
2. Press **Enter** or click the **➕ Add** button to save it.
3. Click on a task to **mark it as completed** (strikethrough).
4. Click the **🗑️ delete icon** to remove a task.
5. Your tasks are **automatically saved** — come back anytime!

---

## 📁 Project Structure

```
todo-list/
├── index.html       # App layout and structure
├── style.css        # Styling, animations, and responsiveness
└── script.js        # Task logic — add, delete, toggle, localStorage
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
   cd game-sub/todo-list
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
| HTML5 | Page structure and input elements |
| CSS3 | Styling, layout, and hover effects |
| JavaScript (Vanilla) | Task management and localStorage |

---

## 🧠 How It Works

```
User types task → Clicks Add / Presses Enter
        ↓
Task appended to the DOM list
        ↓
Task saved to localStorage
        ↓
On reload → Tasks are loaded from localStorage automatically
        ↓
Click task → Toggle complete (strikethrough)
Click ✕   → Remove task from DOM + localStorage
```

---

## 📸 Screenshots

> *(Add your screenshots here)*
>
> ```
> ![App Screenshot](screenshots/todo-app.png)
> ```

---

## 🔮 Future Improvements

- [ ] Edit existing tasks inline
- [ ] Filter by All / Active / Completed
- [ ] Drag-and-drop to reorder tasks
- [ ] Due dates and priority levels
- [ ] Dark mode toggle

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

> Part of the [game-sub](https://github.com/vedantxy/game-sub) collection — a set of fun mini browser projects. 🎲
