<div align="center">
  <img src="img/sheep_coder.png" alt="Sheep Coder" width="400"/>
  
  # 🐑 Counting Sheeps
  
  **Una aplicación en JavaScript para contar ovejas en un rebaño binario**
  
  🔗 **[Ver demo en vivo](https://kvadrakola.github.io/07countingSheeps/)**
  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
</div>

---

## 📖 Descripción

Este proyecto resuelve el clásico ejercicio **"Counting Sheeps"**: dada una lista de valores booleanos, donde:

- ✅ **`true`** → representa una **oveja**
- ❌ **`false`** → representa un **lobo**

La función `countSheep()` recorre el array, cuenta únicamente las ovejas (`true`) y devuelve el resultado. Además, muestra los resultados tanto en la consola del navegador como en la página web. Si no queda ninguna oveja (solo lobos), se muestra un mensaje indicando que los lobos se han comido todo el rebaño.

---

## 🧪 Casos de prueba

### 📋 Lista 1 — Rebaño mixto

```js
list1 = [
  true,  true,  true,  false, true,  true,  true,  true,
  true,  false, true,  false, true,  false, false, true,
  true,  true,  true,  true,  false, false, true,  true
];
```

**Output (consola):**
```
1. There are 17 sheep in total
```

**Output (página web):**
```
1. ✅ 17 sheep survived!
```

### 📋 Lista 2 — Solo lobos

```js
list2 = [ false, false, false ];
```

**Output (consola):**
```
2. UPS!!! Wolves have eaten the sheep
```

**Output (página web):**
```
2. ❌ UPS!!! Wolves have eaten the sheep!
```

---

## ⚙️ Cómo funciona

La función `countSheep(list)` utiliza `Array.filter()` para quedarse únicamente con los valores `true`, calcula la longitud del array resultante y evalúa:

| Condición                    | Consola                               | Página web                              |
|------------------------------|---------------------------------------|-----------------------------------------|
| `count > 0` (hay ovejas)     | `"There are N sheep in total"`        | `"✅ N sheep survived!"`                |
| `count === 0` (solo lobos)   | `"UPS!!! Wolves have eaten the sheep"`| `"❌ UPS!!! Wolves have eaten the sheep!"` |

```js
function countSheep(sheepArray, listName) {
  const result = sheepArray.filter((word) => word === true);
  const count = result.length;

  if (count > 0) {
    console.log(listName + " There are " + count + " sheep in total");
    return listName + " ✅ " + count + " sheep survived!";
  } else {
    console.log(listName + " UPS!!! Wolves have eaten the sheep");
    return listName + " ❌ UPS!!! Wolves have eaten the sheep!";
  }
}
```

---

## 🚀 Cómo usar

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/kvadrakola/07countingSheeps.git
   ```

2. **Abre el archivo `index.html`** en tu navegador.

3. **Mira los resultados en dos lugares:**
   - **Consola del navegador** (`F12` → Console) — mensajes de texto plano
   - **Panel de resultados visual** en la página — mensajes con emojis ✅ / ❌

---

## 🛠️ Tecnologías

- **HTML5** — Estructura de la página
- **Tailwind CSS** — Estilos y diseño responsive
- **JavaScript (Vanilla)** — Lógica de conteo de ovejas

---

## 📸 Vista previa

<div align="center">
  <img src="img/sheep_coder.png" alt="Vista previa del proyecto" width="600"/>
</div>

---

## 👤 Autor

**Kvadrakola**

[![GitHub](https://img.shields.io/badge/GitHub-@kvadrakola-181717?style=flat-square&logo=github)](https://github.com/kvadrakola)

---

<div align="center">
  <sub>📚 Proyecto realizado para la asignatura <strong>Frontend: Javascript</strong></sub>
</div>