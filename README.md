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



---

###  GET (todos)


---

###  GET (por ID)



---

### PUT



---

###  PATCH

*(Agregar captura aquí)*

---

###  DELETE


---

###  Error 400 (Bad Request)


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
