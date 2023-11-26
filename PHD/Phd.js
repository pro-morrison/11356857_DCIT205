
      function toggleTable(tableId, otherWrapperId) {
        const tableContent = document.getElementById(tableId);
        const otherWrapper = document.getElementById(otherWrapperId);
  
        if (tableContent.style.display === 'none') {
          tableContent.style.display = 'block';
          otherWrapper.querySelector('.table-content').style.display = 'none';
        } else {
          tableContent.style.display = 'none';
        }
      }
    