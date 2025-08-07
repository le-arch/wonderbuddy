document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    const isHomePage = document.getElementById('welcome-page') !== null;
    const isGalleryPage = document.getElementById('gallery-page') !== null;
    const isMapPage = document.getElementById('map-page') !== null;
    
    // Only show welcome page transition on home page
    if (isHomePage) {
        // Display welcome page for 2 seconds then show home page
        setTimeout(function() {
            document.getElementById('welcome-page').classList.add('hidden');
            document.getElementById('home-page').classList.remove('hidden');
        }, 2000);
    }

    // Category selection
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            categories.forEach(c => c.classList.remove('active'));
            // Add active class to clicked category
            this.classList.add('active');
        });
    });

    // Bottom navigation selection
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!this.querySelector('a')) {
                // Remove active class from all nav items
                navItems.forEach(n => n.classList.remove('active'));
                // Add active class to clicked nav item
                this.classList.add('active');
            }
        });
    });
    
    // Map page specific interactions
    if (isMapPage) {
        // Show detail page when clicking on map cards
        const mapCards = document.querySelectorAll('.map-card');
        const mapDetailPage = document.getElementById('map-detail-page');
        const detailBackButton = document.querySelector('.detail-back-button');
        
        mapCards.forEach(card => {
            card.addEventListener('click', function() {
                mapDetailPage.classList.remove('hidden');
            });
        });
        
        // Close detail page when clicking back button
        if (detailBackButton) {
            detailBackButton.addEventListener('click', function() {
                mapDetailPage.classList.add('hidden');
            });
        }
    }

    // Dummy data for the app - can be expanded
    const dummyUser = {
        name: 'Mary',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    };

    const dummyPins = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            title: 'Lorem ipsum dolor',
            location: 'Nylon, Boston',
            distance: '5,000 m'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
            title: 'Lorem ipsum dolor',
            location: 'Nylon, Boston',
            distance: '5,000 m'
        }
    ];

    const dummyShared = [
        {
            id: 1,
            user: {
                name: 'Lorem dolor',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
        }
    ];

    const dummyFeed = [
        {
            id: 1,
            stars: '5k',
            location: 'Nylon, Boston',
            price: '5,000 m',
            user: {
                name: 'Lorem dolor',
                avatar: 'https://randomuser.me/api/portraits/men/43.jpg'
            },
            image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            description: 'Lorem ipsum dolor'
        },
        {
            id: 2,
            stars: '5k',
            location: 'Nylon, Boston',
            price: '5,000 m',
            user: {
                name: 'Lorem dolor',
                avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
            },
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            description: 'Lorem ipsum dolor'
        }
    ];
});