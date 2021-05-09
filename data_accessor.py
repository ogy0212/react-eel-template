import os
import sqlite3

DB_NAME = 'app.db'

class Connection():
    def __init__(self):
        self.conn = sqlite3.connect(DB_NAME)
        self.conn.row_factory = dict_factory

    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        self.conn.close()
    
    def cursor(self):
        return self.conn.cursor()
    
    def commit(self):
        self.conn.commit()

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def init_db():
    if not os.path.exists(DB_NAME):
        with Connection() as conn:
            cur = conn.cursor()
            cur.execute(
                'create table todo_list(id integer primary key autoincrement, text string)')
            conn.commit()

def get_all_todo():
    with Connection() as conn:
        cur = conn.cursor()
        cur.execute('select * from todo_list')
        todo_list = cur.fetchall()
        conn.commit()
        return todo_list

def add_todo(text):
    with Connection() as conn:
        cur = conn.cursor()
        cur.execute('insert into todo_list(text) values(?)', [text])
        conn.commit()

def delete_todo(id):
    with Connection() as conn:
        cur = conn.cursor()
        cur.execute('delete from todo_list where id = ?', [id]) 
        conn.commit()
