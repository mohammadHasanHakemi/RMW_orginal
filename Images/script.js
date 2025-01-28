document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');
    const itemList = document.getElementById('item');
    
    if (searchInput && searchButton && itemList) {
        console.log('Search input, search button and item list found');

        function filterItems() {
            console.log('Filter items function triggered');
            let filter = searchInput.value.toLowerCase();
            console.log('Filter:', filter);
            
            let items = itemList.getElementsByTagName('li');
            
            for (let i = 0; i < items.length; i++) {
                let text = items[i].textContent.toLowerCase();
                console.log('Item text:', text);
                if (text.includes(filter)) {
                    items[i].style.display = '';
                    console.log('Item shown:', items[i].textContent);
                } else {
                    items[i].style.display = 'none';
                    console.log('Item hidden:', items[i].textContent);
                }
            }
        }

        searchInput.addEventListener('input', filterItems);
        searchButton.addEventListener('click', filterItems);
    } else {
        console.log('Search input, search button or item list not found');
    }
});
