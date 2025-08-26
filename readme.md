# MiniStash

A **Mini Stash** for all your files

### How it works

DB schema

```mermaid
erDiagram
    USERS {
        UUID id PK
        TEXT key
        JSONB permissions
    }

    FILES {
        SERIAL id PK
        TEXT file_name
        INT parent_folder_id FK
        BOOLEAN is_folder
    }

    FILES_BINARY {
        INT file_id PK, FK
        BYTEA file_data
    }

    USERS ||--o{ FILES : owns
    FILES ||--o{ FILES : contains
    FILES ||--|| FILES_BINARY : has

```

### How to set up

##### Supabase

run this:

```sql
CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    file_name TEXT,
    file_data BYTEA
);
```
