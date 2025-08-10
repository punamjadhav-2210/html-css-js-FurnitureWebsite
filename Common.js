function filterProducts(category) {
        const products = document.querySelectorAll('.cart');

        products.forEach(product => {
            if (category === 'all') {
                product.style.display = 'block';
            } else {
                if (product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
    }

    // Assign click events
    document.getElementById('all').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts('all');
    });

    document.getElementById('living').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts('sofa');
    });

    document.getElementById('bedroom').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts('bed');
    });

    document.getElementById('dining').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts('dining');
    });

    document.getElementById('office').addEventListener('click', function(e) {
        e.preventDefault();
        filterProducts('office');
    });