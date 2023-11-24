function toggleTable(showTable, hideTable1, hideTable2) {
  const tableToShow = document.getElementById(showTable);
  const tableToHide1 = document.getElementById(hideTable1);
  const tableToHide2 = document.getElementById(hideTable2);

  tableToShow.style.display = 'block';
  tableToHide1.style.display = 'none';

  
  if (tableToHide2) {
    tableToHide2.style.display = 'none';
  }
}
