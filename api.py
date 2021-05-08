import os
import random
import uuid

import eel

@eel.expose  # Expose function to JavaScript
def say_hello_py(x):
    """Print message from JavaScript on app initialization, then call a JS function."""
    print('Hello from %s' % x)  # noqa T001
    eel.say_hello_js('Python {from within say_hello_py()}!')

@eel.expose
def expand_user(folder):
    """Return the full path to display in the UI."""
    return '{}/*'.format(os.path.expanduser(folder))

@eel.expose
def pick_file(folder):
    """Return a random file from the specified folder."""
    folder = os.path.expanduser(folder)
    if os.path.isdir(folder):
        listFiles = [_f for _f in os.listdir(folder) if not os.path.isdir(os.path.join(folder, _f))]
        if len(listFiles) == 0:
            return 'No Files found in {}'.format(folder)
        return random.choice(listFiles)
    else:
        return '{} is not a valid folder'.format(folder)

mock_todo_list = [
        {'id': str(uuid.uuid4()), 'text': 'todo1'},
        {'id': str(uuid.uuid4()), 'text': 'todo2'}
    ]

@eel.expose
def get_all_todo():
    return mock_todo_list

@eel.expose
def add_todo(text):
    mock_todo_list.append({'id': str(uuid.uuid4()), 'text': text})

@eel.expose
def delete_todo(id):
    global mock_todo_list
    mock_todo_list = list(filter(lambda x: x['id'] != id, mock_todo_list))