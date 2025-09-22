

# 🚗 Wroom – Web Application

A simple web application built using Flask for the backend and a Bootstrap-powered frontend. Data is managed using SQLite.

---

## 🛠 Technologies Used

* **Frontend**: HTML5, CSS3 (Bootstrap), JavaScript (jQuery)
* **Backend**: Python with Flask
* **Database**: SQLite
* **Version Control**: Git

---

## 🗄️ Setting Up the Database

To create the SQLite database, run the following command in your terminal:

```bash
sqlite3 wroom.db < create_db.sql
```

This will create a `wroom.db` file using the schema defined in `create_db.sql`.

---

## 🚀 Running the Application

To start the Flask application, simply run:

```bash
python3 run.py
```

Then navigate to `http://localhost:5000` in your browser.

---

## 📁 Project Structure (optional)

You might consider adding this section if helpful:

```
├── static/
├── templates/
├── create_db.sql
├── run.py
├── wroom.db
├── README.md
```

---
