# Job Simulator API — Fighters LAB4

## Descripción

API REST desarrollada para gestionar registros de fighters (peleadores).
Incluye operaciones CRUD completas, validaciones y persistencia en PostgreSQL usando Docker.



##  Cómo ejecutar el proyecto

```bash
docker compose up --build
```

---

##  Endpoints

Base URL:

```
http://localhost:8080/fighters
```

| Método | Endpoint      | Descripción           |
| ------ | ------------- | --------------------- |
| GET    | /fighters     | Obtener todos         |
| GET    | /fighters/:id | Obtener por ID        |
| POST   | /fighters     | Crear registro        |
| PUT    | /fighters/:id | Actualizar completo   |
| PATCH  | /fighters/:id | Actualización parcial |
| DELETE | /fighters/:id | Eliminar registro     |

---

##  Evidencias

###  POST

<img width="1918" height="1026" alt="POST" src="https://github.com/user-attachments/assets/5c1d4fbf-540f-43f3-a687-49c125dd1993" />


---

###  GET (todos)

<img width="1915" height="1026" alt="GET TODOS" src="https://github.com/user-attachments/assets/d3e97c31-6946-4406-a684-b5fea0e411aa" />

---

###  GET (por ID)

<img width="1907" height="1028" alt="GET ID" src="https://github.com/user-attachments/assets/102df46e-0915-41ab-b839-20b9996909ff" />


---

### PUT


<img width="1917" height="1025" alt="PUT" src="https://github.com/user-attachments/assets/888023d2-1b72-423b-9453-a9164d27e3de" />

---

###  PATCH

*(Agregar captura aquí)*

---

###  DELETE

<img width="1918" height="1006" alt="DELETE" src="https://github.com/user-attachments/assets/4dc9d555-f691-4745-a88c-71f6979e41ad" />

---

###  Error 400 (Bad Request)

<img width="1918" height="1000" alt="ERROR 404" src="https://github.com/user-attachments/assets/3ffe785f-07a4-4f03-b674-185761653b52" />

---

##  Validaciones

* Todos los campos son obligatorios
* Tipos de datos estrictos:

  * campo1, campo2, campo3 → string
  * campo4 → integer
  * campo5 → float
  * campo6 → boolean

---

## Arquitectura

* `app` → API Node.js
* `db` → PostgreSQL
* `frontend` → Nginx

Todo el sistema se levanta con un solo comando.

---

##  Estructura

```
backend/
frontend/
resources/
docker-compose.yml
.env
```

---

##  Autor

Luis Pedro Figueroa #24087

---
