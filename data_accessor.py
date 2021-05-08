import os
import sqlite3

DB_NAME = 'app.db'

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def init_db():
    if not os.path.exists(DB_NAME):
        conn = sqlite3.connect(DB_NAME)
        conn.row_factory = dict_factory

        cur = conn.cursor()
        cur.execute(
            'CREATE TABLE todo_list(id INTEGER PRIMARY KEY AUTOINCREMENT, text STRING)')
        conn.commit()

        cur.close()
        conn.close()

def get_all_todo():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = dict_factory

    cur = conn.cursor()
    cur.execute('SELECT * FROM todo_list')
    todo_list = cur.fetchall()
    conn.commit()

    cur.close()
    conn.close()
    return todo_list

def add_todo(text):
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = dict_factory

    cur = conn.cursor()
    cur.execute(f'INSERT INTO todo_list(text) values("{text}")')
    todo_list = cur.fetchall()
    conn.commit()

    cur.close()
    conn.close()

def delete_todo(id):
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = dict_factory

    cur = conn.cursor()
    cur.execute(f'DELETE FROM todo_list where id = "{id}"')
    todo_list = cur.fetchall()
    conn.commit()

    cur.close()
    conn.close()
