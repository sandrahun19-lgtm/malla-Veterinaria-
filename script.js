body {
  font-family: sans-serif;
  padding: 20px;
}
.malla {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.semestre {
  border: 2px solid #555;
  padding: 10px;
  width: 200px;
}
.ramo {
  border: 1px solid #999;
  padding: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: #ffc0cb; /* rosado = no aprobado */
}
.ramo.aprobado {
  background-color: #800080; /* morado */
  color: white;
  text-decoration: line-through;
}
.ramo.locked {
  background-color: #ccc; /* gris = bloqueado */
  color: #666;
  cursor: not-allowed;
}
