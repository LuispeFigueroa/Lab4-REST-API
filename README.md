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


<img width="1918" height="1026" alt="POST" src="https://github.com/user-attachments/assets/af6a5534-c1e4-4df6-a8be-207cadd9577a" />

---

###  GET (todos)
<img width="1915" height="1026" alt="GET TODOS" src="https://github.com/user-attachments/assets/6373b59e-81b5-455e-afb6-4099f7b37bdf" />


---

###  GET (por ID)


<img width="1907" height="1028" alt="GET ID" src="https://github.com/user-attachments/assets/259c22dc-c2ec-4c6d-a90c-d70859ea9e4c" />

---

### PUT

<img width="1917" height="1025" alt="PUT" src="https://github.com/user-attachments/assets/6afbc656-7408-4407-a8cc-91381f25ea47" />


---

###  PATCH



---

###  DELETE

<img width="1918" height="1006" alt="DELETE" src="https://github.com/user-attachments/assets/09151fd6-6690-4c33-b6ee-7e2405282f08" />

---

###  Error 400 (Bad Request)

<img width="1918" height="1000" alt="ERROR 404" src="https://github.com/user-attachments/assets/78d82cb9-a601-4f63-8df5-c0830fa1c02e" />

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
