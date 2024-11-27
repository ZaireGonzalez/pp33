function toggleTable(tableId) {
    // Ocultar todas las tablas
    const tables = document.querySelectorAll('.table-container');
    tables.forEach(table => {
        table.style.display = 'none';
    });

    // Mostrar la tabla seleccionada
    const selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
}
